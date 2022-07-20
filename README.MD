# Test-driven Development (TDD)

## Install Jest

```shell
npm install --save-dev jest
```

Add the following section to your `package.json`, then run `npm test`:

```json
{
  "scripts": {
    "test": "jest --watchAll",
  }
}
```

## Using Babel

By default, the current version of Jest will not recognize ES6 `import` statements. In order for you to be able to use ES6 modules for this project you may install the following required dependencies:

```shell
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Configure Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project (Recommended):

```json
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

Or, configuration only to a single part of your project by create a file called `.babelrc.json` with the following content:

```json
{
  "presets": ["@babel/preset-env"],
}
```

#### Using TypeScript

```shell
npm install --save-dev @babel/preset-typescript
```

Add `@babel/preset-typescript` to the list of presets in your `babel.config.js`.

```json
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. If you want that, you can use `ts-jest` instead, or just run the TypeScript compiler `tsc` separately (or as part of your build process).

```shell
npm install --save-dev ts-jest
```
