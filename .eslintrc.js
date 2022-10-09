module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vue-js-3-x
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],
    // https://eslint.vuejs.org/rules/
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-are-warned-by-no-undef-rule
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
