module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  singleAttributePerLine: true,
  bracketSameLine: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ['^react(.*)', '<THIRD_PARTY_MODULES>', '@/(components/ui*)', '^[./]'],

  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
};
