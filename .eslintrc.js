module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:vue/essential",
    "parserOptions": {
        "ecmaVersion": 13,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
		semi: ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        indent: ["error", 4],
        "linebreak-style": 0,
    }
};
