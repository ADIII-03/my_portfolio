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

async function fetchCodeforces() {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)

  try {
    const res = await fetch(
      "https://codeforces.com/api/user.info?handles=Aditya0318",
      {
        signal: controller.signal,
        cache: "no-store",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
        },
      }
    )

    const data = await res.json()
    return data.status === "OK" ? data.result[0] : null
  } catch (err) {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

export async function GET() {
  const leetcode = await fetchSafe(`${baseUrl}/api/leetcode`)
  const codeforces = await fetchCodeforces()

  return NextResponse.json({
    leetcode: leetcode ?? { error: "LeetCode unavailable" },
    codeforces: codeforces ?? { error: "Codeforces unavailable" },
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