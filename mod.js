// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,h,"e"),n=s.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,u,f,l,s,p,y,g,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(a=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),u+=n.arg||"",f+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}var R=2147483648,Z=2147483647;var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var M="function"==typeof Symbol?Symbol:void 0,q="function"==typeof M?M.toStringTag:"";var B=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Y.call(r);t=r[q],a=q,e=null!=(i=r)&&z.call(i,a);try{r[q]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[q]=t:delete r[q],n}:function(r){return Y.call(r)},D="function"==typeof Uint32Array;var J="function"==typeof Uint32Array?Uint32Array:null;var K,Q="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(D&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=K,er="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null;var nr,ir="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),t=e,r=(er&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=nr,or="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var ur,fr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),t=e,r=(or&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var lr=ur,sr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var yr,gr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(sr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,vr={uint16:yr,uint8:lr};(dr=new vr.uint16(1))[0]=4660;var hr,wr,br=52===new vr.uint8(dr.buffer)[0];!0===br?(hr=1,wr=0):(hr=0,wr=1);var mr={HIGH:hr,LOW:wr},Ar=new ar(1),_r=new rr(Ar.buffer),Er=mr.HIGH,Ur=mr.LOW;function Ir(r,e,t,n){return Ar[0]=r,e[n]=_r[Er],e[n+t]=_r[Ur],e}function Sr(r){return Ir(r,[0,0],1,0)}H(Sr,"assign",Ir);var Nr,kr,xr=!0===br?1:0,Fr=new ar(1),jr=new rr(Fr.buffer);function Tr(r){return Fr[0]=r,jr[xr]}!0===br?(Nr=1,kr=0):(Nr=0,kr=1);var Or={HIGH:Nr,LOW:kr},Vr=new ar(1),$r=new rr(Vr.buffer),Gr=Or.HIGH,Hr=Or.LOW;var Wr=[0,0];function Cr(r,e){var t,n,i,a;return Sr.assign(r,Wr,1,0),t=Wr[0],t&=Z,n=Tr(e),i=t|=n&=R,a=Wr[1],$r[Gr]=i,$r[Hr]=a,Vr[0]}var Lr=1.5707963267948966,Pr=.7853981633974483;var Rr=6123233995736766e-32,Zr=2.414213562373095;var Xr=3.141592653589793;function Yr(r,e){var t;return W(e)||W(r)?NaN:P(e)?e===C?P(r)?Cr(Xr/4,r):Cr(0,r):P(r)?Cr(3*Xr/4,r):Cr(Xr,r):P(r)?Cr(Xr/2,r):0===r?e>=0&&!function(r){return!!(Tr(r)>>>31)}(e)?Cr(0,r):Cr(Xr,r):0===e?Cr(Xr/2,r):(t=function(r){var e,t,n,i;return W(r)||0===r?r:r===C?Lr:r===L?-Lr:(r<0&&(t=!0,r=-r),e=0,r>Zr?(n=Lr,e=1,r=-1/r):r<=.66?n=0:(n=Pr,e=2,r=(r-1)/(r+1)),i=(i=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(i)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(i),i=r*i+r,2===e?i+=.5*Rr:1===e&&(i+=Rr),n+=i,t?-n:n)}(r/e),e<0?t<=0?t+Xr:t-Xr:t)}function zr(r,e,t){return W(r)||W(t)||W(e)||t<=0?NaN:.3183098861837907*Yr(r-e,t)+.5}function Mr(r,e){return W(e)||W(r)||e<=0?(t=NaN,function(){return t}):function(t){if(W(t))return NaN;return.3183098861837907*Yr(t-r,e)+.5};var t}H(zr,"factory",Mr);export{zr as default,Mr as factory};
//# sourceMappingURL=mod.js.map
