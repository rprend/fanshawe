
import type { APIEvent } from "@solidjs/start/server"
import { SendQueryRequest } from "~/constants/apiInterfaces"

export async function POST(params: APIEvent) {
  const body = await params.request.json() as SendQueryRequest
  // Get the body as a string

  console.log(body)
  return {
    status: 200,
    body: { message: body.submission }
  }
}