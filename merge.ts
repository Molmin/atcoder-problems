import { readFileSync, writeFileSync } from "node:fs"

let result: Record<string, string | null> = {}

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
            const filenames = getAllFilenames(files).map((file) => file.split('.')[0])
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
const real_problems = Object.fromEntries(
    Object.entries(
        JSON.parse(readFileSync('data/dict.json').toString()) as Record<string, string>
    ).map((x) => [x[0], x[1].split(',').map((file) => file.split('.')[0]).join(',')])
)

let data_contest_dict: Record<string, string[]> = {}
let real_contest_dict: Record<string, string[]> = {}

function mergeContest(real_id: string, data_id: string) {
    console.log(`Merged contest ${data_id} and ${real_id}`)
    const real_problemIds = real_contests[real_id]
    const data_problemIds = data_contests[data_id]
    for (let i = 0; i < real_problemIds.length; i++)
        result[real_problemIds[i]] = data_problemIds[i]
}
function mergeProblem(real_id: string, data_id: string) {
    console.log(`Merged problem ${data_id} and ${real_id}`)
    result[real_id] = data_id
}

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

for (const [id, contestIds] of Object.entries(data_contest_dict)) {
    const real_contestIds = real_contest_dict[id] || []
    if (real_contestIds.length === 0) continue
    if (contestIds.length >= 2 || real_contestIds.length >= 2) {
        if (contestIds.join(',') === 'WTF19' || contestIds.join(',') === 'CodeFestival2016GrandFinal') {
            mergeContest(real_contestIds[0], contestIds[0])
            mergeContest(real_contestIds[1], contestIds[0])
            continue
        }
        console.log(`!!!!! Please check contest ${contestIds.join(', ')} and contest ids ${real_contestIds.join(', ')} manually`)
    }
    else mergeContest(real_contestIds[0], contestIds[0])
}

let data_problem_dict: Record<string, string[]> = {}
let real_problem_dict: Record<string, string[]> = {}

const merged_problems = Object.entries(result).map(x => x[1])

for (const [problemId, filenames] of Object.entries(data_problems)) {
    if (merged_problems.includes(problemId)) continue
    if (!data_problem_dict[filenames]) data_problem_dict[filenames] = []
    data_problem_dict[filenames].push(problemId)
}
for (const [problemId, filenames] of Object.entries(real_problems)) {
    if (result[problemId]) continue
    if (!real_problem_dict[filenames]) real_problem_dict[filenames] = []
    real_problem_dict[filenames].push(problemId)
}

for (const [id, data_problemIds] of Object.entries(data_problem_dict)) {
    const real_problemIds = real_problem_dict[id] || []
    if (real_problemIds.length === 0) continue
    if (data_problemIds.length >= 2 || real_problemIds.length >= 2) {
        // if (data_problemIds.join(',') === 'WTF19' || contestIds.join(',') === 'CodeFestival2016GrandFinal') {
        //     mergeContest(real_contestIds[0], contestIds[0])
        //     mergeContest(real_contestIds[1], contestIds[0])
        //     continue
        // }
        console.log(`!!!!! Please check problem ${data_problemIds.join(', ')} and problem ids ${real_problemIds.join(', ')} manually`)
    }
    else mergeProblem(real_problemIds[0], data_problemIds[0])
}

for (const [problemId] of Object.entries(real_problems)) {
    if (!result[problemId]) result[problemId] = null
}

writeFileSync('data/result.json', JSON.stringify(
    Object.fromEntries(Object.entries(result).sort((x, y) => x[0] < y[0] ? -1 : 1)),
    null, '  ',
))