(self["webpackChunkstar_wars"]=self["webpackChunkstar_wars"]||[]).push([[767],{9669:function(t,e,r){t.exports=r(1609)},5448:function(t,e,r){"use strict";var i=r(4867),s=r(6026),n=r(5327),a=r(4109),o=r(7985),l=r(5061);t.exports=function(t){return new Promise((function(e,u){var c=t.data,h=t.headers;i.isFormData(c)&&delete h["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",f=t.auth.password||"";h.Authorization="Basic "+btoa(p+":"+f)}if(d.open(t.method.toUpperCase(),n(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,i=t.responseType&&"text"!==t.responseType?d.response:d.responseText,n={data:i,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};s(e,u,n),d=null}},d.onerror=function(){u(l("Network Error",t,null,d)),d=null},d.ontimeout=function(){u(l("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},i.isStandardBrowserEnv()){var g=r(4372),m=(t.withCredentials||o(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;m&&(h[t.xsrfHeaderName]=m)}if("setRequestHeader"in d&&i.forEach(h,(function(t,e){"undefined"===typeof c&&"content-type"===e.toLowerCase()?delete h[e]:d.setRequestHeader(e,t)})),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(v){if("json"!==t.responseType)throw v}"function"===typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),u(t),d=null)})),void 0===c&&(c=null),d.send(c)}))}},1609:function(t,e,r){"use strict";var i=r(4867),s=r(1849),n=r(321),a=r(5655);function o(t){var e=new n(t),r=s(n.prototype.request,e);return i.extend(r,n.prototype,e),i.extend(r,e),r}var l=o(a);l.Axios=n,l.create=function(t){return o(i.merge(a,t))},l.Cancel=r(5263),l.CancelToken=r(4972),l.isCancel=r(6502),l.all=function(t){return Promise.all(t)},l.spread=r(8713),t.exports=l,t.exports["default"]=l},5263:function(t){"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},4972:function(t,e,r){"use strict";var i=r(5263);function s(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new i(t),e(r.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var t,e=new s((function(e){t=e}));return{token:e,cancel:t}},t.exports=s},6502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,r){"use strict";var i=r(5655),s=r(4867),n=r(782),a=r(3572);function o(t){this.defaults=t,this.interceptors={request:new n,response:new n}}o.prototype.request=function(t){"string"===typeof t&&(t=s.merge({url:arguments[0]},arguments[1])),t=s.merge(i,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[a,void 0],r=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)r=r.then(e.shift(),e.shift());return r},s.forEach(["delete","get","head","options"],(function(t){o.prototype[t]=function(e,r){return this.request(s.merge(r||{},{method:t,url:e}))}})),s.forEach(["post","put","patch"],(function(t){o.prototype[t]=function(e,r,i){return this.request(s.merge(i||{},{method:t,url:e,data:r}))}})),t.exports=o},782:function(t,e,r){"use strict";var i=r(4867);function s(){this.handlers=[]}s.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},s.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},s.prototype.forEach=function(t){i.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=s},5061:function(t,e,r){"use strict";var i=r(481);t.exports=function(t,e,r,s,n){var a=new Error(t);return i(a,e,r,s,n)}},3572:function(t,e,r){"use strict";var i=r(4867),s=r(8527),n=r(6502),a=r(5655),o=r(1793),l=r(7303);function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){u(t),t.baseURL&&!o(t.url)&&(t.url=l(t.baseURL,t.url)),t.headers=t.headers||{},t.data=s(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||a.adapter;return e(t).then((function(e){return u(t),e.data=s(e.data,e.headers,t.transformResponse),e}),(function(e){return n(e)||(u(t),e&&e.response&&(e.response.data=s(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},481:function(t){"use strict";t.exports=function(t,e,r,i,s){return t.config=e,r&&(t.code=r),t.request=i,t.response=s,t}},6026:function(t,e,r){"use strict";var i=r(5061);t.exports=function(t,e,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?e(i("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},8527:function(t,e,r){"use strict";var i=r(4867);t.exports=function(t,e,r){return i.forEach(r,(function(r){t=r(t,e)})),t}},5655:function(t,e,r){"use strict";var i=r(4867),s=r(6016),n={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process)&&(t=r(5448)),t}var l={adapter:o(),transformRequest:[function(t,e){return s(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(t){l.headers[t]={}})),i.forEach(["post","put","patch"],(function(t){l.headers[t]=i.merge(n)})),t.exports=l},1849:function(t){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),i=0;i<r.length;i++)r[i]=arguments[i];return t.apply(e,r)}}},5327:function(t,e,r){"use strict";var i=r(4867);function s(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var n;if(r)n=r(e);else if(i.isURLSearchParams(e))n=e.toString();else{var a=[];i.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(i.isArray(t)?e+="[]":t=[t],i.forEach(t,(function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),a.push(s(e)+"="+s(t))})))})),n=a.join("&")}return n&&(t+=(-1===t.indexOf("?")?"?":"&")+n),t}},7303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4372:function(t,e,r){"use strict";var i=r(4867);t.exports=i.isStandardBrowserEnv()?function(){return{write:function(t,e,r,s,n,a){var o=[];o.push(t+"="+encodeURIComponent(e)),i.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),i.isString(s)&&o.push("path="+s),i.isString(n)&&o.push("domain="+n),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},7985:function(t,e,r){"use strict";var i=r(4867);t.exports=i.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(t){var i=t;return e&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=s(window.location.href),function(e){var r=i.isString(e)?s(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},6016:function(t,e,r){"use strict";var i=r(4867);t.exports=function(t,e){i.forEach(t,(function(r,i){i!==e&&i.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[i])}))}},4109:function(t,e,r){"use strict";var i=r(4867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,n,a={};return t?(i.forEach(t.split("\n"),(function(t){if(n=t.indexOf(":"),e=i.trim(t.substr(0,n)).toLowerCase(),r=i.trim(t.substr(n+1)),e){if(a[e]&&s.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}})),a):a}},8713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},4867:function(t,e,r){"use strict";var i=r(1849),s=r(8738),n=Object.prototype.toString;function a(t){return"[object Array]"===n.call(t)}function o(t){return"[object ArrayBuffer]"===n.call(t)}function l(t){return"undefined"!==typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function c(t){return"string"===typeof t}function h(t){return"number"===typeof t}function d(t){return"undefined"===typeof t}function p(t){return null!==t&&"object"===typeof t}function f(t){return"[object Date]"===n.call(t)}function g(t){return"[object File]"===n.call(t)}function m(t){return"[object Blob]"===n.call(t)}function v(t){return"[object Function]"===n.call(t)}function y(t){return p(t)&&v(t.pipe)}function b(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function w(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function S(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function x(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function C(){var t={};function e(e,r){"object"===typeof t[r]&&"object"===typeof e?t[r]=C(t[r],e):t[r]=e}for(var r=0,i=arguments.length;r<i;r++)x(arguments[r],e);return t}function _(t,e,r){return x(e,(function(e,s){t[s]=r&&"function"===typeof e?i(e,r):e})),t}t.exports={isArray:a,isArrayBuffer:o,isBuffer:s,isFormData:l,isArrayBufferView:u,isString:c,isNumber:h,isObject:p,isUndefined:d,isDate:f,isFile:g,isBlob:m,isFunction:v,isStream:y,isURLSearchParams:b,isStandardBrowserEnv:S,forEach:x,merge:C,extend:_,trim:w}},8738:function(t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},7273:function(){},7541:function(t,e,r){"use strict";r.d(e,{L:function(){return o}});r(1703);var i=r(9669),s=r.n(i);const n={fullUrl:"",urls:[],baseUrl:"https://swapi.dev/api",endpoint:"people",id:0,page:1,next:"",previous:"",results:[],request(t){if(!t)throw Error("Please provide an url");return s().get(`${t}`)},requestPaginated(){return s().get(`${this.baseUrl}/${this.endpoint}/?page=${this.page}`)},requestById(t){if(!t)throw Error("Please provide an id");return s().get(`${this.baseUrl}/${this.endpoint}/${t}`)},batchRequest(t){const e=[];return t.forEach((t=>{const r=this.request(t);e.push(r)})),s().all(e)},getResults(t,e,r,i){return t?(this.fullUrl=t,this.request(t).then((t=>{const e=t.data;this.results=e}))):e?(this.urls=e,this.batchRequest(e).then((t=>{const e=[];t.forEach((t=>{e.push(t.data)})),this.results=e}))):r?(this.id=r,this.requestById(r).then((t=>{const e=t.data;this.results=e}))):(i&&(this.page=i),this.requestPaginated().then((t=>{const e=t.data;this.results=e,this.next=e.next,this.previous=e.previous})))},async getAllResults(){this.page=1;while(null!==this.next)await this.getResults(void 0,void 0,void 0),this.page+=1}};const a={endpoint:"people",baseImageUrl:"https://starwars-visualguide.com/assets/img/",async getEntities(t,e){const r=n;return r.endpoint=e,r.page=t||1,await r.getResults(void 0,void 0,void 0,t),r.results},async getEntity(t,e){const r=n;return r.endpoint=e,await r.getResults(void 0,void 0,t,void 0),r.results},async getSubEntity(t,e){const r=n;return await r.getResults(void 0,t,void 0,void 0),r.results.forEach((t=>{const r=this.getIdFromUrl(t.url),i=this.getImageUrl(Number(r),e);t.imageUrl=i})),r.results},async fetchEntityList(t,e){const r=await this.getEntities(t,e);return r.results.forEach((t=>{const r=this.getIdFromUrl(t.url),i=this.getImageUrl(Number(r),e);t.imageUrl=i})),r},getIdFromUrl(t){const e=t.split("/");e.pop();const r=e.pop();return r},getEntityTypeFromUrl(t){const e=t.split("/");return e[e.length-3]},getImageUrl(t,e){const r="people"===e?"characters":e,i=`https://starwars-visualguide.com/assets/img/${r}/${t}.jpg`;return i},async fetchPerson(t){let e;"number"===typeof t?e=await this.getEntity(t,"people"):"object"===typeof t&&(e=t);const r=await this.getSubEntity([e.homeworld],"planets"),i=await this.getSubEntity([...e.films],"films"),s=await this.getSubEntity([...e.species],"species"),n=await this.getSubEntity([...e.vehicles],"vehicles"),a=await this.getSubEntity([...e.starships],"starships"),o=this.getIdFromUrl(e.url),l=await this.getImageUrl(Number(o),"people"),u={...e,subentities:{homeworld:r,species:s,films:i,vehicles:n,starships:a},imageUrl:l};return u},async fetchStarship(t){const e=await this.getEntity(t,"starships"),r=await this.getSubEntity([...e.pilots],"people"),i=await this.getSubEntity([...e.films],"films"),s=await this.getImageUrl(Number(t),"starships"),n={...e,subentities:{pilots:r,films:i},imageUrl:s};return n},async fetchPlanet(t){const e=await this.getEntity(t,"planets"),r=await this.getSubEntity([...e.residents],"people"),i=await this.getSubEntity([...e.films],"films"),s=await this.getImageUrl(Number(t),"planets"),n={...e,subentities:{residents:r,films:i},imageUrl:s};return n},async fetchVehicle(t){const e=await this.getEntity(t,"vehicle"),r=await this.getSubEntity([...e.pilots],"people"),i=await this.getSubEntity([...e.films],"films"),s=await this.getImageUrl(Number(t),"vehicles"),n={...e,subentities:{pilots:r,films:i},imageUrl:s};return n},async fetchSpecies(t){const e=await this.getEntity(t,"species");let r;e?.homeworld&&(r=await this.getSubEntity([e.homeworld],"planets"));const i=await this.getSubEntity([...e.people],"people"),s=await this.getSubEntity([...e.films],"films"),n=await this.getImageUrl(Number(t),"species"),a={...e,subentities:{homeworld:r,people:i,films:s},imageUrl:n};return a},async fetchFilm(t){const e=await this.getEntity(t,"films"),r=await this.getSubEntity([...e.characters],"people"),i=await this.getSubEntity([...e.planets],"planets"),s=await this.getSubEntity([...e.starships],"starships"),n=await this.getSubEntity([...e.vehicles],"vehicles"),a=await this.getSubEntity([...e.species],"species"),o=await this.getImageUrl(Number(t),"films"),l={...e,subentities:{people:r,planets:i,starships:s,vehicles:n,species:a},imageUrl:o};return l}};const o={empty:"asdf",getList:(t,e)=>a.fetchEntityList(t,e),getPerson:t=>a.fetchPerson(t),getStarship:t=>a.fetchStarship(t),getFilm:t=>a.fetchFilm(t),getSpecies:t=>a.fetchSpecies(t),getPlanet:t=>a.fetchPlanet(t),getVehicle:t=>a.fetchVehicle(t),getIdFromUrl:t=>a.getIdFromUrl(t),getEntityTypeFromUrl:t=>a.getEntityTypeFromUrl(t),getImageUrl:(t,e)=>a.getImageUrl(t,e)}},26:function(t,e,r){"use strict";r.d(e,{Z:function(){return y}});var i=r(5648),s=r(144),n=r(5827),a=r(8083),o=r(6952),l=r(3536),u=r(1431),c=r(8085),h=r(4589),d=r(3325);const p=(0,d.Z)(o.Z,(0,l.d)(["absolute","fixed","top","bottom"]),u.Z,c.Z);var f=p.extend({name:"v-progress-linear",directives:{intersect:a.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,h.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,h.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,h.kb)(this.normalizedValue,"%"),width:(0,h.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?n.Z5:n.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,h.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,h.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,r){this.isVisible=r},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,h.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=f,m=s["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),v=r(6505),y=(0,d.Z)(m,v.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...v.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=m.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,r){"use strict";r.d(e,{EB:function(){return l},Qq:function(){return a}});var i=r(26),s=r(4589);const n=(0,s.Ji)("v-card__actions"),a=(0,s.Ji)("v-card__subtitle"),o=(0,s.Ji)("v-card__text"),l=(0,s.Ji)("v-card__title");i.Z},2102:function(t,e,r){"use strict";r(6699),r(7273);var i=r(144),s=r(6290),n=r(4589);const a=["sm","md","lg","xl"],o=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>a.reduce(((t,e)=>(t["offset"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u=(()=>a.reduce(((t,e)=>(t["order"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(u)};function h(t,e,r){let i=t;if(null!=r&&!1!==r){if(e){const r=e.replace(t,"");i+=`-${r}`}return"col"!==t||""!==r&&!0!==r?(i+=`-${r}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:r,children:i,parent:n}){let a="";for(const s in e)a+=String(e[s]);let o=d.get(a);if(!o){let t;for(t in o=[],c)c[t].forEach((r=>{const i=e[r],s=h(t,r,i);s&&o.push(s)}));const r=o.some((t=>t.startsWith("col-")));o.push({col:!r||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(a,o)}return t(e.tag,(0,s.ZP)(r,{class:o}),i)}})},247:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});r(7273);var i=r(144);function s(t){return i["default"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:r,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),e(r.tag,i,s)}})}var n=r(6290),a=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:r,children:i}){let s;const{attrs:a}=r;return a&&(r.attrs={},s=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),t(e.tag,(0,n.ZP)(r,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}})},2877:function(t,e,r){"use strict";r(6699),r(7273);var i=r(144),s=r(6290),n=r(4589);const a=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return a.reduce(((r,i)=>(r[t+(0,n.jC)(i)]=e(),r)),{})}const u=t=>[...o,"baseline","stretch"].includes(t),c=l("align",(()=>({type:String,default:null,validator:u}))),h=t=>[...o,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),f=l("alignContent",(()=>({type:String,default:null,validator:p}))),g={align:Object.keys(c),justify:Object.keys(d),alignContent:Object.keys(f)},m={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,r){let i=m[t];if(null!=r){if(e){const r=e.replace(t,"");i+=`-${r}`}return i+=`-${r}`,i.toLowerCase()}}const y=new Map;e["Z"]=i["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:r,children:i}){let n="";for(const s in e)n+=String(e[s]);let a=y.get(n);if(!a){let t;for(t in a=[],g)g[t].forEach((r=>{const i=e[r],s=v(t,r,i);s&&a.push(s)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(n,a)}return t(e.tag,(0,s.ZP)(r,{staticClass:"row",class:a}),i)}})},43:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var i=r(144),s=i["default"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const r=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),r)}}}),n=r(2936),a=r(3325),o=r(5969),l=(0,a.Z)(s,n.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return(0,o.Kd)("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):((0,o.Kd)("v-hover should only contain a single element",this),t)}})},7438:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return R}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-overlay",{attrs:{value:t.loading,absolute:""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),r("v-row",t._l(t.items,(function(e,i){return r("v-col",{key:i,attrs:{cols:"12",sm:"6",md:"6",lg:"3",xl:"3"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var s=i.hover;return[r("v-card",{style:s?"transform: scale(1.02)":"transform: scale(1)",attrs:{elevation:s?16:2},on:{click:function(r){return t.openItem(e)}}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.imageUrl,"min-height":"300px",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("v-card-title",[t._v(t._s(""+(e.name?e.name:e.title)))])],1)],1)]}}],null,!0)})],1)})),1),r("div",{staticClass:"text-center py-10"},[t.loading?t._e():r("v-pagination",{attrs:{length:t.numberOfPages,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},on:{input:t.getItems},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},s=[],n=r(3796),a=r(1929),o=r(7541),l=function(t,e,r,i){var s,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,r,a):s(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};const u=a.w3.extend({});let c=class extends u{constructor(...t){super(...t),(0,n.Z)(this,"loading",!1),(0,n.Z)(this,"items",{}),(0,n.Z)(this,"page",1),(0,n.Z)(this,"itemsPerPage",10),(0,n.Z)(this,"numberOfPages",1),(0,n.Z)(this,"entityType",this.$route.params.entityType)}mounted(){this.getItems()}async getItems(){let t;this.loading=!0;try{t=await o.L.getList(this.page,this.entityType),this.items=t.results,this.numberOfPages=Math.floor(t.count/10)}finally{this.loading=!1,this.$emit("finish-loading")}return t.results}openItem(t){this.$router.push({name:"details",params:{id:String(o.L.getIdFromUrl(t.url)),entityType:this.entityType}})}formatKeyString(t){const e=t.replace("_"," ");return`${e[0].toUpperCase()+e.slice(1)}`}};c=l([(0,a.wA)({})],c);var h=c,d=h,p=r(1001),f=r(3453),g=r.n(f),m=r(26),v=r(7118),y=r(2102),b=r(247),w=r(43),S=r(7047),x=r(1058),C=r(172),_=r(549),E=r(6952),$=r(8083),k=r(5969),B=r(144);function I(t){return B["default"].extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){$.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){$.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,r,i){if(this.isIntersecting=i,i)for(let s=0,n=t.onVisible.length;s<n;s++){const e=this[t.onVisible[s]];"function"!==typeof e?(0,k.Kd)(t.onVisible[s]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var U=r(8085),L=r(3325),Z=(0,L.Z)(E.Z,I({onVisible:["init"]}),U.Z).extend({name:"v-pagination",directives:{Resize:_.Z},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const r=e%2===0?1:0,i=Math.floor(e/2),s=this.length-i+1+r;if(this.value>i&&this.value<s){const t=1,e=this.length,s=this.value-i+2,n=this.value+i-2-r,a=s-1===t+1?2:"...",o=n+1===e-1?n+1:"...";return[1,a,...this.range(s,n),o,this.length]}if(this.value===i){const t=this.value+i-1-r;return[...this.range(1,t),"...",this.length]}if(this.value===s){const t=this.value-i+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,i),"...",...this.range(s,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((()=>this.selected=this.value),100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const r=[];t=t>0?t:1;for(let i=t;i<=e;i++)r.push(i);return r},genIcon(t,e,r,i,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":r},attrs:{disabled:r,type:"button","aria-label":s},on:r?{}:{click:i}},[t(C.Z,[e])])])},genItem(t,e){const r=e===this.value&&(this.color||"primary"),i=e===this.value,s=i?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(r,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":i,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map(((e,r)=>t("li",{key:r},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)])))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),j=r(624),P=r(2877),T=(0,p.Z)(d,i,s,!1,null,null,null),R=T.exports;g()(T,{VCard:m.Z,VCardTitle:v.EB,VCol:y.Z,VContainer:b.Z,VHover:w.Z,VImg:S.Z,VOverlay:x.Z,VPagination:Z,VProgressCircular:j.Z,VRow:P.Z})},8688:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return B}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{elevation:"0"}},[r("v-overlay",{attrs:{value:t.loading,absolute:""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),r("v-container",[r("v-row",[r("v-col",[t.isMobile?r("v-card",{staticClass:"pa-0",staticStyle:{background:"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))"},attrs:{dark:"",elevation:"12"}},[r("v-col",{staticClass:"pa-0  text-center"},[r("v-img",{staticClass:"ma-0 rounded",attrs:{src:t.item.imageUrl,gradient:"to bottom, rgba(0,0,0,.2), rgba(0,0,0,.0)"}}),r("div",{staticClass:"text-h5 py-2 text-center"},[t._v(" "+t._s(t.item.name)+" ")])],1),r("v-divider"),t._l(Object.keys(t.item),(function(e,i){return[t.ignore(e)?t._e():r("v-col",{key:i},[t._v(" "+t._s(t.formatKeyString(e))+": "+t._s(t.item[e])+" ")])]}))],2):r("v-card",{staticClass:"mt-5",staticStyle:{background:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))"},attrs:{dark:"",elevation:"12"}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-row",{staticClass:"justify-content-start ml-1 text-justify",attrs:{dense:""}},[r("v-col",[r("v-card-title",{staticClass:"text-h5 ml-0"},[t._v(" "+t._s(t.item.name)+" ")]),r("v-divider")],1),t._l(Object.keys(t.item),(function(e,i){return[t.ignore(e)?t._e():r("v-col",{key:i,attrs:{sm:"12"}},[t._v(" "+t._s(t.formatKeyString(e))+": "+t._s(t.item[e])+" ")])]}))],2),r("v-avatar",{staticClass:"ma-2",attrs:{size:"300",rounded:""}},[r("v-img",{attrs:{src:t.item.imageUrl,gradient:"to bottom, rgba(0,0,0,.2), rgba(0,0,0,.0)"}})],1)],1)])],1)],1)],1),r("v-container",[r("v-overlay",{attrs:{value:t.loading,absolute:""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),r("v-row",[t._l(t.item.subentities,(function(e,i){return[e&&e.length>0?r("v-col",{key:i,attrs:{sm:"12",md:"12",lg:"6",xl:"4"}},[r("v-card",{staticClass:"pa-1",staticStyle:{background:"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5))"},attrs:{dark:""}},[r("div",{staticClass:"ma-2 text-h5"},[t._v(" "+t._s(t.formatKeyString(i))+" ")]),r("v-divider"),r("v-container",[r("v-row",{attrs:{dense:""}},t._l(e,(function(i,s){return r("v-col",{key:s,attrs:{cols:"12"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var n=s.hover;return[r("v-card",{style:n?"transform: scale(1.02)":"transform: scale(1)",attrs:{elevation:n?16:2,dark:""},on:{click:function(r){return t.openItem(i,e)}}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",[r("v-card-subtitle",[t._v(t._s(""+(i.name?i.name:i.title)))])],1),r("v-avatar",{staticClass:"ma-0",attrs:{size:"125",rounded:""}},[r("v-img",{attrs:{src:i.imageUrl,gradient:"to bottom, rgba(0,0,0,.3), rgba(0,0,0,.1)"}})],1)],1)])]}}],null,!0)})],1)})),1)],1)],1)],1):t._e()]}))],2)],1)],1)},s=[],n=r(3796),a=(r(6699),r(1929)),o=r(7541),l=function(t,e,r,i){var s,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(n<3?s(a):n>3?s(e,r,a):s(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a};let u=class extends a.w3{constructor(...t){super(...t),(0,n.Z)(this,"item",{}),(0,n.Z)(this,"entityId",Number(this.$route.params.id)),(0,n.Z)(this,"entityType",this.$route.params.entityType),(0,n.Z)(this,"loading",!1)}async mounted(){this.item=await this.getItem()}async getItem(){this.loading=!0;try{if("people"===this.entityType){const t=await o.L.getPerson(this.entityId);return t}if("starships"===this.entityType){const t=await o.L.getStarship(this.entityId);return t}if("species"===this.entityType){const t=await o.L.getSpecies(this.entityId);return t}if("films"===this.entityType){const t=await o.L.getFilm(this.entityId);return t}if("vehicles"===this.entityType){const t=await o.L.getVehicle(this.entityId);return t}if("planets"===this.entityType){const t=await o.L.getPlanet(this.entityId);return t}return o.L.getPerson(this.entityId)}finally{this.loading=!1}}formatKeyString(t){const e=t.replace("_"," ");return`${e[0].toUpperCase()+e.slice(1)}`}ignore(t){const e=["name","films","people","species","homeworld","vehicles","starships","url","created","imageUrl","edited","pilots","subentities","characters","planets","residents"];return e.includes(t)}get isMobile(){return"xs"===this.$vuetify.breakpoint.name}isArray(t){return Array.isArray(t)}openItem(t,e){this.$router.push({name:"details",params:{id:String(o.L.getIdFromUrl(t.url)),entityType:o.L.getEntityTypeFromUrl(t.url)}})}};u=l([(0,a.wA)({})],u);var c=u,h=c,d=r(1001),p=r(3453),f=r.n(p),g=r(6370),m=r(26),v=r(7118),y=r(2102),b=r(247),w=r(8085),S=w.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}}),x=r(43),C=r(7047),_=r(1058),E=r(624),$=r(2877),k=(0,d.Z)(h,i,s,!1,null,null,null),B=k.exports;f()(k,{VAvatar:g.Z,VCard:m.Z,VCardSubtitle:v.Qq,VCardTitle:v.EB,VCol:y.Z,VContainer:b.Z,VDivider:S,VHover:x.Z,VImg:C.Z,VOverlay:_.Z,VProgressCircular:E.Z,VRow:$.Z})}}]);
//# sourceMappingURL=details.681c7ea9.js.map