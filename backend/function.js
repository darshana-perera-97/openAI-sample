require("dotenv").config();
const OpenAI = require("openai");

const t = "tusion class sir for combined maths";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getCompletion(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching completion:", error);
    return null;
  }
}

// Example usage:
getCompletion(
  "want to crete a content for a whatsapp bulk message content for" +
    t +
    " with 250 chars. include stickers also. PRovide me message only"
).then(console.log);
