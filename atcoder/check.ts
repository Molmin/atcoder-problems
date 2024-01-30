import { readFileSync, readdirSync } from 'node:fs'
import yamljs from 'yamljs'

const pids = readdirSync('../miniprojects/hydrooj-problem-transmission/data/atcoder')

for (const pid of pids) {
    const chars = pid.toLowerCase().split('')
    const end = chars.pop()
    const atpid = chars.join('') + '_' + end
    const config = JSON.parse(readFileSync(`data/statement/${atpid}/config.json`).toString())
    const yaml = yamljs.load(`../miniprojects/hydrooj-problem-transmission/data/atcoder/${pid}/testdata/config.yaml`)
    if (yaml.time !== `${config.time * 1000}ms` || yaml.memory !== `${config.memory * 1024}kb`) {
        console.log(config, yaml, pid)
    }
}
