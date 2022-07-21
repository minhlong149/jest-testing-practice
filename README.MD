# Test-driven Development (TDD)

## Install Jest

```shell
npm install --save-dev jest
```

Add the following section to your `package.json`, then run `npm test`:

```json
{
  "scripts": {
    "test": "jest",
  }
}
```

## Using Babel

By default, the current version of Jest will not recognize ES6 `import` statements. In order for you to be able to use ES6 modules for this project you may install the following required dependencies:

```shell
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Configure Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project:

```js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

### Using TypeScript

```shell
npm install --save-dev @babel/preset-typescript
```

Add `@babel/preset-typescript` to the list of presets in your `babel.config.js`.

```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

You may also want to install the `@types/jest` module to provide full typing when writing your tests with TypeScript.

```shell
npm install --save-dev @types/jest
```
