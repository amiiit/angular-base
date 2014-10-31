'use strict';

module.exports = {
    backend_binary_url: function() {
        var os = require('os');
        var arch = os.arch().replace('x64', 'amd64');

        var result = 'http://downloads.voxelbrain.com/organization/krautbuster'
        + '/kb-short-url/develop/current/'
        + os.platform() + '_' + arch
        + '/frontend';

        return result;
    }(),
    backend_binary_path: 'backend/frontend',
    backend_daemon_params: '-l localhost:10000 -m mongodb://127.0.0.1/jobs -s http://www.example.com'.split(' '),
    ng_app: 'angularBase',
    build_dir: 'build',
    templates_file: 'src/templates.js',
    app_files: {
        js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js'],
        jsunit: ['src/**/*.spec.js'],
        atpl: ['src/app/**/*.tpl.html'],
        ctpl: ['src/common/**/*.tpl.html'],

        html: ['src/index.html'],
        stylus: 'src/**/*.styl',
        stylus_sheets: 'src/app'
    },
    vendor_files: {
        js: [
            'vendor/platform/platform.js',
            'vendor/angular/angular.js',
            'vendor/ng-polymer-elements/ng-polymer-elements.js',
            'vendor/lodash/dist/lodash.js',
            'vendor/d3/d3.js',
            'vendor/angular-ui-router/release/angular-ui-router.js'
        ],
        html: [
            'vendor/polymer/polymer.html',
            'vendor/core-toolbar/core-toolbar.html',
            'vendor/core-icons/core-icons.html',
            'vendor/core-icons/av-icons.html',
            'vendor/core-icons/communication-icons.html',
            'vendor/core-input/core-input.html',
            'vendor/paper-button/paper-button.html',
            'vendor/paper-icon-button/paper-icon-button.html',
            'vendor/paper-menu-button/paper-menu-button.html',
            'vendor/paper-item/paper-item.html',
            'vendor/paper-shadow/paper-shadow.html',
            'vendor/paper-input/paper-input.html',
            'vendor/polymer/layout.html',
            'vendor/paper-tabs/paper-tabs.html',
            'vendor/paper-dialog/paper-dialog.html',
            'vendor/paper-dropdown/paper-dropdown.html'
        ],
        css: [
            'vendor/normalize.css/normalize.css',
            'vendor/roboto-fontface/roboto-fontface.css'
        ],
        assets: [
            'vendor/d3/d3.js',
            'vendor/polymer/polymer.html',
            'vendor/polymer/layout.html',
            'vendor/polymer/polymer.js*',
            'vendor/paper-*/paper-*.html',
            'vendor/paper-*/paper-*.css',
            'vendor/core*/*.*',
            'vendor/core*/**/*.*',
            'vendor/web-animations-js/web-animations.js',
            'vendor/platform/platform*.*',
            'vendor/roboto-fontface/fonts/*',
            'vendor/paper-input/error-100.png'
        ]
    }
};

