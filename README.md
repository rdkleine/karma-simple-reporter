# karma-simpler-reporter
> Yet another Karma reporter created with the purpose to keep the testlog smaller.

## Installation

The easiest way is to keep `karma-simpler-reporter` as a devDependency in your `package.json`. Just run

```bash
npm install karma-simpler-reporter --save-dev
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