/**
 * @fileoverview `x += await y` means `x = x + await y`. The value of x is &#39;fixed&#39; synchonously, and y is later added to it. This is hard to discern when reading the code, and generally unwanted.
 * @author PJ Walker
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(`${__dirname}/rules`);
