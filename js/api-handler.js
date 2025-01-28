class APIHandler {
    constructor(language = 'en') {
        this.promptManager = new PromptManager(language);
        this.language = language;
        this.environment = this.defineEnvironment();
        this.apiUrl = this.defineApiUrl();
    }

    defineEnvironment() {
        if (window.location.hostname === 'localhost') {
            return 'dev';
        } else {
            return 'prod';
        }
    }

    defineApiUrl() {
        if (this.environment === 'dev') {
            return 'http://localhost:8888';
        } else {
            return 'https://backend-portfolio-ns.netlify.app';
        }
    }

    async sendMessage(userMessage) {
        const conversationHistory = this.promptManager.getConversationHistory();
        let fullResponse = '';

        try {
            const response = await fetch(this.apiUrl + '/.netlify/functions/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/event-stream',
                    'Origin': window.location.origin
                },
                credentials: 'include',
                body: JSON.stringify({
                    userMessage: userMessage,
                    language: this.language,
                    conversationHistory: conversationHistory
                })
            });

            if (!response.ok) {
                throw new Error(`Erreur d'appel API : ${response.status} ${response.statusText}`);
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                
                buffer += decoder.decode(value, { stream: true });
                
                // Traiter le buffer ligne par ligne
                const lines = buffer.split('\n');
                buffer = lines.pop() || ''; // Garder la dernière ligne incomplète dans le buffer
                
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        
                        // Ignorer le message [DONE]
                        if (data.trim() === '[DONE]') {
                            continue;
                        }
                        
                        try {
                            const jsonData = JSON.parse(data);
                            if (jsonData.choices && jsonData.choices[0].delta && jsonData.choices[0].delta.content) {
                                const newContent = jsonData.choices[0].delta.content;
                                fullResponse += newContent;
                                
                                // Émettre un événement avec seulement le nouveau contenu
                                const streamEvent = new CustomEvent('stream-update', {
                                    detail: { content: newContent }
                                });
                                window.dispatchEvent(streamEvent);
                            }
                        } catch (e) {
                            console.warn('Erreur parsing JSON:', e);
                        }
                    }
                }
            }

            // Traiter le reste du buffer si nécessaire
            if (buffer) {
                // ... traitement similaire pour le buffer restant ...
            }

            // Stockage de la conversation dans Supabase
            await this.storeConversation(userMessage, fullResponse);

            // Ajout de l'historique des messages
            this.promptManager.addToHistory('user', userMessage);
            this.promptManager.addToHistory('assistant', fullResponse);

            return fullResponse;
        } catch (error) {
            console.error('Erreur lors de l\'appel au Backend:', error);
            throw error;
        }
    }

    async storeConversation(userMessage, assistantResponse) {
        try {
            const response = await fetch(this.apiUrl + '/.netlify/functions/saveMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userMessage: userMessage,
                    assistantResponse: assistantResponse,
                    language: this.language,
                    environment: this.environment
                })
            });

            if (!response.ok) {
                console.error('Erreur de stockage:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Erreur lors de l\'appel à Netlify:', error);
        }
    }
}
