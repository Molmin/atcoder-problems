import { existsSync, readFileSync, writeFileSync } from "node:fs"
import AtCoder from "./service"
import { ensureDirSync } from "fs-extra"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const atcoder = new AtCoder()

const contests = JSON.parse(readFileSync('data/contest.json').toString())
let done: Record<string, boolean> = {}
if (existsSync('data/done.json'))
    done = JSON.parse(readFileSync('data/done.json').toString())

async function main() {
    ensureDirSync('data/statement')
    console.log(`Total ${Object.entries(contests).length} contests found`)
    for (const [contestId, problems] of Object.entries(contests)) {
        for (const problemId of problems as string[]) {
            if (done[problemId]) continue
            console.log(`Getting Problem ${problemId}`)
            await sleep(100)
            try {
                const result = await atcoder.getProblemHTML(contestId, problemId)
                ensureDirSync(`data/statement/${problemId}`)
                // for (const [langId, statement] of Object.entries(result.statement))
                //     writeFileSync(`data/statement/${problemId}/${langId}.md`, statement)
                writeFileSync(`data/statement/${problemId}/html.json`, JSON.stringify({
                    html: result.html,
                    endpoint: result.endpoint,
                }))
                writeFileSync(`data/statement/${problemId}/config.json`, JSON.stringify({
                    title: result.title,
                    time: result.time,
                    memory: result.memory,
                }))
            }
            catch (e) {
                // console.error(e)
                // continue
                throw e
            }
            done[problemId] = true
            writeFileSync('data/done.json', JSON.stringify(done))
        }
    }
}

main()