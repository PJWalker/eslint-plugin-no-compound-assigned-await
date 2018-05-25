# eslint-plugin-no-compound-assigned-await

`x += await y` means `x = x + await y` - the value of x is determined before the async code is executed. This leads to generally unwanted 'fixing' of the variable, and it is hard to discern this when reading the code.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-compound-assigned-await`:

```
$ npm install eslint-plugin-no-compound-assigned-await --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-compound-assigned-await` globally.

## Usage

Add `no-compound-assigned-await` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-compound-assigned-await"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-compound-assigned-await/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
