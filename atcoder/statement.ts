export function solveText(node: Element, nowurl: string) {
    for (const n of node.children) {
        const tagName = n.tagName.toLowerCase()
        if (tagName === 'var') {
            const content = (n.textContent?.trim() as string)
                .replace(/[≦≤]/g, ' \\leq ').replace(/[≧≥]/g, ' \\geq ').replace(/≠/g, ' \\neq ')
                .replace(/…/g, ' \\cdots ')
                .replace(/→/g, ' \\to ')
                .replace(/[～〜]/g, ' \\sim ')
                .replace(/∠/g, ' \\angle ').replace(/°/g, '^\\circ ')
                .replace(/±/g, ' \\pm ').replace(/−/g, '-')
                .replace(/×/g, ' \\times ').replace(/⁄/g, '/').replace(/÷/g, ' \\div ').replace(/％/g, ' \\% ')
                .replace(/  /g, ' ').trim()
            if (!/^[a-zA-Z0-9 \,\\\._<>=\(\)\[\]\{\}\^\+\-\*\/\|\:\'!\?%]*?$/.test(content)
                && ![
                    '(a\' の前半 N 要素の総和) - (a\' の後半 N 要素の総和)'
                ].includes(content)) {
                console.log(content)
                throw new Error(`Found unknown element in ${nowurl} (10)`)
            }
            n.innerHTML = `$${content}$`
        }
        else if (tagName === 'code') {
            n.innerHTML = `\`${n.innerHTML?.trim()}\``
        }
        else if (tagName === 'em') {
            n.innerHTML = `*${n.innerHTML?.trim()}*`
        }
        else if (tagName === 'strong' || tagName === 'b') {
            n.innerHTML = `**${n.innerHTML?.trim()}**`
        }
        else if (tagName === 'ul') {
            n.innerHTML = `**${n.innerHTML?.trim()}**`
            let ret = ''
            for (const li of n.children) {
                if (li.tagName.toLowerCase() !== 'li')
                    throw new Error(`Found unknown element in ${nowurl} (11)`)
                ret += `- ${solveText(li, nowurl)}\n`
            }
            n.innerHTML = ret
        }
        else if (tagName === 'img') {
            const url = new URL(n.getAttribute('src') || '', nowurl)
            n.textContent = `![${n.getAttribute('alt') || ''}](${url})\n\n`
        }
        else if (tagName === 'br') { }
        else if (tagName === 'p') {
            n.textContent = solveText(n, nowurl)
        }
        else {
            console.log(n.outerHTML)
            throw new Error(`Found unknown element in ${nowurl} (9)`)
        }
    }
    return (node.textContent || '').trim()
}

export function solvePart(node: Element, nowurl: string, isIO = false) {
    let ret = ''
    for (const section of node.children) {
        if (section.tagName.toLowerCase() !== 'section')
            throw new Error(`Found unknown element in ${nowurl} (3)`)
        const nodes = section.children
        if (nodes[0].tagName.toLowerCase() !== 'h3')
            throw new Error(`Found unknown element in ${nowurl} (4)`)
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
                const tagName = node.tagName.toLowerCase()
                if (tagName === 'h3') {
                    ret += `## ${solveText(node, nowurl)}\n\n`
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
                    for (const li of node.children) {
                        if (li.tagName.toLowerCase() !== 'li')
                            throw new Error(`Found unknown element in ${nowurl} (8)`)
                        ret += `- ${solveText(li, nowurl).split('\n').map((x) => `  ${x}`).join('\n').trim()}\n`
                    }
                    ret += '\n'
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
                        solveNode(child)
                    }
                }
                else if (tagName === 'img') {
                    const url = new URL(node.getAttribute('src') || '', nowurl)
                    ret += `![${node.getAttribute('alt') || ''}](${url})\n\n`
                }
                else if (tagName === 'details') {
                    ret += '<details>'
                    for (const child of node.children) {
                        if (child.tagName.toLowerCase() === 'summary') {
                            ret += child.outerHTML.trim() + '\n\n'
                        }
                        else {
                            solveNode(child)
                        }
                    }
                    ret += '\n\n</details>'
                }
                else {
                    console.log(node.outerHTML)
                    throw new Error(`Found unknown element in ${nowurl} (6)`)
                }
            }
            solveNode(nodes[id])
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
        else if (tagName === 'div') {
            if (node.getAttribute('class') === 'part')
                ret += solvePart(node, nowurl) + '\n\n'
            else {
                for (const part of node.children) {
                    if (part.tagName.toLowerCase() !== 'div' || part.getAttribute('class') !== 'part')
                        throw new Error(`Found unknown element in ${nowurl} (2)`)
                    ret += solvePart(part, nowurl, true) + '\n\n'
                }
            }
        }
        else if (tagName === 'hr') { }
        else {
            throw new Error(`Found unknown element in ${nowurl} (1)`)
        }
    }
    return ret.trim()
}