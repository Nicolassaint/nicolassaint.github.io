document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const typingIndicator = document.getElementById("typing-indicator");

    const apiHandler = new APIHandler(window.currentLanguage);

    function addMessage(content, isUser = false, isError = false) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'} ${isError ? 'error-message' : ''}`;

        // Convert Markdown to HTML using marked.js
        const markdownContent = marked.parse(content);

        messageDiv.innerHTML = `
            <div class="message-content">
                ${markdownContent}
                ${isError ? '<div class="error-details">Check browser console (F12) for details</div>' : ''}
            </div>
        `;
        chatBox.insertBefore(messageDiv, typingIndicator);


        // Manually scroll to show a bit of the previous message
        const previousMessageHeight = messageDiv.previousElementSibling
        ? messageDiv.previousElementSibling.offsetHeight
        : 0;
        const padding = 250; // Adjust the padding to show part of the previous message
        chatBox.scrollTop = messageDiv.offsetTop - previousMessageHeight - padding;
    }

    function showTypingIndicator() {
        typingIndicator.style.display = 'block';
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }

    async function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;

        // Créer le message de l'utilisateur
        addMessage(userMessage, true);
        userInput.value = "";
        showTypingIndicator();

        try {
            const botMessageDiv = document.createElement("div");
            botMessageDiv.className = 'message bot-message';
            botMessageDiv.innerHTML = '<div class="message-content"></div>';
            chatBox.insertBefore(botMessageDiv, typingIndicator);

            let isUserScrolling = false;
            let lastScrollTop = chatBox.scrollTop;

            // Amélioration de la détection du scroll
            let scrollTimeout;
            chatBox.addEventListener('scroll', () => {
                if (chatBox.scrollTop !== lastScrollTop) {
                    isUserScrolling = true;
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        const scrollBottom = chatBox.scrollTop + chatBox.clientHeight;
                        const isNearBottom = chatBox.scrollHeight - scrollBottom < 100;
                        if (isNearBottom) {
                            isUserScrolling = false;
                        }
                    }, 150); // Réduit à 150ms pour une meilleure réactivité
                }
                lastScrollTop = chatBox.scrollTop;
            });

            const streamUpdateHandler = (event) => {
                hideTypingIndicator();
                const messageContent = botMessageDiv.querySelector('.message-content');
                messageContent.innerHTML = marked.parse(event.detail.content);
                
                // Amélioration de la logique de scroll
                if (!isUserScrolling) {
                    const scrollBottom = chatBox.scrollTop + chatBox.clientHeight;
                    const isNearBottom = chatBox.scrollHeight - scrollBottom < 100;
                    
                    if (isNearBottom) {
                        requestAnimationFrame(() => {
                            chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
                        });
                    }
                }
            };

            window.addEventListener('stream-update', streamUpdateHandler);
            await apiHandler.sendMessage(userMessage);
            window.removeEventListener('stream-update', streamUpdateHandler);
            hideTypingIndicator();

        } catch (error) {
            console.error('=== Error details ===');
            console.error(error);
            hideTypingIndicator();
            addMessage(`Error: ${error.message}`, false, true);
        }
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    // Add styles for error messages
    const style = document.createElement('style');
    style.textContent = `
        .error-message .message-content {
            background: #ffebee !important;
            color: #c62828 !important;
            border: 1px solid #ef9a9a;
        }
        .error-details {
            font-size: 0.8em;
            margin-top: 5px;
            opacity: 0.7;
        }
    `;
    document.head.appendChild(style);
});

function initChatInterface(apiHandler) {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const typingIndicator = document.getElementById("typing-indicator");

    function addMessage(content, isUser = false, isError = false) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'} ${isError ? 'error-message' : ''}`;

        // Convert Markdown to HTML using marked.js
        const markdownContent = marked.parse(content);

        messageDiv.innerHTML = `
            <div class="message-content">
                ${markdownContent}
                ${isError ? '<div class="error-details">Check browser console (F12) for details</div>' : ''}
            </div>
        `;
        chatBox.insertBefore(messageDiv, typingIndicator);


        // Manually scroll to show a bit of the previous message
        const previousMessageHeight = messageDiv.previousElementSibling
        ? messageDiv.previousElementSibling.offsetHeight
        : 0;
        const padding = 250; // Adjust the padding to show part of the previous message
        chatBox.scrollTop = messageDiv.offsetTop - previousMessageHeight - padding;
    }

    function showTypingIndicator() {
        typingIndicator.style.display = 'block';
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }

    async function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;

        // Créer le message de l'utilisateur
        addMessage(userMessage, true);
        userInput.value = "";
        showTypingIndicator();

        try {
            const botMessageDiv = document.createElement("div");
            botMessageDiv.className = 'message bot-message';
            botMessageDiv.innerHTML = '<div class="message-content"></div>';
            chatBox.insertBefore(botMessageDiv, typingIndicator);

            let isUserScrolling = false;
            let lastScrollTop = chatBox.scrollTop;

            // Amélioration de la détection du scroll
            let scrollTimeout;
            chatBox.addEventListener('scroll', () => {
                if (chatBox.scrollTop !== lastScrollTop) {
                    isUserScrolling = true;
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        const scrollBottom = chatBox.scrollTop + chatBox.clientHeight;
                        const isNearBottom = chatBox.scrollHeight - scrollBottom < 100;
                        if (isNearBottom) {
                            isUserScrolling = false;
                        }
                    }, 150); // Réduit à 150ms pour une meilleure réactivité
                }
                lastScrollTop = chatBox.scrollTop;
            });

            const streamUpdateHandler = (event) => {
                hideTypingIndicator();
                const messageContent = botMessageDiv.querySelector('.message-content');
                messageContent.innerHTML = marked.parse(event.detail.content);
                
                // Amélioration de la logique de scroll
                if (!isUserScrolling) {
                    const scrollBottom = chatBox.scrollTop + chatBox.clientHeight;
                    const isNearBottom = chatBox.scrollHeight - scrollBottom < 100;
                    
                    if (isNearBottom) {
                        requestAnimationFrame(() => {
                            chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
                        });
                    }
                }
            };

            window.addEventListener('stream-update', streamUpdateHandler);
            await apiHandler.sendMessage(userMessage);
            window.removeEventListener('stream-update', streamUpdateHandler);
            hideTypingIndicator();

        } catch (error) {
            console.error('=== Error details ===');
            console.error(error);
            hideTypingIndicator();
            addMessage(`Error: ${error.message}`, false, true);
        } finally {
            updateSendButtonState(false);
        }
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    // Add styles for error messages
    const style = document.createElement('style');
    style.textContent = `
        .error-message .message-content {
            background: #ffebee !important;
            color: #c62828 !important;
            border: 1px solid #ef9a9a;
        }
        .error-details {
            font-size: 0.8em;
            margin-top: 5px;
            opacity: 0.7;
        }
    `;
    document.head.appendChild(style);
}

// Exporter la fonction initChatInterface pour qu'elle soit accessible globalement
window.initChatInterface = initChatInterface;
