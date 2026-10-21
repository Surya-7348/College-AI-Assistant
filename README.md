# College AI Assistant

A real-time AI chatbot for college students, built with **Node.js, Express and Google Gemini**. It answers questions about admissions, academics, coursework and career guidance in a clean chat interface that keeps conversation context.

## Features

- **Context-aware chat**: sends the conversation history with every message, so follow-up questions work naturally
- **College-focused answers**: a custom system prompt keeps replies short, clear and actionable (2–3 paragraphs)
- **Modern UI**: responsive chat bubbles, animations and loading indicators
- **Error handling**: clear error messages when the AI service fails

## Tech stack

- **Backend**: Node.js, Express.js
- **AI**: Google Gemini (`gemini-2.5-flash`) via `@google/generative-ai`
- **Frontend**: HTML, CSS, vanilla JavaScript
- **Linting / formatting**: Biome

## Run it locally

Prerequisites: Node.js v18+ and a Google Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

```bash
npm install
```

Create a `.env` file in the project root:

```
GOOGLE_API_KEY=your_gemini_api_key_here
```

Start the server:

```bash
npm start
```

Then open `http://localhost:3003` in your browser.

## Deployment

The app runs on any Node.js host (Render, Railway, Vercel, Heroku). Connect this repo, add `GOOGLE_API_KEY` as an environment variable, and deploy. The server uses `process.env.PORT` when the host provides one.

## Project structure

- `server.js` – Express server and the `/chat` endpoint that calls Gemini
- `index.html` – chat interface
- `package.json` – dependencies and scripts
- `College_AI_Assistant.pptx` / `create_presentation.py` – project presentation and the script that generates it
- `.env` – API key (not committed)

## Team

Built by Surya Pratap Singh, Amisha Singh and Lakshmi Pal (B.Tech CS-AIML).

## License

MIT
