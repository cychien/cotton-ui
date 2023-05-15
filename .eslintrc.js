/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ["simple-import-sort", "prettier"],
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:prettier/recommended",
  ],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
