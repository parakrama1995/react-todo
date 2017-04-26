var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ],
    externals: {
  'Config': JSON.stringify(process.env.ENV === 'production' ? {
    serverUrl: "https://myserver.com"
  } : {
    serverUrl: "http://localhost:8090"
  })
}
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: [''],
    //...
  });
};
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
