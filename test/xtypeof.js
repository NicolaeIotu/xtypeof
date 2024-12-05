import { test } from 'node:test'
import assert from 'node:assert'
import xtypeof from '../lib/xtypeof.js'

let testArr = [
    undefined,                           //  0
    null,                                //  1
    undefined,                           //  2
    false,                               //  3
    1,                                   //  4
    1n,                                  //  5
    'a',                                 //  6
    Symbol('x'),               //  7
    /* node:coverage ignore next 2 */
    () => {
    },                            //  8
    {},                                  //  9
    [],                                  // 10
    new Map(),                           // 11
    new Set(),                           // 12
    new Date(),                          // 13
    /^a/,                                // 14
    new WeakMap,                         // 15
    new WeakSet,                         // 16
    /* node:coverage ignore next 2 */
    new Promise(() => {
    }),       // 17
    new ArrayBuffer(1),                  // 18
    new SharedArrayBuffer(1),            // 19
    new DataView(new ArrayBuffer(1)),    // 20
    new Int8Array(1),                    // 21
    Buffer.alloc(1),                     // 22
    new Uint8ClampedArray(1),            // 23
    new Int16Array(1),                   // 24
    new Uint16Array(1),                  // 25
    new Int32Array(1),                   // 26
    new Uint32Array(1),                  // 27
    new Float32Array(1),                 // 28
    new Float64Array(1),                 // 29
    new BigInt64Array(1),                // 30
    new BigUint64Array(1),               // 31
    new Error('err'),                    // 32
    new TypeError('terr')                // 33
]

let resultArr = [
    'undefined',                         //  0
    'null',                              //  1
    'undefined',                         //  2
    'boolean',                           //  3
    'number',                            //  4
    'bigint',                            //  5
    'string',                            //  6
    'symbol',                            //  7
    'function',                          //  8
    'object',                            //  9
    'array',                             // 10
    'map',                               // 11
    'set',                               // 12
    'date',                              // 13
    'regexp',                            // 14
    'weakmap',                           // 15
    'weakset',                           // 16
    'promise',                           // 17
    'arraybuffer',                       // 18
    'sharedarraybuffer',                 // 19
    'dataview',                          // 20
    'int8array',                         // 21
    'uint8array',                        // 22
    'uint8clampedarray',                 // 23
    'int16array',                        // 24
    'uint16array',                       // 25
    'int32array',                        // 26
    'uint32array',                       // 27
    'float32array',                      // 28
    'float64array',                      // 29
    'bigint64array',                     // 30
    'biguint64array',                    // 31
    'error',                             // 32
    'error'                              // 33
]

testArr.forEach((elem, index) => {
    test(`Standard test ${index}`, () => {
        console.log(`Test ${index}:  result should be ${resultArr[index]}`)
        assert.strictEqual(xtypeof(elem), resultArr[index])
    })
})
