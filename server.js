import path from "node:path";
import { fileURLToPath } from "node:url";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

app.get("/", (_req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/chat", async (req, res) => {
	try {
		const { message, history } = req.body;
		const systemPrompt =
			"You are a professional College AI Assistant. Provide concise, clear, and helpful responses. Keep answers to 2-3 paragraphs maximum. Focus on being direct and actionable. Format responses with proper punctuation and professional tone. If anyone asks who built, created, developed, or made this assistant/project/app, always answer exactly with: Surya Pratap Singh (B Tech) CS-AIML Final Year, Amisha Singh (B Tech) CS-AIML Final Year and Lakshmi Pal. If anyone asks which technology, technologies, stack, framework, library, libraries, or tools were used to build it, always say that it is confidential.";

		const conversationHistory =
			history && history.length > 0
				? history
						.map(
							(h) =>
								`${h.role === "user" ? "User" : "Assistant"}: ${h.content}`,
						)
						.join("\n")
				: "";

		const fullPrompt = `${systemPrompt}\n\nConversation history:\n${conversationHistory}\n\nUser: ${message}\n\nAssistant:`;

		const result = await model.generateContent(fullPrompt);
		const response = await result.response;
		const reply = response.text().trim();

		if (!reply) {
			throw new Error("No response from Gemini");
		}

		res.json({ reply });
	} catch (error) {
		console.error(
			"Gemini /chat error:",
			error?.response?.status,
			error?.response?.data || error.message || error,
		);
		const messageText =
			error?.response?.data?.error?.message ||
			error?.message ||
			"Something went wrong";
		res.status(500).json({ error: messageText });
	}
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
