const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/home/home-app.js', 'public/dist/js')
    // .react('resources/js/admin/admin-app.js', 'public/dist/js')
    // .sass('resources/sass/app.scss', 'public/dist/css')
    .webpackConfig({
        resolve: {
            alias: {
                Shared: path.resolve(__dirname, 'resources/assets/js/shared')
            }
        }
    });
