import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  prettierConfig,
  // Ignore files
  {
    ignores: ["dist"],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
  }
);
