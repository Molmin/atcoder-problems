import { existsSync, readFileSync, writeFileSync } from "node:fs"
import AtCoder from "./service"
import { ensureDirSync } from "fs-extra"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const secret = JSON.parse(readFileSync('secret.json').toString())
const atcoder = new AtCoder()

let testdataDict: Record<string, string> = {}
let contestDict: Record<string, string[]> = {}

ensureDirSync('data/code')
if (existsSync('data/contest.json'))
    contestDict = JSON.parse(readFileSync('data/contest.json').toString())
if (existsSync('data/dict.json'))
    testdataDict = JSON.parse(readFileSync('data/dict.json').toString())

const ERROR_CONTESTS = [
    'asprocon8', 'asprocon9',
]

function JSONToString(json: Record<string, any>) {
    return JSON.stringify(Object.fromEntries(Object.entries(json).sort((x, y) => x[0] < y[0] ? 1 : -1)), null, '  ')
}

async function main() {
    if (await atcoder.login(secret.username, secret.password)) console.log('Logged in')
    else return console.log('Failed to log in')

    let contests: string[] = []
    for (let page = 1; ; page++) {
        await sleep(100)
        const result = await atcoder.getContestList(page)
        if (result.length === 0) break
        contests = contests.concat(result)
    }
    contests = Array.from(new Set(contests))
    contests = contests.map((x) => x.toLowerCase()).sort((x, y) => x < y ? -1 : 1)
    console.log(`Total ${contests.length} contests found`)

    let done = 0
    for (const contestId of contests) {
        if (contestDict[contestId] || ERROR_CONTESTS.includes(contestId)) {
            done++
            continue
        }
        await sleep(100)
        console.log(`Process: ${done + 1} / ${contests.length}`)
        const problems = (await atcoder.getContestProblems(contestId)).map((x) => x.toLowerCase())
        for (const problemId of problems) {
            if (testdataDict[problemId]) continue
            await sleep(100)
            const submissions = await atcoder.getSubmissions(contestId, problemId)
            if (submissions.length === 0) throw new Error(`How difficult the problem ${problemId} is!`)
            let code = await atcoder.getCode(contestId, submissions[0])
            let i = 0
            while (i + 1 < submissions.length && code.includes('atcoder/')) {
                i++
                let next = await atcoder.getCode(contestId, submissions[i])
                if (!next.includes('atcoder/') || next.length < code.length) code = next
            }
            writeFileSync(`data/code/${problemId}.cpp`, code)
            const filenames = await atcoder.getTestdataFilenames(contestId, submissions[0])
            testdataDict[problemId] = filenames.sort((x, y) => x < y ? -1 : 1).join(',')
            writeFileSync('data/dict.json', JSONToString(testdataDict))
        }
        contestDict[contestId] = problems
        writeFileSync('data/contest.json', JSONToString(contestDict))
        done++
    }
}

main()