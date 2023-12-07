import { readFileSync, writeFileSync } from "node:fs"

const lines = readFileSync('data/files.txt')
    .toString().split('\n')
    .map((line) => line.trim())

const LineRegExp = /^\d+? +?\d\d\-\d\d\-\d\d\d\d +?\d\d:\d\d +?[^ ]+?$/
const invalid_lines = lines.filter((line) => !LineRegExp.test(line))
writeFileSync('data/invalid_lines', invalid_lines.join('\n'))

const filenames = lines
    .filter((line) => LineRegExp.test(line))
    .map((line) => line.split(' ').pop() as string)

function solve(filenames: string[]): any {
    const files = filenames.filter((file) => !file.includes('/'))
    const dirs = filenames.filter((file) => file.split('/').length === 2 && file.endsWith('/'))
    return [
        ...files,
        ...dirs.map((dir) => [
            dir.split('/')[0],
            solve(filenames
                .filter((file) => file.startsWith(dir) && file !== dir)
                .map((file) => file.split('/').slice(1).join('/'))),
        ]),
    ]
}

const result = solve(filenames)
writeFileSync('data/tree.json', JSON.stringify(result))