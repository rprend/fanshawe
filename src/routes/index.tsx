import { A } from "@solidjs/router";
import { APIEvent, SendQueryRequest, SendQueryResponse } from "~/constants/apiInterfaces";

export default function Home() {
  async function onSubmit() {
    const input = document.getElementById("submission-input") as HTMLInputElement

    const body: SendQueryRequest = {
      submission: input?.value ?? ''
    }

    const result = await fetch('/api/sendQuery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json()) as APIEvent<SendQueryResponse>

    console.log(result.body.message)
    //testing
  }

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Fanshawe</h1>
      <p class="mt-8">
      </p>
      <input id="submission-input" class="w-full h-32 border border-gray-300 rounded-lg p-4" />
      <button onClick={onSubmit} class="w-full bg-gradient-to-r from-sky-600 to-pink-500 text-white font-bold py-2 px-4 rounded-lg mt-4">
        Submit
      </button>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
