# tailwind

Tailwind plugin utilizing Daikin-specific styles

## Installation

Install the tokens and plugin from npm:

```sh
npm install @daikin-oss/dds-tokens
npm install -D @daikin-oss/tailwind
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
  plugins: [daikinPlugin({}), ...otherPlugins],
};
```

When using Tailwind's CSS entrypoint in tailwind v4, you can import the plugin directly in your stylesheet:

```css
@import 'tailwindcss';
@plugin '@daikin-oss/tailwind';
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
  class="bg-dds-color-common-brand-default hover:bg-dds-color-common-brand-hover"
>
  My Button
</button>
```

For available colors, see [Color / Reference](https://www.daikindesign.com/6e2dc43d7/p/161b86-reference) and [Color / Semantic Color](https://www.daikindesign.com/6e2dc43d7/p/01c238-semantic-color) pages in our design docs.
We recommend using semantic colors to support themes in consistent way.

### Font Family

A `daikinSerif` fontFamily option has been added.

```html
<h1 class="text-xl font-medium font-daikinSerif">Text</h1>
```

Note that the current default font is `Roboto`, so you would have to import that on your own.

## Build and Test

```sh
npm run lint
npm run typecheck
npm run build
npm run test:attw
```
