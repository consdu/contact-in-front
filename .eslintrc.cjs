module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["/*.js", "/*.cjs"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "jsx-a11y", "react-hooks", "perfectionist"],
  rules: {
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          [
            "type",
            "parent-type",
            "sibling-type",
            "index-type",
            "internal-type",
          ],
          "react",
          "next",
          ["builtin", "external"],
          "alias",
          ["index", "parent", "sibling", "internal"],
          ["side-effect", "style"],
          "object",
          "unknown",
        ],
        "custom-groups": {
          value: {
            react: [
              "react",
              "react-dom",
              "react-native",
              "react-router-dom",
              "react-redux",
            ],
            next: ["next", "next/*"],
            alias: "@/**",
          },
          type: {
            react: "react",
            next: "next",
          },
        },
        "newlines-between": "never",
      },
    ],
    "react-refresh/only-export-components": "warn",
    "no-console": "error",
  },
};
