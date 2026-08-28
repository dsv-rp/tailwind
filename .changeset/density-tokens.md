---
"@daikin-oss/tailwind": major
---

Add support for `@daikin-oss/dds-tokens`'s density tokens (`gap-*`, `padding-*`, `icon`, `icon-button`, `input-height`, `current-border`, `font-size-label-text`, `font-size-helper-text`), which are merged into the existing spacing, border width, and font size utilities.

This requires `@daikin-oss/dds-tokens@^2.0.0-0` or later, since the density tokens are read from a JSON file that only exists starting with that version. The peer dependency range has been updated accordingly, dropping support for `dds-tokens` versions below 2.0.0.
