/**
 * @fileoverview export default function(context) {
 * @author PJ Walker
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-compound-assigned-await");
const { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-compound-assigned-await", rule, {
  valid: ["x = await y"],

  invalid: [
    {
      code: "x += await y",
      errors: [
        {
          message:
            "Do not use compound assignment [+=] with await. Use plain assignment [=] instead.",
          type: "AssignmentExpression"
        }
      ]
    }
  ]
});
