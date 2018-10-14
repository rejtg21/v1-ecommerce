'use strict';

import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

class Prompt {
    constructor() {
        this.translation = window.translations.general.prompt;
    }

    success(message, options) {    
        let defaultOptions = {
            type: 'success',
            title: this.translation.success.title,
            text: message || this.translation.success.text,
            showCancelButton: false,
            confirmButtonText: this.translation.button.confirm,
            confirmButtonColor: '#59c9e7'
        };
        
        // override default options
        return this.custom(defaultOptions, options)
    }

    error(message, options) {
    
        let defaultOptions = {
            type: 'error',
            title: this.translation.fail.title,
            text: message || this.translation.fail.text,
            showCancelButton: false,
            confirmButtonText: this.translation.button.confirm,
            confirmButtonColor: '#59c9e7'
        };
    
        // override default options
        return this.custom(defaultOptions, options)
    }

    warning(message, options) {

        let defaultOptions = {
            type: 'warning',
            title: this.translation.warning.title,
            text: message ||  this.translation.warning.text,
            showCancelButton: true,
            confirmButtonText: this.translation.button.confirm,
            confirmButtonColor: '#59c9e7'
        };

        return this.custom(defaultOptions, options)
    }

    show(message, options) {
        let promptText = message;
        if(!message) return console.error('message is required to show prompt');

        let defaultOptions = {
            type: 'warning',
            title: this.translation.default.title,
            text: message,
            showCancelButton: true,
            confirmButtonText: this.translation.button.yes,
            confirmButtonColor: '#59c9e7',
            cancelButtonText: this.translation.button.no,
        };
    
        return this.custom(defaultOptions, options)
    }

    custom(defaultOptions, options) {

        // options is object of possible config at:
        // https://sweetalert2.github.io/#configuration
        
        // override default options
        return swal({...defaultOptions, ...options});
    }
}

export default new Prompt;