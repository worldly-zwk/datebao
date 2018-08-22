module.exports = {
    "root": true,
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": ["error","tab"],
        "no-console": 0,
        "vue/html-indent": ["error","tab",{
            "attribute": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/require-v-for-key": 0,
        "vue/max-attributes-per-line": 0,
        "vue/html-self-closing": 0
    }
};