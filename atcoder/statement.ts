import { writeFileSync } from "fs-extra"

export function solveText(node: Element, nowurl: string) {
    writeFileSync('1.txt', String.fromCharCode(160))
    for (const n of node.children) {
        const tagName = n.tagName.toLowerCase()
        if (tagName === 'var') {
            let content = (n.textContent?.trim() as string)
                .replace(/ /g, ' ')
                .replace(/α/g, ' \\alpha ').replace(/，/g, ',')
                .replace(/[≦≤]/g, ' \\leq ').replace(/[≧≥]/g, ' \\geq ').replace(/≠/g, ' \\neq ')
                .replace(/＜/g, ' < ')
                .replace(/（/g, '(').replace(/）/g, ')')
                .replace(/…/g, ' \\cdots ')
                .replace(/→/g, ' \\to ').replace(/←/g, ' \\gets ')
                .replace(/[~～〜]/g, ' \\sim ')
                .replace(/Σ/g, ' \\sum ')
                .replace(/∠/g, ' \\angle ').replace(/°/g, '^\\circ ')
                .replace(/±/g, ' \\pm ').replace(/[−－ー]/g, '-').replace(/⊕/g, ' \\oplus ')
                .replace(/×/g, ' \\times ').replace(/⁄/g, '/').replace(/÷/g, ' \\div ').replace(/％/g, ' \\% ')
                .replace(/  /g, ' ').trim()
            if (content.startsWith('$'))
                content = content.split('$')[1]
            n.innerHTML = `$${content}$`
        }
        else if (tagName === 'code') {
            n.innerHTML = `\`${n.innerHTML?.trim()}\``
        }
        else if (tagName === 'em' || tagName === 'i') {
            n.innerHTML = `*${n.innerHTML?.trim()}*`
        }
        else if (tagName === 'strong' || tagName === 'b') {
            n.innerHTML = `**${n.innerHTML?.trim()}**`
        }
        else if (tagName === 'font') {
            n.textContent = solveText(n, nowurl)
        }
        else if (tagName === 's') {
            n.innerHTML = `~~${n.innerHTML?.trim()}~~`
        }
        else if (tagName === 'u') {
            n.textContent = `<u>${n.innerHTML?.trim()}</u>`
        }
        else if (tagName === 'pre') {
            n.textContent = `\`\`\`\n${n.textContent}\n\`\`\`\n\n`
        }
        else if (tagName === 'ul') {
            let ret = ''
            for (const li of n.children) {
                if (li.tagName.toLowerCase() !== 'li')
                    throw new Error(`Found unknown element in ${nowurl} (11)`)
                ret += `- ${solveText(li, nowurl)}\n`
            }
            n.innerHTML = ret
        }
        else if (tagName === 'ol') {
            let i = 0, ret = ''
            for (const li of n.children) {
                if (li.tagName.toLowerCase() !== 'li')
                    throw new Error(`Found unknown element in ${nowurl} (11)`)
                i++
                ret += `${i}. ${solveText(li, nowurl)}\n`
            }
            n.innerHTML = ret
        }
        else if (tagName === 'img') {
            const url = new URL(n.getAttribute('src') || '', nowurl)
            n.textContent = `![${n.getAttribute('alt') || ''}](${url})\n\n`
        }
        else if (tagName === 'figure') {
            const url = new URL(n.querySelector('img')?.getAttribute('src') || '', nowurl)
            n.textContent = `![${n.querySelector('img')?.getAttribute('alt') || n.querySelector('figcaption')?.textContent}](${url})\n\n`
        }
        else if (tagName === 'blockquote') {
            let tmp = ''
            for (const child of n.children) {
                tmp += solveText(child, nowurl) + '\n\n'
            }
            n.textContent += tmp.split('\n').map((x) => `> ${x}`).join('\n')
        }
        else if (tagName === 'a') {
            const url = new URL(n.getAttribute('href') || '', nowurl)
            n.textContent = `[${n.textContent || ''}](${url})\n\n`
        }
        else if (tagName === 'br') { }
        else if (tagName === 'ruby') {
            n.textContent = n.innerHTML
        }
        else if (tagName === 'p' || tagName === 'span') {
            n.textContent = solveText(n, nowurl)
        }
        else if (tagName === 'div') {
            let tmp = ''
            for (const child of n.children) {
                tmp += solveText(child, nowurl) + '\n\n'
            }
            n.textContent = tmp
        }
        else {
            n.textContent = n.outerHTML
        }
    }
    return (node.textContent || '').trim()
}

