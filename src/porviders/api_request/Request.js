import VueCookies from 'vue-cookies';
import axios from "./axios";

const GET = 'GET';
const PUT = 'PUT';
const POST = 'POST';
const DELETE = 'DELETE';

export default class Request {
    constructor(endpoint = '') {
        this.endpoint = endpoint
    }

    post(url, payload) {
        return this.performRequest(POST, url, payload)
    }

    get(url, payload = {}) {
        return this.performRequest(GET, url, payload)
    }

    put(url, payload) {
        return this.performRequest(PUT, url, payload)
    }


    delete(url, payload = {}) {
        return this.performRequest(DELETE, url, payload)
    }

    performRequest(method, url, payload) {
        const tokenType = VueCookies.get('token_type') ?? 'Bearer'
        const token = VueCookies.get('token')
        const options = {
            url: this.endpoint + url,
            method,
            [method == GET ? 'params' : 'data' ]: payload,
            headers: {
                'Authorization': tokenType + ' ' + token
            }
        }

        return axios(options)
    }
}