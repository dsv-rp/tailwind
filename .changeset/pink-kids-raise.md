---
"@daikin-oss/tailwind": minor
---

**BREAKING CHANGE** Migrated to new design token system.
All existing color and font extensions have been removed. Only the `daikinSerif` font family has been left for compatibility reasons.

**BREAKING CHANGE** The `callback` option has been removed. Create a plugin or use [@layer and @apply features](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply).

Added TypeScript declarations.
