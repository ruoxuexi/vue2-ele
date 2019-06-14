import axios from 'axios';
axios.defaults.withCredentials = true;

const DOMAIN = process.env.DOMAIN;
// const AUTH = process.env.AUTH_SERVICES;

function base (method, url, params, success, failure, config) {
    method = method.toUpperCase();
    let configuration = {
        method: method,
        url: url,
        data: params,
        baseURL: DOMAIN,
        timeout: 30000
    };
    if (method === 'GET') {
        configuration.data = true;
    }
    if (method === 'GET' && params !== null) {
        configuration.params = params;
    }
    if (config && Object.keys(config).length > 0) {
        for (let i in config) {
            if (config.hasOwnProperty(i)) {
                configuration[i] = config[i];
            }
        }
    }
    axios(configuration).then((res) => {
        if (res.data['ret'] && res.data['ret']['retCode'] && res.data['ret']['retCode'].toString() === 'A001') {
            setTimeout(() => {
                // window.location.href = AUTH;// 返回到登录页
            }, 2500);
        } else {
            if ((typeof success).toUpperCase() === 'FUNCTION') success(res.data);
        }
    }).catch((err) => {
        if ((typeof failure).toUpperCase() === 'FUNCTION') failure(err);
    });
}

export default {

    get: function (url, params, success, failure, config) {
        return base('GET', url, params, success, failure, config);
    },

    post: function (url, params, success, failure, config) {
        return base('POST', url, params, success, failure, config);
    },

    put: function (url, params, success, failure, config) {
        return base('PUT', url, params, success, failure, config);
    },

    delete: function (url, params, success, failure, config) {
        return base('DELETE', url, params, success, failure, config);
    },

    patch: function (url, params, success, failure, config) {
        return base('PATCH', url, params, success, failure, config);
    },

    custom: function (method, url, params, success, failure, config) {
        return base(method, url, params, success, failure, config);
    }
};
