# College AI Chatbot

A modern, real-time AI chatbot built for college students using OpenAI's GPT-4o-mini model. Features a beautiful chat interface with streaming responses and conversation history.

## Features

- **Real-time Streaming**: Responses appear as they're generated for a smooth chat experience
- **Chat History**: Maintains conversation context throughout the session
- **Modern UI**: Clean, responsive design with chat bubbles and animations
- **Error Handling**: Graceful error messages and loading indicators
- **College-Focused**: Optimized prompts for educational assistance

## Prerequisites

- Node.js (v18 or higher)
- npm
- OpenAI API key

## Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

## Running Locally

```bash
npm start
```

Open your browser and navigate to `http://localhost:3003`

## Deployment

### Option 1: Heroku
1. Create a Heroku account
2. Install Heroku CLI
3. Login and create app:
   ```bash
   heroku login
   heroku create your-app-name
   ```
4. Set environment variable:
   ```bash
   heroku config:set OPENAI_API_KEY=your_key_here
   ```
5. Deploy:
   ```bash
   git push heroku main
   ```

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Set OPENAI_API_KEY in Vercel dashboard

### Option 3: Railway
1. Connect your GitHub repo
2. Add OPENAI_API_KEY environment variable
3. Deploy automatically

## Project Structure

- `server.js` - Express server with OpenAI integration
- `index.html` - Frontend chat interface
- `package.json` - Dependencies and scripts
- `.env` - Environment variables (not committed)

## Technologies Used

- **Backend**: Node.js, Express.js
- **AI**: OpenAI GPT-4o-mini
- **Frontend**: Vanilla JavaScript, CSS
- **Linting**: Biome

## Usage Tips

- Ask questions about coursework, programming, math, science, etc.
- The bot maintains context, so follow-up questions work well
- For coding help, specify the language and problem clearly

## License

MIT License - Free for educational use

## Contributing

Feel free to improve the UI, add features, or optimize performance!</content>
<parameter name="filePath">c:\Users\babua\OneDrive\Desktop\mychaat\README.md