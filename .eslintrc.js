module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
        "node": true,
        "es6": true
    },
    "rules": {
        "no-bitwise": 2,
        "eqeqeq": "warn",
        "guard-for-in": 1,
        "no-extend-native": 1,
        "no-caller": 2,
        "no-new": 2,
        "strict": [
            1,
            "global"
        ],
        "wrap-iife": 2,
        "curly": [
            "warn",
            "all"
        ],
        "operator-linebreak": "warn",
        "camelcase": [
            "warn",
            {
                "properties": "never"
            }
        ],
        "max-len": [
            "warn",
            180
        ],
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            2,
            "single"
        ],
        "no-multi-str": "warn",
        "no-trailing-spaces": 2,
        "space-unary-ops": [2, { "words": true, "nonwords": false }],
        "one-var": [
            1,
            "never"
        ],
        "brace-style": "warn",
        "keyword-spacing": 2,
        "space-infix-ops": 2,
        "space-before-blocks": [
            2,
            "always"
        ],
        "eol-last": 2,
        "array-bracket-spacing": [
            1,
            "never",
            {
                "objectsInArrays": true,
                "arraysInArrays": true
            }
        ],
        "object-curly-spacing": [
            1,
            "never",
            {
                "objectsInObjects": true,
                "arraysInObjects": true
            }
        ],
        "space-in-parens": [
            2,
            "never"
        ],
        "no-multiple-empty-lines": 2,
        "no-with": 2,
        "space-before-function-paren": [
            2,
            { "anonymous": "always", "named": "never" }
        ],
        "vars-on-top": 1,
        "no-spaced-func": 2,
        "key-spacing": [
            2,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "new-cap": [
            "warn",
            {
                "capIsNewExceptions": ["URI"]
            }
        ],
        "dot-notation": [
            2,
            {
                "allowPattern": "^[a-z]+(_[a-z]+)+$"
            }
        ],
        "semi": [
            2,
            "always"
        ],
        "comma-dangle": 2,
        "no-console": "warn",
        "no-empty": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-irregular-whitespace": "warn",
        "no-mixed-spaces-and-tabs": 2,
        "no-redeclare": "warn",
        "no-undef": "warn",
        "no-unexpected-multiline": 2,
        "no-unused-vars": "warn",

        "valid-typeof": "warn",
        "no-unreachable": "warn"
    }
};
