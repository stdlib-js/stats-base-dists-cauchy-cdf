// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-atan2@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,e,r){return n(t)||n(r)||n(e)||r<=0?NaN:.3183098861837907*s(t-e,r)+.5}function i(t,r){return n(r)||n(t)||r<=0?e(NaN):function(e){if(n(e))return NaN;return.3183098861837907*s(e-t,r)+.5}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
