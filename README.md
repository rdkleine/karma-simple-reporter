# karma-simple-reporter
> Reporter for the JUnit XML format.

## Installation

The easiest way is to keep `karma-simple-reporter` as a devDependency in your `package.json`. Just run

```bash
npm install karma-simple-reporter --save-dev
```

to let npm automatically add it there.

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'simple'],
  });
};
```