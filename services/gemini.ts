
import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  try {
    return (process as any).env.API_KEY || "";
  } catch {
    return "";
  }
};

export const getGeminiResponse = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("API Key is missing");
    return "Извините, сейчас у меня возникли трудности с конфигурацией.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `Ты — ИИ-ассистент Пети, разработчика мирового уровня. 
        Алекс специализируется на мобильных приложениях (SwiftUI, React Native) и высокопроизводительных ботах (Discord, Telegram). 
        Ты должен говорить профессионально, умно и с оттенком элегантности, в стиле бренда Apple.
        Отвечай на русском языке. Будь кратким и подчеркивай опыт Пети в написании чистого кода, масштабируемости и UX-дизайне.
        Если спрашивают о цене или найме, предлагай воспользоваться контактной формой на сайте.`,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Извините, сейчас у меня возникли трудности с подключением. Пожалуйста, попробуйте позже.";
  }
};
