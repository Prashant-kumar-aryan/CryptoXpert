const { GoogleGenerativeAI } = require("@google/generative-ai");

let API_KEY = "AIzaSyB323AkSje5XNHhk6-D70-Ib1d6pja3r14";
const genAI = new GoogleGenerativeAI(API_KEY);

async function run(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  } catch (error) {
    console.error("Error generating response:", error);
  }
}
export default run;
