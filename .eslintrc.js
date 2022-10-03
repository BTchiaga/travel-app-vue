module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    quotes: ["error", "double"],
    // we want to force semicolons
    // semi: ["error", "always"],
    // we use 2 spaces to indent our code
    indent: ["error", 2],
    // we want to avoid extraneous spaces
    "no-multi-spaces": ["error"],
  },
};
