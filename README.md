```js
const IsES5Plugin = require("./lib/index.js");
module.exports = {
  // entry: ...
  // module: ...
  plugins: [
    new IsES5Plugin({ ecmaVersion: 5 })
  ]
}
```
