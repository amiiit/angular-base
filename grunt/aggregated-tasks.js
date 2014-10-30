'use strict';

module.exports = function(grunt) {

    grunt.registerTask('develop', 'Use this as UI developer', [
        'build',
        'start-backend',
        'serve',
        'watch'
    ]);

    grunt.registerTask('backend-develop', 'http-serve the application against an independent backend', function(backendHost) {
        console.warn('TODO: Implement parametrized backend host');
        grunt.task.run([
            'build',
            'serve',
            'watch'
        ])
    });

    grunt.registerTask('e2e', 'run fully independent e2e tests', [
        'reset-db',
        'start-backend',
        'build',
        'serve',
        'protractor'
    ]);

    grunt.registerTask('only-e2e', 'only run tests', [
        'reset-db',
        'protractor'
    ]);

    grunt.registerTask('backend-develop-e2e', 'run tests against an independenct backend', function(backendHost) {
        console.warn('TODO: Implement parametrized backend host');
        grunt.task.run([
            'reset-db',
            'build',
            'serve',
            'protractor'
        ])
    });

    grunt.registerTask('serve', 'http-serve the built project files from build/', [
        'connect:server'
    ]);

    grunt.registerTask('reset-db', 'resets the database with test fixtures', [
        'mongoimport'
    ]);

    grunt.registerTask('start-backend', 'fetch and start the backend daemon', [
        'if-missing:curl:backend',
        'chmod:backend',
        'external_daemon:backend'
    ]);

    grunt.registerTask('build', 'build the app into build/', [
        'clean',
        'stylus',
        'ngtemplates',
        'config',
        'index:build',
        'copy:build_app_assets',
        'copy:build_vendor_assets',
        'copy:build_appjs',
        'copy:build_vendorjs',
        'copy:build_vendorhtml',
        'index:build'
    ]);

    grunt.registerTask('default', ['build'])

};