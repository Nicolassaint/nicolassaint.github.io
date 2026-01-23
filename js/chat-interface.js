document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const typingIndicator = document.getElementById("typing-indicator");

    const apiHandler = new APIHandler(window.currentLanguage);

    // Constants
    const MAX_MESSAGE_LENGTH = 1000;
    const SCROLL_PADDING = 250;

    function addMessage(content, isUser = false, isError = false) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'} ${isError ? 'error-message' : ''}`;

        // Convert Markdown to HTML and sanitize to prevent XSS
        const markdownContent = DOMPurify.sanitize(marked.parse(content));

        messageDiv.innerHTML = `
            <div class="message-content">
                ${markdownContent}
                ${isError ? '<div class="error-details">Check browser console (F12) for details</div>' : ''}
            </div>
        `;
        chatBox.insertBefore(messageDiv, typingIndicator);

        // Scroll to show a bit of the previous message
        const previousMessageHeight = messageDiv.previousElementSibling
            ? messageDiv.previousElementSibling.offsetHeight
            : 0;
        chatBox.scrollTop = messageDiv.offsetTop - previousMessageHeight - SCROLL_PADDING;
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

        // Input validation: limit message length
        if (userMessage.length > MAX_MESSAGE_LENGTH) {
            const errorMsg = window.currentLanguage === 'fr'
                ? `Message trop long (max ${MAX_MESSAGE_LENGTH} caractères)`
                : `Message too long (max ${MAX_MESSAGE_LENGTH} characters)`;
            addMessage(errorMsg, false, true);
            return;
        }

        addMessage(userMessage, true);
        userInput.value = "";
        showTypingIndicator();

        try {
            const response = await apiHandler.sendMessage(userMessage);
            hideTypingIndicator();
            addMessage(response, false);
        } catch (error) {
            console.error('Chat error:', error.message);
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
