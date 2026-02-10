// script.js

class ChatManager {
    constructor() {
        this.messages = [];
        this.mode = 'text'; // Default mode
    }

    addMessage(content, sender = 'user') {
        const message = { content, sender, timestamp: new Date() };
        this.messages.push(message);
        this.displayMessage(message);
    }

    displayMessage(message) {
        // This function should update the chat UI
        console.log(`[${message.timestamp.toISOString()}] ${message.sender}: ${message.content}`);
    }

    switchMode(newMode) {
        if (['text', 'image'].includes(newMode)) {
            this.mode = newMode;
            console.log(`Switched to ${newMode} mode.`);
        } else {
            console.log('Invalid mode selected.');
        }
    }

    generateImage(prompt) {
        // Placeholder function for image generation
        console.log(`Generating image for prompt: ${prompt}`);
        // Here you would typically call your image generation service/API
    }
}

// Example usage
const chat = new ChatManager();
chat.addMessage('Hello, how can I assist you today?');
chat.switchMode('image');
chat.generateImage('A beautiful sunset over the mountains.');