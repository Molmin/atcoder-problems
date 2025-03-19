import superagent from 'superagent'
import { JSDOM } from 'jsdom'

const UA = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'AppleWebKit/537.36 (KHTML, like Gecko)',
    'Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76',
].join(' ')

export default class AtCoder {
    public agent = superagent.agent()
    constructor(
        public endpoint = 'https://atcoder.jp',
    ) { }

    get(url: string) {
        if (process.env.DEBUG) console.debug(`GET ${url}`)
        return this.agent.get(this.endpoint + url)
            .set('User-Agent', UA).retry(60)
    }
    post(url: string) {
        if (process.env.DEBUG) console.debug(`POST ${url}`)
        return this.agent.post(this.endpoint + url)
            .set('User-Agent', UA)
    }

    async isLoggedIn() {
        const response = await this.get('/settings')
        return response.redirects.length === 0
    }

    async getCsrfToken() {
        const response = await this.get('/login')
        const { window: { document } } = new JSDOM(response.text)
        for (const node of document.querySelectorAll('script')) {
            const tmp = node.innerHTML.split('var csrfToken = "')
            if (tmp.length === 2) return tmp[1].split('"')[0]
        }
        throw new Error('No csrf token found')
    }

    async login(username: string, password: string) {
        const csrf_token = await this.getCsrfToken()
        console.log('Csrf token:', csrf_token)
        try {
            const response = await this.post('/login')
                .type('form')
                .send({ username, password, csrf_token })
        }
        catch (e) { }
        return await this.isLoggedIn()
    }
    loginBySession(session: string) {
        this.agent.set('Cookie', 'REVEL_SESSION=' + session)
        return this.isLoggedIn()
    }

    async getContestList(page = 1) {
        console.log(`Getting contest list page ${page}`)
        const { text } = await this.get('/contests/archive').query({ page })
        const { window: { document } } = new JSDOM(text)
        const contests: string[] = []
        for (const node of document.querySelectorAll('.table-responsive > table > tbody > tr')) {
            const url = node.querySelector('td:nth-child(2) > a')?.getAttribute('href') as string
            contests.push(url.split('/contests/')[1])
        }
        return contests
    }

    async getContestProblems(contestId: string) {
        console.log(`Getting problems of ${contestId}`)
        const { text } = await this.get(`/contests/${contestId}/tasks`)
        const { window: { document } } = new JSDOM(text)
        const tasks: string[] = []
        for (const node of document.querySelectorAll('.table-responsive > table > tbody > tr')) {
            tasks.push((node.querySelector('a')?.getAttribute('href') as string).split('/')[4])
        }
        return tasks
    }

    async getProblemHTML(contestId: string, problemId: string) {
        const { text } = await this.get(`/contests/${contestId}/tasks/${problemId}`)
        const { window: { document } } = new JSDOM(text)
        const mainNode = document.querySelector('#main-container > div.row:first-child > .col-sm-12:nth-child(2)') as Element
        const title = document.querySelector('title')?.textContent?.split(' - ').splice(1).join(' - ') as string
        const [timeLimit, memoryLimit] = (mainNode.querySelector('p')?.textContent as string).trim().split(' / ')
        let time = timeLimit.split('Time Limit: ')[1]
        let memory = memoryLimit.split('Memory Limit: ')[1]
        if (time === '0 msec') time = '0 sec'
        if (!/^[\d\.]+? sec$/.test(time) || !/^[\d\.]+? MB$/.test(memory))
            throw new Error('Incorrect format of limits found')
        const langs = document.querySelectorAll('#task-statement > span.lang > span')
        const html: Record<string, string> = {}
        for (const lang of langs) {
            const langId = lang.getAttribute('class')?.split('-')[1] as string
            html[langId] = lang.outerHTML
        }
        return {
            time: +time.split(' ')[0],
            memory: +memory.split(' ')[0],
            title,
            html,
            endpoint: new URL(`/contests/${contestId}/tasks/${problemId}`, this.endpoint).toString(),
        }
    }

    async getSubmissions(contestId: string, problemId: string) {
        console.log(`Getting problem ${problemId}`)
        const { text } = await this.get(`/contests/${contestId}/submissions`)
            .query({
                'f.Task': problemId,
                'f.Status': 'AC',
                'f.LanguageName': 'C++',
            })
        const { window: { document } } = new JSDOM(text)
        const submissions: string[] = []
        for (const node of document.querySelectorAll('.table-responsive > table > tbody > tr')) {
            submissions.push((node.querySelector('td:nth-child(10) > a')?.getAttribute('href') as string).split('/')[4])
        }
        return submissions
    }

    async getCode(contestId: string, submissionId: string) {
        console.log(`Getting submission ${submissionId}`)
        const { text } = await this.get(`/contests/${contestId}/submissions/${submissionId}`)
        const { window: { document } } = new JSDOM(text)
        return document.querySelector('#submission-code')?.textContent as string
    }
    async getTestdataFilenames(contestId: string, submissionId: string) {
        console.log(`Getting submission ${submissionId}`)
        const { text } = await this.get(`/contests/${contestId}/submissions/${submissionId}`)
        const { window: { document } } = new JSDOM(text)
        const table = document.querySelector('div.panel.panel-default > table.table.table-bordered.table-striped.th-center') as Element
        const filenames = Array.from(table.querySelectorAll('tbody > tr'))
            .flatMap((e) => e.querySelector('td:nth-child(2)')?.textContent?.split(', ') || [])
        return Array.from(new Set(filenames)).filter((x) => x)
    }
}
