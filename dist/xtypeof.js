/* xtypeof is Copyright (C) 2020 Nicolae Iotu, nicolae.g.iotu@gmail.com
Licensed under SPDX Apache-2.0, http://www.apache.org/licenses/LICENSE-2.0 */
"use strict";function xtypeof(t){if(null===t)return"null";var o=Object.prototype.toString.call(t);return String.prototype.toLowerCase.call("[object Error]"===o?t.constructor.name:String.prototype.slice.call(o,8,-1))}module.exports.xtypeof=xtypeof;
//# sourceMappingURL=xtypeof.js.map