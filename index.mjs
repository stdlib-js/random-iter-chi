// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chi@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var j=t,c=e,f=n,g=s,b=i,v=r,x=o.isPrimitive,y=d,P=m.isPrimitive,L=l,w=a,G=u.factory,N=p,R=h;var E=function t(e,n){var s,i,r,o,d;if(!x(e))throw new TypeError(R("invalid argument. First argument must be a positive number. Value: `%s`.",e));if(arguments.length>1){if(!y(n))throw new TypeError(R("invalid argument. Options argument must be an object. Value: `%s`.",n));if(s=v(n,1),L(s,"iter")){if(!P(s.iter))throw new TypeError(R("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",s.iter))}else s.iter=w;r=G(e,s),void 0===s.prng&&!1!==s.copy&&(s.state=r.state)}else r=G(e),s={iter:w,state:r.state};return d=0,j(i={},"next",m),j(i,"return",l),s&&s.prng?(j(i,"seed",null),j(i,"seedLength",null),f(i,"state",g(null),b),j(i,"stateLength",null),j(i,"byteLength",null)):(c(i,"seed",u),c(i,"seedLength",p),f(i,"state",T,O),c(i,"stateLength",h),c(i,"byteLength",E)),j(i,"PRNG",r.PRNG),N&&j(i,N,a),i;function m(){return d+=1,o||d>s.iter?{done:!0}:{value:r(),done:!1}}function l(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function a(){return t(e,s)}function u(){return r.PRNG.seed}function p(){return r.PRNG.seedLength}function h(){return r.PRNG.stateLength}function E(){return r.PRNG.byteLength}function T(){return r.PRNG.state}function O(t){r.PRNG.state=t}},T=E;export{T as default};
//# sourceMappingURL=index.mjs.map
