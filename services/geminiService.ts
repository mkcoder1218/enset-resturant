// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { MENU_ITEMS } from "../constants";

// // Initialize Gemini
// // Note: In a real production app, ensure API keys are not exposed to the client if not using a proxy.
// // For this demo, we assume process.env.VITE_API_KEY is available and safe for this context.
// const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY || "YOUR_API_KEY");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const MENU_CONTEXT = MENU_ITEMS.map(item => 
//   `${item.name} ($${item.price}): ${item.description} [Spicy: ${item.spicyLevel}/3, Vegan: ${item.isVegan}]`
// ).join('\n');

// const SYSTEM_INSTRUCTION = `
// You are "Enset AI", a warm and knowledgeable virtual host for Enset Ethiopian Restaurant.
// Your goal is to help customers choose dishes, explain Ethiopian cuisine culture, and answer questions about the menu.

// Here is our Menu:
// ${MENU_CONTEXT}

// Cultural Context:
// - Injera is the spongy flatbread used as a utensil.
// - Gursha is the act of feeding someone a bite of food as a sign of friendship.
// - We value communal dining (eating from a shared plate).

// Guidelines:
// - Be welcoming, polite, and enthusiastic about Ethiopian food.
// - Keep answers concise (under 80 words) unless asked for a detailed story.
// - Recommend dishes based on spice tolerance or dietary restrictions (Vegan/Gluten-free).
// - If asked about reservations, say we accept them via the contact form or phone (555-0123).
// - If the user speaks Amharic, reply in Amharic.
// `;

// export const getGeminiResponse = async (userMessage: string): Promise<string> => {
//   try {
//     const result = await model.generateContent([
//       { text: SYSTEM_INSTRUCTION },
//       { text: userMessage }
//     ]);
//     const response = await result.response;
    
//     return response.text() || "I'm having trouble connecting to the kitchen right now. Please ask again!";
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return "I apologize, I am currently unable to check the menu details. Please try again later.";
//   }
// };