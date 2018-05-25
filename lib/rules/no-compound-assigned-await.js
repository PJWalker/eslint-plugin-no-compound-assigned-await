/**
 * @fileoverview no-compound-assigned-await
 * @author PJ Walker
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Avoid statements like `x+=await y`",
      category: "Best Practices",
      recommended: true
    },
    fixable: null
  },

  create(context) {
    return {
      "AssignmentExpression[operator!='=']:has(AwaitExpression)": node => {
        context.report({
          node,
          message: `Do not use compound assignment [${
            node.operator
          }] with await. Use plain assignment [=] instead.`
        });
      }
    };
  }
};
