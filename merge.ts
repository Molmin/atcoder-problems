import { readFileSync, writeFileSync } from "node:fs"

const tree = JSON.parse(readFileSync('data/tree.json').toString())

function getAllFilenames(dir: any): string[] {
    let res: string[] = []
    for (const sub of dir) {
        if (typeof sub === 'string') res.push(sub)
        else res = res.concat(getAllFilenames(sub[1]))
    }
    return res
}

const data_contests = Object.fromEntries(tree.map(([contestId, contestProblems]: [string, any]) =>
    [contestId, contestProblems.map(([problemId]: [string]) => `${contestId}/${problemId}`)
        .sort((x: string, y: string) => x < y ? -1 : 1)]
))

console.log(`Total ${Object.entries(data_contests).length} contests founded`)

const data_problems = Object.fromEntries(tree
    .map(([contestId, contestProblems]: [string, any]) => contestProblems
        .map(([problemId, files]: [string, any]) => {
            const filenames = getAllFilenames(files)
            return [
                `${contestId}/${problemId}`,
                Array.from(new Set(filenames)).sort((x, y) => x < y ? -1 : 1).join(','),
            ]
        })
    )
    .flat()
    .sort((x: any, y: any) => x[0] < y[0] ? -1 : 1)
)

console.log(`Total ${Object.entries(data_problems).length} problems founded`)

const real_contests = JSON.parse(readFileSync('data/contest.json').toString())
const real_problems = JSON.parse(readFileSync('data/dict.json').toString())

let data_contest_dict: Record<string, string[]> = {}
let real_contest_dict: Record<string, string[]> = {}

for (const [contestId, problems] of Object.entries(data_contests)) {
    const id = (problems as string[]).map((problemId) => data_problems[problemId]).join('\n')
    if (!data_contest_dict[id]) data_contest_dict[id] = []
    data_contest_dict[id].push(contestId)
}
for (const [contestId, problems] of Object.entries(real_contests)) {
    const id = (problems as string[]).map((problemId) => real_problems[problemId]).join('\n')
    if (!real_contest_dict[id]) real_contest_dict[id] = []
    real_contest_dict[id].push(contestId)
}

let result: Record<string, string> = {}

for (const [id, contestIds] of Object.entries(data_contest_dict)) {
    const real_contestIds = real_contest_dict[id] || []
    if (real_contestIds.length === 0) continue
    if (contestIds.length >= 2 || real_contestIds.length >= 2) {
        console.log(`!!!!! Please check contest ${contestIds.join(', ')} and contest ids ${real_contestIds.join(', ')} manually`)
    }
    else {
        console.log(`Merged contest ${contestIds[0]} and ${real_contestIds[0]}`)
    }
}

writeFileSync('data/result.json', JSON.stringify(result, null, '  '))