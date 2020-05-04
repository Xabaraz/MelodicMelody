import axios from "axios";

const config = require('../../../config/default.js');
const urlConst = config.urlConst;

export default class ApiService {
    static sendRequest(options) {
        if (!options.body) {
            return axios[options.method](`${urlConst}${options.url}`)
                .catch((err) => {
                    console.log('[HTTP Error] ', err);
                })
        }
        const response = axios[options.method](`${urlConst}${options.url}`, options.body)
            .catch((err) => {
                console.log('[HTTP Error] ', err);
            })

        return response;
    }
}
