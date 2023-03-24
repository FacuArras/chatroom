var e,t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s=i={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:r}catch(t){e=r}try{t="function"==typeof clearTimeout?clearTimeout:o}catch(e){t=o}}();var l,c=[],h=!1,u=-1;function d(){h&&l&&(h=!1,l.length?c=l.concat(c):u=-1,c.length&&p())}function p(){if(!h){var e=a(d);h=!0;for(var n=c.length;n;){for(l=c,c=[];++u<n;)l&&l[u].run();u=-1,n=c.length}l=null,h=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{return t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new _(e,t)),1!==c.length||h||a(p)},_.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};const m={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},g=function(e,t){if(!e)throw y(t)},y=function(e){return new Error("Firebase Database ("+m.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},v=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(v(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},C=function(e){const t=v(e);return w.encodeByteArray(t,!0)},b=function(e){return C(e).replace(/\./g,"")},I=function(e){try{return w.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(e){return T(void 0,e)}function T(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=T(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,k=()=>{try{return S()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&I(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},N=e=>{const t=(e=>{var t,n;return null===(n=null===(t=k())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},x=()=>{var e;return null===(e=k())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[b(JSON.stringify({alg:"none",type:"JWT"})),b(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function A(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())}function O(){return!0===m.NODE_CLIENT||!0===m.NODE_ADMIN}function L(){try{return"object"==typeof indexedDB}catch(e){return!1}}class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(q,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new M(i,o,n)}}const q=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return JSON.parse(e)}function B(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=U(I(r[0])||""),n=U(I(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},W=function(e){const t=j(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},$=function(e){const t=j(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Y(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function K(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(G(n)&&G(r)){if(!K(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function G(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function X(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,g(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},ee=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function te(e){return e&&e._delegate?e._delegate:e}class ne{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new R;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:ie})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ie){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ie){return this.instances.has(e)}getOptions(e=ie){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ie?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=ie){return this.component?this.component.multipleInstances?e:ie:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class re{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new se(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=[];var ae,le;(le=ae||(ae={}))[le.DEBUG=0]="DEBUG",le[le.VERBOSE=1]="VERBOSE",le[le.INFO=2]="INFO",le[le.WARN=3]="WARN",le[le.ERROR=4]="ERROR",le[le.SILENT=5]="SILENT";const ce={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},he=ae.INFO,ue={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},de=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ue[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class pe{constructor(e){this.name=e,this._logLevel=he,this._logHandler=de,this._userLogHandler=null,oe.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ce[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const _e=(e,t)=>t.some((t=>e instanceof t));let fe,me;const ge=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap,Ce=new WeakMap;let be={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ye.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ve.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Te(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ie(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(me||(me=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Se(this),t),Te(ge.get(this))}:function(...t){return Te(e.apply(Se(this),t))}:function(t,...n){const i=e.call(Se(this),t,...n);return ve.set(i,t.sort?t.sort():[t]),Te(i)}}function Ee(e){return"function"==typeof e?Ie(e):(e instanceof IDBTransaction&&function(e){if(ye.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));ye.set(e,t)}(e),_e(e,fe||(fe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,be):e)}function Te(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(Te(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ge.set(t,e)})).catch((()=>{})),Ce.set(t,e),t}(e);if(we.has(e))return we.get(e);const t=Ee(e);return t!==e&&(we.set(e,t),Ce.set(t,e)),t}const Se=e=>Ce.get(e);function ke(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Te(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Te(o.result),e.oldVersion,e.newVersion,Te(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const Ne=["get","getKey","getAll","getAllKeys","count"],xe=["put","add","delete","clear"],Re=new Map;function Pe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Re.get(t))return Re.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=xe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Ne.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Re.set(t,r),r}be=(e=>({...e,get:(t,n,i)=>Pe(t,n)||e.get(t,n,i),has:(t,n)=>!!Pe(t,n)||e.has(t,n)}))(be);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ae="@firebase/app",Oe="0.9.3",Le=new pe("@firebase/app"),Me="[DEFAULT]",Fe={[Ae]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},qe=new Map,Ue=new Map;function Be(e,t){try{e.container.addComponent(t)}catch(n){Le.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function je(e){const t=e.name;if(Ue.has(t))return Le.debug(`There were multiple attempts to register component ${t}.`),!1;Ue.set(t,e);for(const t of qe.values())Be(t,e);return!0}function We(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $e=new F("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ne("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="9.17.1";function ze(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Me,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw $e.create("bad-app-name",{appName:String(s)});if(n||(n=x()),!n)throw $e.create("no-options");const r=qe.get(s);if(r){if(K(n,r.options)&&K(i,r.config))return r;throw $e.create("duplicate-app",{appName:s})}const o=new re(s);for(const e of Ue.values())o.addComponent(e);const a=new He(n,i,o);return qe.set(s,a),a}function Ye(e=Me){const t=qe.get(e);if(!t&&e===Me)return ze();if(!t)throw $e.create("no-app",{appName:e});return t}function Ke(e,t,n){var i;let s=null!==(i=Fe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Le.warn(e.join(" "))}je(new ne(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ge="firebase-heartbeat-database",Qe=1,Je="firebase-heartbeat-store";let Xe=null;function Ze(){return Xe||(Xe=ke(Ge,Qe,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Je)}}).catch((e=>{throw $e.create("idb-open",{originalErrorMessage:e.message})}))),Xe}async function et(e,t){try{const n=(await Ze()).transaction(Je,"readwrite"),i=n.objectStore(Je);return await i.put(t,tt(e)),n.done}catch(e){if(e instanceof M)Le.warn(e.message);else{const t=$e.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Le.warn(t.message)}}}function tt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=1024;class it{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=st();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=st(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=nt){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),ot(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ot(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=b(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function st(){return(new Date).toISOString().substring(0,10)}class rt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!L()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Ze()).transaction(Je).objectStore(Je).get(tt(e))}catch(e){if(e instanceof M)Le.warn(e.message);else{const t=$e.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Le.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return et(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return et(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ot(e){return b(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;at="",je(new ne("platform-logger",(e=>new De(e)),"PRIVATE")),je(new ne("heartbeat",(e=>new it(e)),"PRIVATE")),Ke(Ae,Oe,at),Ke(Ae,Oe,"esm2017"),Ke("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ke("firebase","9.17.1","app");const lt="@firebase/database",ct="0.14.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:U(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return H(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ut(t)}}catch(e){}return new dt},_t=pt("localStorage"),ft=pt("sessionStorage"),mt=new pe("@firebase/database"),gt=function(){let e=1;return function(){return e++}}(),yt=function(e){const t=Z(e),n=new J;n.update(t);const i=n.digest();return w.encodeByteArray(i)},vt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=vt.apply(null,i):t+="object"==typeof i?B(i):i,t+=" "}return t};let wt=null,Ct=!0;const bt=function(e,t){g(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(mt.logLevel=ae.VERBOSE,wt=mt.log.bind(mt),t&&ft.set("logging_enabled",!0)):"function"==typeof e?wt=e:(wt=null,ft.remove("logging_enabled"))},It=function(...e){if(!0===Ct&&(Ct=!1,null===wt&&!0===ft.get("logging_enabled")&&bt(!0)),wt){const t=vt.apply(null,e);wt(t)}},Et=function(e){return function(...t){It(e,...t)}},Tt=function(...e){const t="FIREBASE INTERNAL ERROR: "+vt(...e);mt.error(t)},St=function(...e){const t=`FIREBASE FATAL ERROR: ${vt(...e)}`;throw mt.error(t),new Error(t)},kt=function(...e){const t="FIREBASE WARNING: "+vt(...e);mt.warn(t)},Nt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},xt="[MIN_NAME]",Rt="[MAX_NAME]",Pt=function(e,t){if(e===t)return 0;if(e===xt||t===Rt)return-1;if(t===xt||e===Rt)return 1;{const n=Ut(e),i=Ut(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Dt=function(e,t){return e===t?0:e<t?-1:1},At=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+B(t))},Ot=function(e){if("object"!=typeof e||null===e)return B(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=B(t[i]),n+=":",n+=Ot(e[t[i]]);return n+="}",n},Lt=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function Mt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ft=function(e){g(!Nt(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const qt=new RegExp("^-?(0*)\\d{1,10}$"),Ut=function(e){if(qt.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Bt=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw kt("Exception was thrown by user callback.",t),e}),Math.floor(0))}},jt=function(){return("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wt=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){kt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(It("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kt(e)}}class Vt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vt.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zt="5",Yt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Kt="ac",Gt="websocket",Qt="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_t.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_t.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Xt(e,t,n){let i;if(g("string"==typeof t,"typeof type must == string"),g("object"==typeof n,"typeof params must == object"),t===Gt)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Qt)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return Mt(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.counters_={}}incrementCounter(e,t=1){H(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return E(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en={},tn={};function nn(e){const t=e.toString();return en[t]||(en[t]=new Zt),en[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sn{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Bt((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="start";class on{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Et(e),this.stats_=nn(t),this.urlFn=e=>(this.appCheckToken&&(e[Kt]=this.appCheckToken),Xt(t,Qt,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(O()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new an(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===rn)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[rn]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=zt,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Kt]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Yt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){on.forceAllow_=!0}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){return!O()&&(!!on.forceAllow_||!(on.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=C(t),i=Lt(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(O())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=B(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class an{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,O())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=gt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=an.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){It("frame writing exception"),e.stack&&It(e.stack),It(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||It("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){O()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{It("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln=null;"undefined"!=typeof MozWebSocket?ln=MozWebSocket:"undefined"!=typeof WebSocket&&(ln=WebSocket);class cn{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Et(this.connId),this.stats_=nn(t),this.connURL=cn.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r.v=zt,!O()&&"undefined"!=typeof location&&location.hostname&&Yt.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[Kt]=i),s&&(r.p=s),Xt(e,Gt,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_t.set("previous_websocket_failure",!0);try{let e;if(O()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${zt}/${ht}/${i.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},s=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;s&&(e.proxy={origin:s})}this.mySock=new ln(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){cn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ln&&!cn.forceDisallow_}static previouslyFailed(){return _t.isInMemoryStorage||!0===_t.get("previous_websocket_failure")}markConnectionHealthy(){_t.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=U(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Lt(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cn.responsesRequiredToBeHealthy=2,cn.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[on,cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=cn&&cn.isAvailable();let n=t&&!cn.previouslyFailed();if(e.webSocketOnly&&(t||kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[cn];else{const e=this.transports_=[];for(const t of hn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);hn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hn.globalTransportInitialized_=!1;class un{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Et("c:"+this.id+":"),this.transportManager_=new hn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=At("t",e),n=At("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=At("t",e),n=At("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=At("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Tt("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),zt!==n&&kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Wt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_t.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){g(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends pn{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||A()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new _n}getInitialEvent(e){return g("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=32,mn=768;class gn{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function yn(){return new gn("")}function vn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function wn(e){return e.pieces_.length-e.pieceNum_}function Cn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new gn(e.pieces_,t)}function bn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function In(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function En(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new gn(t,0)}function Tn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof gn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new gn(n,0)}function Sn(e){return e.pieceNum_>=e.pieces_.length}function kn(e,t){const n=vn(e),i=vn(t);if(null===n)return t;if(n===i)return kn(Cn(e),Cn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Nn(e,t){if(wn(e)!==wn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function xn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(wn(e)>wn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Rn{constructor(e,t){this.errorPrefix_=t,this.parts_=In(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ee(this.parts_[e]);Pn(this)}}function Pn(e){if(e.byteLength_>mn)throw new Error(e.errorPrefix_+"has a key path longer than "+mn+" bytes ("+e.byteLength_+").");if(e.parts_.length>fn)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fn+") or object contains a cycle "+Dn(e))}function Dn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends pn{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new An}getInitialEvent(e){return g("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=1e3;class Ln extends dn{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ln.nextPersistentConnectionId_++,this.log_=Et("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=On,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!O())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");An.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&_n.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(B(s)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new R,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Ln.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&H(e,"w")){const n=V(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||$(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=W(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Tt("Unrecognized action received from server: "+B(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=On),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ln.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){g(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?It("getToken() completed but was canceled"):(It("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new un(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{kt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&kt(e),a())}}}interrupt(e){It("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){It("Resuming connection for reason: "+e),delete this.interruptReasons_[e],z(this.interruptReasons_)&&(this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ot(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new gn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){It("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){It("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";O()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ht.replace(/\./g,"-")]=1,A()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_n.getInstance().currentlyOnline();return z(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0,Ln.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Mn(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Mn(xt,e),i=new Mn(xt,t);return 0!==this.compare(n,i)}minPost(){return Mn.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class Un extends Fn{static get __EMPTY_NODE(){return qn}static set __EMPTY_NODE(e){qn=e}compare(e,t){return Pt(e.name,t.name)}isDefinedOn(e){throw y("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Mn.MIN}maxPost(){return new Mn(Rt,qn)}makePost(e,t){return g("string"==typeof e,"KeyIndex indexValue must always be a string."),new Mn(e,qn)}toString(){return".key"}}const Bn=new Un;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wn{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Wn.RED,this.left=null!=i?i:$n.EMPTY_NODE,this.right=null!=s?s:$n.EMPTY_NODE}copy(e,t,n,i,s){return new Wn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $n.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return $n.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wn.RED=!0,Wn.BLACK=!1;class $n{constructor(e,t=$n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wn.BLACK,null,null))}remove(e){return new $n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new jn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new jn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new jn(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hn(e,t){return Pt(e.name,t.name)}function Vn(e,t){return Pt(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;$n.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Wn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Yn=function(e){return"number"==typeof e?"number:"+Ft(e):"string:"+e},Kn=function(e){if(e.isLeafNode()){const t=e.val();g("string"==typeof t||"number"==typeof t||"object"==typeof t&&H(t,".sv"),"Priority must be a string or number.")}else g(e===zn||e.isEmpty(),"priority of unexpected type.");g(e===zn||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Gn,Qn,Jn;class Xn{constructor(e,t=Xn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Kn(this.priorityNode_)}static set __childrenNodeConstructor(e){Gn=e}static get __childrenNodeConstructor(){return Gn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Xn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Sn(e)?this:".priority"===vn(e)?this.priorityNode_:Xn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Xn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=vn(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(g(".priority"!==n||1===wn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Xn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Cn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ft(this.value_):this.value_,this.lazyHash_=yt(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xn.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Xn.VALUE_TYPE_ORDER.indexOf(t),s=Xn.VALUE_TYPE_ORDER.indexOf(n);return g(i>=0,"Unknown leaf type: "+t),g(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Xn.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Zn=new class extends Fn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Pt(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Mn.MIN}maxPost(){return new Mn(Rt,new Xn("[PRIORITY-POST]",Jn))}makePost(e,t){const n=Qn(e);return new Mn(t,new Xn("[PRIORITY-POST]",n))}toString(){return".priority"}},ei=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ei,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Wn(a,o.node,Wn.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new Wn(a,o.node,Wn.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new Wn(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Wn.BLACK):(a(i,Wn.BLACK),a(i,Wn.RED))}return r}(new ti(e.length));return new $n(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;const si={};class ri{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(si&&Zn,"ChildrenNode.ts has not been loaded"),ii=ii||new ri({".priority":si},{".priority":Zn}),ii}get(e){const t=V(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $n?t:null}hasIndex(e){return H(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Mn.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?ni(n,e.getCompare()):si;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new ri(c,l)}addToIndexes(e,t){const n=Y(this.indexes_,((n,i)=>{const s=V(this.indexSet_,i);if(g(s,"Missing index implementation for "+i),n===si){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Mn.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),ni(n,s.getCompare())}return si}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Mn(e.name,i))),s.insert(e,e.node)}}));return new ri(n,this.indexSet_)}removeFromIndexes(e,t){const n=Y(this.indexes_,(n=>{if(n===si)return n;{const i=t.get(e.name);return i?n.remove(new Mn(e.name,i)):n}}));return new ri(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;class ai{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Kn(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oi||(oi=new ai(new $n(Vn),null,ri.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oi}updatePriority(e){return this.children_.isEmpty()?this:new ai(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?oi:t}}getChild(e){const t=vn(e);return null===t?this:this.getImmediateChild(t).getChild(Cn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Mn(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?oi:this.priorityNode_;return new ai(i,r,s)}}updateChild(e,t){const n=vn(e);if(null===n)return t;{g(".priority"!==vn(e)||1===wn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Cn(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Zn,((r,o)=>{t[r]=o.val(e),n++,s&&ai.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yn(this.getPriority().val())+":"),this.forEachChild(Zn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":yt(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Mn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Mn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Mn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Mn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Mn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===li?-1:0}withIndex(e){if(e===Bn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ai(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Zn),n=t.getIterator(Zn);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Bn?null:this.indexMap_.get(e.toString())}}ai.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const li=new class extends ai{constructor(){super(new $n(Vn),ai.EMPTY_NODE,ri.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ai.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Mn,{MIN:{value:new Mn(xt,ai.EMPTY_NODE)},MAX:{value:new Mn(Rt,li)}}),Un.__EMPTY_NODE=ai.EMPTY_NODE,Xn.__childrenNodeConstructor=ai,zn=li,function(e){Jn=e}(li);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ci=!0;function hi(e,t=null){if(null===e)return ai.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),g(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Xn(e,hi(t))}if(e instanceof Array||!ci){let n=ai.EMPTY_NODE;return Mt(e,((t,i)=>{if(H(e,t)&&"."!==t.substring(0,1)){const e=hi(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(hi(t))}{const n=[];let i=!1;if(Mt(e,((e,t)=>{if("."!==e.substring(0,1)){const s=hi(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Mn(e,s)))}})),0===n.length)return ai.EMPTY_NODE;const s=ni(n,Hn,(e=>e.name),Vn);if(i){const e=ni(n,Zn.getCompare());return new ai(s,hi(t),new ri({".priority":e},{".priority":Zn}))}return new ai(s,hi(t),ri.Default)}}!function(e){Qn=e}(hi);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui extends Fn{constructor(e){super(),this.indexPath_=e,g(!Sn(e)&&".priority"!==vn(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Pt(e.name,t.name):s}makePost(e,t){const n=hi(e),i=ai.EMPTY_NODE.updateChild(this.indexPath_,n);return new Mn(t,i)}maxPost(){const e=ai.EMPTY_NODE.updateChild(this.indexPath_,li);return new Mn(Rt,e)}toString(){return In(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new class extends Fn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Pt(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Mn.MIN}maxPost(){return Mn.MAX}makePost(e,t){const n=hi(e);return new Mn(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e){return{type:"value",snapshotNode:e}}function _i(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function fi(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function mi(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gi{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(fi(t,o)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(_i(t,n)):r.trackChildChange(mi(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Zn,((e,i)=>{t.hasChild(e)||n.trackChildChange(fi(e,i))})),t.isLeafNode()||t.forEachChild(Zn,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(mi(t,i,s))}else n.trackChildChange(_i(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ai.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.indexedFilter_=new gi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yi.getStartPost_(e),this.endPost_=yi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new Mn(t,n))||(n=ai.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ai.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ai.EMPTY_NODE);const s=this;return t.forEachChild(Zn,((e,t)=>{s.matches(new Mn(e,t))||(i=i.updateImmediateChild(e,ai.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new yi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Mn(t,n))||(n=ai.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=ai.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=ai.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(ai.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,ai.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;g(o.numChildren()===this.limit_,"");const a=new Mn(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:r(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(mi(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(fi(t,e));const n=o.updateImmediateChild(t,ai.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=s&&s.trackChildChange(_i(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&r(l,a)>=0?(null!=s&&(s.trackChildChange(fi(l.name,l.node)),s.trackChildChange(_i(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,ai.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Zn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xt}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Zn}copy(){const e=new wi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ci(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Zn?n="$priority":e.index_===di?n="$value":e.index_===Bn?n="$key":(g(e.index_ instanceof ui,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=B(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=B(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+B(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=B(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+B(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function bi(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Zn&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends dn{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Et("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Ii.getListenId_(e,n),o={};this.listens_[r]=o;const a=Ci(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),V(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ii.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ci(e._queryParams),n=e._path.toString(),i=new R;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Q(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=U(o.responseText)}catch(e){kt("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&kt("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.rootNode_=ai.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){return{value:null,children:new Map}}function Si(e,t,n){if(Sn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=vn(t);e.children.has(i)||e.children.set(i,Ti());Si(e.children.get(i),t=Cn(t),n)}}function ki(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{ki(i,new gn(t.toString()+"/"+e),n)}))}class Ni{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Mt(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ni(e);const n=1e4+2e4*Math.random();Wt(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Mt(e,((e,i)=>{i>0&&H(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Wt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ri,Pi;function Di(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Pi=Ri||(Ri={}))[Pi.OVERWRITE=0]="OVERWRITE",Pi[Pi.MERGE=1]="MERGE",Pi[Pi.ACK_USER_WRITE=2]="ACK_USER_WRITE",Pi[Pi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ai{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ri.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Sn(this.path)){if(null!=this.affectedTree.value)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new gn(e));return new Ai(yn(),t,this.revert)}}return g(vn(this.path)===e,"operationForChild called for unrelated child."),new Ai(Cn(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.source=e,this.path=t,this.type=Ri.LISTEN_COMPLETE}operationForChild(e){return Sn(this.path)?new Oi(this.source,yn()):new Oi(this.source,Cn(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ri.OVERWRITE}operationForChild(e){return Sn(this.path)?new Li(this.source,yn(),this.snap.getImmediateChild(e)):new Li(this.source,Cn(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ri.MERGE}operationForChild(e){if(Sn(this.path)){const t=this.children.subtree(new gn(e));return t.isEmpty()?null:t.value?new Li(this.source,yn(),t.value):new Mi(this.source,yn(),t)}return g(vn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mi(this.source,Cn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Sn(e))return this.isFullyInitialized()&&!this.filtered_;const t=vn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ui(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw y("Should only compare child_ events.");const i=new Mn(t.childName,t.snapshotNode),s=new Mn(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Bi(e,t){return{eventCache:e,serverCache:t}}function ji(e,t,n,i){return Bi(new Fi(t,n,i),e.serverCache)}function Wi(e,t,n,i){return Bi(e.eventCache,new Fi(t,n,i))}function $i(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Hi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;class zi{constructor(e,t=(()=>(Vi||(Vi=new $n(Dt)),Vi))()){this.value=e,this.children=t}static fromObject(e){let t=new zi(null);return Mt(e,((e,n)=>{t=t.set(new gn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:yn(),value:this.value};if(Sn(e))return null;{const n=vn(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Cn(e),t);if(null!=s){return{path:Tn(new gn(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Sn(e))return this;{const t=vn(e),n=this.children.get(t);return null!==n?n.subtree(Cn(e)):new zi(null)}}set(e,t){if(Sn(e))return new zi(t,this.children);{const n=vn(e),i=(this.children.get(n)||new zi(null)).set(Cn(e),t),s=this.children.insert(n,i);return new zi(this.value,s)}}remove(e){if(Sn(e))return this.children.isEmpty()?new zi(null):new zi(null,this.children);{const t=vn(e),n=this.children.get(t);if(n){const i=n.remove(Cn(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new zi(null):new zi(this.value,s)}return this}}get(e){if(Sn(e))return this.value;{const t=vn(e),n=this.children.get(t);return n?n.get(Cn(e)):null}}setTree(e,t){if(Sn(e))return t;{const n=vn(e),i=(this.children.get(n)||new zi(null)).setTree(Cn(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new zi(this.value,s)}}fold(e){return this.fold_(yn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Tn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,yn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Sn(e))return null;{const i=vn(e),s=this.children.get(i);return s?s.findOnPath_(Cn(e),Tn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,yn(),t)}foreachOnPath_(e,t,n){if(Sn(e))return this;{this.value&&n(t,this.value);const i=vn(e),s=this.children.get(i);return s?s.foreachOnPath_(Cn(e),Tn(t,i),n):new zi(null)}}foreach(e){this.foreach_(yn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Tn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.writeTree_=e}static empty(){return new Yi(new zi(null))}}function Ki(e,t,n){if(Sn(t))return new Yi(new zi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=kn(s,t);return r=r.updateChild(o,n),new Yi(e.writeTree_.set(s,r))}{const i=new zi(n),s=e.writeTree_.setTree(t,i);return new Yi(s)}}}function Gi(e,t,n){let i=e;return Mt(n,((e,n)=>{i=Ki(i,Tn(t,e),n)})),i}function Qi(e,t){if(Sn(t))return Yi.empty();{const n=e.writeTree_.setTree(t,new zi(null));return new Yi(n)}}function Ji(e,t){return null!=Xi(e,t)}function Xi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(kn(n.path,t)):null}function Zi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Zn,((e,n)=>{t.push(new Mn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Mn(e,n.value))})),t}function es(e,t){if(Sn(t))return e;{const n=Xi(e,t);return new Yi(null!=n?new zi(n):e.writeTree_.subtree(t))}}function ts(e){return e.writeTree_.isEmpty()}function ns(e,t){return is(yn(),e.writeTree_,t)}function is(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(g(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=is(Tn(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Tn(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e,t){return gs(t,e)}function rs(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));g(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&os(t,i.path)?s=!1:xn(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=ls(e.allWrites,as,yn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Qi(e.visibleWrites,i.path);else{Mt(i.children,(t=>{e.visibleWrites=Qi(e.visibleWrites,Tn(i.path,t))}))}return!0}return!1}function os(e,t){if(e.snap)return xn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&xn(Tn(e.path,n),t))return!0;return!1}function as(e){return e.visible}function ls(e,t,n){let i=Yi.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)xn(n,e)?(t=kn(n,e),i=Ki(i,t,r.snap)):xn(e,n)&&(t=kn(e,n),i=Ki(i,yn(),r.snap.getChild(t)));else{if(!r.children)throw y("WriteRecord should have .snap or .children");if(xn(n,e))t=kn(n,e),i=Gi(i,t,r.children);else if(xn(e,n))if(t=kn(e,n),Sn(t))i=Gi(i,yn(),r.children);else{const e=V(r.children,vn(t));if(e){const n=e.getChild(Cn(t));i=Ki(i,yn(),n)}}}}}return i}function cs(e,t,n,i,s){if(i||s){const r=es(e.visibleWrites,t);if(!s&&ts(r))return n;if(s||null!=n||Ji(r,yn())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(xn(e.path,t)||xn(t,e.path))};return ns(ls(e.allWrites,r,t),n||ai.EMPTY_NODE)}return null}{const i=Xi(e.visibleWrites,t);if(null!=i)return i;{const i=es(e.visibleWrites,t);if(ts(i))return n;if(null!=n||Ji(i,yn())){return ns(i,n||ai.EMPTY_NODE)}return null}}}function hs(e,t,n,i){return cs(e.writeTree,e.treePath,t,n,i)}function us(e,t){return function(e,t,n){let i=ai.EMPTY_NODE;const s=Xi(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Zn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=es(e.visibleWrites,t);return n.forEachChild(Zn,((e,t)=>{const n=ns(es(s,new gn(e)),t);i=i.updateImmediateChild(e,n)})),Zi(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Zi(es(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function ds(e,t,n,i){return function(e,t,n,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Tn(t,n);if(Ji(e.visibleWrites,r))return null;{const t=es(e.visibleWrites,r);return ts(t)?s.getChild(n):ns(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function ps(e,t){return function(e,t){return Xi(e.visibleWrites,t)}(e.writeTree,Tn(e.treePath,t))}function _s(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=es(e.visibleWrites,t),c=Xi(l,yn());if(null!=c)a=c;else{if(null==n)return[];a=ns(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function fs(e,t,n){return function(e,t,n,i){const s=Tn(t,n),r=Xi(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return ns(es(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ms(e,t){return gs(Tn(e.treePath,t),e.writeTree)}function gs(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;g("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),g(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,mi(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,fi(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,_i(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw y("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,mi(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class ws{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fs(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Hi(this.viewCache_),s=_s(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t,n,i,s){const r=new ys;let o,a;if(n.type===Ri.OVERWRITE){const l=n;l.source.fromUser?o=Es(e,t,l.path,l.snap,i,s,r):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Sn(l.path),o=Is(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===Ri.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Tn(n,i);Ts(t,vn(c))&&(a=Es(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Tn(n,i);Ts(t,vn(c))||(a=Es(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=ks(e,t,l.path,l.children,i,s,a,r))}else if(n.type===Ri.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=ps(i,n))return t;{const a=new ws(i,t,s),l=t.eventCache.getNode();let c;if(Sn(n)||".priority"===vn(n)){let n;if(t.serverCache.isFullyInitialized())n=hs(i,Hi(t));else{const e=t.serverCache.getNode();g(e instanceof ai,"serverChildren would be complete if leaf node"),n=us(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const s=vn(n);let h=fs(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=l.getImmediateChild(s)),c=null!=h?e.filter.updateChild(l,s,h,Cn(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,ai.EMPTY_NODE,Cn(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=hs(i,Hi(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=ps(i,yn()),ji(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=ps(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Sn(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Is(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Sn(n)){let i=new zi(null);return l.getNode().forEachChild(Bn,((e,t)=>{i=i.set(new gn(e),t)})),ks(e,t,n,i,s,r,a,o)}return t}{let c=new zi(null);return i.foreach(((e,t)=>{const i=Tn(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),ks(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Ri.LISTEN_COMPLETE)throw y("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=Wi(t,r.getNode(),r.isFullyInitialized()||Sn(n),r.isFiltered());return bs(e,o,n,i,vs,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=$i(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(pi($i(t)))}}(t,o,l),{viewCache:o,changes:l}}function bs(e,t,n,i,s,r){const o=t.eventCache;if(null!=ps(i,n))return t;{let a,l;if(Sn(n))if(g(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Hi(t),s=us(i,n instanceof ai?n:ai.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=hs(i,Hi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=vn(n);if(".priority"===c){g(1===wn(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=ds(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=Cn(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=ds(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=fs(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,s,r):o.getNode()}}return ji(t,a,o.isFullyInitialized()||Sn(n),e.filter.filtersNodes())}}function Is(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(Sn(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=vn(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return t;const s=Cn(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,vs,null)}const u=Wi(t,c,l.isFullyInitialized()||Sn(n),h.filtersNodes());return bs(e,u,n,s,new ws(s,u,r),a)}function Es(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new ws(s,t,r);if(Sn(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=ji(t,c,!0,e.filter.filtersNodes());else{const s=vn(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=ji(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Cn(n),c=a.getNode().getImmediateChild(s);let u;if(Sn(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===bn(r)&&e.getChild(En(r)).isEmpty()?e:e.updateChild(r,i):ai.EMPTY_NODE}if(c.equals(u))l=t;else{l=ji(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Ts(e,t){return e.eventCache.isCompleteForChild(t)}function Ss(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ks(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Sn(n)?i:new zi(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Ss(0,t.serverCache.getNode().getImmediateChild(n),i);c=Is(e,c,new gn(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=Ss(0,t.serverCache.getNode().getImmediateChild(n),i);c=Is(e,c,new gn(n),l,s,r,o,a)}})),c}class Ns{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new gi(n.getIndex()),s=(r=n).loadsAllData()?new gi(r.getIndex()):r.hasLimit()?new vi(r):new yi(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(ai.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ai.EMPTY_NODE,a.getNode(),null),h=new Fi(l,o.isFullyInitialized(),i.filtersNodes()),u=new Fi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bi(u,h),this.eventGenerator_=new qi(this.query_)}get query(){return this.query_}}function xs(e,t){const n=Hi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Sn(t)&&!n.getImmediateChild(vn(t)).isEmpty())?n.getChild(t):null}function Rs(e){return 0===e.eventRegistrations_.length}function Ps(e,t,n){const i=[];if(n){g(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Ds(e,t,n,i){t.type===Ri.MERGE&&null!==t.source.queryId&&(g(Hi(e.viewCache_),"We should always have a full cache before handling merges"),g($i(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Cs(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,g(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),g(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,As(e,r.changes,r.viewCache.eventCache.getNode(),null)}function As(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ui(e,s,"child_removed",t,i,n),Ui(e,s,"child_added",t,i,n),Ui(e,s,"child_moved",r,i,n),Ui(e,s,"child_changed",t,i,n),Ui(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os,Ls;class Ms{constructor(){this.views=new Map}}function Fs(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return g(null!=r,"SyncTree gave us an op for an invalid query."),Ds(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Ds(r,t,n,i));return s}}function qs(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=hs(n,s?i:null),r=!1;e?r=!0:i instanceof ai?(e=us(n,i),r=!1):(e=ai.EMPTY_NODE,r=!1);const o=Bi(new Fi(e,r,!1),new Fi(i,s,!1));return new Ns(t,o)}return o}function Us(e,t,n,i,s,r){const o=qs(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Zn,((e,t)=>{i.push(_i(e,t))}));return n.isFullyInitialized()&&i.push(pi(n.getNode())),As(e,i,n.getNode(),t)}(o,n)}function Bs(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=Vs(e);if("default"===s)for(const[t,s]of e.views.entries())o=o.concat(Ps(s,n,i)),Rs(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||r.push(s.query));else{const t=e.views.get(s);t&&(o=o.concat(Ps(t,n,i)),Rs(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!Vs(e)&&r.push(new(g(Os,"Reference.ts has not been loaded"),Os)(t._repo,t._path)),{removed:r,events:o}}function js(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ws(e,t){let n=null;for(const i of e.views.values())n=n||xs(i,t);return n}function $s(e,t){if(t._queryParams.loadsAllData())return zs(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Hs(e,t){return null!=$s(e,t)}function Vs(e){return null!=zs(e)}function zs(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys=1;class Ks{constructor(e){this.listenProvider_=e,this.syncPointTree_=new zi(null),this.pendingWriteTree_={visibleWrites:Yi.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gs(e,t,n,i,s){return function(e,t,n,i,s){g(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Ki(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?nr(e,new Li({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Qs(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(rs(e.pendingWriteTree_,t)){let t=new zi(null);return null!=i.snap?t=t.set(yn(),!0):Mt(i.children,(e=>{t=t.set(new gn(e),!0)})),nr(e,new Ai(i.path,t,n))}return[]}function Js(e,t,n){return nr(e,new Li({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Xs(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||Hs(o,t))){const l=Bs(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>Vs(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Vs(t)){return[zs(t)]}{let e=[];return t&&(e=js(t)),Mt(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=rr(e,i);e.listenProvider_.startListening(ur(s),or(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(ur(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(ar(t));e.listenProvider_.stopListening(ur(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ar(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Zs(e,t,n,i){const s=lr(e,i);if(null!=s){const i=cr(s),r=i.path,o=i.queryId,a=kn(r,t);return hr(e,r,new Li(Di(o),a,n))}return[]}function er(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=kn(e,s);r=r||Ws(t,n),o=o||Vs(t)}));let a,l=e.syncPointTree_.get(s);if(l?(o=o||Vs(l),r=r||Ws(l,yn())):(l=new Ms,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=r)a=!0;else{a=!1,r=ai.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Ws(t,yn());n&&(r=r.updateImmediateChild(e,n))}))}const c=Hs(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=ar(t);g(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ys++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=Us(l,t,n,ss(e.pendingWriteTree_,s),r,a);if(!c&&!o&&!i){const n=$s(l,t);h=h.concat(function(e,t,n){const i=t._path,s=or(e,t),r=rr(e,n),o=e.listenProvider_.startListening(ur(t),s,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(s)g(!Vs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Sn(e)&&t&&Vs(t))return[zs(t).query];{let e=[];return t&&(e=e.concat(js(t).map((e=>e.query)))),Mt(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(ur(i),or(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function tr(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Ws(n,kn(e,t));if(i)return i}));return cs(i,t,s,n,!0)}function nr(e,t){return ir(t,e.syncPointTree_,null,ss(e.pendingWriteTree_,yn()))}function ir(e,t,n,i){if(Sn(e.path))return sr(e,t,n,i);{const s=t.get(yn());null==n&&null!=s&&(n=Ws(s,yn()));let r=[];const o=vn(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=ms(i,o);r=r.concat(ir(a,l,e,t))}return s&&(r=r.concat(Fs(s,e,i,n))),r}}function sr(e,t,n,i){const s=t.get(yn());null==n&&null!=s&&(n=Ws(s,yn()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=ms(i,t),l=e.operationForChild(t);l&&(r=r.concat(sr(l,s,o,a)))})),s&&(r=r.concat(Fs(s,e,i,n))),r}function rr(e,t){const n=t.query,i=or(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ai.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=lr(e,n);if(i){const n=cr(i),s=n.path,r=n.queryId,o=kn(s,t);return hr(e,s,new Oi(Di(r),o))}return[]}(e,n._path,i):function(e,t){return nr(e,new Oi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Xs(e,n,null,i)}}}}function or(e,t){const n=ar(t);return e.queryToTagMap.get(n)}function ar(e){return e._path.toString()+"$"+e._queryIdentifier}function lr(e,t){return e.tagToQueryMap.get(t)}function cr(e){const t=e.indexOf("$");return g(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new gn(e.substr(0,t))}}function hr(e,t,n){const i=e.syncPointTree_.get(t);g(i,"Missing sync point for query tag that we're tracking");return Fs(i,n,ss(e.pendingWriteTree_,t),null)}function ur(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(g(Ls,"Reference.ts has not been loaded"),Ls)(e._repo,e._path):e}class dr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dr(t)}node(){return this.node_}}class pr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Tn(this.path_,e);return new pr(this.syncTree_,t)}node(){return tr(this.syncTree_,this.path_)}}const _r=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},fr=function(e,t,n){return e&&"object"==typeof e?(g(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?mr(e[".sv"],t,n):"object"==typeof e[".sv"]?gr(e[".sv"],t):void g(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},mr=function(e,t,n){if("timestamp"===e)return n.timestamp;g(!1,"Unexpected server value: "+e)},gr=function(e,t,n){e.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&g(!1,"Unexpected increment value: "+i);const s=t.node();if(g(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},yr=function(e,t,n,i){return wr(t,new pr(n,e),i)},vr=function(e,t,n){return wr(e,new dr(t),n)};function wr(e,t,n){const i=e.getPriority().val(),s=fr(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=fr(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Xn(r,hi(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Xn(s))),i.forEachChild(Zn,((e,i)=>{const s=wr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function br(e,t){let n=t instanceof gn?t:new gn(t),i=e,s=vn(n);for(;null!==s;){const e=V(i.node.children,s)||{children:{},childCount:0};i=new Cr(s,i,e),n=Cn(n),s=vn(n)}return i}function Ir(e){return e.node.value}function Er(e,t){e.node.value=t,xr(e)}function Tr(e){return e.node.childCount>0}function Sr(e,t){Mt(e.node.children,((n,i)=>{t(new Cr(n,e,i))}))}function kr(e,t,n,i){n&&!i&&t(e),Sr(e,(e=>{kr(e,t,!0,i)})),n&&i&&t(e)}function Nr(e){return new gn(null===e.parent?e.name:Nr(e.parent)+"/"+e.name)}function xr(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ir(e)&&!Tr(e)}(n),s=H(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,xr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,xr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Rr=/[\[\].#$\/\u0000-\u001F\u007F]/,Pr=/[\[\].#$\u0000-\u001F\u007F]/,Dr=10485760,Ar=function(e){return"string"==typeof e&&0!==e.length&&!Rr.test(e)},Or=function(e){return"string"==typeof e&&0!==e.length&&!Pr.test(e)},Lr=function(e,t,n){const i=n instanceof gn?new Rn(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Dn(i));if("function"==typeof t)throw new Error(e+"contains a function "+Dn(i)+" with contents = "+t.toString());if(Nt(t))throw new Error(e+"contains "+t.toString()+" "+Dn(i));if("string"==typeof t&&t.length>3495253.3333333335&&ee(t)>Dr)throw new Error(e+"contains a string greater than "+Dr+" utf8 bytes "+Dn(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(Mt(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Ar(t)))throw new Error(e+" contains an invalid key ("+t+") "+Dn(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=ee(a),Pn(o),Lr(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=ee(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Dn(i)+" in addition to actual children.")}},Mr=function(e,t,n,i){if(!(i&&void 0===n||Or(n)))throw new Error(X(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Fr=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mr(e,t,n,i)},qr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ar(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Or(e)}(n))throw new Error(X(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Br(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Nn(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function jr(e,t,n){Br(e,n),$r(e,(e=>Nn(e,t)))}function Wr(e,t,n){Br(e,n),$r(e,(e=>xn(e,t)||xn(t,e)))}function $r(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(Hr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Hr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();wt&&It("event: "+n.toString()),Bt(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="repo_interrupt",zr=25;class Yr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ur,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ti(),this.transactionQueueTree_=new Cr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Kr(e,t,n){if(e.stats_=nn(e.repoInfo_),e.forceRestClient_||jt())e.server_=new Ii(e.repoInfo_,((t,n,i,s)=>{Jr(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Xr(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ln(e.repoInfo_,t,((t,n,i,s)=>{Jr(e,t,n,i,s)}),(t=>{Xr(e,t)}),(t=>{!function(e,t){Mt(t,((t,n)=>{Zr(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return tn[n]||(tn[n]=t()),tn[n]}(e.repoInfo_,(()=>new xi(e.stats_,e.server_))),e.infoData_=new Ei,e.infoSyncTree_=new Ks({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Js(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Zr(e,"connected",!1),e.serverSyncTree_=new Ks({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Wr(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Gr(e){const t=e.infoData_.getNode(new gn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Qr(e){return _r({timestamp:Gr(e)})}function Jr(e,t,n,i,s){e.dataUpdateCount++;const r=new gn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=Y(n,(e=>hi(e)));o=function(e,t,n,i){const s=lr(e,i);if(s){const i=cr(s),r=i.path,o=i.queryId,a=kn(r,t),l=zi.fromObject(n);return hr(e,r,new Mi(Di(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=hi(n);o=Zs(e.serverSyncTree_,r,t,s)}else if(i){const t=Y(n,(e=>hi(e)));o=function(e,t,n){const i=zi.fromObject(n);return nr(e,new Mi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=hi(n);o=Js(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=oo(e,r)),Wr(e.eventQueue_,a,o)}function Xr(e,t){Zr(e,"connected",t),!1===t&&function(e){io(e,"onDisconnectEvents");const t=Qr(e),n=Ti();ki(e.onDisconnect_,yn(),((i,s)=>{const r=yr(i,s,e.serverSyncTree_,t);Si(n,i,r)}));let i=[];ki(n,yn(),((t,n)=>{i=i.concat(Js(e.serverSyncTree_,t,n));const s=uo(e,t);oo(e,s)})),e.onDisconnect_=Ti(),Wr(e.eventQueue_,yn(),i)}(e)}function Zr(e,t,n){const i=new gn("/.info/"+t),s=hi(n);e.infoData_.updateSnapshot(i,s);const r=Js(e.infoSyncTree_,i,s);Wr(e.eventQueue_,i,r)}function eo(e){return e.nextWriteId_++}function to(e,t,n){let i;i=".info"===vn(t._path)?Xs(e.infoSyncTree_,t,n):Xs(e.serverSyncTree_,t,n),jr(e.eventQueue_,t._path,i)}function no(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Vr)}function io(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),It(n,...t)}function so(e,t,n){return tr(e.serverSyncTree_,t,n)||ai.EMPTY_NODE}function ro(e,t=e.transactionQueueTree_){if(t||ho(e,t),Ir(t)){const n=lo(e,t);g(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=so(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];g(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=kn(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{io(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Qs(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ho(e,br(e.transactionQueueTree_,t)),ro(e,e.transactionQueueTree_),Wr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Bt(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{kt("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}oo(e,t)}}),o)}(e,Nr(t),n)}else Tr(t)&&Sr(t,(t=>{ro(e,t)}))}function oo(e,t){const n=ao(e,t),i=Nr(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let r=0;r<t.length;r++){const l=t[r],c=kn(n,l.path);let h,u=!1;if(g(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,s=s.concat(Qs(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=zr)u=!0,h="maxretry",s=s.concat(Qs(e.serverSyncTree_,l.currentWriteId,!0));else{const n=so(e,l.path,o);l.currentInputSnapshot=n;const i=t[r].update(n.val());if(void 0!==i){Lr("transaction failed: Data returned ",i,l.path);let t=hi(i);"object"==typeof i&&null!=i&&H(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=l.currentWriteId,a=Qr(e),c=vr(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=eo(e),o.splice(o.indexOf(r),1),s=s.concat(Gs(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(Qs(e.serverSyncTree_,r,!0))}else u=!0,h="nodata",s=s.concat(Qs(e.serverSyncTree_,l.currentWriteId,!0))}Wr(e.eventQueue_,n,s),s=[],u&&(t[r].status=2,a=t[r].unwatcher,setTimeout(a,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((()=>t[r].onComplete(null,!1,t[r].currentInputSnapshot))):i.push((()=>t[r].onComplete(new Error(h),!1,null)))))}var a;ho(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Bt(i[e]);ro(e,e.transactionQueueTree_)}(e,lo(e,n),i),i}function ao(e,t){let n,i=e.transactionQueueTree_;for(n=vn(t);null!==n&&void 0===Ir(i);)i=br(i,n),n=vn(t=Cn(t));return i}function lo(e,t){const n=[];return co(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function co(e,t,n){const i=Ir(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Sr(t,(t=>{co(e,t,n)}))}function ho(e,t){const n=Ir(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Er(t,n.length>0?n:void 0)}Sr(t,(t=>{ho(e,t)}))}function uo(e,t){const n=Nr(ao(e,t)),i=br(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{po(e,t)})),po(e,i),kr(i,(t=>{po(e,t)})),n}function po(e,t){const n=Ir(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(g(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(g(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Qs(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Er(t,void 0):n.length=r+1,Wr(e.eventQueue_,Nr(t),s);for(let e=0;e<i.length;e++)Bt(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=function(e,t){const n=fo(e),i=n.namespace;"firebase.com"===n.domain&&St(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||St("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Jt(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new gn(n.pathString)}},fo=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):kt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},mo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class yo{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Sn(this._path)?null:bn(this._path)}get ref(){return new Co(this._repo,this._path)}get _queryIdentifier(){const e=bi(this._queryParams),t=Ot(e);return"{}"===t?"default":t}get _queryObject(){return bi(this._queryParams)}isEqual(e){if(!((e=te(e))instanceof wo))return!1;const t=this._repo===e._repo,n=Nn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Co extends wo{constructor(e,t){super(e,t,new wi,!1)}get parent(){const e=En(this._path);return null===e?null:new Co(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class bo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new gn(e),n=Eo(this.ref,e);return new bo(this._node.getChild(t),n,Zn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new bo(n,Eo(this.ref,t),Zn))))}hasChild(e){const t=new gn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Io(e,t){return(e=te(e))._checkNotDeleted("ref"),void 0!==t?Eo(e._root,t):e._root}function Eo(e,t){return null===vn((e=te(e))._path)?Fr("child","path",t,!1):Mr("child","path",t,!1),new Co(e._repo,Tn(e._path,t))}class To{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new go("value",this,new bo(e.snapshotNode,new Co(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new yo(this,e,t):null}matches(e){return e instanceof To&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class So{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new yo(this,e,t):null}createEvent(e,t){g(null!=e.childName,"Child events should have a childName.");const n=Eo(new Co(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new go(e.type,this,new bo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof So&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ko(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{to(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new vo(n,r||void 0),a="value"===t?new To(o):new So(t,o);return function(e,t,n){let i;i=".info"===vn(t._path)?er(e.infoSyncTree_,t,n):er(e.serverSyncTree_,t,n),jr(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>to(e._repo,e,a)}function No(e,t,n,i){return ko(e,"value",t,n,i)}!function(e){g(!Os,"__referenceConstructor has already been defined"),Os=e}(Co),function(e){g(!Ls,"__referenceConstructor has already been defined"),Ls=e}(Co);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xo="FIREBASE_DATABASE_EMULATOR_HOST",Ro={};let Po=!1;function Do(e,t,n,s,r){let o=s||e.options.databaseURL;void 0===o&&(e.options.projectId||St("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),It("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,l,c=_o(o,r),h=c.repoInfo;void 0!==i&&i.env&&(l=i.env[xo]),l?(a=!0,o=`http://${l}?ns=${h.namespace}`,c=_o(o,r),h=c.repoInfo):a=!c.repoInfo.secure;const u=r&&a?new Vt(Vt.OWNER):new Ht(e.name,e.options,t);qr("Invalid Firebase Database URL",c),Sn(c.path)||St("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let s=Ro[t.name];s||(s={},Ro[t.name]=s);let r=s[e.toURLString()];r&&St("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Yr(e,Po,n,i),s[e.toURLString()]=r,r}(h,e,u,new $t(e.name,n));return new Ao(d,e)}class Ao{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Kr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Co(this._repo,yn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ro[t];n&&n[e.key]===e||St(`Database ${t}(${e.repoInfo_}) has already been deleted.`),no(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&St("Cannot call "+e+" on a deleted database.")}}Ln.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ln.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ht=Ve,je(new ne("database",((e,{instanceIdentifier:t})=>Do(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Ke(lt,ct,e),Ke(lt,ct,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const Oo=function(e=Ye(),t){const n=We(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=N("database");e&&function(e,t,n,i={}){e=te(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&St("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&St('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Vt(Vt.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:P(i.mockUserToken,e.app.options.projectId);r=new Vt(t)}!function(e,t,n,i){e.repoInfo_=new Jt(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}(ze({apiKey:"jkSSU2t3nKrWCSOlc136o4SZ4NuXl8ctVgDQD41e",authDomain:"apx-dwf-m6-abc30.firebaseapp.com",databaseURL:"https://apx-dwf-m6-abc30-default-rtdb.firebaseio.com/",projectId:"apx-dwf-m6-abc30"})),Lo="https://xhatroom-api.onrender.com",Mo={data:{name:"",email:"",password:"",username:"",userId:"",roomId:"",realTimeDataBaseId:"",messages:[]},listeners:[],init(){if(0===sessionStorage.length)console.log("No hay data guardada en el navegador");else{console.log("Hay data guardada en el navegador jeje."),console.log(sessionStorage);const e=this.getState();e.email=sessionStorage.getItem("email"),e.password=sessionStorage.getItem("password"),e.name=sessionStorage.getItem("name"),e.realTimeDataBaseId=sessionStorage.getItem("realTimeDataBaseId"),e.roomId=sessionStorage.getItem("roomId"),e.userId=sessionStorage.getItem("userId"),e.username=sessionStorage.getItem("username"),this.setState(e)}},listenToRoom(){const e=this.getState();No(Io(Oo,"/rooms/"+e.realTimeDataBaseId+"/messages"),(e=>{const t=e.val();if(t){const e=Object.values(t),n=this.getState();n.messages=e,this.setState(n),sessionStorage.setItem("messages",JSON.stringify(n.messages))}}))},getState(){return this.data},setState(e){this.data=e;for(const e of this.listeners)e()},setEmailNameAndPassword(e,t,n){const i=this.getState();i.email=e,i.password=t,i.name=n,this.setState(i),sessionStorage.setItem("email",i.email),sessionStorage.setItem("password",i.password)},setUserName(e){const t=this.getState();t.username=e,this.setState(t),sessionStorage.setItem("username",t.username)},setRoomId(e){const t=this.getState();t.roomId=e,this.setState(t),sessionStorage.setItem("roomId",t.roomId)},pushMessage(e){const t=this.getState();t.username?fetch(Lo+"/messages/"+t.realTimeDataBaseId,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({userName:t.username,message:e})}):console.error("No hay nombre de usuario.")},login(e){const t=this.getState();t.email?fetch(Lo+"/login",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:t.email,password:t.password})}).then((e=>(console.log(void 0),console.log(typeof e),console.log(e),e.json()))).then((n=>{console.log(n),t.userId=n.id,t.name=n.name,this.setState(t),sessionStorage.setItem("userId",t.userId),sessionStorage.setItem("name",t.name),e&&e()})):console.error("No hay un email registrado.")},signup(e){const t=this.getState();t.email&&t.name&&t.password?fetch(Lo+"/signup",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:t.email,password:t.password,name:t.name})}).then((e=>e.json())).then((n=>{console.log(n),t.userId=n.id,sessionStorage.setItem("userId",t.userId),this.setState(t),e&&e()})):console.error("Completá bien el formulario porfa.")},newRoom(e){const t=this.getState();t.userId?fetch(Lo+"/rooms",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({userId:t.userId})}).then((e=>e.json())).then((n=>{t.roomId=n.id,t.realTimeDataBaseId=n.rtdbId,this.setState(t),sessionStorage.setItem("roomId",t.roomId),sessionStorage.setItem("realTimeDataBaseId",t.realTimeDataBaseId),e&&e()})):console.error("Para crear una nueva sala, tenés que haber iniciado sesión.")},accessToRoom(e){const t=this.getState();t.userId?fetch(Lo+"/rooms/"+t.roomId+"?userId="+t.userId).then((e=>e.json())).then((n=>{t.realTimeDataBaseId=n.realTimeDataBaseId,t.messages=[],sessionStorage.removeItem("messages"),this.setState(t),sessionStorage.setItem("realTimeDataBaseId",t.realTimeDataBaseId),e&&e()})):console.error("Fijate que por ahí escribiste mal la id de la room.")},subscribe(e){this.listeners.push(e)}};function Fo(e){return e=e||[],Array.isArray(e)?e:[e]}function qo(e){return`[Vaadin.Router] ${e}`}const Uo="module",Bo="nomodule",jo=[Uo,Bo];function Wo(e){if(!e.match(/.+\.[m]?js$/))throw new Error(qo(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function $o(e){if(!e||!Go(e.path))throw new Error(qo('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(Ko(e.action)||Array.isArray(e.children)||Ko(e.children)||Yo(t)||n.some((t=>Go(e[t])))))throw new Error(qo(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(Go(t))Wo(t);else{if(!jo.some((e=>e in t)))throw new Error(qo('Expected route bundle to include either "'+Bo+'" or "'+Uo+'" keys, or both'));jo.forEach((e=>e in t&&Wo(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(qo(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function Ho(e){Fo(e).forEach((e=>$o(e)))}function Vo(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===Uo?n.setAttribute("type",Uo):t===Bo&&n.setAttribute(Bo,""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function zo(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function Yo(e){return"object"==typeof e&&!!e}function Ko(e){return"function"==typeof e}function Go(e){return"string"==typeof e}function Qo(e){const t=new Error(qo(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const Jo=new class{};function Xo(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const i=n[e];if(i.nodeName&&"a"===i.nodeName.toLowerCase()){t=i;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const i=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(i!==window.location.origin)return;const{pathname:s,search:r,hash:o}=t;zo("go",{pathname:s,search:r,hash:o})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const Zo={activate(){window.document.addEventListener("click",Xo)},inactivate(){window.document.removeEventListener("click",Xo)}};function ea(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:i}=window.location;zo("go",{pathname:t,search:n,hash:i})}/Trident/.test(navigator.userAgent)&&!Ko(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const ta={activate(){window.addEventListener("popstate",ea)},inactivate(){window.removeEventListener("popstate",ea)}};var na=ma,ia=ha,sa=function(e,t){return ua(ha(e,t))},ra=ua,oa=fa,aa="/",la="./",ca=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ha(e,t){for(var n,i=[],s=0,r=0,o="",a=t&&t.delimiter||aa,l=t&&t.delimiters||la,c=!1;null!==(n=ca.exec(e));){var h=n[0],u=n[1],d=n.index;if(o+=e.slice(r,d),r=d+h.length,u)o+=u[1],c=!0;else{var p="",_=e[r],f=n[2],m=n[3],g=n[4],y=n[5];if(!c&&o.length){var v=o.length-1;l.indexOf(o[v])>-1&&(p=o[v],o=o.slice(0,v))}o&&(i.push(o),o="",c=!1);var w=""!==p&&void 0!==_&&_!==p,C="+"===y||"*"===y,b="?"===y||"*"===y,I=p||a,E=m||g;i.push({name:f||s++,prefix:p,delimiter:I,optional:b,repeat:C,partial:w,pattern:E?pa(E):"[^"+da(I)+"]+?"})}}return(o||r<e.length)&&i.push(o+e.substr(r)),i}function ua(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,i){for(var s="",r=i&&i.encode||encodeURIComponent,o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(l=r(c[h],a),!t[o].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(0===h?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(s+=a.prefix)}else{if(l=r(String(c),a),!t[o].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');s+=a.prefix+l}}else s+=a}return s}}function da(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function pa(e){return e.replace(/([=!:$/()])/g,"\\$1")}function _a(e){return e&&e.sensitive?"":"i"}function fa(e,t,n){for(var i=(n=n||{}).strict,s=!1!==n.start,r=!1!==n.end,o=da(n.delimiter||aa),a=n.delimiters||la,l=[].concat(n.endsWith||[]).map(da).concat("$").join("|"),c=s?"^":"",h=0===e.length,u=0;u<e.length;u++){var d=e[u];if("string"==typeof d)c+=da(d),h=u===e.length-1&&a.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+da(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.partial?c+=da(d.prefix)+"("+p+")?":c+="(?:"+da(d.prefix)+"("+p+"))?":c+=da(d.prefix)+"("+p+")"}}return r?(i||(c+="(?:"+o+")?"),c+="$"===l?"$":"(?="+l+")"):(i||(c+="(?:"+o+"(?="+l+"))?"),h||(c+="(?="+o+"|"+l+")")),new RegExp(c,_a(n))}function ma(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var i=[],s=0;s<e.length;s++)i.push(ma(e[s],t,n).source);return new RegExp("(?:"+i.join("|")+")",_a(n))}(e,t,n):function(e,t,n){return fa(ha(e,n),t,n)}(e,t,n)}na.parse=ia,na.compile=sa,na.tokensToFunction=ra,na.tokensToRegExp=oa;const{hasOwnProperty:ga}=Object.prototype,ya=new Map;function va(e){try{return decodeURIComponent(e)}catch(t){return e}}function wa(e,t,n,i,s){let r,o,a=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const h=e.__children=e.__children||e.children;if(!r&&(r=function(e,t,n,i,s){const r=`${e}|${n=!!n}`;let o=ya.get(r);if(!o){const t=[];o={keys:t,pattern:na(e,t,{end:n,strict:""===e})},ya.set(r,o)}const a=o.pattern.exec(t);if(!a)return null;const l=Object.assign({},s);for(let e=1;e<a.length;e++){const t=o.keys[e-1],n=t.name,i=a[e];void 0===i&&ga.call(l,n)||(t.repeat?l[n]=i?i.split(t.delimiter).map(va):[]:l[n]=i?va(i):i)}return{path:a[0],keys:(i||[]).concat(o.keys),params:l}}(l,t,!h,i,s),r))return{done:!1,value:{route:e,keys:r.keys,params:r.params,path:r.path}};if(r&&h)for(;a<h.length;){if(!o){const i=h[a];i.parent=e;let s=r.path.length;s>0&&"/"===t.charAt(s)&&(s+=1),o=wa(i,t.substr(s),n,r.keys,r.params)}const i=o.next(c);if(!i.done)return{done:!1,value:i.value};o=null,a++}return{done:!0}}}}function Ca(e){if(Ko(e.route.action))return e.route.action(e)}ya.set("|false",{keys:[],pattern:/(?:)/});class ba{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Ca,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Ho(e);const t=[...Fo(e)];this.root.__children=t}addRoutes(e){return Ho(e),this.root.__children.push(...Fo(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,Go(e)?{pathname:e}:e),n=wa(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let s=null,r=null,o=t;function a(e,l=s.value.route,c){const h=null===c&&s.value.route;return s=r||n.next(h),r=null,e||!s.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,s.value.route)?s.done?Promise.reject(Qo(t)):(o=Object.assign(o?{chain:o.chain?o.chain.slice(0):[]}:{},t,s.value),function(e,t){const{route:n,path:i}=t;if(n&&!n.__synthetic){const t={path:i,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(o,s.value),Promise.resolve(i(o)).then((t=>null!=t&&t!==Jo?(o.result=t.result||t,o):a(e,l,t)))):(r=s,Promise.resolve(Jo))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(o);if(e?console.warn(t):e=new Error(t),e.context=e.context||o,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return o.result=this.errorHandler(e),o;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}ba.pathToRegexp=na;const{pathToRegexp:Ia}=ba,Ea=new Map;function Ta(e,t,n){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(n))for(let i=0;i<n.length;i++){const s=n[i];s.parent=t,Ta(e,s,s.__children||s.children)}}function Sa(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function ka(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function Na(e,t={}){if(!(e instanceof ba))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(i,s)=>{let r=Sa(n,i);if(!r&&(n.clear(),Ta(n,e.root,e.root.__children),r=Sa(n,i),!r))throw new Error(`Route "${i}" not found`);let o=Ea.get(r.fullPath);if(!o){let e=ka(r),t=r.parent;for(;t;){const n=ka(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Ia.parse(e),i=Ia.tokensToFunction(n),s=Object.create(null);for(let e=0;e<n.length;e++)Go(n[e])||(s[n[e].name]=!0);o={toPath:i,keys:s},Ea.set(e,o),r.fullPath=e}let a=o.toPath(s,t)||"/";if(t.stringifyQueryParams&&s){const e={},n=Object.keys(s);for(let t=0;t<n.length;t++){const i=n[t];o.keys[i]||(e[i]=s[i])}const i=t.stringifyQueryParams(e);i&&(a+="?"===i.charAt(0)?i:`?${i}`)}return a}}let xa=[];const Ra=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t},Pa=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function Da(e,t){return e.classList.add(t),new Promise((n=>{if(Ra(e)){const i=e.getBoundingClientRect(),s=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${s}`),Pa(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function Aa(e){return null!=e}function Oa({pathname:e="",search:t="",hash:n="",chain:i=[],params:s={},redirectFrom:r,resolver:o},a){const l=i.map((e=>e.route));return{baseUrl:o&&o.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:s,redirectFrom:r,getUrl:(e={})=>Ua(ja.pathToRegexp.compile(Ba(l))(Object.assign({},s,e)),o)}}function La(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Ma(e,t,n){if(Ko(e))return e.apply(n,t)}function Fa(e,t,n){return i=>i&&(i.cancel||i.redirect)?i:n?Ma(n[e],t,n):void 0}function qa(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Ua(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function Ba(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class ja extends ba{constructor(e,t){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&ba.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const s=ja.NavigationTrigger;ja.setTriggers.apply(ja,Object.keys(s).map((e=>s[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Oa({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();Ko(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{Aa(e)||Ko(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!Yo(e))throw new Error(qo(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=Fo(e);for(let e=0;e<n.length;e++)$o(n[e]),t.__children.push(n[e])}(e,t)})));const i={redirect:t=>La(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return Ma(t.action,[e,i],t)})).then((e=>{return Aa(e)&&(e instanceof HTMLElement||e.redirect||e===Jo)?e:Go(t.redirect)?i.redirect(t.redirect):t.bundle?(n=t.bundle,Go(n)?Vo(n):Promise.race(jo.filter((e=>e in n)).map((e=>Vo(n[e],e))))).then((()=>{}),(()=>{throw new Error(qo(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>Aa(e)?e:Go(t.component)?i.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},Go(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const i=this.__previousContext;if(e===i)return this.__updateBrowserHistory(i,!0),this.location;if(this.location=Oa(e),t&&this.__updateBrowserHistory(e,1===n),zo("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,i),this.__previousContext=e,this.location;this.__addAppearingContent(e,i);const s=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,i),s.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),qa(this.__outlet&&this.__outlet.children),this.location=Oa(Object.assign(i,{resolver:this})),zo("error",Object.assign({router:this,error:e},i)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const i=n!==t?n:e,s=Ua(Ba(n.chain),n.resolver)===n.pathname,r=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===Jo?s?e:null!==t.parent?r(e,t.parent,n):n:n));return r(n).then((e=>{if(null===e||e===Jo)throw Qo(i);return e&&e!==Jo&&e!==n?this.__fullyResolveChain(i,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Oa(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(qo(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],i=e.chain;let s=Promise.resolve();const r=()=>({cancel:!0}),o=t=>La(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,i.length)&&(n[t].route===i[t].route&&(n[t].path===i[t].path||n[t].element===i[t].element)&&this.__isReusableElement(n[t].element,i[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=i.length-1;t>=0;t--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:r},n[t]);for(let t=0;t<i.length;t++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:r,redirect:o},i[t]),n[t].element.location=Oa(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:r},n[t])}if(!e.__skipAttach)for(let t=0;t<i.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Oa(e,n[t].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:r,redirect:o},i[t]),i[t].element&&(i[t].element.location=Oa(e,i[t].route)));return s.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,i){const s=Oa(t);return e.then((e=>{if(this.__isLatestRender(t)){return Fa("onBeforeLeave",[s,n,this],i.element)(e)}})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,i){const s=Oa(t,i.route);return e.then((e=>{if(this.__isLatestRender(t)){return Fa("onBeforeEnter",[s,n,this],i.element)(e)}}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(qo(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(qo(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=i?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const s=t&&t.chain[i].element;if(s){if(s.parentNode!==n)break;e.chain[i].element=s,n=s}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let i=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const s=e.chain[t].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===n&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&qa(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(qa(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=t.chain[n].element;if(i)try{const n=Oa(e);Ma(i.onAfterLeave,[n,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&qa(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},i=Oa(e,e.chain[t].route);Ma(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],s=e.chain;let r;for(let e=s.length;e>0;e--)if(s[e-1].route.animate){r=s[e-1].route.animate;break}if(t&&n&&r){const e=Yo(r)&&r.leave||"leaving",s=Yo(r)&&r.enter||"entering";i.push(Da(t,e)),i.push(Da(n,s))}return Promise.all(i).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:i}=e?e.detail:window.location;Go(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:i},!0))}static setTriggers(...e){var t;t=e,xa.forEach((e=>e.inactivate())),t.forEach((e=>e.activate())),xa=t}urlForName(e,t){return this.__urlForName||(this.__urlForName=Na(this)),Ua(this.__urlForName(e,t),this)}urlForPath(e,t){return Ua(ja.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:i}=Go(e)?this.__createUrl(e,"http://a"):e;return zo("go",{pathname:t,search:n,hash:i})}}const Wa=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,$a=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ha(e,t){if("function"!=typeof e)return;const n=Wa.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const Va=function(e,t){if(window.Vaadin.developmentMode)return Ha(e,t)};function za(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&($a?!function(){if($a){if(Object.keys($a).map((e=>$a[e])).filter((e=>e.productionMode)).length>0)return!0}return!1}():!Ha((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),Va(za),ja.NavigationTrigger={POPSTATE:ta,CLICK:Zo};class Ya extends HTMLElement{connectedCallback(){this.render(),this.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;Mo.setEmailNameAndPassword(t.email.value,t.password.value),Mo.login((()=>{Mo.getState().userId&&ja.go("/select")}))}))}render(){document.createElement("style");this.innerHTML='\n            <div class="header"></div>\n            <main class="main">\n                <h1 class="title">Bienvenidos!</h1>\n\n                <div class="form-container">\n                    <h3 class="form-title">Iniciar sesión</h3>\n                    <form class="form">\n                        <div class="form-div">\n                            <label class="form-label" for="form-email">Tu email:</label>\n                            <input type="email" class="form-input" required name="email" id="form-email">\n                        </div>\n                        <div class="form-container__password">\n                            <label class="form-label" for="form-password">Tu contraseña:</label>\n                            <input type="password" class="form-input" name="password" required id="form-password">\n                            <button type="button" class="form-password__button">\n                                <i class="fa-solid fa-eye form-input__icon"></i>\n                            </button>\n                        </div>\n                        <button type="submit" class="form-button">Comenzar</button>\n                    </form>\n                    <p class="form-signup">No tenés una cuenta? \n                        <a href="/signup" class="form-signup__link">Creala ahora</a>\n                    </p>\n                </div>\n            </main>\n        ';const e=document.querySelector(".form-password__button"),t=document.querySelector("#form-password"),n=document.querySelector(".form-input__icon");e.addEventListener("click",(e=>{"password"===t.type?(t.type="text",n.classList.remove("fa-eye"),n.classList.add("fa-eye-slash")):(t.type="password",n.classList.remove("fa-eye-slash"),n.classList.add("fa-eye"))}))}}customElements.define("login-page",Ya);class Ka extends HTMLElement{connectedCallback(){this.render(),this.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;Mo.setEmailNameAndPassword(t.email.value,t.password.value,t.nombre.value),Mo.signup((()=>{Mo.getState().userId&&ja.go("/select")}))}))}render(){document.createElement("style");this.innerHTML='\n            <div class="header"></div>\n            <main class="main">\n                <h1 class="title">Bienvenidos!</h1>\n\n                <div class="form-container">\n                    <h3 class="form-title">Registrame</h3>\n                    <form class="form">\n                        <div class="form-div">\n                            <label class="form-label" for="form-email">Tu email:</label>\n                            <input type="email" class="form-input" name="email" id="form-email">\n                        </div>\n                        <div class="form-div">\n                            <label class="form-label" for="form-nombre">Tu nombre:</label>\n                            <input type="text" class="form-input" name="nombre" id="form-nombre">\n                        </div>\n                        <div class="form-container__password">\n                            <label class="form-label" for="form-password">Tu contraseña:</label>\n                            <input type="password" class="form-input" name="password" id="form-password">\n                            <button type="button" class="form-password__button">\n                                <i class="fa-solid fa-eye form-input__icon"></i>\n                            </button>\n                        </div>\n                        <button type="submit" class="form-button">Comenzar</button>\n                    </form>\n                    <p class="form-signup">Ya tenés una cuenta? \n                        <a href="/login" class="form-signup__link"> Iniciar sesión</a>\n                    </p>\n                </div>\n            </main>\n        ';const e=document.querySelector(".form-password__button"),t=document.querySelector("#form-password"),n=document.querySelector(".form-input__icon");e.addEventListener("click",(e=>{"password"===t.type?(t.type="text",n.classList.remove("fa-eye"),n.classList.add("fa-eye-slash")):(t.type="password",n.classList.remove("fa-eye-slash"),n.classList.add("fa-eye"))}))}}customElements.define("signup-page",Ka);class Ga extends HTMLElement{connectedCallback(){this.render();this.querySelector("#salas-select").addEventListener("change",(e=>{const t=e.target,n=this.querySelector(".form-roomid-div");"unir"===t.value?(n.style.display="block",this.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;Mo.setUserName(t.usuario.value),Mo.setRoomId(t.roomid.value),Mo.accessToRoom((()=>{ja.go("/chat")}))}))):"crear"===t.value?(n.style.display="none",document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;Mo.setUserName(t.usuario.value),Mo.newRoom((()=>{ja.go("/chat")}))}))):n.style.display="none"}))}render(){document.createElement("style");const e=Mo.getState();this.innerHTML=`\n            <div class="header"></div>\n            <main class="main">\n                <h1 class="title">Bienvenido ${e.name}!</h1>\n\n                <div class="form-container">\n                    <form class="form">\n                        <div class="form-div">\n                            <label class="form-label" for="form-usuario">Tu nombre de usuario:</label>\n                            <input type="text" class="form-input" required name="usuario" id="form-usuario">\n                        </div>\n                        <div class="form-div">\n                            <label class="form-label" for="salas-select">Creas una nueva sala o te unís a una existente?</label>\n                            <select class="form-input" name="salas" id="salas-select">\n                            <option value="crear" selected>Crear sala</option>\n                            <option value="unir">Unirse a sala</option>\n                            <option value="" selected>Elegí una opción...</option>\n                            </select>\n                        </div>\n                        <div class="form-roomid-div">\n                            <label class="form-label" for="form-roomid">Id de la sala:</label>\n                            <input type="text" class="form-input" name="roomid" id="form-roomid">\n                        </div>\n                        <button class="form-button">Comenzar</button>\n                    </form>\n                </div>\n            </main>\n        `}}customElements.define("select-page",Ga);class Qa extends HTMLElement{messages=[];connectedCallback(){Mo.listenToRoom();const e=Mo.getState();this.messages=e.messages,Mo.subscribe((()=>{const e=Mo.getState();this.messages=e.messages,this.render();const t=document.querySelector(".messages-section");t&&(t.scrollTop=t.scrollHeight)})),this.render()}addListeners(){this.querySelector(".send-message__form").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;Mo.pushMessage(t["send-message"].value)}))}render(){this.innerHTML=`\n            <div class="header">\n                <p class="header__roomid">Id de la sala: ${Mo.getState().roomId}</p>\n            </div>\n            <section class="messages-section">\n                ${this.messages.map((e=>e.from===Mo.getState().username?`\n                                <div class="message message--enviado">\n                                <div class="message-from">${e.from}</div>\n                                <div class="message-text message-text--enviado">\n                                ${e.message}\n                                </div>\n                                </div>\n                                `:`\n                                    <div class="message message--recibido">\n                                    <div class="message-from">${e.from}</div>\n                                    <div class="message-text message-text--recibido">\n                                    ${e.message}\n                                    </div>\n                                    </div>\n                            `)).join("")}\n        </section>\n        <section class="send-message">\n        <form class="send-message__form">\n        <input type="text" class="send-message__form-input" name="send-message" id="send-message">\n        <button class="send-message__form-button">Enviar</button>\n        </form>\n        </section>\n        `,this.addListeners()}}customElements.define("chat-page",Qa);new ja(document.querySelector(".root")).setRoutes([{path:"/",redirect:"/login"},{path:"/login",component:"login-page"},{path:"/signup",component:"signup-page"},{path:"/select",component:"select-page"},{path:"/chat",component:"chat-page"}]),Mo.init();
//# sourceMappingURL=index.243b843b.js.map
