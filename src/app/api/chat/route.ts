import { NextResponse } from "next/server"
import Groq from "groq-sdk"
import { resume2 } from "@/app/data/resume"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
})

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const systemPrompt = `
You are a professional AI assistant answering questions about a developer.

You have access to the following resume data:


Resume 2:
${JSON.stringify(resume2, null, 2)}

INSTRUCTIONS:
- Answer in short, clear sentences (1–2 lines max).
- Be confident and natural, like a real person speaking.
- Use resume data only as background knowledge.
- Never mention resumes, documents, or sources.
- If information is missing, give a reasonable general answer.
- Avoid explanations, storytelling, or extra details.
- Focus on clarity, precision, and usefulness.
-and never ever mention that you are using resume data to answer the questions.
`;


    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    })

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error("Chat API error:", error)

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
