import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Recommended Astro rules
  ...eslintPluginAstro.configs.recommended,

  // Accessibility rules (a11y)
  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },

  // Custom overrides or rules
  {
    rules: {
      // Add any custom ESLint rules here
    },
  },
];
