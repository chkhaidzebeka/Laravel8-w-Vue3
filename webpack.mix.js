const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts("resources/js/entry.ts", "public/js/app.js")
    .vue({ version: 3 })
    .sass("resources/css/main.scss", "public/css/app.css")
    .webpackConfig({
        devServer: {
            static: false,
        },
    });

//
