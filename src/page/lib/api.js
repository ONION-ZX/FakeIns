import axios from 'axios';
const APP_KEY = '11bc0f4a349b9ecda1c6daa86735da1467e5d2e66995fc99a1798e62fce3945a';
const BASE_API = 'http://mock.biaoyansu.com/api/1/';

function sign(app_key, timestamp) {
    return btoa(app_key + timestamp);
}

export default function api(url, params) {
    let timestamp = (new Date).getTime();
    let signature = sign(APP_KEY, timestamp);

    let opt = {
        headers: {
            'BIAO-MOCK-APP-KEY': APP_KEY,
            'BIAO-MOCK-TIMESTAMP': timestamp,
            'BIAO-MOCK-SIGNATURE': signature,
        },
    };

    url = BASE_API + url;
    return axios
        .post(url, params, opt)
        .then(r => {
            return r.data;
        });
}
