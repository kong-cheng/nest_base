module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion:"latest",
    sourceType: 'module',
  },
plugins: ['@typescript-eslint', 'jest', 'prettier', 'import', 'unused-imports'],
extends: [
    // airbnb规范
    'airbnb-base',
    // 兼容typescript的airbnb规范
    'airbnb-typescript/base',
    // typescript的eslint插件
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    // 支持jest
    'plugin:jest/recommended',
    // 使用prettier格式化代码
    'prettier',
    // 整合typescript-eslint与prettier
    'plugin:prettier/recommended',
],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-console':0,
    'no-var-requires':0,
    'no-restricted-syntax':0,
    'no-continue':0,
    'no-await-in-loop':0,
    'no-return-await':0,
    'no-unused-vars':0,
    'no-multi-assign':0,
    'no-param-reassign':[2,{props:false}],
    'import/prefer-default-export':0,
    'import/no-cycle':0,
    'import/no-dynamic-require':0,
    'max-classes-per-file':0,
    'class-methods-use-this':0,
    'guard-for-in':0,
    'no-underscore-dangle':0,
    'no-plusplus':0,
    'no-lonely-if':0,
    'no-bitwise':['error',{allow:['~']}],

    'import/no-absolute-path':0,
    "import/extensions":0,
    "import/no-named-default":0,
    "no-restricted-exports":0,

    "import/no-extraneous-dependencies":[
      1,
      {
        devDependencies:['**/*.test.{ts,js}','**/*.spec.{ts,js}','./test/**.{ts,js}']
      }
    ],

    // 导入模块的顺序
'import/order': [
      'error',
      {
          pathGroups: [
              {
                  pattern: '@/**',
                  group: 'external',
                  position: 'after',
              },
          ],
          alphabetize: { order: 'asc', caseInsensitive: false },
          'newlines-between': 'always-and-inside-groups',
          warnOnUnassignedImports: true,
      },
],
// 导入的依赖不必一定要在dependencies的文件
// "unsed-imports/no-unused-import":1,
'import/no-extraneous-dependencies': [
      'error',
      {
          devDependencies: [
              '**/*.test.{ts,js}',
              '**/*.spec.{ts,js}',
              './test/**.{ts,js}',
              './scripts/**/*.{ts,js}',
          ],
      },
],

    "@typescript-eslint/no-unused-vars":0,
    "@typescript-eslint/no-empty-interface":0,
    "@typescript-eslint/no-this-alias":0,
    "@typescript-eslint/no-var-requires":0,
    "@typescript-eslint/no-use-before-define":0,
    "@typescript-eslint/explicit-member-accessibility":0,
    "@typescript-eslint/no-non-null-assertion":0,
    "@typescript-eslint/no-nunnecessary-type-assertion":0,
    "@typescript-eslint/require-await":0,
    "@typescript-eslint/no-for-in-array":0,
    "@typescript-eslint/interface-nome-prefix":0,
    "@typescript-eslint/explicit-function-return-type":0,
    "@typescript-eslint/no-explicit-any":0,
    "@typescript-eslint/explicit-module-boundary-types":0,
    "@typescript-eslint/no-floating-promises":0,
    "@typescript-eslint/restrict-template-expressions":0,
    "@typescript-eslint/no-unsafe-assignment":0,
    "@typescript-eslint/no-unsafe-return":0,
    "@typescript-eslint/no-unused-expressions":0,
    "@typescript-eslint/no-misused-promises":0,
    "@typescript-eslint/no-unsafe-member-access":0,
    "@typescript-eslint/no-unsafe-call":0,
    "@typescript-eslint/no-unsafe-argument":0,
    "@typescript-eslint/ban-ts-comment":0,
  },
  settings:{
    extensions:['.ts','.d.ts','.cts','.mts','.js','.cjs','.mjs','.json']
  }
};
