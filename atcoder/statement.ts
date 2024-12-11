import { } from 'jsdom'

export function convertHtmlToMarkdown(html: Element, endpoint: string): string {
    for (const ele of html.querySelectorAll('var')) {
        const math = (ele.textContent as string).trim()
            .replace(/ /g, ' ')
            .replace(/α/g, ' \\alpha ').replace(/，/g, ',')
            .replace(/[≦≤]/g, ' \\leq ').replace(/[≧≥]/g, ' \\geq ').replace(/≠/g, ' \\neq ')
            .replace(/＜</g, ' < ').replace(/>/g, ' > ')
            .replace(/（/g, '(').replace(/）/g, ')')
            .replace(/…/g, ' \\cdots ')
            .replace(/→/g, ' \\to ').replace(/←/g, ' \\gets ')
            .replace(/[~～〜]/g, ' \\sim ')
            .replace(/Σ/g, ' \\sum ')
            .replace(/∠/g, ' \\angle ').replace(/°/g, '^\\circ ')
            .replace(/＋/g, ' + ').replace(/±/g, ' \\pm ').replace(/[−－ー]/g, ' - ').replace(/⊕/g, ' \\oplus ')
            .replace(/×/g, ' \\times ').replace(/⁄/g, ' / ').replace(/÷/g, ' \\div ').replace(/％/g, ' \\% ')
            .replace(/＝/g, ' = ').replace(/≡/g, ' \\equiv ')
            .replace(/μ/g, ' \\mu ').replace(/σ/g, ' \\sigma ')
            .replace(/ {2,}/g, ' ').trim()
        if (!/^[\x00-\xff]*?$/.test(math) || math.includes('\n')) console.error('Unknown math text:', math.length > 100 ? math.slice(0, 100) + '...' : math)
        ele.replaceWith(`$${math}$`)
    }
    const url = (p: string) => new URL(p, endpoint).toString()
    for (const ele of html.querySelectorAll('img')) ele.replaceWith(`![${ele.getAttribute('alt')?.trim() || ''}](${url(ele.getAttribute('src') || '')})`)
    for (const ele of html.querySelectorAll('code')) ele.replaceWith(`\`${ele.innerHTML}\``)
    for (const ele of html.querySelectorAll('span.label')) ele.replaceWith(ele.textContent || '')
    for (const ele of html.querySelectorAll('i,em')) ele.replaceWith(`*${ele.innerHTML}*`)
    for (const ele of html.querySelectorAll('b,strong')) ele.replaceWith(`**${ele.innerHTML}**`)
    for (const ele of html.querySelectorAll('a')) ele.replaceWith(ele.innerHTML.trim() ? `[${ele.innerHTML.trim()}](${url(ele.getAttribute('href') || '')})` : '')
    for (const ele of html.querySelectorAll('ul,ol')) ele.setAttribute('data-list', '1')
    for (const ele of html.querySelectorAll('ul,ol')) {
        for (const e of ele.querySelectorAll('ul[data-list],ol[data-list]')) e.removeAttribute('data-list')
    }
    for (const ele of html.querySelectorAll('ul[data-list],ol[data-list]')) {
        const solve = (e: Element, p = ''): string => {
            const ordered = e.tagName.toLowerCase() === 'ol'
            let result = '', prefix = p + (ordered ? '{}. ' : '- '), i = 0
            for (const x of Array.from(e.children)) {
                i++, result += prefix.replace(/\{\}/g, i.toString())
                if (x.tagName.toLowerCase() === 'li') {
                    for (const y of x.children) {
                        if (['ol', 'ul'].includes(y.tagName.toLowerCase())) y.replaceWith(solve(y, prefix + (ordered ? '   ' : '  ')))
                    }
                    result += x.innerHTML.trim()
                }
                else if (['ol', 'ul'].includes(x.tagName.toLowerCase())) {
                    result += solve(x, prefix + (ordered ? '   ' : '  '))
                }
                else throw new Error(`Unknown list type: ${x.outerHTML}`)
                result += '\n'
            }
            return result
        }
        const md = solve(ele)
        ele.replaceWith('\n\n' + md + '\n\n')
    }
    for (const ele of html.querySelectorAll('p')) ele.replaceWith(`\n\n${ele.innerHTML}\n\n`)
    for (const ele of html.querySelectorAll('hr')) ele.remove()
    const replacePart = (ele: Element, ioStyle = false) => {
        const title = ele.querySelector('h3')?.textContent as string
        const check = (...matches: Array<RegExp>) => matches.filter((x) => x.test(title)).length > 0
        const sampleType = check(/^Sample Input \d+?$/, /^入力例 \d+?$/)
            ? 'input'
            : check(/^Sample Output \d+?$/, /^出力例 \d+?$/) ? 'output' : 'not'
        for (const e of ele.querySelectorAll('pre')) {
            if (ioStyle) e.replaceWith((e.textContent || '').trim().split('\n').map((line) => '> ' + line).join('\n> \n'))
            else {
                const lang = sampleType === 'not' ? 'plain' : sampleType + (/ (\d+?)$/.exec(title) as RegExpExecArray)[1]
                const text = (e.textContent || '').trim()
                e.replaceWith(`\`\`\`${lang}\n${text}\n\`\`\``)
            }
        }
        for (const e of ele.querySelectorAll('h3,h4,h5')) {
            if (sampleType !== 'not') e.remove()
            else {
                const level = +e.tagName.toLowerCase().replace(/^h/, '')
                e.replaceWith(`\n\n${level === 3 ? '##' : '###'} ${e.innerHTML}\n\n`)
            }
        }
        for (const e of ele.querySelectorAll('section')) e.replaceWith(e.textContent || '')
        ele.replaceWith(ele.textContent || '')
    }
    for (const ele of html.querySelectorAll('div.io-style')) {
        for (const e of ele.querySelectorAll('div.part')) replacePart(e, true)
        ele.replaceWith(ele.textContent || '')
    }
    for (const ele of html.querySelectorAll('div.part')) replacePart(ele)
    for (const ele of html.querySelectorAll('ul,ol')) {
        // console.info(Array.from(ele.childNodes))
        const tree = (e: Element): string => `${e.tagName}.${e.classList.toString()} { ${Array.from(e.childNodes).map((c) => c.nodeName === '#text' ? '[text]' : tree(c as Element)).join(' ')} }`
        // console.info(tree(ele))
    }
    return (html.textContent || '').replace(/\n{2,}/g, '\n\n').trim()
}
