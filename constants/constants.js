import dotenv from "dotenv";
dotenv.config();

export const MODEL = "gpt-3.5-turbo";
export const PORT = process.env.PORT || 3030;
export const API_KEY = process.env.OPENAI_API_KEY;
