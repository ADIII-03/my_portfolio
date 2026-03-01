import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              username
              profile {
                ranking
                reputation
              }
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: {
          username: "adi03__"
        }
      })
    })

    const json = await res.json()
    const user = json.data?.matchedUser

    if (!user) {
      return NextResponse.json(
        { error: "LeetCode user not found" },
        { status: 404 }
      )
    }

    // Convert array → clean object
    const solvedMap: any = {}
    user.submitStatsGlobal.acSubmissionNum.forEach(
      (item: any) => {
        solvedMap[item.difficulty.toLowerCase()] = item.count
      }
    )

    return NextResponse.json({
      username: user.username,
      ranking: user.profile.ranking,
      reputation: user.profile.reputation,
      solved: {
        total: solvedMap.all,
        easy: solvedMap.easy,
        medium: solvedMap.medium,
        hard: solvedMap.hard,
      }
    })

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "LeetCode GraphQL fetch failed" },
      { status: 500 }
    )
  }
}