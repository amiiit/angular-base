'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var userConfig = require('./grunt/build.conf.js');
    var taskConfig = require('./grunt/tasks.js')

    var extendedConfig = grunt.util._.extend(taskConfig, userConfig);
    grunt.config.init(extendedConfig);

    require('./grunt/index.js')(grunt);
    require('./grunt/aggregated-tasks.js')(grunt);

};