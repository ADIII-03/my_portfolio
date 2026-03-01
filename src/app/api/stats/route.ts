import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

async function safeJson(res: Response) {
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

export async function GET() {
  try {
    // LeetCode
    const leetcodeRes = await fetch(
  "http://localhost:3000/api/leetcode",
  { cache: "no-store" }
)
const leetcode = await leetcodeRes.json()
    // Codeforces
    const codeforcesRes = await fetch(
      "https://codeforces.com/api/user.info?handles=Aditya0318",
      { cache: "no-store" }
    )
    const codeforcesData = await codeforcesRes.json()

    return NextResponse.json({
      leetcode: leetcode ?? { error: "LeetCode API unavailable" },
      codeforces: codeforcesData.result?.[0] ?? null,
      codechef: {
        username: "adi_0518",
        rating: 1418,
        maxRating: 1418,
        stars: 1,
      },
      geeksforgeeks: {
        username: "aradityaraman",
        solved: 120,
        instituteRank: 42,
      },
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Stats fetch failed" },
      { status: 500 }
    )
  }
}