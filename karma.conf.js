module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            './node_modules/angular/angular.min.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './node_modules/underscore/underscore.js',
            'src/tests/**/*.ts'
        ],
        preprocessors: {
            'src/scripts/**/*.ts': ['webpack', 'coverage'],
            'src/tests/**/*.ts': ['webpack', 'coverage']
        },

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            // 'karma-browserify',
            'karma-coverage',
            'karma-jasmine-jquery',
            'karma-webpack',
        ],
        webpackMiddleware: {
            noInfo: true
        },
        webpack: {
            resolve: {
                extensions: ['', '.js', '.ts', '.tsx']
            },
            module: {
                loaders: [
                    { test: /\.tsx?$/, loader: 'ts-loader' }
                ]
            },
            stats: {
                colors: true,
                modules: true,
                reasons: true,
                errorDetails: true
            },
            devtool: 'inline-source-map',
        },
        port: 9877,
        reporters: ['progress','coverage'],
        colors: true,
        logLevel: config.LOG_WARN,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        browserify: {
            debug: true
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        }
    });
};
