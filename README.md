# tailwind

Tailwind plugin utilizing Daikin-specific styles

## Installation

Install the plugin and tokens from npm:

```sh
npm install -D @daikin-oss/tailwind
npm install @daikin-oss/dds-tokens
```

Use the plugin in your tailwind config:

```js
const daikinPlugin = require("@daikin-oss/tailwind");

module.exports = {
  content: ["./src/**/*.js"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [daikinPlugin(), ...otherPlugins],
};
```

Import CSS variables:

```js
import "@daikin-oss/dds-tokens/css/daikin/Light/variables.css";
```

See [dds-tokens repository](https://github.com/dsv-rp/dds-tokens?tab=readme-ov-file#readme) for more information.

## Basic Usage

### Colors

You can use extended colors anywhere you usually would.

```html
<button
  class="bg-ddt-color-common-brand-default hover:bg-ddt-color-common-brand-hover"
>
  My Button
</button>
```

For available colors, see [Color / Reference](https://zeroheight.com/6e2dc43d7/p/161b86-reference) and [Color / Semantic Color](https://zeroheight.com/6e2dc43d7/p/01c238-semantic-color) pages in Zeroheight.
We recommend using semantic colors to support themes in consistent way.

### Font Family

A `daikinSerif` fontFamily option has been added.

```javascript
<h1 class="text-xl font-medium font-daikinSerif">Text</h1>
```

Note that the current default font is `Roboto`, so you would have to import that on your own.

## Build

```sh
npm run lint
npm run typecheck
npm run build
npm run test:attw
```
