/* 
  CommonJS, every file in node is a module (by default)
  With the use of modules - we have an encapsulated code (only share minimum)
*/
const { john, peter } = require("./4-names");
const sayHey = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
