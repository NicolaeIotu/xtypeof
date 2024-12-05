![Actions Status](https://github.com/NicolaeIotu/xtypeof/workflows/CI/badge.svg)

# xtypeof

**xtypeof** is extended typeof.

This simple single function module has zero dependencies, is seriously fast and lightweight and should run in all
 environments.

**xtypeof** function takes a single parameter which can be anything and returns a lowercase string representing 
the extended type of object passed including builtins and all other types available 
in the environment.

By value returns include "undefined", "null", "boolean", "number", "bigint", "string", "symbol", "function", "object",
"array", "map", "set", "date", "regexp", "weakmap", "weakset", "promise", "arraybuffer", "sharedarraybuffer",
"dataview", "int8array", "uint8array", "uint8clampedarray", "int16array", "uint16array", "int32array", "uint32array", 
"float32array", "float64array", "bigint64array", "biguint64array", "error" and all other environment specific extended 
lowercase types such as "htmldivelement" a.m.o.

```
import xtypeof from 'xtypeof'

console.log(xtypeof([])) // 'array'
console.log(xtypeof('a')) // 'string'
console.log(xtypeof(null)) // 'null'
console.log(xtypeof(BigInt(123))) // 'bigint'
console.log(xtypeof(Buffer.alloc(5))) // 'uint8array'
console.log(xtypeof(new Error('err'))) // 'error'
console.log(xtypeof(new RangeError('oor'))) // 'error'
```


Inspired by [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Examples)

There is an exception with Proxy which is not a regular type and will be recognized as 'object'. This is done for
 efficiency.
