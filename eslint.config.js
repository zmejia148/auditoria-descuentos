module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "no-unused-vars": ["warn", { args: "none" }],
      "curly": ["error", "all"]
    }
  }
];