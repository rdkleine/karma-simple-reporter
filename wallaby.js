module.exports = function (wallaby) {
  return {
    files: [
      'index.js',
      'base.js',
      'helper.js'
    ],

    tests: [
      'test/**/*.spec.js'
    ],
    env: {
      type: 'node'
    }
  };
};