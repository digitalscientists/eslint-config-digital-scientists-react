# eslint-config-digital-scientists

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for JS and React (and React Native) projects at [Digital Scientists](http://www.digitalscientists.com/).

## Installation

It's recommended to always install linting/formatting engines and configs **locally**, since supported rules and config specifics can change over time and may cause inconsistencies across projects if installed globally and updated over time.

```sh
npm install --save-dev --save-exact eslint eslint-config-digital-scientists
```

## Usage

In your local `.eslintrc.{js,json}` file:

```json
{
  "extends": "digital-scientists",
  "root": true
}
```

_Note:_

* the `eslint-config-` portion of the module name is assumed by ESLint.
* the `root` attribute prevents ESLint from merging local rules with any global configs you may have installed.

### Optional React Native rules

To add a few `react-native`-specific rules, just add this additional extension to your `.eslintrc` `extends` property list:

```json
{
  "extends": ["digital-scientists", "digital-scientists/react-native"],

  "root": true
}
```

## Integrating ESLint with your editor

For the best developer experience, it's recommended to install and activate an ESLint extension/plugin for your editor to provide immediate visual feedback about linting issues.

Some recommended ESLint plugins are:

* [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [linter-eslint for Atom](https://atom.io/packages/linter-eslint)
* [sublime-linter](https://sublimelinter.readthedocs.io/en/latest/installation.html)

## Integrating ESLint With Prettier

In order to user `prettier` with `eslint` and `eslint-config-digital-scientists`, you will need to do the following:

Install `prettier` and `eslint-config-prettier`

```
npm install --save-dev --save-exact prettier eslint-config-prettier
```

Modify `.eslintrc.{js,json}` to extend `eslint-config-pretter` **after** `eslint-config-digital-scientists` to overwrite any rules that conflict with prettier

```json
{
  "extends": ["digital-scientists", "prettier", "prettier/react"],
  "root": true
}
```

Add a `prettier` config (e.g. `.prettierrc.js`) with these recommended settings:

```js
module.exports = {
  arrowParens: "always",
  bracketSpacing: false,
  jsxBracketSameLine: false,
  printWidth: 80,
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  proseWrap: "always"
};
```

Install a Prettier formatting plugin for your editor and set to format on save

* For Visual Studio Code: [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* For Atom: [prettier-atom](https://github.com/prettier/prettier-atom)
* For Sublime: [JsPrettier](https://github.com/jonlabelle/SublimeJsPrettier)

## For Babel-Transpiled Projects

This config's peer dependencies enable linting relatively modern files including JSX components. If you find that the linter fails to understand some early-stage ES features, you can enable parsing using Babel instead of ESLint's default parser. Install `babel-eslint` and set the `parser` option of your config:

```sh
npm install babel-eslint --save-dev
```

```json
{
  "parser": "babel-eslint",
  "extends": "digital-scientists",
  "root": true
}
```

## Extending

Any [rules](http://eslint.org/docs/rules/) added to your global or local `.eslintrc.json` files will override the rules defined by this package. For example:

```json
{
  "extends": "digital-scientists",
  "rules": {
    "semi": [1, "always"]
  }
}
```

This turns on enforcing the use of semicolons, a rule which is silenced by default in the current version of the `eslint-config-digital-scientists` package.

## Background

The [ESLint](http://http://eslint.org/) linting system is a popular one for its support of ES6 syntax, pluggable [rules](http://eslint.org/docs/rules/), automatic rule names in warning messages, and [shareable](http://eslint.org/docs/developer-guide/shareable-configs) / [extendable](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) config files.

Because it defaults to supporting multiple environments (e.g. Node, browsers, Jasmine, Mocha, etc.) it is probably not suitable for general production, where one might want a finer-grained and more restrictive config. However it is easy to override and extend this base config with custom rules, [as explained above and in the ESLint docs](http://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package).

## License

MIT
