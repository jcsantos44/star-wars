import axios, { AxiosResponse } from 'axios';

export const request = {
    fullUrl: <string>'',
    urls: <string[]>[],
    baseUrl: <string>'https://swapi.dev/api',
    endpoint: <string>'people',
    id: <number>0,
    page: <number>1,
    next: <string>'',
    previous: <string>'',
    results: <any>[],
    request(url: string) {
        if (!url) {
            throw Error('Please provide an url');
        }
        return axios.get(`${url}`);
    },
    requestPaginated() {
        return axios.get(`${this.baseUrl}/${this.endpoint}/?page=${this.page}`);
    },
    requestById(id: number) {
        if (!id) {
            throw Error('Please provide an id');
        }
        return axios.get(`${this.baseUrl}/${this.endpoint}/${id}`);
    },
    batchRequest(urls: string[]) {
        const requests: any[] = [];
        urls.forEach((url) => {
            const r = this.request(url);
            requests.push(r);
        });
        return axios.all(requests);
    },
    getResults(url?: string, urls?: string[], id?: number, page?: number) {
        if (url) {
            this.fullUrl = url;
            return this.request(url).then((response) => {
                // eslint-disable-next-line prefer-destructuring
                const data: AxiosResponse['data'] = response.data;
                this.results = data;
            });
        }
        if (urls) {
            this.urls = urls;
            return this.batchRequest(urls).then((response: any[]) => {
                const results: any[] = [];
                response.forEach((r: any) => {
                    results.push(r.data);
                });
                this.results = results;
            });
        }
        if (id) {
            this.id = id;
            return this.requestById(id).then((response) => {
                // eslint-disable-next-line prefer-destructuring
                const data: AxiosResponse['data'] = response.data;
                this.results = data;
            });
        }
        if (page) {
            this.page = page;
        }
        return this.requestPaginated().then((response) => {
            // eslint-disable-next-line prefer-destructuring
            const data: AxiosResponse['data'] = response.data;
            this.results = data;
            this.next = data.next;
            this.previous = data.previous;
        });
    },
    async getAllResults() {
        this.page = 1;
        while (this.next !== null) {
            // eslint-disable-next-line no-await-in-loop
            await this.getResults(undefined, undefined, undefined);
            this.page += 1;
        }
    },
};
export default request;
