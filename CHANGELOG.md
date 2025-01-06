# @daikin-oss/tailwind

## 0.2.0

### Minor Changes

- [#7](https://github.com/dsv-rp/tailwind/pull/7) [`2c4a580`](https://github.com/dsv-rp/tailwind/commit/2c4a5807cabb8c15b5fa3f729b2932f45a9f8890) Thanks [@yodas7](https://github.com/yodas7)! - Correct default plugin options.

## 0.1.0

### Minor Changes

- [#3](https://github.com/dsv-rp/tailwind/pull/3) [`cf69696`](https://github.com/dsv-rp/tailwind/commit/cf696960496a7efd6ae79d94ab2e5c547d3c48b3) Thanks [@yodas7](https://github.com/yodas7)! - Introduced Changesets for CD.

- [#3](https://github.com/dsv-rp/tailwind/pull/3) [`cf69696`](https://github.com/dsv-rp/tailwind/commit/cf696960496a7efd6ae79d94ab2e5c547d3c48b3) Thanks [@yodas7](https://github.com/yodas7)! - **BREAKING CHANGE** Migrated to new design token system.
  All existing color and font extensions have been removed. Only the `daikinSerif` font family has been left for compatibility reasons.

  **BREAKING CHANGE** The `callback` option has been removed. Create a plugin or use [@layer and @apply features](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply).

  Added TypeScript declarations.
