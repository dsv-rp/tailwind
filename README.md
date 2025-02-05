# tailwind

Tailwind plugin utilizing Daikin-specific styles

## Installation

### 1. Install the plugin and tokens from npm:

```sh
npm install @daikin-oss/dds-tokens
npm install -D @daikin-oss/tailwind
```

### 2. Use the plugin in your tailwind config:

Tailwind CSS v4:

```css
@plugin "@daikin-oss/tailwind";
```

Tailwind CSS v3:

```js
const daikinPlugin = require("@daikin-oss/tailwind");

module.exports = {
  content: ["./src/**/*.js"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [daikinPlugin({}), ...otherPlugins],
};
```

### 3. Import CSS variables:

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
