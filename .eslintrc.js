module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/html-indent': ['warn', 4],
        'vue/html-quotes': ['warn', 'single'],
        'vue/script-indent': ['warn', 4],
        'vue/no-multi-spaces': 'warn',
        'vue/html-end-tags': 'warn',
        'vue/valid-v-slot': [0, {
            allowModifiers: true,
        }],
        'class-methods-use-this': 0,
        'lines-between-class-members': 0,
        'max-len': 0,
        // 'no-underscore-dangle': [0, 'always'],
        'no-underscore-dangle': 0,
        indent: ['warn', 4],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        '@typescript-eslint/no-explicit-any': [0, 'always'],
    },
};
