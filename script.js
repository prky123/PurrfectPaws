let messages = [
    { sender: 'admin', text: 'Welcome to our veterinary clinic! How can we help you today?' }
];

function renderMessages() {
    const chatboxContent = document.getElementById('chatbox-content');
    chatboxContent.innerHTML = '';
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', message.sender);
        messageElement.textContent = message.text;
        chatboxContent.appendChild(messageElement);
    });
    chatboxContent.scrollTop = chatboxContent.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const text = userInput.value.trim();
    if (text) {
        messages.push({ sender: 'user', text: text });
        userInput.value = '';
        // Simulate admin response
        setTimeout(() => {
            messages.push({ sender: 'admin', text: 'Thank you for your message! We will get back to you shortly.' });
            renderMessages();
        }, 1000);
        renderMessages();
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

document.addEventListener('DOMContentLoaded', renderMessages);

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message) {
        displayMessage(message, 'user');
        userInput.value = '';
        
        // Simulate a response from the system
        setTimeout(() => {
            displayMessage("Purrfect Paws is here to help!", 'system');
        }, 1000);
    }
}

function displayMessage(message, type) {
    const chatboxContent = document.getElementById('chatbox-content');
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    
    chatboxContent.appendChild(messageElement);
    chatboxContent.scrollTop = chatboxContent.scrollHeight;
}

