import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the "Eagle Waste Solutions Smart Assistant". 
      You are an expert in waste removal services, junk removal, and waste management.
      We are a professional waste removal company serving Los Angeles County, San Fernando Valley, and Orange County.
      We specialize in Residential Waste Removal, Commercial Waste Removal, Junk Removal, and various cleanout services.
      We provide eco-friendly disposal and recycling services whenever possible.
      We offer free estimates and flexible financing options.
      Your goal is to help customers understand our waste removal services and determine the best solution for their specific needs (residential cleanup, commercial waste, large items, construction debris, etc.).
      Keep answers concise, friendly, and encouraging.
      If asked about location, mention we serve Los Angeles County, San Fernando Valley, and Orange County.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await initializeChat();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to our design database. Please try again later.";
  }
};