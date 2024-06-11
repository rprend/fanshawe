
import type { APIEvent } from "@solidjs/start/server"
import { SendQueryRequest } from "~/constants/apiInterfaces"
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(params: APIEvent) {
  const body = await params.request.json() as SendQueryRequest
  // Get the body as a string

  console.log(body)

  const completion = await openai.chat.completions.create({
    messages: [{"role": "user", "content": body.submission}],
    model: "gpt-4o",
  });

  console.log(completion.choices[0]);

  return {
    status: 200,
    body: { message: completion.choices[0] }
  }
}