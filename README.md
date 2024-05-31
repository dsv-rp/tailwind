# tailwind

Tailwind plugin utilizing Daikin-specific styles

## Installation

Install the plugin from npm:

```javascript
npm install -D @daikin-oss/tailwind
```

Then add to your tailwind configuration file:

```javascript
const daikinPlugin = require('@daikin-oss/tailwind');

module.exports = {
    content: ['./src/**/*.js'],
    theme: {},
    variants: {
        extend: {}
    },
    plugins: [daikinPlugin(), ...otherPlugins]
};
```

## Basic Usage

### Colors

You can use extended colors anywhere you usually would.

```javascript
<button class="text-daikinBlue-500 border-daikinBlue-500 hover:bg-daikinBlue-100">
    My Button
</button>
```

Available extensions:

```
daikinBlue
daikinNeutral
daikinRed
daikinYellow
daikinGreen
```

Available weight:

```
50
100
200
300
400
500
600
700
800
900
1000
```

All extensions have a `default weight` except for `daikinNeutral`.

### Font Family

A `daikinSerif` fontFamily option has been added.

```javascript
<h1 class="text-xl font-medium font-daikinSerif">Text</h1>
```

Note that the current default font is `Roboto`, so you would have to import that on your own.

### Tailwind Configuration Callback

If you want to build custom components, for example, based on the added daikin classes, you can include a callback:

```javascript
const daikinPlugin = require('@daikin-oss/tailwind');

const components = {
    '.btn': {
        [`@apply ${ctl(`
            inline-block
            font-daikinSerif
            rounded-lg
            text-base
            px-4
            py-2
            shadow-lg
            tracking-wide
            disabled:cursor-default
            disabled:shadow-none

            md:py-3
            md:px-6
        `)}`]: {}
    },
    ...etc
};

const customComponents = function ({ addComponents }) {
    addComponents(components, { variants: ['dark', 'active'] });
};

module.exports = {
    content: ['./src/**/*.js'],
    theme: {},
    variants: {
        extend: {}
    },
    plugins: [daikinPlugin({ callback: customComponents }), ...otherPlugins]
};
```

The `customComponents` function above equates to the first argument for the tailwind `plugin` method referenced in the [docs](https://tailwindcss.com/docs/plugins)
