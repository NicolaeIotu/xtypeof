'use strict'

/* xtypeof is Copyright (C) 2020 Nicolae Iotu, nicolae.g.iotu@gmail.com
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
limitations under the License.

Author Nicolae Iotu, nicolae.g.iotu@gmail.com */

/**
 * **xtypeof** is a lightweight, zero dependencies function which takes an object as argument and returns a lowercase
 * string representing the extended type of object passed including builtins, types derived from Error, and all
 * other types available in the environment. See `returns` section.<br>
 * Inspired by {@link  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Examples}
 * @param obj {any} Any type of object available in the environment.
 * @returns {string} `Lowercase string` defining the extended type of object passed to this function.<br>
 * Returns include "undefined", "null", "boolean", "number", "bigint", "string", "symbol", "function", "object",
 * "array", "map", "set", "date", "regexp", "weakmap", "weakset", "promise", "arraybuffer", "sharedarraybuffer",
 * "dataview", "int8array", "uint8array", "uint8clampedarray", "int16array", "uint16array", "int32array",
 * "uint32array", "float32array", "float64array", "bigint64array", "biguint64array", "error" (and all other derived
 * errors available in the environment such as "typeerror", "rangeerror" etc.) and all other environment specific
 * extended lowercase types such as "htmldivelement" a.m.o.<br>
 * For efficiency non-regular types are not handled by xtypeof. So far just the Proxy will be misrecognized as 'object'.
 * @version 1.0.0
 * @license Apache-2.0
 * @author Nicolae Iotu <nicolae.g.iotu@gmail.com>
 * @exports xtypeof
 * @example
 * console.log(xtypeof([])) //'array'
 * @example
 * console.log(xtypeof(new RangeError('oor'))) //'rangeerror'
 */
function xtypeof(obj) {
    if(obj === null) return 'null'
    let p = Object.prototype.toString.call(obj)
    return String.prototype.toLowerCase.call(p === '[object Error]' ? obj.constructor.name : String.prototype.slice.call(p,8, -1) )
}
module.exports.xtypeof = xtypeof
