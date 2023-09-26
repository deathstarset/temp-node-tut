/* 
  npm is a global command that comes with node
  to get the npm version we type : npm --v

  With npm we can install : 
    local dependencies => use it only on particular projects => npm i <packageName>
    global dependencies => use it on any project => sudo npm i -g <packageName>

  package.json => is a manifest file ( stores important info about the project/package )
  to create a package.json file we can use : 
    manual approach 
    using npm init 
    using npm init -y
*/
// example of using a package
const lodash = require("lodash");
const items = [1, 2, [3, 4, [5]]];
console.log(lodash.flattenDeep(items));
