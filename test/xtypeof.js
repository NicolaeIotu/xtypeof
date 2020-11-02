const tap = require('tap')
const { xtypeof } = require(`${process.cwd()}`)

let testArr = [, null, undefined, false, 1, 1n, 'a', Symbol('x'), () =>{}, {}, [], new Map(), new Set(),
    new Date(), /^a/, new WeakMap, new WeakSet, new Promise(()=>{}), new ArrayBuffer(1),
    new SharedArrayBuffer(1), new DataView(new ArrayBuffer(1)), new Int8Array(1),
    Buffer.alloc(1), new Uint8ClampedArray(1), new Int16Array(1), new Uint16Array(1),
    new Int32Array(1), new Uint32Array(1), new Float32Array(1), new Float64Array(1),
    new BigInt64Array(1), new BigUint64Array(1), new Error('err'), new TypeError('terr')]
let resultArr = ["undefined", "null", "undefined", "boolean", "number", "bigint", "string", "symbol", "function",
    "object", "array", "map", "set", "date", "regexp", "weakmap", "weakset", "promise", "arraybuffer",
    "sharedarraybuffer", "dataview", "int8array", "uint8array", "uint8clampedarray", "int16array", "uint16array",
    "int32array", "uint32array", "float32array", "float64array", "bigint64array", "biguint64array", "error", "typeerror"]

testArr.forEach((elem, index) => {
    tap.equal(xtypeof(elem), resultArr[index])
})