export function solvePart(node: Element, nowurl: string, isIO = false) {
    let ret = ''
    for (const section of node.querySelectorAll('section')) {
        const nodes = section.children
        let start = 0
        if (/^Sample Input \d+?$/.test(nodes[0].textContent as string)
            || /^Sample Output \d+?$/.test(nodes[0].textContent as string)
            || /^入力例 \d+?$/.test(nodes[0].textContent as string)
            || /^出力例 \d+?$/.test(nodes[0].textContent as string)) {
            const tmp = nodes[0].textContent?.split(' ') as string[]
            let type, id
            if (tmp[0] === 'Sample') type = tmp[1].toLowerCase(), id = tmp[2]
            else type = tmp[0] === '入力例' ? 'input' : 'output', id = tmp[1]
            if (nodes[1].tagName.toLowerCase() !== 'pre')
                throw new Error(`Found unknown element in ${nowurl} (5)`)
            start = 2
            ret += `\`\`\`${type}${id}\n${nodes[1].textContent?.trim()}\n\`\`\`\n\n`
        }
        for (let id = start; id < nodes.length; id++) {
            function solveNode(node: Element) {
                let ret = ''
                const tagName = node.tagName.toLowerCase()
                if (tagName === 'h3') {
                    ret += `## ${solveText(node, nowurl)}\n\n`
                }
                else if (tagName === 'h4') {
                    ret += `### ${solveText(node, nowurl)}\n\n`
                }
                else if (tagName === 'h5') {
                    ret += `### ${solveText(node, nowurl)}\n\n`
                }
                else if (tagName === 'p') {
                    ret += solveText(node, nowurl) + '\n\n'
                }
                else if (tagName === 'pre') {
                    if (isIO) {
                        ret += solveText(node, nowurl).split('\n').map(x => '> ' + x).join('\n> \n') + '\n\n'
                    }
                    else {
                        ret += `\`\`\`\n${node.textContent?.trim()}\n\`\`\`\n\n`
                    }
                }
                else if (tagName === 'ul') {
                    for (const li of node.querySelectorAll('li')) {
                        ret += `- ${solveText(li, nowurl).split('\n').map((x) => `  ${x}`).join('\n').trim()}\n`
                    }
                    ret += '\n'
                }
                else if (tagName === 'li') {
                    ret += `- ${solveText(node, nowurl)}\n\n`
                }
                else if (tagName === 'ol') {
                    let i = 0
                    for (const li of node.children) {
                        if (li.tagName.toLowerCase() !== 'li')
                            throw new Error(`Found unknown element in ${nowurl} (8)`)
                        i++
                        ret += `${i}. ${solveText(li, nowurl).split('\n').map((x) => `   ${x}`).join('\n').trim()}\n`
                    }
                    ret += '\n'
                }
                else if (tagName === 'div') {
                    for (const child of node.children) {
                        if (child.tagName.toLowerCase() === 'var')
                            ret += `$$${child.textContent}$$\n\n`
                        else ret += solveNode(child)
                    }
                }
                else if (tagName === 'img') {
                    const url = new URL(node.getAttribute('src') || '', nowurl)
                    ret += `![${node.getAttribute('alt') || ''}](${url})\n\n`
                }
                else if (tagName === 'a') {
                    const url = new URL(node.getAttribute('href') || '', nowurl)
                    ret += `[${node.textContent || ''}](${url})\n\n`
                }
                else if (tagName === 'blockquote') {
                    let tmp = ''
                    for (const child of node.children) {
                        tmp += solveNode(child)
                    }
                    ret += tmp.split('\n').map((x) => `> ${x}`).join('\n')
                }
                else if (tagName === 'center') {
                    for (const child of node.children) {
                        ret += solveNode(child)
                    }
                }
                else if (tagName === 'var') {
                    ret += `$$${node.textContent}$$`
                }
                else if (tagName === 'b') {
                    ret += `**${node.textContent}**`
                }
                else if (tagName === 'code') {
                    ret += `\`${node.textContent}\``
                }
                else if (tagName === 'span') {
                    if (node.textContent !== 'Copy')
                        ret += solveText(node, nowurl)
                }
                else if (tagName === 'table') {
                    let flag = true
                    for (const tr of node.querySelectorAll('tbody > tr, thead > tr')) {
                        let tmp = ''
                        for (const td of tr.querySelectorAll('th, td')) {
                            ret += `| ${solveText(td, nowurl)} `
                            tmp += '| :-: '
                        }
                        ret += '|\n'
                        if (flag) {
                            ret += tmp + '|\n'
                            flag = false
                        }
                    }
                    ret += '\n'
                }
                else if (tagName === 'details') {
                    let tmp = ''
                    try {
                        tmp += '<details>'
                        for (const child of node.children) {
                            if (child.tagName.toLowerCase() === 'summary') {
                                tmp += '<summary>' + solveText(child, nowurl) + '</summary>\n\n'
                            }
                            else {
                                tmp += solveNode(child)
                            }
                        }
                        tmp += '\n\n</details>'
                        ret += tmp
                    }
                    catch (e) {
                        ret += node.outerHTML
                    }
                }
                else if (tagName === 'blockquote') {
                    let tmp = ''
                    for (const child of node.children) {
                        tmp += solveText(child, nowurl) + '\n\n'
                    }
                    ret += tmp.split('\n').map((x) => `> ${x}`).join('\n')
                }
                else if (tagName === 'style') { }
                else if (tagName === 'br') { }
                else if (tagName === 'hr') {
                    ret += `---\n\n`
                }
                else if (tagName === 'figure') {
                    const url = new URL(node.querySelector('img')?.getAttribute('src') || '', nowurl)
                    ret += `![${node.querySelector('img')?.getAttribute('alt') || node.querySelector('figcaption')?.textContent}](${url})\n\n`
                }
                else {
                    console.log(node.outerHTML)
                    console.log(node.parentElement?.outerHTML)
                    ret += node.outerHTML
                }
                return ret
            }
            ret += solveNode(nodes[id])
        }
    }
    return ret.trim()
}

export default function solveStatement(statement: Element, nowurl: string) {
    let ret = ''
    for (const node of statement.children) {
        const tagName = node.tagName.toLowerCase()
        if (tagName === 'p') {
            ret += solveText(node, nowurl) + '\n\n'
        }
        else if (tagName === 'section') {
            node.innerHTML = node.outerHTML
            ret += solvePart(node, nowurl) + '\n\n'
        }
        else if (tagName === 'div') {
            if (node.getAttribute('class') === 'part')
                ret += solvePart(node, nowurl) + '\n\n'
            else {
                for (const part of node.children) {
                    if (part.tagName.toLowerCase() === 'section')
                        part.innerHTML = `<section>${part.innerHTML}</section>`
                    ret += solvePart(part, nowurl, true) + '\n\n'
                }
            }
        }
        else if (tagName === 'hr') { }
        else if (tagName === 'script') { }
        else {
            ret += node.outerHTML
            // throw new Error(`Found unknown element in ${nowurl} (1)`)
        }
    }
    return ret.trim()
}