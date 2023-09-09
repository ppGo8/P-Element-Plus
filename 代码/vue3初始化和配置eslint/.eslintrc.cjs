module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "overrides": [
    ],
    // 针对Vue和ts文件的规则
    "extends": ["plugin:vue/vue3-essential", '@vue/eslint-config-typescript'],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": '@typescript-eslint/parser',
        "sourceType": "module"
    },
    "rules": {
        "Semi": 0,
    }
}
