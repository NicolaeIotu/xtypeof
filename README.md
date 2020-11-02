# xtypeof

**xtypeof** is extended typeof.

This simple single function module has zero dependencies, is seriously lightweight and should run in all environments.

**xtypeof** function takes a single parameter which can be anything and returns a lowercase string representing 
the extended type of object passed including builtins, types derived from Error, and all other types available 
in the environment.

By value returns include "undefined", "null", "boolean", "number", "bigint", "string", "symbol", "function", "object",
"array", "map", "set", "date", "regexp", "weakmap", "weakset", "promise", "arraybuffer", "sharedarraybuffer",
"dataview", "int8array", "uint8array", "uint8clampedarray", "int16array", "uint16array", "int32array", "uint32array", 
"float32array", "float64array", "bigint64array", "biguint64array", "error" (and all other derived errors available in 
the environment such as "typeerror", "rangeerror" etc.) and all other environment specific extended lowercase types
 such as "htmldivelement" a.m.o.

## Examples
```
const { xtypeof } = require('xtypeof')

console.log(xtypeof([])) // 'array'
console.log(xtypeof('a')) // 'string'
console.log(xtypeof(null)) // 'null'
console.log(xtypeof(123n)) // 'bigint'
console.log(xtypeof(Buffer.alloc(5))) // 'uint8array'
console.log(xtypeof(new Error('err'))) // 'error'
console.log(xtypeof(new RangeError('oor'))) // 'rangeerror'
```

## Others
Inspired by [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Examples)

For efficiency non-regular types are not handled by xtypeof. So far just the Proxy will be misrecognized as 'object'.

Contributions are welcomed. The project is at the moment setup for `npm` only.
