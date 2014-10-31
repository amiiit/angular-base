'use strict';

module.exports = {
    clean: ['<%= build_dir %>'],
    /**
     * The `index` task compiles the `index.html` file as a Grunt template. CSS
     * and JS files co-exist here but they get split apart later.
     */
    connect: {
        server: {
            options: {
                port: 9000,
                base: '<%= build_dir %>',
                hostname: 'localhost',
                livereload: 35729
            }
        }
    },
    curl: {
        backend: {
            src: '<%= backend_binary_url %>',
            dest: '<%= backend_binary_path %>'
        }
    },
    index: {
        build: {
            dir: '<%= build_dir %>',
            src: [
                ['templates.js'],
                '<%= build_dir %>/styles/main.css',
                '<%= vendor_files.js %>',
                '<%= build_dir %>/src/**/*.js',
                '<%= vendor_files.css %>',
                '<%= vendor_files.html %>'
            ],
            ngApp: '<%= ng_app %>'
        }
    },
    'gh-pages': {
        options: {
            base: 'build'
        },
        src: ['**']
    },
    mongoimport: {
        options: { //todo setup targets
            db: 'jobs-dev',
            collections: [
                {
                    name: 'jobs',
                    type: 'json',
                    file: 'test/fixtures/jobs.json',
                    jsonArray: true,
                    upsert: true,
                    drop: true
                }
            ]
        }
    },
    open: {
        server: {
            url: 'http://localhost:<%= connect.options.port %>'
        }
    },
    stylus: {
        compile: {
            options: {
                compress: false,
                urlfunc: 'embedurl'
            },
            files: [
                {
                    src: '<%= app_files.stylus %>',
                    dest: '<%= build_dir %>/styles/main.css'
                }
            ]
        }
    },
    chmod: {
        options: {
            mode: '755'
        },
        backend: {
            src: ['<%= backend_binary_path %>']
        }
    },
    // Put files not handled in other tasks here
    copy: {
        build_app_assets: {
            files: [
                {
                    src: ['**'],
                    dest: '<%= build_dir %>/assets/',
                    cwd: 'src/assets',
                    expand: true
                }
            ]
        },
        build_vendor_assets: {
            files: [
                {
                    src: [
                        '<%= vendor_files.css %>',
                        '<%= vendor_files.assets %>',
                    ],
                    dest: '<%= build_dir %>/',
                    cwd: '.'
                }
            ]
        },
        build_appjs: {
            files: [
                {
                    src: ['<%= app_files.js %>'],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        build_vendorjs: {
            files: [
                {
                    src: ['<%= vendor_files.js %>'],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        build_vendorhtml: {
            files: [
                {
                    src: ['<%= vendor_files.html %>'],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        test_mocks: {
            files: [
                {
                    src: ['<%= test_files.js %>'],
                    dest: '<%= build_dir %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        }
    },
    concurrent: {
        server: [
            'stylus',
            'ngtemplates'
        ],
        test: [
            'stylus',
            'ngtemplates'
        ],
        dist: [
            'stylus',
            'ngtemplates'
        ]
    },
    external_daemon: {
        backend: {
            cmd: "<%= backend_binary_path %>",
            args: "<%= backend_daemon_params %>",
            options: {
                verbose: true
            }
        }
    },
    karma: {
        options: {
            configFile: '<%= build_dir %>/karma-unit.js'
        },
        unit: {
            port: 9019,
            background: true
        },
        continuous: {
            singleRun: true
        }
    },
    /**
     * This task compiles the karma template so that changes to its file array
     * don't have to be managed manually.
     */
    karmaconfig: {
        unit: {
            dir: '<%=  build_dir %>',
            src: [
                '<%= vendor_files.js %>',
                '<%= test_files.js %>'
            ]
        }
    },
    ngtemplates: {
        'app': {
            options: {
                module: '<%= ng_app %>'
            },
            src: 'app/**/*.tpl.html',
            dest: '<%= build_dir%>/<%= templates_file %>',
            cwd: 'src/'
        }

    },
    protractor: {
        options: {
            configFile: "node_modules/protractor/referenceConf.js", // Default config file
            keepAlive: false, // If false, the grunt process stops when the test fails.
            noColor: false, // If true, protractor will not use colors in its output.
            args: {
                includeStackTrace: true
                // Arguments passed to the command
            }
        },
        app: { // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
            options: {
                configFile: "test/e2e.conf.js", // Target-specific config file
                args: {} // Target-specific arguments
            }
        }
    },
    watch: {
        options: {
            livereload: true
        },
        livereload: {
            options: {
                livereload: 35729
            },
            files: [
                'src/index.html',
                'src/**/*.tpl.html',
                'test/**/*.js'
            ]
        },
        e2e: {
            files: [
                'test/**/*.js'
            ],
            tasks: ['copy:test_mocks'],
            options: {
                spawn: false
            }
        },
        stylus: {
            files: '<%= app_files.stylus %>',
            tasks: ['stylus:compile'],
            options: {
                spawn: true
            }
        },
        scripts: {
            files: ['<%= app_files.js %>', '<%= app_files.jsunit%>'],
            tasks: ['copy:build_appjs' /*, 'karma:unit:run'*/ ],
            options: {
                spawn: false
            }
        },
        templates: {
            files: '<%= app_files.atpl %>',
            tasks: ['ngtemplates'],
            options: {
                spawn: false
            }
        }
    }
};