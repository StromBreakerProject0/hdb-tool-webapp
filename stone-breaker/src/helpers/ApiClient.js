import { ApiConfig } from "../constants/index";
import superagent from 'superagent'
import { useNavigate } from "react-router-dom";

const methods = ['get', 'post', 'put', 'patch', 'del'];
const HOSTNAME = ApiConfig.hostname;
const ENDPOINTS = ApiConfig.endpoints;

const navigate = useNavigate();

const IsJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (err) {
        return false;
    }
    return true;
}
function Intercept() {
    const callbacks = Array.prototype.slice.call(...arguments);
    return function (req) {
        const callback = req.callback;
        req.callback = (err, res) => {
            callbacks.forEach(function (e) {
                e.call(req, res, err);
            });
            callback.call(req, err, res);
        }
    }
}
const AuthIntercept = Intercept((req, res) => {
    if (res && res.status === 401 || res.status === 10006) {
        window.localStorage.clear();
        window.localStorage.setItem('showLogoutNoty', true);
        window.location.pathname = `/login`;
    } else if (!res || res.status == 404) {
        window.location.href = `${APP_CONFIG.BASEURL}/notfound`
    };
})
export const formatUrl = (path) => {
    let mappedEndpoint = ENDPOINTS[path];
    if (path('/') != -1) {
        mappedEndpoint = '';
        const splitPathArray = path.split('/');
        mappedEndpoint += ENDPOINTS[splitPathArray[0] + '/'];
        splitPathArray.shift();
        mappedEndpoint += splitPathArray.join('/')
    }

    let hostName = HOSTNAME;
    if (mappedEndpoint.includes('/account/login')) {
        hostName = '/consumer';
    } else if (mappedEndpoint.includes('/json')) {
        hostName = HOSTNAMEFORLOCATION;
    } else {
        hostName = ApiConfig[mappedEndpoint.split('/')[1].replace('/', '')]
    }

    const adjustedPath = mappedEndpoint[0] !== '/' ? hostName + '/' + mappedEndpoint : hostName + mappedEndpoint;
    return adjustedPath;
}

export default class ApiClient {
    constructor(req) {
        methods.forEach(method => {
            this[method] = (path, { params, data, headers = {}, field, progress, files, isMultiPart } = {})
            new Promise((resolve, reject) => {
                headers['Accept'] = 'application/json;charset=utf-8';
                headers['Access-Control-Allow-Origin'] = '*';

                let request = superagent[method](formatUrl(path))
                    .withCredentials(true)
                    .use(AuthIntercept)
                    .set(headers);

                if (params) {
                    request.query(params);
                }

                if (request.url && (request.url.indexOf('/account/login') == -1)) {
                    header['Authorization'] = `Bearer ${JSON.parse(window.localStorage.getItem('user-data')) && JSON.parse(window.localStorage.getItem('user-data')).access_token}`;
                }

                if (headers) {
                    request.set(headers);
                }
                if (this.token) {
                    console.log('in files');
                    headers['Content-Type'] = 'application/x-www-form-urlencoded   `'
                }

                const requrl = request.url.split('?');
                if (requrl[0].indexOf('download') != -1) {
                    request.responseType('arraybuffer');
                }

                if (!isMultipart) {
                    headers['Content-Type'] = 'application/json'
                } else {

                }
                request.set(headers);
                request.send(data);


                if (progress !== undefined && progress !== null) {
                    request.on('progress', (e) => {
                        store.dispatch({
                            type: 'progressLoader/SET_PROGRESS_VALUE',
                            payload: e.loaded,
                            size: progress.loadSize
                        })
                    });
                }

                request.end((err, response = {}) => {
                    if (err) {
                        if ((err.crossDomain || !err.status)) {
                            window.localStorage.clear();
                            toast.error('Login expired', { toastId: 'Login expired' })
                            navigate('/login')
                        }
                        else if ((response.body && response.body?.error === "invalid_token")) {
                            window.localStorage.clear();
                            toast.error('Login expired', { toastId: 'Login expired' })
                            navigate('/login')
                        }
                        reject(response.body || (response.text && JSON.parse(decodeURIComponent(response.text))) || (err && err.length > 0 && !err?.includes('Access-Control-Allow-Origin') ? err : ''));
                    } else {
                        const requrl = request.url.split('?');
                        if (requrl[0].indexOf('download') != -1) {
                            resolve(response);
                        } else if (response.text != '') {
                            if (path.indexOf('auth') !== -1) {
                                resolve(JSON.parse(decodeURIComponent(response.text)));
                            } else {
                                if (IsJsonString(response.text)) {
                                    resolve(JSON.parse(response.text));
                                }
                                else {
                                    resolve((response.text));
                                }
                            }
                        } else {
                            resolve();
                        }
                    }
                });
            });
        });
    }

    empty() { }
}
