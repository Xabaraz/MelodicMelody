export default class RequestOptions {
    constructor(method, url = "", body) {
        this.method = method;
        this.url = url;
        this.body = body || undefined;
    }
}
