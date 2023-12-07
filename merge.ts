import { readFileSync, writeFileSync } from "node:fs"

const tree = JSON.parse(readFileSync('data/tree.json').toString())

const problems = tree
    .map(([contestId, contestProblems]: [string, any]) => {
        const tmp = contestProblems
            .map(([problemId, files]: [string, any]) => {
                if (contestId === '2020_hitachi') {
                    return files
                }
                for (const [dirname, filenames] of files) {
                    if (dirname !== 'in' && dirname !== 'out')
                        throw new Error(contestId + '/' + problemId + '/' + dirname)
                }
            })
        return contestId
    })

console.log(problems)