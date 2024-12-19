# @daikin-oss/tailwind

## 0.1.0

### Minor Changes

- [#3](https://github.com/dsv-rp/tailwind/pull/3) [`cf69696`](https://github.com/dsv-rp/tailwind/commit/cf696960496a7efd6ae79d94ab2e5c547d3c48b3) Thanks [@yodas7](https://github.com/yodas7)! - Introduced Changesets for CD.

- [#3](https://github.com/dsv-rp/tailwind/pull/3) [`cf69696`](https://github.com/dsv-rp/tailwind/commit/cf696960496a7efd6ae79d94ab2e5c547d3c48b3) Thanks [@yodas7](https://github.com/yodas7)! - **BREAKING CHANGE** Migrated to new design token system.
  All existing color and font extensions have been removed. Only the `daikinSerif` font family has been left for compatibility reasons.

  **BREAKING CHANGE** The `callback` option has been removed. Create a plugin or use [@layer and @apply features](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply).

  Added TypeScript declarations.
