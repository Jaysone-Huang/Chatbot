# RagChat-Chatbot

A simple chatbot built using the RagChat API. This project demonstrates basic interaction with RagChat's language model, allowing users to have conversations directly through a terminal interface.

### Features:
- **RagChat Integration**: Leverages the RagChat API for natural language processing, enabling smooth and intelligent conversations with the chatbot.
- **Upstash Integration**: Utilizes Upstash for managing stateful interactions. Upstash provides serverless Redis, allowing the chatbot to maintain conversation history and session data efficiently. This integration ensures a seamless experience, even in distributed and scalable environments.
- **Next.js Interface**: Built with Next.js for a modern and efficient interface, allowing users to interact with the chatbot through a simple and accessible web-based UI.

### How It Works:
1. **Initialization**: The chatbot initializes by connecting to the RagChat API and setting up a Redis instance with Upstash to store session data.
2. **Conversation Handling**: User inputs are sent to the RagChat API, and responses are generated and stored in Upstash, preserving the context for ongoing conversations.
3. **Scalability**: With Upstash, the chatbot is designed to handle multiple concurrent users, making it suitable for both small-scale and large-scale deployments.

### Getting Started:
1. Clone the repository.
2. Set up your RagChat and Upstash API keys.
3. Run the chatbot through your terminal and start chatting!


