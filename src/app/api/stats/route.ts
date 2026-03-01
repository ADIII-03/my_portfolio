import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "http://localhost:3000"

async function fetchSafe(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store" })
    return await res.json()
  } catch {
    return null
  }
}

export async function GET() {
  const leetcode = await fetchSafe(`${baseUrl}/api/leetcode`)

  const codeforcesData = await fetchSafe(
    "https://codeforces.com/api/user.info?handles=Aditya0318"
  )

  return NextResponse.json({
    leetcode: leetcode ?? { error: "LeetCode unavailable" },
    codeforces: codeforcesData?.result?.[0] ?? {
      error: "Codeforces unavailable",
    },
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
}