import superagent from 'superagent'
import { JSDOM } from 'jsdom'
import crypto from 'node:crypto'

const UA = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'AppleWebKit/537.36 (KHTML, like Gecko)',
    'Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76',
].join(' ')

export default class AtCoder {
    public cookie = ''
    constructor(
        public endpoint = 'https://atcoder.jp',
    ) { }

    get(url: string) {
        console.debug(`GET ${url}`)
        return superagent.get(this.endpoint + url)
            .set('Cookie', this.cookie)
            .set('User-Agent', UA)
    }
    post(url: string) {
        console.debug(`POST ${url}`)
        return superagent.post(this.endpoint + url)
            .set('Cookie', this.cookie)
            .set('User-Agent', UA)
    }

    async isLoggedIn() {
        const response = await this.get('/settings')
        console.log(response.redirect, response.redirects)
    }

    async getCsrfToken() {
        const response = await this.get('/')
        this.cookie = response.headers['set-cookie']
        console.log('Updated cookie:', this.cookie)
        const { window: { document } } = new JSDOM(response.text)
        for (const node of document.querySelectorAll('script')) {
            const tmp = node.innerHTML.split('var csrfToken = "')
            if (tmp.length === 2) return tmp[1].split('"')[0]
        }
        throw new Error('No csrf token found')
    }

    async login(username: string, password: string) {
        const csrf_token = await this.getCsrfToken()
        try {
            const response = await this.post('/login')
                .type('form')
                .send({ username, password, csrf_token })
            this.cookie = response.headers['set-cookie']
            console.log('Updated cookie:', this.cookie)
            console.log(response.redirect, response.redirects)
        }
        catch (e) { }
        return await this.isLoggedIn()
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

    async getSubmissions(contestId: string, problemId: string) {
        console.log(`Getting problem ${problemId}`)
        const { text } = await this.get(`/contests/${contestId}/submissions`)
            .query({
                'f.Task': problemId,
                'f.Status': 'AC',
            })
        const { window: { document } } = new JSDOM(text)
        console.log(text)
        // const tasks: string[] = []
        // for (const node of document.querySelectorAll('.table-responsive > table > tbody > tr')) {
        //     tasks.push((node.querySelector('a')?.getAttribute('href') as string).split('/')[4])
        // }
        // return tasks
    }
}
