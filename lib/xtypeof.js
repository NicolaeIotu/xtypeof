/* xtypeof is Copyright (C) 2020 Nicolae Iotu, nicolae.g.iotu@gmail.com
Licensed under ISC terms, SPDX ISC License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING
ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN
AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE
OF THIS SOFTWARE.

Author Nicolae Iotu, nicolae.g.iotu@gmail.com */

/**
 * **xtypeof** is a lightweight, zero dependencies function which takes an object as argument and returns a lowercase
 * string representing the extended type of object passed including builtins and all other types available in the
 * environment. See `returns` section.<br>
 * Inspired by {@link  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Examples}
 * @param obj {any} Any type of object available in the environment.
 * @returns {string} `Lowercase string` defining the extended type of object passed to this function.<br>
 * Returns include "undefined", "null", "boolean", "number", "bigint", "string", "symbol", "function", "object",
 * "array", "map", "set", "date", "regexp", "weakmap", "weakset", "promise", "arraybuffer", "sharedarraybuffer",
 * "dataview", "int8array", "uint8array", "uint8clampedarray", "int16array", "uint16array", "int32array",
 * "uint32array", "float32array", "float64array", "bigint64array", "biguint64array", "error" and all other
 * environment specific extended lowercase types such as "htmldivelement" a.m.o.<br>
 * For efficiency non-regular types are not handled by xtypeof. So far just the Proxy will be misrecognized as 'object'.
 * @version 2.0.5
 * @license ISC
 * @author Nicolae Iotu <nicolae.g.iotu@gmail.com>
 * @exports xtypeof
 * @example
 * console.log(xtypeof([])) //'array'
 * @example
 * console.log(xtypeof(new RangeError('oor'))) //'error'
 */
module.exports = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase()
}
