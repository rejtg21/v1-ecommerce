import axios from 'axios';
import Prompt from '../prompt';

function AxiosConfig() {
    if (!(this instanceof AxiosConfig)) return new AxiosConfig();

    this.axios = axios;

    this.setDefaultHeaders();
    this.setInterceptor();

    return this.axios;
}

AxiosConfig.prototype = {
    setDefaultHeaders,
    setInterceptor
}

function setDefaultHeaders() {
    // for laravel to identify it as ajax we need to declare XMLHttpRequest
    this.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    
    // if we have specified meta header csrf so that we don't need to declare it everytime we create a request
    let token = document.head.querySelector('meta[name="csrf-token"]');

    token ? axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
     : console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

function setInterceptor() {
    this.axios.interceptors.response.use((response) => {
        return response;
    }, _setErrorInterceptor);
}

function _setErrorInterceptor(error) {
    console.log('Error: ', error);
    // standard handling of error
    _handleErrorMessage(error);
    // still return the error for further manipulation
    return Promise.reject(error);
}

function _handleErrorMessage(error) {
    if (error.response)
        return showError(error.response.data);
    else if (error.request)
        return showError(error.request)

    // else
    return showError(error.message);
}

function showError(message) {
    Prompt.error(message);
}

export default AxiosConfig();