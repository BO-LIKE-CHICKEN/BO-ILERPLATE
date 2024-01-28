module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "refactor", "test", "ci", "docs", "build", "chore"],
    ],
    "scope-enum": [2, "always", ["utils", "custom-types", "react"]],
    "subject-full-stop": [2, "never", "."],
  },
};
