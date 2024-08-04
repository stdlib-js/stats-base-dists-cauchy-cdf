"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(P,c){
var n=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-atan2/dist'),N=.3183098861837907;function O(e,r,t){return n(e)||n(t)||n(r)||t<=0?NaN:N*q(e-r,t)+.5}c.exports=O
});var o=a(function(V,f){
var y=require('@stdlib/utils-constant-function/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-special-atan2/dist'),_=.3183098861837907;function d(e,r){if(i(r)||i(e)||r<=0)return y(NaN);return t;function t(u){return i(u)?NaN:_*E(u-e,r)+.5}}f.exports=d
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=s(),R=o();p(v,"factory",R);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
