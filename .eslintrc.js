module.exports = {
  // 环境配置
  env: {
    browser: true, // 支持浏览器环境
    node: true, // 支持 Node.js 环境
    es2021: true, // 使用 ES2021 语法
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: ['vue'],
  // 规则配置
  rules: {
    'prefer-const': 'error', // 要求使用 const 而非 let（当变量不会被重新赋值时）
    indent: ['error', 2], // 强制使用 2 个空格缩进
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    'comma-spacing': 'error',
    'no-unused-vars': 'warn',
  },
  // 其他配置...
}
