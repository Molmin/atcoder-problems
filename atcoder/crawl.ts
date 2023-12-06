import { readFileSync } from "node:fs"
import AtCoder from "./service"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const secret = JSON.parse(readFileSync('secret.json').toString())
const atcoder = new AtCoder()

async function main() {
    await atcoder.login(secret.username, secret.password)

    // return

    // let contests: string[] = []
    // for (let page = 1; ; page++) {
    //     await sleep(500)
    //     const result = await atcoder.getContestList(page)
    //     if (result.length === 0) break
    //     contests = contests.concat(result)
    // }
    // contests = Array.from(new Set(contests))
    // contests = contests.sort((x, y) => x < y ? -1 : 1)
    // console.log(`Total ${contests.length} contests found`)
    let contests = ['abc065']

    for (const contestId of contests) {
        await sleep(500)
        const problems = await atcoder.getContestProblems(contestId)
        for (const problemId of problems) {
            await sleep(500)
            const submissions = await atcoder.getSubmissions(contestId, problemId)
        }
    }
}

main()