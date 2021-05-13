/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,i,n){var s,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${s}`);class a{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],a=document.createTreeWalker(e.content,133,null,!1);let c=0,h=-1,p=0;const{strings:u,values:{length:g}}=t;for(;p<g;){const t=a.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)r(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=u[p],i=d.exec(e)[2],n=i.toLowerCase()+"$lit$",s=t.getAttribute(n);t.removeAttribute(n);const a=s.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:a}),p+=a.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,s=e.split(o),a=s.length-1;for(let e=0;e<a;e++){let i,o=s[e];if(""===o)i=l();else{const t=d.exec(o);null!==t&&r(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}n.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===s[a]?(n.insertBefore(l(),t),i.push(t)):t.data=s[a],p+=a}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&h!==c||(h++,e.insertBefore(l(),t)),c=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const r=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},c=t=>-1!==t.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,133,null,!1);let o=u(n),a=n[o],r=-1,c=0;const l=[];let d=null;for(;s.nextNode();){r++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==a&&a.index===r;)a.index=null!==d?-1:a.index-c,o=u(n,o),a=n[o]}l.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},u=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(c(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=new WeakMap,m=t=>"function"==typeof t&&g.has(t),f={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let o,a=0,r=0,l=s.nextNode();for(;a<n.length;)if(o=n[a],c(o)){for(;r<o.index;)r++,"TEMPLATE"===l.nodeName&&(i.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=i.pop(),l=s.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${n} `;class w{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let o=0;o<t;o++){const t=this.strings[o],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const r=d.exec(t);e+=null===r?t+(i?v:s):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+n}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new $(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(b(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||b(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)i=e[n],void 0===i&&(i=new k(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class C extends S{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends ${}let N=!1;(()=>{try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function A(t){let e=D.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},D.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(n);return i=e.keyString.get(s),void 0===i&&(i=new a(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const D=new Map,z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const O=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,n){const s=e[0];if("."===s){return new C(t,e.slice(1),i).parts}return"@"===s?[new T(t,e.slice(1),n.eventContext)]:"?"===s?[new P(t,e.slice(1),i)]:new S(t,e,i).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const V=(t,...e)=>new w(t,e,"html",O)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,q=(t,e)=>`${t}--${e}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const L=t=>e=>{const i=q(e.type,t);let s=D.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},D.set(i,s));let o=s.stringsArray.get(e.strings);if(void 0!==o)return o;const r=e.strings.join(n);if(o=s.keyString.get(r),void 0===o){const i=e.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(i,t),o=new a(e,i),s.keyString.set(r,o)}return s.stringsArray.set(e.strings,o),o},H=["html","svg"],R=new Set,j=(t,e,i)=>{R.add(t);const n=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,t);const a=document.createElement("style");for(let t=0;t<o;t++){const e=s[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{H.forEach(e=>{const i=D.get(q(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),h(t,i)})})})(t);const r=n.content;i?function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const o=document.createTreeWalker(n,133,null,!1);let a=u(s),r=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===i&&(r=p(e),i.parentNode.insertBefore(e,i));-1!==a&&s[a].index===c;){if(r>0){for(;-1!==a;)s[a].index+=r,a=u(s,a);return}a=u(s,a)}}}(i,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){r.insertBefore(a,r.firstChild);const t=new Set;t.add(a),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),I={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:B};class F extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=I){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||I}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=B){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||Y,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||Y.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=I){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,s=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}F.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),J=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Z(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):J(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const X="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(X?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new K(i,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const tt={};class et extends F{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?X?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==tt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return tt}}et.finalized=!0,et.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,o=z.has(e),a=U&&11===e.nodeType&&!!e.host,r=a&&!R.has(s),c=r?document.createDocumentFragment():e;if(((t,e,n)=>{let s=z.get(e);void 0===s&&(i(e,e.firstChild),z.set(e,s=new k(Object.assign({templateFactory:A},n))),s.appendInto(e)),s.setValue(t),s.commit()})(t,c,Object.assign({templateFactory:L(s)},n)),r){const t=z.get(c);z.delete(c);const n=t.value instanceof y?t.value.template:void 0;j(s,c,n),i(e,e.firstChild),e.appendChild(c),z.set(e,t)}!o&&a&&window.ShadyCSS.styleElement(e.host)};var it={},nt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,st="[^\\s]+",ot=/\[([^]*?)\]/gm,at=function(){};function rt(t,e){for(var i=[],n=0,s=t.length;n<s;n++)i.push(t[n].substr(0,e));return i}function ct(t){return function(e,i,n){var s=n[t].indexOf(i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());~s&&(e.month=s)}}function lt(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var dt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ht=["January","February","March","April","May","June","July","August","September","October","November","December"],pt=rt(ht,3),ut=rt(dt,3);it.i18n={dayNamesShort:ut,dayNames:dt,monthNamesShort:pt,monthNames:ht,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var gt={D:function(t){return t.getDate()},DD:function(t){return lt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return lt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return lt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return lt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return lt(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return lt(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return lt(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return lt(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return lt(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return lt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return lt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+lt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},mt={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+st,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var i=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?i-1:i)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",at],ddd:[st,at],MMM:[st,ct("monthNamesShort")],MMMM:[st,ct("monthNames")],a:[st,function(t,e,i){var n=e.toLowerCase();n===i.amPm[0]?t.isPm=!1:n===i.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var i,n=(e+"").match(/([+-]|\d\d)/gi);n&&(i=60*n[1]+parseInt(n[2],10),t.timezoneOffset="+"===n[0]?i:-i)}]};mt.dd=mt.d,mt.dddd=mt.ddd,mt.DD=mt.D,mt.mm=mt.m,mt.hh=mt.H=mt.HH=mt.h,mt.MM=mt.M,mt.ss=mt.s,mt.A=mt.a,it.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},it.format=function(t,e,i){var n=i||it.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=it.masks[e]||e||it.masks.default;var s=[];return(e=(e=e.replace(ot,(function(t,e){return s.push(e),"@@@"}))).replace(nt,(function(e){return e in gt?gt[e](t,n):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return s.shift()}))},it.parse=function(t,e,i){var n=i||it.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=it.masks[e]||e,t.length>1e3)return null;var s={},o=[],a=[];e=e.replace(ot,(function(t,e){return a.push(e),"@@@"}));var r,c=(r=e,r.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(nt,(function(t){if(mt[t]){var e=mt[t];return o.push(e[1]),"("+e[0]+")"}return t}));c=c.replace(/@@@/g,(function(){return a.shift()}));var l=t.match(new RegExp(c,"i"));if(!l)return null;for(var d=1;d<l.length;d++)o[d-1](s,l[d],n);var h,p=new Date;return!0===s.isPm&&null!=s.hour&&12!=+s.hour?s.hour=+s.hour+12:!1===s.isPm&&12==+s.hour&&(s.hour=0),null!=s.timezoneOffset?(s.minute=+(s.minute||0)-+s.timezoneOffset,h=new Date(Date.UTC(s.year||p.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0))):h=new Date(s.year||p.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0),h};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var ft=function(t,e,i,n){n=n||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s};function _t(t){return void 0!==t&&"none"!==t.action}function yt(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}async function vt(t,e,i=!1){let n=t;"string"==typeof e&&(e=e.split(/(\$| )/));for(const[t,s]of e.entries())if(s.trim().length){if(!n)return null;n.localName&&n.localName.includes("-")&&await customElements.whenDefined(n.localName),n.updateComplete&&await n.updateComplete,n="$"===s?i&&t==e.length-1?[n.shadowRoot]:n.shadowRoot:i&&t==e.length-1?n.querySelectorAll(s):n.querySelector(s)}return n}async function wt(t,e,i=!1,n=1e4){return Promise.race([vt(t,e,i),new Promise((t,e)=>setTimeout(()=>e(new Error("timeout")),n))]).catch(t=>{if(!t.message||"timeout"!==t.message)throw t;return null})}let bt=window.cardHelpers;new Promise(async(t,e)=>{bt&&t();const i=async()=>{bt=await window.loadCardHelpers(),window.cardHelpers=bt,t()};window.loadCardHelpers?i():window.addEventListener("load",async()=>{!async function(){if(customElements.get("hui-view"))return!0;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");if(t.hass={panels:[{url_path:"tmp",component_name:"lovelace"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),!customElements.get("ha-panel-lovelace"))return!1;const e=document.createElement("ha-panel-lovelace");e.hass=yt(),void 0===e.hass&&(await new Promise(t=>{window.addEventListener("connection-status",e=>{console.log(e),t()},{once:!0})}),e.hass=yt()),e.panel={config:{mode:null}},e._fetchConfig()}(),window.loadCardHelpers&&i()})});async function xt(){const t=document.querySelector("home-assistant")||document.querySelector("hc-root"),e=await wt(t,"$ card-tools-popup");e&&e.closeDialog()}async function St(t,e,i=!1,n={},s=!1){if(!customElements.get("card-tools-popup")){const t=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),e=t.prototype.html,i=t.prototype.css;class n extends t{static get properties(){return{open:{},large:{reflect:!0,type:Boolean},hass:{}}}updated(t){t.has("hass")&&this.card&&(this.card.hass=this.hass)}closeDialog(){this.open=!1}async _makeCard(){const t=await window.loadCardHelpers();this.card=await t.createCardElement(this._card),this.card.hass=this.hass,this.requestUpdate()}async _applyStyles(){let t=await wt(this,"$ ha-dialog");customElements.whenDefined("card-mod").then(async()=>{if(!t)return;customElements.get("card-mod").applyToElement(t,"more-info",this._style,{config:this._card},[],!1)})}async showDialog(t,e,i=!1,n={},s=!1){this.title=t,this._card=e,this.large=i,this._style=n,this.fullscreen=!!s,this._makeCard(),await this.updateComplete,this.open=!0,await this._applyStyles()}_enlarge(){this.large=!this.large}render(){return this.open?e`
            <ha-dialog
              open
              @closed=${this.closeDialog}
              .heading=${!0}
              hideActions
              @ll-rebuild=${this._makeCard}
            >
            ${this.fullscreen?e`<div slot="heading"></div>`:e`
                <app-toolbar slot="heading">
                  <mwc-icon-button
                    .label=${"dismiss"}
                    dialogAction="cancel"
                  >
                    <ha-icon
                      .icon=${"mdi:close"}
                    ></ha-icon>
                  </mwc-icon-button>
                  <div class="main-title" @click=${this._enlarge}>
                    ${this.title}
                  </div>
                </app-toolbar>
              `}
              <div class="content">
                ${this.card}
              </div>
            </ha-dialog>
          `:e``}static get styles(){return i`
          ha-dialog {
            --mdc-dialog-min-width: 400px;
            --mdc-dialog-max-width: 600px;
            --mdc-dialog-heading-ink-color: var(--primary-text-color);
            --mdc-dialog-content-ink-color: var(--primary-text-color);
            --justify-action-buttons: space-between;
          }
          @media all and (max-width: 450px), all and (max-height: 500px) {
            ha-dialog {
              --mdc-dialog-min-width: 100vw;
              --mdc-dialog-max-width: 100vw;
              --mdc-dialog-min-height: 100%;
              --mdc-dialog-max-height: 100%;
              --mdc-shape-medium: 0px;
              --vertial-align-dialog: flex-end;
            }
          }

          app-toolbar {
            flex-shrink: 0;
            color: var(--primary-text-color);
            background-color: var(--secondary-background-color);
          }

          .main-title {
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
          .content {
            margin: -20px -24px;
          }

          @media all and (max-width: 450px), all and (max-height: 500px) {
            app-toolbar {
              background-color: var(--app-header-background-color);
              color: var(--app-header-text-color, white);
            }
          }

          @media all and (min-width: 451px) and (min-height: 501px) {
            ha-dialog {
              --mdc-dialog-max-width: 90vw;
            }

            .content {
              width: 400px;
            }
            :host([large]) .content {
              width: calc(90vw - 48px);
            }

            :host([large]) app-toolbar {
              max-width: calc(90vw - 32px);
            }
          }
          `}}customElements.define("card-tools-popup",n)}const o=document.querySelector("home-assistant")||document.querySelector("hc-root");if(!o)return;let a=await wt(o,"$ card-tools-popup");var r;if(a||(a=document.createElement("card-tools-popup"),o.shadowRoot.appendChild(a),r=a,document.querySelector("hc-main")?document.querySelector("hc-main").provideHass(r):document.querySelector("home-assistant")&&document.querySelector("home-assistant").provideHass(r)),!window._moreInfoDialogListener){const t=async t=>{if(t.state&&"cardToolsPopup"in t.state)if(t.state.cardToolsPopup){const{title:e,card:i,large:n,style:s,fullscreen:o}=t.state.params;St(e,i,n,s,o)}else a.closeDialog()};window.addEventListener("popstate",t),window._moreInfoDialogListener=!0}history.replaceState({cardToolsPopup:!1},""),history.pushState({cardToolsPopup:!0,params:{title:t,card:e,large:i,style:n,fullscreen:s}},""),a.showDialog(t,e,i,n,s)}const $t={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let kt=class extends et{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _show_warning(){return this._config&&this._config.show_warning||!1}get _show_error(){return this._config&&this._config.show_error||!1}get _tap_action(){return this._config&&this._config.tap_action||{action:"more-info"}}get _hold_action(){return this._config&&this._config.hold_action||{action:"none"}}get _double_tap_action(){return this._config&&this._config.double_tap_action||{action:"none"}}render(){if(!this.hass)return V``;const t=Object.keys(this.hass.states).filter(t=>"sun"===t.substr(0,t.indexOf(".")));return V`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+$t.required.icon}></ha-icon>
            <div class="title">${$t.required.name}</div>
          </div>
          <div class="secondary">${$t.required.secondary}</div>
        </div>
        ${$t.required.show?V`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(t=>V`
                        <paper-item>${t}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+$t.actions.icon}></ha-icon>
            <div class="title">${$t.actions.name}</div>
          </div>
          <div class="secondary">${$t.actions.secondary}</div>
        </div>
        ${$t.actions.show?V`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+$t.actions.options.tap.icon}></ha-icon>
                    <div class="title">${$t.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${$t.actions.options.tap.secondary}</div>
                </div>
                ${$t.actions.options.tap.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+$t.actions.options.hold.icon}></ha-icon>
                    <div class="title">${$t.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${$t.actions.options.hold.secondary}</div>
                </div>
                ${$t.actions.options.hold.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${"mdi:"+$t.actions.options.double_tap.icon}></ha-icon>
                    <div class="title">${$t.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${$t.actions.options.double_tap.secondary}</div>
                </div>
                ${$t.actions.options.double_tap.show?V`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+$t.appearance.icon}></ha-icon>
            <div class="title">${$t.appearance.name}</div>
          </div>
          <div class="secondary">${$t.appearance.secondary}</div>
        </div>
        ${$t.appearance.show?V`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-switch
                  aria-label=${"Toggle warning "+(this._show_warning?"off":"on")}
                  .checked=${!1!==this._show_warning}
                  .configValue=${"show_warning"}
                  @change=${this._valueChanged}
                  >Show Warning?</ha-switch
                >
                <ha-switch
                  aria-label=${"Toggle error "+(this._show_error?"off":"on")}
                  .checked=${!1!==this._show_error}
                  .configValue=${"show_error"}
                  @change=${this._valueChanged}
                  >Show Error?</ha-switch
                >
              </div>
            `:""}
      </div>
    `}_toggleAction(t){this._toggleThing(t,$t.actions.options)}_toggleOption(t){this._toggleThing(t,$t)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this["_"+e.configValue]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),ft(this,"config-changed",{config:this._config}))}static get styles(){return Q`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};t([Z()],kt.prototype,"hass",void 0),t([Z()],kt.prototype,"_config",void 0),t([Z()],kt.prototype,"_toggle",void 0),kt=t([W("yamc-card-editor")],kt);let Pt=class extends et{render(){if(!this.hass||!this.stateObj)return V``;const t=this.stateObj.attributes.yamc.cur_item,e=t.info_url,i=t.stream_url;let n=!0;return"tvshow"===t.type&&(n=!1),V`
            <div class="actions">
                <div class="kc_front">
                    <div class="kc_text_large" title="${t.title}">${t.title}</div>
                </div>
                <img class="kc_img" src="${t.fanart}" />
                <div>
                    ${null!=e&&e.length>0?V`<mwc-button .url="${e}" @click="${this._openURL}">Details
                    </mwc-button>`:V``}
                    ${null!=i&&i.length>0?V`<mwc-button .url="${i}" @click="${this._openURL}">Launch
                    </mwc-button>`:V``}
                    <mwc-button .url="${t.info_url}" @click="${this._handleInfoButton}">
                        Info
                    </mwc-button>
                    ${n?V`
                    <mwc-button .id="${t.id}" .type="${t.type}" @click="${this._handleDeleteButton}">
                        Delete
                    </mwc-button>
                    `:V``}
                </diV>
            </div>
    `}_handleActionClick(t){const e=t.currentTarget.action;this.hass.callService("counter",e,{entity_id:this.stateObj.entity_id})}_handleDeleteButton(t){if(this.hass){if(!confirm("Are you sure you want to delete this item?"))return;const e=t.currentTarget.id,i=t.currentTarget.type;this.hass.callService("kodi","remove",{id:e,type:i})}}_handleInfoButton(t){if(this.hass){const e=t.currentTarget.url;this.hass.callService("kodi","view_info",{url:e})}}_openURL(t){if(this.hass){const e=t.currentTarget.url;window.open(e,"_blank")}}static get styles(){return Q`
      .actions {
        margin: 0 8px;
        padding-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .kc_text_large {
        color: var(--primary-text-color);
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
      }
      .kc_masked {
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
      }
      .kc_img {
        width: 300px;
        margin: 8px 0px;
      }

    `}};t([Z()],Pt.prototype,"hass",void 0),t([Z()],Pt.prototype,"stateObj",void 0),Pt=t([W("yamc-card-more-info")],Pt);var Ct={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Et={common:Ct},Nt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Tt={common:Nt},Mt={en:Object.freeze({__proto__:null,common:Ct,default:Et}),nb:Object.freeze({__proto__:null,common:Nt,default:Tt})};function At(t,e="",i=""){const n=t.split(".")[0],s=t.split(".")[1],o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var a;try{a=Mt[o][n][s]}catch(t){a=Mt.en[n][s]}return void 0===a&&(a=Mt.en[n][s]),""!==e&&""!==i&&(a=a.replace(e,i)),a}let Dt=class extends et{setConfig(t){if(!t)throw new Error(At("common.invalid_configuration"));this._config=Object.assign({name:"MediaCardDetails"},t)}render(){if(!this.hass||!this._config)return V``;const t=this.hass.states[this._config.entity].attributes.yamc.cur_item;if(!t)return V``;const e=t.info_url,i=t.stream_url;let n=!0;return"tvshow"===t.type&&(n=!1),V`
            <div class="wrapper">
                <div class="kc_front">
                    <div class="kc_text_medium" title="${t.tagline}">${t.tagline}</div>
                </div>
                <img class="kc_img" src="${t.fanart}" />
                <div class="kc_buttons">
                    ${null!=e&&e.length>0?V`<mwc-button .url="${e}" @click="${this._openURL}">Details
                    </mwc-button>`:V``}
                    ${null!=i&&i.length>0?V`<mwc-button .url="${i}" @click="${this._launchURL}">Stream
                    </mwc-button>`:V``}
                    <mwc-button .id="${t.id}" @click="${this._handleInfoButton}">
                        Browse
                    </mwc-button>
                    ${n?V`
                    <mwc-button .id="${t.id}" @click="${this._handleDeleteButton}">
                        Delete
                    </mwc-button>
                    `:V``}
                </diV>
            </div>
    `}_handleDeleteButton(t){if(!this.hass||!this._config)return;if(!confirm("Are you sure you want to delete this item?"))return;const e=t.currentTarget.id;this.hass.callService(this._config.domain,"delete",{id:e,entity_id:this._config.entity}),xt()}_handleInfoButton(t){if(!this.hass||!this._config)return;const e=t.currentTarget.id;this.hass.callService(this._config.domain,"browse",{id:e,entity_id:this._config.target_player}),xt()}_openURL(t){if(this.hass){const e=t.currentTarget.url;window.open(e,"_blank"),xt()}}_launchURL(t){if(this.hass){const e=t.currentTarget.url;window.open(e,"_blank"),xt()}}static get styles(){return Q`
      .wrapper {
        margin: 0px 20px 8px;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        align-content: center;
        overflow-x: hidden;
      }
      .kc_buttons {
          align-self: center;
      }
      .kc_text_large {
        color: var(--primary-text-color);
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
      }
      .kc_text_medium {
        color: var(--primary-text-color);
        font-size: 14px;
        line-height: 16px;
        text-decoration: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        align-self: left;
      }
      .kc_masked {
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
      }
      .kc_img {
        width: 100%;
        margin: 8px 0px;
      }

    `}};t([Z()],Dt.prototype,"hass",void 0),t([Z()],Dt.prototype,"_config",void 0),Dt=t([W("yamc-card-details")],Dt);customElements.define("vaadin-pagination",class extends et{static get styles(){return Q`
      :host {
        display: block;
        font-size: 14px;
      }

      div.paginator-page-container {
        display: block;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-center-center;
      }

      :host paper-button {
        color: var(--primary-text-color);
        background-color: transparent;
        border-radius: 48px;
        display: inline-block;
        width: 24px;
        height: 24px;
        padding: 12px;
        vertical-align: top;
      }

      :host paper-button[disabled] {
        background-color: var(--paper-item-icon-active-color);
      }

      :host span {
        margin: 0px 4px;
      }
    `}static get properties(){return{limit:{type:Number,reflect:!0,attribute:!0},total:{type:Number,reflect:!0,attribute:!0},page:{type:Number,reflect:!0,attribute:!0},size:{type:Number,reflect:!0,attribute:!0},pages:{type:Number},hasBefore:{type:Boolean},hasNext:{type:Boolean},hasPages:{type:Boolean},items:{type:Array}}}constructor(){super(),this.limit=2,this.page=2,this.size=2,this.items={},this.total=20,this.hasBefore=this.computeBefore(this.page,this.pages),this.hasNext=this.computeNext(this.page,this.pages),this.hasPages=this.computeHasPage(this.items.size,this.total)}set page(t){const e=this._page;this._page=t,this.requestUpdate("page",e),this.onPageChange(this._page,e),this.observePageCount(this._page,this.limit,this.total)}get page(){return this._page}set limit(t){const e=this._limit;this._limit=t,this.requestUpdate("limit",e),this.observePageCount(this.page,this._limit,this.total)}get limit(){return this._limit}set total(t){const e=this._total;this._total=t,this.requestUpdate("total",e),this.observePageCount(this.page,this.limit,this._total)}get total(){return this._total}set size(t){const e=this._size;this._size=t,this.requestUpdate("size",e),this.observePageCount(this.page,this.limit,this._total)}get size(){return this._size}render(){return V`
      <iron-iconset-svg name="pagination-icons" size="24">
        <svg>
          <defs>
            <g id="fast-forward">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path>
            </g>
            <g id="fast-rewind">
              <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path>
            </g>
            <g id="navigate-before">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </g>
            <g id="navigate-next">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </g>
          </defs>
        </svg>
      </iron-iconset-svg>

      <div class="paginator-page-container" ?hidden="${!this.hasPage}">
        <ha-icon-button
          icon="mdi:skip-backward"
          @click="${t=>this.onBegin()}"
          ?hidden="${!this.hasBefore}"
        ></ha-icon-button>
        <ha-icon-button
          icon="mdi:chevron-left"
          @click="${t=>this.onBefore()}"
          ?hidden="${!this.hasBefore}"
        ></ha-icon-button>
        ${this.items.map(t=>V`
            <paper-button
              raised="${!this.isCurrent(t,this.page)}"
              ?disabled="${this.isCurrent(t,this.page)}"
              @click="${e=>this.onChange(t)}"
            >
              ${t}
            </paper-button>
          `)}

        <ha-icon-button
          icon="mdi:chevron-right"
          @click=${t=>this.onNext()}
          ?hidden="${!this.hasNext}"
        ></ha-icon-button>
        <ha-icon-button
          icon="mdi:skip-forward"
          @click=${t=>this.onEnd()}
          ?hidden="${!this.hasNext}"
        ></ha-icon-button>
      </div>
    `}computeBefore(t,e){return t>1}computeNext(t,e){return t<e}computeHasPage(t,e){return t<e}observePageCount(t,e,i){if(e&&i&&(this.pages=parseInt(Math.ceil(parseFloat(i)/parseFloat(e)))),t&&e&&i){const i=[];let n=t-parseInt(Math.floor(parseFloat(this.size)/2)),s=t+parseInt(Math.floor(parseFloat(this.size)/2));n<1&&(n=1,s=Math.min(n+this.size-1,this.pages)),s>this.pages&&(s=this.pages,n=Math.max(1,s-this.size+1));for(let t=n;t<=s;t++)i.push(t);this.items=i,console.log("paginated",t,"from",n,"to",s,e,"/",this.pages,":",i,"size",this.size)}}onPageChange(t,e){this.dispatchEvent(new CustomEvent("page-change",{detail:{newPage:t,oldPage:e}}))}isCurrent(t,e){return t==e}onChange(t){this.page=t,this.requestUpdate()}onBefore(t){this.page=this.page>0?this.page-1:1}onNext(t){this.page=this.page<this.pages?this.page+1:this.pages}onBegin(t){this.page=1}onEnd(t){this.page=this.pages}});const zt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Ot extends HTMLElement{constructor(){super(),this.holdTime=500,this.ripple=document.createElement("mwc-ripple"),this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:zt?"100px":"50px",height:zt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1});const i=t=>{if(this.cooldownStart)return;let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime),this.cooldownStart=!0,window.setTimeout(()=>this.cooldownStart=!1,100)},n=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?ft(t,"action",{action:"hold"}):e.hasDoubleTap?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout(()=>{ft(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),ft(t,"action",{action:"double_tap"})):ft(t,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout(()=>this.cooldownEnd=!1,100))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("keyup",t=>{if(13===t.keyCode)return n(t)}),/iPhone OS 13_/.test(window.navigator.userAgent)||(t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n))}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-media",Ot);const Vt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-media"))return t.querySelector("action-handler-media");const e=document.createElement("action-handler-media");return t.appendChild(e),e})();i&&i.bind(t,e)},qt=(Ut=(t={})=>e=>{Vt(e.committer.element,t)},(...t)=>{const e=Ut(...t);return g.set(e,!0),e});var Ut;console.info(`%c  YAMC \n%c  ${At("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let Lt=class extends et{constructor(){super(...arguments),this.cardSize=0}async loadCardHelpers(){this._helpers=await window.loadCardHelpers(),this._helpers&&this._helpers.importMoreInfoControl("light")}static async getConfigElement(){return document.createElement("yamc-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t||t.show_error)throw new Error(At("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:"YAMC"},t),this.loadCardHelpers()}shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;if(t._config.entity){var n=e.get("hass");return!n||n.states[t._config.entity]!==t.hass.states[t._config.entity]}return!1}(this,t,!1)}render(){if(!this._config||!this.hass)return V`
      `;const t=this.hass.states[this._config.entity];if(this._config.entity&&!t)return V`
        <ha-card>
          <div class="kc_warning">Entity Unavailable</div>
        </ha-card>
      `;const e=JSON.parse(t.attributes.yamc.data);if(!e||!e[0])return;const i=this._config.image_style||"fanart",n=this._config.date||"mmdd",s="background-color: "+(this._config.flag_color||"rgba(250, 250, 250, 50%)")+";",o={hour12:24!=this._config.clock,hour:"2-digit",minute:"2-digit"},a=this._config.title_text||e[0].title_default,r=this._config.line1_text||e[0].line1_default,c=this._config.line2_text||e[0].line2_default,l=this._config.line3_text||e[0].line3_default,d=this._config.line4_text||e[0].line4_default,h=this._config.line5_text||e[0].line5_default,p=(this._config.text_link||e[0].text_link_default,this._config.link||e[0].link_default,this._config.title_size||"large"),u=this._config.line1_size||this._config.line_size||"medium",g=this._config.line2_size||this._config.line_size||"small",m=this._config.line3_size||this._config.line_size||"small",f=this._config.line4_size||this._config.line_size||"small",_=this._config.line5_size||this._config.line_size||"small",y="var(--primary-text-color)";this._config.title_color,this._config.line1_color||this._config.line_color,this._config.line2_color||this._config.line_color,this._config.line3_color||this._config.line_color,this._config.line4_color||this._config.line_color,this._config.line5_color||this._config.line_color;function v(t,e){if(e="large"==e?30:"medium"==e?33:42,!((t=t.replace(/ *\([^)]*\) */g," ")).length>e))return t;for(let i=e;i>0;i--)if(t.charAt(i).match(/( |:|-|;|"|'|,|.)/)&&t.charAt(i-1).match(/[a-zA-Z0-9_]/))return t.substring(0,i)+"..."}function w(t){let e,i,s;if(String(t).match(/[T]\d+[:]\d+[:].+[Z]/))e=new Date(t).toLocaleDateString([],{day:"2-digit"}),i=new Date(t).toLocaleDateString([],{month:"2-digit"}),s=new Date(t).toLocaleDateString([],{year:"numeric"});else{if(!String(t).match(/\d+[-]\d+[-]\d+/))return t;e=(t=t.split("-"))[2],i=t[1],s=t[0]}return"ddmm"==n?`${e}/${i}/${s}`:`${i}/${e}/${s}`}this.cardSize=Math.min(e.length-1,this._config.max||5);const b=[];for(let t=1;t<=this.cardSize;t++){const n=i=>e[t][i];if(!n("airdate"))continue;if(this._config.hide_flagged&&n("flag"))continue;if(this._config.hide_unflagged&&!n("flag"))continue;const y=new Date(n("airdate")),x="poster"==i?n("poster"):n("fanart")||n("poster"),S=Math.round(Math.abs(((new Date).getTime()-y.getTime())/864e5))<=7?y.toLocaleDateString([],{weekday:"long"}):y.toLocaleDateString([],{weekday:"short"}),$=String(Math.floor(n("runtime")/60)),k=String(Math.floor(n("runtime")%60)).padStart(2,"0"),P=n("runtime")>0?n("runtime")>60?`${$}h${k}`:k+" min":"",C=[a,r,c,l,d,h],E=[a,r,c,l,d,h],N=[p,u,g,m,f,_],T=/\$title|\$episode|\$genres|\$number|\$rating|\$release|\$runtime|\$studio|\$day|\$date|\$time|\$tagline|\$info|\$info_url|\$stream_url/g,M={$title:n("title")||null,$episode:n("episode")||null,$genres:n("genres")||null,$number:n("number")||null,$rating:n("rating")||null,$release:w(n("release"))||null,$studio:n("studio")||null,$runtime:P||null,$day:S||null,$time:y.toLocaleTimeString([],o)||null,$date:w(n("airdate"))||null,$tagline:n("tagline")||null,$info:n("info")||null,$info_url:n("info_url")||null,$stream_url:n("stream_url")||null};for(let t=0;t<C.length;t++){C[t]=C[t].replace(" - ","-");const e=C[t].replace(T,t=>M[t]).split("-"),i=[];for(let t=0;t<e.length;t++)e[t].match(null)||i.push(e[t]);E[t]=i.join(" - ").replace(T,t=>M[t]),C[t]=v(E[t],N[t])}let A="mdi:check",D="darkgreen",z=this._config.icon_hide||!1;const O=n("progress");0==O?z=!0:O<100&&(D="tomato",A="mdi:progress-check"),"poster"==i||b.push(V`
          <!-- <tr><td class="kc_td" style="background-image: linear-gradient(to left, rgba(0, 0, 0, 1.0), transparent), url(${x});"> -->
          <tr>
            <td colspan="2" class="kc_td" @action=${this._handleAction} .item="${e[t]}" .actionHandler=${qt({hasHold:_t(this._config.hold_action),hasDoubleTap:_t(this._config.double_tap_action),repeat:this._config.hold_action?this._config.hold_action.repeat:void 0})}>
              <div class="kc_front">
                <div class="">
                  ${C.map((t,e)=>V`
                  <div class="kc_text_${N[e]}" title="${E[e]}">${C[e].match("empty")?V`<br />`:C[e]}</div>
                  `)}
                </div>
              </div>
              <img class="kc_img kc_masked" align="right" src="${x}" />
              <div style="position: relative;">
                ${z?V``:V`
                <ha-icon icon="${A}" class="kc_icon_indic"
                  style="position: absolute; right: 10px; top: 5px; color: ${D}; ${s};"></ha-icon>
                `}
              </div>
            </td>
          </tr>
        `)}const x=JSON.parse(t.attributes.yamc.playlists);return V`
          <ha-card tabindex="0">
            <table class="kc_table">
              <tr>
                <td style="padding: 10px 10px 3px;" width="40%">
                  <paper-input label="Search" value="${t.attributes.yamc.last_search}" @keypress=${({target:t,keyCode:e})=>{13===e&&this._search(t.value)}}
                    no-label-float
                    ></paper-input>
                </td>
                <td style="padding: 10px 10px 3px;">
                  <paper-dropdown-menu style="width: 100%" label="Playlist" no-label-float>
                    <paper-listbox style="width: 100%" slot="dropdown-content" .selected=${t.attributes.yamc.last_playlist}
                      attr-for-selected="item-name" @selected-item-changed=${this._set_playlist}>
                      ${x.sort().map(t=>V`<paper-item item-name=${t.name}>${t.description}</paper-item>`)}
                    </paper-listbox>
                  </paper-dropdown-menu>
                  <div style="position: absolute; font-size: 8px; line-height: 10px; top: 60px; right: 10px">
                    ${(t.attributes.yamc.page-1)*t.attributes.yamc.page_size+1}-${Math.min(t.attributes.yamc.page*t.attributes.yamc.page_size,t.attributes.yamc.total_items)}
                    / ${t.attributes.yamc.total_items}
                  </div>
                </td>
              </tr>
              ${t.attributes.yamc.total_items>t.attributes.yamc.page_size?V`
              <tr>
                <td colspan=2 align="center">
                  <vaadin-pagination page=${t.attributes.yamc.page} total=${t.attributes.yamc.total_items}
                    limit=${t.attributes.yamc.page_size} size=3 @page-change=${this._onPageChanged}></vaadin-pagination>
                </td>
              </tr>
              `:V``}
              ${b.map(t=>t)}
            </table>
          </ha-card>
    `}_handleAction(t){if(this.hass&&this._config&&t.detail.action){const e=this.hass.states[this._config.entity];e.attributes.yamc.cur_item=t.currentTarget.item,St(`${e.attributes.yamc.cur_item.title} (${e.attributes.yamc.cur_item.release})`,{type:"custom:yamc-card-details",entity:this._config.entity,domain:this._config.domain,target_player:this._config.target_player})}}_onPageChanged(t){this.hass&&this._config&&(console.log("NewPage",t.detail.newPage),this.hass.callService(this._config.domain,"yamc_setpage",{entity_id:this._config.entity,page:t.detail.newPage}))}_set_playlist(t){if(!this.hass||!this._config||""===t.target.selected)return;this.hass.states[this._config.entity].attributes.yamc.last_playlist!==t.target.selected&&this.hass.callService(this._config.domain,"yamc_setplaylist",{entity_id:this._config.entity,playlist:t.target.selected})}_search(t){if(this.hass&&this._config){if(this.hass.states[this._config.entity].attributes.yamc.last_search===t)return;this.hass.callService(this._config.domain,"search",{entity_id:this._config.entity,search_term:t})}}static get styles(){return Q`
      .kc_icon_indic {
        height: 27px;
        width: 27px;
        border-radius: 50%;
        display: inline-block;
      }
      .kc_a:hover {
        text-decoration: underline;
      }
      .kc_text_small {
        color: var(--primary-text-color);
        font-size: 12px;
        line-height: 14px;
        text-decoration: none;
      }
      .kc_text_medium {
        color: var(--primary-text-color);
        font-size: 14px;
        line-height: 16px;
        text-decoration: none;
      }
      .kc_text_large {
        color: var(--primary-text-color);
        font-size: 16px;
        line-height: 18px;
        font-weight: 600;
        text-decoration: none;
      }
      .kc_container {
        width:100%;
        overflow:auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        background-repeat:no-repeat;
        background-size:auto 100%;
        position:relative;
      }
      .kc_back {
/*         position: relative;
        z-index: -1;
 */
      }
      .kc_front {
        position: absolute;
        margin-top: 5px;
        margin-left: 10px;
        z-index: 1;
      }
      .kc_table {
        width: 100%;
        border-spacing: 0px 5px;
      }
      .kc_td {
        background-position: content;
        border-collapse: collapse;
        padding: 3px;
        -webkit-box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.50);
        -moz-box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.50);
        box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.50);     }
      .kc_semi_opaque {
        opacity: 25%;
      }
      .kc_opaque {
        opacity: 100%;
      }
      .kc_masked {
        -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1.0) 60%, transparent);
      }
      .kc_img {
        height: 105px;
      }
      .kc_warning {
        display: block;
        color: black;
        background-color: #fce588;
        padding: 8px;
      }
      `}getCardSize(){return 2*this.cardSize}};t([Z()],Lt.prototype,"_helpers",void 0),t([Z()],Lt.prototype,"hass",void 0),t([Z()],Lt.prototype,"_config",void 0),Lt=t([W("yamc-card")],Lt);export{Lt as MediaCard};
