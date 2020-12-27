module.exports = {
  env: {
    node: true,
    jest: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "jest/no-disabled-tests": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
