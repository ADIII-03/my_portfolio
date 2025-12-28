import { NextResponse } from "next/server"

export async function GET() {
  // LeetCode (Public API)
  const leetcodeRes = await fetch(
    "https://leetcode-stats-api.herokuapp.com/adi03__"
  )
  const leetcode = await leetcodeRes.json()

  // Codeforces (Official API)
  const codeforcesRes = await fetch(
    "https://codeforces.com/api/user.info?handles=Aditya0318"
  )
  const codeforcesData = await codeforcesRes.json()

  return NextResponse.json({
    leetcode,
    codeforces: codeforcesData.result?.[0] ?? null,
    // Manual platforms
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
