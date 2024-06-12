const chat = document.getElementById('chat');
const messageInput = document.getElementById('messageInput');

function sendMessage() {
    const message = messageInput.value;
    if (message) {
        displayMessage(message, 'sent');
        localStorage.setItem('chatMessage1', message);
        messageInput.value = '';
    }
}

function displayMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    chat.appendChild(messageDiv);
}

function receiveMessage() {
    const receivedMessage = localStorage.getItem('chatMessage2');
    if (receivedMessage) {
        displayMessage(receivedMessage, 'received');
        localStorage.removeItem('chatMessage2');
    }
}

function clearChat() {
    localStorage.removeItem('chatMessage1');
    localStorage.removeItem('chatMessage2');
    chat.innerHTML = '';
}

function logout() {
    alert('Logging out...');
    // Implement logout functionality here
}

setInterval(receiveMessage, 1000); // Check for new messages every second