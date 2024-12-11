import { readFileSync, writeFileSync } from "node:fs"
import { JSDOM } from 'jsdom'
import { convertHtmlToMarkdown } from "./statement"

const contests = JSON.parse(readFileSync('data/contest.json').toString())
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

interface HTMLData {
    html: Record<string, string>
    endpoint: string
}

async function main() {
    console.log(`Total ${Object.entries(contests).length} contests found`)
    for (const [contestId, problems] of Object.entries(contests)) {
        await sleep(5)
        console.info(contestId)
        for (const problemId of problems as string[]) {
            const { html: htmls, endpoint } = JSON.parse(readFileSync(`data/statement/${problemId}/html.json`).toString()) as HTMLData
            for (const [langId, html] of Object.entries(htmls)) {
                const ele = (new JSDOM(html).window.document).querySelector(`span.lang-${langId}`) as Element
                writeFileSync(`data/statement/${problemId}/${langId}.md`, convertHtmlToMarkdown(ele, endpoint))
            }
        }
    }
}

main()