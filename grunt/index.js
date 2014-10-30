'use strict';

module.exports = function(grunt) {

    function filterForJS(files) {
        return files.filter(function(file) {
            return file.match(/\.js$/);
        });
    }

    function filterForCSS(files) {
        return files.filter(function(file) {
            return file.match(/\.css$/);
        });
    }

    function filterForHTML(files) {
        return files.filter(function(file) {
            return file.match(/\.html$/);
        });
    }

    grunt.registerMultiTask('index', 'Process index.html template', function(a, b, c) {

        var dirRE = new RegExp('^(' + grunt.config('build_dir') + ')\/', 'g');
        var jsFiles = filterForJS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });
        var cssFiles = filterForCSS(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });

        var htmlFiles = filterForHTML(this.filesSrc).map(function(file) {
            return file.replace(dirRE, '');
        });

        grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
            process: function(contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles,
                        htmls: htmlFiles,
                        version: grunt.config('pkg.version'),
                        ngApp: this.data.ngApp
                    }
                });
            }.bind(this)
        });
    });

    grunt.registerMultiTask('karmaconfig', 'Process karma config templates', function() {
        var jsFiles = filterForJS(this.filesSrc);

        grunt.file.copy('test/karma-unit.tpl.js', grunt.config('build_dir') + '/karma-unit.js', {
            process: function(contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles
                    }
                });
            }
        });
    });

    grunt.registerTask('config', 'create configuration file for the application', function() {
        var configLocation = 'src/app/appConfig.js.tpl';
        var configTarget = grunt.config('build_dir') + '/' + configLocation.match(/(.*)\.tpl/)[1];
        var template = grunt.file.read(configLocation);
        var config = grunt.file.readJSON('config.json');
        var configString = JSON.stringify(config);
        var configurationJsFile = grunt.template.process(template, {
            data: {
                config: configString
            }
        });

        grunt.file.write(configTarget, configurationJsFile);

    });
};