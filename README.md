# tailwind

Tailwind plugin utilizing Daikin-specific styles

## Installation

Install the plugin from npm:

```javascript
npm install -D @daikin-dsv/tailwind
```

Then add to your tailwind configuration file:

```javascript
const daikinPlugin = require('@daikin-dsv/tailwind');

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
