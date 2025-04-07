/** @type {import('postcss-load-config').Config} */
const postcss = require('postcss');

const buildFallbackSelectorGroup = decls => [
  '@layer base {',
  '*,::backdrop,:after,:before{',
  decls.join(';'),
  '}}',
].join('');

/**
 * This plugin convert @property to normal css variables. @property is not yet supported
 * by web components
 */
const propertyToCssVariablePolyfill = (pluginOptions = {}) => {
  return {
    postcssPlugin: 'postcss-property-to-variable',
    Once(root) {
      const fallbackVariableDecls = [];

      root.walkAtRules('property', (atRule) => {

        atRule.walkDecls((decl) => {
          if (decl.prop === 'initial-value') {
            const cssVariableName = atRule.params.trim();
            fallbackVariableDecls.push(`${cssVariableName}:${decl.value}`)
          }
        });
      });

      if (fallbackVariableDecls.length > 0) {
        const fallbackSelectors = buildFallbackSelectorGroup(fallbackVariableDecls);

        const sourceFile = root.source?.input?.file || root.source?.input?.from;
        const fallbackSelectorsAst = postcss.parse(fallbackSelectors, { from: sourceFile });

        let lastImportIndex = -1;
        for (const node of root.nodes) {
          if (node.type === 'atrule' && node.name === 'import') {
            lastImportIndex = i
          }
        }

        lastImportIndex === -1
          ? root.prepend(fallbackSelectorsAst)
          : root.insertAfter(root.nodes[lastImportIndex], fallbackSelectorsAst);
      }
    },
  };
};

propertyToCssVariablePolyfill.postcss = true;

module.exports = propertyToCssVariablePolyfill;
