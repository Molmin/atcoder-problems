import { readFileSync, writeFileSync } from "node:fs"
import AtCoder from "./service"
import { ensureDirSync } from "fs-extra"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const secret = JSON.parse(readFileSync('secret.json').toString())
const atcoder = new AtCoder()

let testdataDict: Record<string, string> = {}
let contestDict: Record<string, string[]> = {}

ensureDirSync('data')

async function main() {
    if (await atcoder.login(secret.username, secret.password))
        console.log('Logged in')
    else return console.log('Failed to log in')

    let contests: string[] = []
    for (let page = 1; ; page++) {
        await sleep(500)
        const result = await atcoder.getContestList(page)
        if (result.length === 0) break
        contests = contests.concat(result)
    }
    contests = Array.from(new Set(contests))
    contests = contests.sort((x, y) => x < y ? -1 : 1)
    console.log(`Total ${contests.length} contests found`)

    let done = 0
    for (const contestId of contests) {
        await sleep(500)
        console.log(`Process: ${done + 1} / ${contests.length}`)
        const problems = await atcoder.getContestProblems(contestId)
        contestDict[contestId] = problems
        writeFileSync('data/contest.json', JSON.stringify(contestDict, null, '  '))
        for (const problemId of problems) {
            await sleep(500)
            const submissions = await atcoder.getSubmissions(contestId, problemId)
            if (submissions.length === 0) throw new Error(`How difficult the problem ${problemId} is!`)
            const filenames = await atcoder.getTestdataFilenames(contestId, submissions[0])
            testdataDict[problemId] = filenames.join(',')
            writeFileSync('data/dict.json', JSON.stringify(testdataDict, null, '  '))
        }
        done++
    }
}

main()