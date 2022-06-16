/*! BitPress license information 7194.js.LICENSE.txt?v=32c76b */
"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[7194],{75021:(e,t,n)=>{n.d(t,{KT:()=>_,Vv:()=>j,ch:()=>k});var r,a,o,i=n(67294);!function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"}(r||(r={})),function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"}(a||(a={})),function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"}(o||(o={}));var s="data-react-paypal-script-id",l="data-sdk-integration-source",c="react-paypal-js",u="data-namespace",d="3.84.0",p=("https://js.braintreegateway.com/web/".concat(d,"/js/client.min.js"),"https://js.braintreegateway.com/web/".concat(d,"/js/paypal-checkout.min.js"),"paypal"),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function m(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function v(e){return void 0===e&&(e=p),window[e]}function b(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,a=void 0===r?"":r,o=e.sdkDataNamespace,i=void 0===o?p:o,s=n.charAt(0).toUpperCase().concat(n.substring(1)),l="Unable to render <".concat(t," /> because window.").concat(i,".").concat(s," is undefined.");if(!a.includes(n)){var c=[a,n].filter(Boolean).join();l+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(c,"'}}>`.")}return l}function g(e){return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(e)))}function y(e,t){var n;switch(t.type){case a.LOADING_STATUS:return f(f({},e),{loadingStatus:t.value});case a.RESET_OPTIONS:return function(e){var t=self.document.querySelector("script[".concat(s,'="').concat(e,'"]'));(null===t||void 0===t?void 0:t.parentNode)&&t.parentNode.removeChild(t)}(e.options[s]),delete t.value[s],f(f({},e),{loadingStatus:r.PENDING,options:f(f({},t.value),(n={},n[s]="".concat(g(t.value)),n[l]=c,n))});case a.SET_BRAINTREE_INSTANCE:return f(f({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var w=(0,i.createContext)(null);function E(e){if("function"===typeof(null===e||void 0===e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function x(){var e=E((0,i.useContext)(w));return[f(f({},e),{isInitial:e.loadingStatus===r.INITIAL,isPending:e.loadingStatus===r.PENDING,isResolved:e.loadingStatus===r.RESOLVED,isRejected:e.loadingStatus===r.REJECTED}),e.dispatch]}(0,i.createContext)({});var k=function(e){var t=e.className,n=void 0===t?"":t,r=e.disabled,a=void 0!==r&&r,o=e.children,s=e.forceReRender,l=void 0===s?[]:s,c=h(e,["className","disabled","children","forceReRender"]),d=a?{opacity:.38}:{},p="".concat(n," ").concat(a?"paypal-buttons-disabled":"").trim(),g=(0,i.useRef)(null),y=(0,i.useRef)(null),w=x()[0],E=w.isResolved,N=w.options,S=(0,i.useState)(null),C=S[0],R=S[1],A=(0,i.useState)(!0),I=A[0],O=A[1],P=(0,i.useState)(null)[1];function L(){null!==y.current&&y.current.close().catch((function(){}))}return(0,i.useEffect)((function(){if(!1===E)return L;var e=v(N[u]);if(void 0===e||void 0===e.Buttons)return P((function(){throw new Error(b({reactComponentName:k.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:N.components,sdkDataNamespace:N[u]}))})),L;try{y.current=e.Buttons(f(f({},c),{onInit:function(e,t){R(t),"function"===typeof c.onInit&&c.onInit(e,t)}}))}catch(t){return P((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(t))}))}return!1===y.current.isEligible()?(O(!1),L):g.current?(y.current.render(g.current).catch((function(e){null!==g.current&&0!==g.current.children.length&&P((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(e))}))})),L):L}),m(m([E],l,!0),[c.fundingSource],!1)),(0,i.useEffect)((function(){null!==C&&(!0===a?C.disable().catch((function(){})):C.enable().catch((function(){})))}),[a,C]),i.createElement(i.Fragment,null,I?i.createElement("div",{ref:g,style:d,className:p}):o)};function N(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),function(e){var t=e["merchant-id"],n=e["data-merchant-id"],r="",a="";Array.isArray(t)?t.length>1?(r="*",a=t.toString()):r=t.toString():"string"===typeof t&&t.length>0?r=t:"string"===typeof n&&n.length>0&&(r="*",a=n);e["merchant-id"]=r,e["data-merchant-id"]=a}(e);var n=Object.keys(e).filter((function(t){return"undefined"!==typeof e[t]&&null!==e[t]&&""!==e[t]})).reduce((function(t,n){var r=e[n].toString();return"data-"===n.substring(0,5)?t.dataAttributes[n]=r:t.queryParams[n]=r,t}),{queryParams:{},dataAttributes:{}}),r=n.queryParams,a=n.dataAttributes;return{url:"".concat(t,"?").concat(S(r)),dataAttributes:a}}function S(e){var t="";return Object.keys(e).forEach((function(n){0!==t.length&&(t+="&"),t+=n+"="+e[n]})),t}function C(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach((function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])})),n}function R(e,t){if(void 0===t&&(t=I()),P(e,t),"undefined"===typeof window)return t.resolve(null);var n=N(e),r=n.url,a=n.dataAttributes,o=a["data-namespace"]||"paypal",i=O(o);return function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=C(e,t),a=n.cloneNode();if(delete a.dataset.uidAuto,Object.keys(a.dataset).length!==Object.keys(r.dataset).length)return null;var o=!0;return Object.keys(a.dataset).forEach((function(e){a.dataset[e]!==r.dataset[e]&&(o=!1)})),o?n:null}(r,a)&&i?t.resolve(i):A({url:r,attributes:a},t).then((function(){var e=O(o);if(e)return e;throw new Error("The window.".concat(o," global variable is not available."))}))}function A(e,t){void 0===t&&(t=I()),P(e,t);var n=e.url,r=e.attributes;if("string"!==typeof n||0===n.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new t((function(e,t){if("undefined"===typeof window)return e();!function(e){var t=e.url,n=e.attributes,r=e.onSuccess,a=e.onError,o=C(t,n);o.onerror=a,o.onload=r,document.head.insertBefore(o,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return e()},onError:function(){var e=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then((function(n){return 200===n.status&&t(e),n.text()})).then((function(e){var n=function(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}(e);t(new Error(n))})).catch((function(e){t(e)})):t(e)}})}))}function I(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function O(e){return window[e]}function P(e,t){if("object"!==typeof e||null===e)throw new Error("Expected an options object.");if("undefined"!==typeof t&&"function"!==typeof t)throw new Error("Expected PromisePonyfill to be a function.")}k.displayName="PayPalButtons";var L=function(e){var t=e.className,n=void 0===t?"":t,r=e.children,a=h(e,["className","children"]),o=x()[0],s=o.isResolved,l=o.options,c=(0,i.useRef)(null),d=(0,i.useState)(!0),p=d[0],m=d[1],g=(0,i.useState)(null)[1];return(0,i.useEffect)((function(){if(!1!==s){var e=v(l[u]);if(void 0===e||void 0===e.Marks)return g((function(){throw new Error(b({reactComponentName:L.displayName,sdkComponentKey:"marks",sdkRequestedComponents:l.components,sdkDataNamespace:l[u]}))}));!function(e){var t=c.current;if(!t||!e.isEligible())return m(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch((function(e){null!==t&&0!==t.children.length&&g((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(e))}))}))}(e.Marks(f({},a)))}}),[s,a.fundingSource]),i.createElement(i.Fragment,null,p?i.createElement("div",{ref:c,className:n}):r)};L.displayName="PayPalMarks";var T=function(e){var t=e.className,n=void 0===t?"":t,r=e.forceReRender,a=void 0===r?[]:r,o=h(e,["className","forceReRender"]),s=x()[0],l=s.isResolved,c=s.options,d=(0,i.useRef)(null),p=(0,i.useRef)(null),g=(0,i.useState)(null)[1];return(0,i.useEffect)((function(){if(!1!==l){var e=v(c[u]);if(void 0===e||void 0===e.Messages)return g((function(){throw new Error(b({reactComponentName:T.displayName,sdkComponentKey:"messages",sdkRequestedComponents:c.components,sdkDataNamespace:c[u]}))}));p.current=e.Messages(f({},o)),p.current.render(d.current).catch((function(e){null!==d.current&&0!==d.current.children.length&&g((function(){throw new Error("Failed to render <PayPalMessages /> component. ".concat(e))}))}))}}),m([l],a,!0)),i.createElement("div",{ref:d,className:n})};T.displayName="PayPalMessages";var j=function(e){var t,n=e.options,o=void 0===n?{"client-id":"test"}:n,u=e.children,d=e.deferLoading,p=void 0!==d&&d,h=(0,i.useReducer)(y,{options:f(f({},o),(t={},t[s]="".concat(g(o)),t[l]=c,t)),loadingStatus:p?r.INITIAL:r.PENDING}),m=h[0],v=h[1];return(0,i.useEffect)((function(){if(!1===p&&m.loadingStatus===r.INITIAL)return v({type:a.LOADING_STATUS,value:r.PENDING});if(m.loadingStatus===r.PENDING){var e=!0;return R(m.options).then((function(){e&&v({type:a.LOADING_STATUS,value:r.RESOLVED})})).catch((function(t){e&&v({type:a.LOADING_STATUS,value:r.REJECTED})})),function(){e=!1}}}),[m.options,p,m.loadingStatus]),i.createElement(w.Provider,{value:f(f({},m),{dispatch:v})},u)},_={PAYPAL:"paypal",VENMO:"venmo",APPLEPAY:"applepay",ITAU:"itau",CREDIT:"credit",PAYLATER:"paylater",CARD:"card",IDEAL:"ideal",SEPA:"sepa",BANCONTACT:"bancontact",GIROPAY:"giropay",SOFORT:"sofort",EPS:"eps",MYBANK:"mybank",P24:"p24",VERKKOPANKKI:"verkkopankki",PAYU:"payu",BLIK:"blik",TRUSTLY:"trustly",ZIMPLER:"zimpler",MAXIMA:"maxima",OXXO:"oxxo",BOLETO:"boleto",WECHATPAY:"wechatpay",MERCADOPAGO:"mercadopago",MULTIBLANCO:"multiblanco"}},77244:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(8081),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,'.msl-flx{display:inline-flex;align-items:center}.msl-vars{--menu-max-height:400px;--input-width:300px;--font-size:16px;--border-radius:8px 8px 8px 8px;--active-menu-shadow:1px 1px 5px 0px grey;--line-height:1.4;--active-menu-background:#fff;--active-menu-radius:var(--border-radius)}.msl-wrp *{line-height:var(--line-height)}.msl-wrp{width:var(--input-width);outline:none;position:relative;border-radius:var(--border-radius)}.msl-disabled{pointer-events:none!important}.msl-disabled>.msl{background-color:#f6f6f6}.msl{overflow:hidden;border:1px solid #9c9c9c;border-radius:var(--border-radius);outline:none;cursor:text;transition:border-radius .2s}.msl:not(.msl-active,.msl-active-up):hover{border-color:#505050}.msl-active{background:var(--active-menu-background);box-shadow:var(--active-menu-shadow);z-index:9999;border-color:transparent;border-radius:var(--active-menu-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:0;transition:border-top-left-radius .4s,border-top-right-radius .4s}.msl-active-up{border-color:transparent;transition:border-bottom-left-radius .4s,border-bottom-right-radius .4s}.msl-active-up,.msl-active~.msl-options{background:var(--active-menu-background);box-shadow:var(--active-menu-shadow);z-index:9999;border-radius:var(--active-menu-radius);border-top-left-radius:0;border-top-right-radius:0}.msl-active~.msl-options{-webkit-clip-path:inset(0 -10px -10px -10px);clip-path:inset(0 -10px -10px -10px);max-height:var(--menu-max-height);transition:border-bottom-left-radius .5s ease-in,border-bottom-right-radius .5s ease-in}.msl-active-up~.msl-options{background:var(--active-menu-background);z-index:9999;bottom:99%;box-shadow:var(--active-menu-shadow);-webkit-clip-path:inset(-10px -10px 0 -10px);clip-path:inset(-10px -10px 0 -10px);max-height:var(--menu-max-height);border-radius:var(--active-menu-radius);border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0;transition:border-top-left-radius .7s,border-top-right-radius .7s}.msl-options{position:absolute;width:100%;background:#fff;max-height:0;overflow:auto;scrollbar-color:rgba(0,0,0,.1) transparent;scrollbar-width:thin;border-radius:var(--border-radius)}.msl-input,.msl-input-wrp{display:inline-block;vertical-align:top}.msl-input{outline:none;margin:5px;padding:3px;font-size:var(--font-size)}.msl-input:before{line-height:var(--line-height);color:#929292}.msl-input[data-placeholder]:not([data-placeholder=""]):empty:before{content:attr(data-placeholder)}.msl-chip{background:#eee;border-radius:5px;padding:3px 3px 3px 6px;white-space:nowrap;display:inline-flex;align-items:center;line-break:anywhere;white-space:break-spaces}.msl-chip,.msl-single-value{margin:5px;font-size:var(--font-size)}.msl-single-value{display:inline-block;padding:3px;vertical-align:top;overflow:hidden;text-overflow:ellipsis;line-break:strict;white-space:nowrap}.msl-options::-webkit-scrollbar{width:8px}.msl-options::-webkit-scrollbar-track{background:transparent}.msl-options::-webkit-scrollbar-thumb{background:rgba(0,0,0,.1);border-radius:20px}.msl-options::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.2)}.msl-grp-title,.msl-options .msl-option{font-size:var(--font-size);border-radius:5px;padding:7px 5px;cursor:pointer;margin:4px 6px;line-break:anywhere;line-height:var(--line-height);outline:none;white-space:break-spaces;transition:background .2s}.msl-btn:focus-visible,.msl-option:focus-visible,.msl-wrp:focus-visible{outline:2px solid #07f}.msl-grp-title{font-size:calc(var(--font-size) - 2px);cursor:default;background:#fafafa;opacity:.7}.msl-options .msl-option:last-child{margin-bottom:5px}.msl-option:focus,.msl-options .msl-option:hover{background:#e9e9e9}.msl-option-active{background:#e6f4fa;color:#0351ff}.msl-option-disable{color:rgba(0,0,0,.3)}.msl-btn{border-radius:50%;border:none;outline:none;padding:0;justify-content:center;cursor:pointer;background:transparent}.msl-actions{position:absolute;right:5px;top:50%;transform:translatey(-50%)}.msl-arrow-btn,.msl-clear-btn{width:25px;height:25px}.msl-arrow-btn:hover,.msl-clear-btn:hover{background:#d3d3d3}.msl-arrow-icn>line,.msl-close-icn>line{stroke-width:1}.msl-arrow-icn,.msl-chip-delete{height:20px;width:20px}.msl-chip-delete{min-width:20px;min-height:20px;margin-left:3px;background:#dadada;color:rgba(0,0,0,.6)}.msl-chip-delete:hover{background:#d3d3d3}.msl-chip-delete .msl-close-icn>line{stroke-width:1}.msl-close-icn{height:10px;width:10px}',""]);const s=i},23645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r="undefined"!==typeof t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"===typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||("undefined"!==typeof o&&("undefined"===typeof u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},8081:e=>{e.exports=function(e){return e[1]}},77678:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),a=n(45697),o=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(s(t)),t.handleErrored=t.handleErrored.bind(s(t)),t.handleChange=t.handleChange.bind(s(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(s(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},o.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},o.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},o.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return r.createElement("div",i({},t,{ref:this.handleRecaptchaRef}))},a}(r.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:o().string.isRequired,onChange:o().func,grecaptcha:o().object,theme:o().oneOf(["dark","light"]),type:o().oneOf(["image","audio"]),tabindex:o().number,onExpired:o().func,onErrored:o().func,size:o().oneOf(["compact","normal","invisible"]),stoken:o().string,hl:o().string,badge:o().oneOf(["bottomright","bottomleft","inline"])},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var c=n(8679),u=n.n(c);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var p={},f=0;var h="onloadcallback";const m=(v=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+h+"&render=explicit"},b=(b={callbackName:h,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,a;function o(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}a=t,(n=o).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var i=o.prototype;return i.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+f++),this.__scriptLoaderID},i.setupScriptURL=function(){return this.__scriptURL="function"===typeof v?v():v,this.__scriptURL},i.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},i.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=p[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[b.callbackName]},i.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=b,a=r.globalName,o=r.callbackName,i=r.scriptId;if(a&&"undefined"!==typeof window[a]&&(p[t]={loaded:!0,observers:{}}),p[t]){var s=p[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var l={};l[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},p[t]={loaded:!1,observers:l};var c=document.createElement("script");for(var u in c.src=t,c.async=!0,b.attributes)c.setAttribute(u,b.attributes[u]);i&&(c.id=i);var d=function(e){if(p[t]){var n=p[t].observers;for(var r in n)e(n[r])&&delete n[r]}};o&&"undefined"!==typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),c.onload=function(){var e=p[t];e&&(e.loaded=!0,d((function(t){return!o&&(t(e),!0)})))},c.onerror=function(){var e=p[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(c)},i.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===b.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=p[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===b.removeOnUnmount&&delete p[e])},i.render=function(){var t=b.globalName,n=this.props,a=(n.asyncScriptOnLoad,n.forwardedRef),o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(o[t]="undefined"!==typeof window[t]?window[t]:void 0),o.ref=a,(0,r.createElement)(e,o)},o}(r.Component),a=(0,r.forwardRef)((function(e,t){return(0,r.createElement)(n,d({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:o().func},u()(a,e)})(l);var v,b;const g=m},97707:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(){return r.createElement("svg",{viewBox:"0 0 10 10",className:"msl-close-icn"},r.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"0",y1:"0",x2:"10",y2:"10"}),r.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"0",y1:"10",x2:"10",y2:"0"}))}function s(e){var t,n=e.deleteAction;return r.createElement("div",{clickable:"true",className:"msl-chip"},"object"==typeof(t=e.value).label?(null==t?void 0:t.title)||t.value:t.label,r.createElement("div",{role:"button",clickable:"true","aria-label":"delete-value",onClick:n,onKeyPress:n,tabIndex:"0",className:"msl-btn msl-chip-delete msl-flx"},r.createElement(i,null)),r.createElement("span",null))}function l(){return r.createElement("svg",{viewBox:"0 0 20 20",className:"msl-arrow-icn"},r.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"10",y1:"14",x2:"4",y2:"8"}),r.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"16",y1:"8",x2:"10",y2:"14"}))}function c(e){var t=e.singleSelect,n=e.addValue,i=e.checkValueExist,s=e.value;if(e.largeData&&!e.menuOpen)return null;var l=[];return function e(c){for(var u,d=function(){var o=u.value,c=o[0],d=o[1];"group"===d.type?(l.push(r.createElement("div",{key:d.title+c,"data-msl":!0,className:"msl-grp-title"},d.title)),d.childs.length>0?e(d.childs):l.push(r.createElement("option",{className:"msl-option msl-option-disable"},d.emptyDataLabel||"No Data Found"))):l.push(r.createElement("div",a({tabIndex:"0",key:d.value+d.label+c+10},!t&&{"data-msl":!0},{style:a({},d.style&&d.style),onClick:function(){!d.disabled&&n(d)},onKeyPress:function(e){"Enter"===e.key&&!d.disabled&&n(d)},title:"object"==typeof d.label?null==d?void 0:d.title:d.label,className:"msl-option "+(i(d,s)?"msl-option-active":"")+" "+(d.disabled?"msl-option-disable":"")+" "+(void 0!==d.classes?d.classes:""),value:d.value}),d.label))},p=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,void 0):void 0}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(c.entries());!(u=p()).done;)d()}(e.opts),r.createElement("div",null,l)}function u(e){var t=e.options,n=e.downArrowIcon,o=e.closeIcon,u=e.clearable,d=e.clearAll,p=e.downArrow,f=e.onChange,h=e.singleSelect,m=e.jsonValue,v=e.defaultValue,b=e.className,g=e.placeholder,y=e.disableChip,w=e.name,E=e.style,x=e.attr,k=e.largeData,N=e.disabled,S=e.limit,C=e.emptyDataLabel,R=e.customValue,A=e.onMenuOpen,I=e.onMenuClose,O=e.chipAlternateText,P=e.closeOnSelect,L=e.disableSearch,T=(0,r.useState)([]),j=T[0],_=T[1],D=(0,r.useState)(t||[]),M=D[0],U=D[1],V=(0,r.useState)(null),B=V[0],z=V[1],G=(0,r.useRef)(null),K=function(e){var t=e.onClickOutside,n=(0,r.useState)(e.initialIsVisible),a=n[0],o=n[1],i=(0,r.useRef)(null),s=function(e){"Escape"===e.key&&o(!1)},l=function e(n){i.current&&!i.current.contains(n.target)&&(document.removeEventListener("keydown",s,!0),document.removeEventListener("click",e,!0),o(!1),t())};return(0,r.useEffect)((function(){return document.addEventListener("keydown",s,!0),document.addEventListener("click",l,!0),function(){document.removeEventListener("keydown",s,!0),document.removeEventListener("click",l,!0)}})),{ref:i,isComponentVisible:a,setIsComponentVisible:o}}({initialIsVisible:!1,onClickOutside:I}),q=K.ref,F=K.isComponentVisible,H=K.setIsComponentVisible,Y="calc(100% - "+(u&&p?60:p||u?40:5)+"px)";(0,r.useEffect)((function(){d&&j.length>0&&Q()}),[d]),(0,r.useEffect)((function(){U(t)}),[t]),(0,r.useEffect)((function(){var e=function(e,t){if(!e)return[];var n=e,r=[],a=[];"string"==typeof e&&(n=e.split(","));for(var o=function(e){if("string"==typeof e)r.push({label:e,value:e});else if("object"==typeof e){var t={label:e,value:e};"label"in e&&"string"==typeof e.label?t.label=e.label:"title"in e&&(t.label=e.title),r.push(t)}},i=0;i<n.length;i++)if("string"==typeof n[i]){var s=te(n[i],t,!0,"value");s.length>0?a.push(s[0]):R&&o(n[i])}else if("object"==typeof n[i]){var l=te(n[i].value,t,!0,"value");l.length>0?a.push(l[0]):R&&o(n[i])}var c=[];return r.length&&(c=ne(r)),U([].concat(t,c)),[].concat(a,r)}(v,M);h&&e.length>0&&(e=[e[0]]),_(e),P&&h&&H(!1)}),[v]);var Z,X,J=function(e){if(_(e),m)f(e);else{var t="";t+=e.map((function(e){return e.value})),f(t)}},W=function(e,t){return t.some((function(t){return t.value===e.value}))},$=function(e){var t=[].concat(j);h?t=W(e,j)?[]:[e]:W(e,j)?t=t.filter((function(t){return t.value!==e.value})):(null===S||S>j.length)&&t.push(e),J(t),z(null),G.current&&(G.current.innerHTML="")},Q=function(){J([])},ee=function(){return!(L||(h||y)&&(!h||j.length)&&(h||!y||j.length))},te=function(e,t,n,r){var a=[],o=[];return function t(i){for(var s=0;s<i.length;s++){var l;if("group"===(null===(l=i[s])||void 0===l?void 0:l.type))t(i[s].childs);else if(n)n&&i[s][r]===e&&a.push(i[s]);else{var c,u;"object"!=typeof i[s].label&&i[s].label.match(new RegExp(""+e,"gi"))||"object"==typeof i[s].label&&null!==(c=i[s])&&void 0!==c&&null!==(u=c.title)&&void 0!==u&&u.match(new RegExp(""+e,"gi"))?a.push(i[s]):i[s].value.match(new RegExp(""+e,"gi"))&&o.push(i[s])}"object"!=typeof i[s].label||i[s]}}(t),[].concat(a,o)},ne=function(e){var t=[],n=M.findIndex((function(e){return"group"===(null==e?void 0:e.type)&&"Custom Values"===(null==e?void 0:e.title)}));return-1===n?t.push({title:"Custom Values",type:"group",childs:[].concat(e)}):Array.isArray(e)?e.map((function(e){return M[n].childs.push(e)})):"object"==typeof e&&M[n].childs.push(e),U([].concat(M,t)),t},re=function(e){var t=e.target;(function(e){return!(e.hasAttribute("clickable")||e.parentNode.hasAttribute("clickable")||e.parentNode.parentNode.hasAttribute("clickable")||e.parentNode.parentNode.parentNode.hasAttribute("clickable"))})(t)&&(function(e){if(e.hasAttribute("dropdown-handle")||e.parentNode.hasAttribute("dropdown-handle")||e.parentNode.parentNode.hasAttribute("dropdown-handle"))return!0}(t)&&F?(H(!1),I()):(H(!0),A(),G.current&&G.current.focus()))},ae=function(e){return"object"==typeof e.label?(null==e?void 0:e.title)||e.value:e.label};return r.createElement("div",a({ref:q},x,{onClick:re,tabIndex:"0",onKeyPress:re,style:a({},E),className:"msl-wrp msl-vars "+b+" "+(N?"msl-disabled":"")}),r.createElement("input",{name:w,type:"hidden",value:null==j?void 0:j.map((function(e){return e.value}))}),r.createElement("div",{"data-msl":!0,className:"msl "+(F&&(Z=q.current,X=Z.getBoundingClientRect(),window.innerHeight-(X.top+Z.clientHeight)<200?"msl-active-up":"msl-active"))+" "},r.createElement("div",{"data-msl":!0,className:"msl-input-wrp",style:{width:Y}},!h&&!y&&j.map((function(e,t){return r.createElement(s,{key:"msl-chip-"+(t+11),value:e,deleteAction:function(){return function(e){var t=[].concat(j);t.splice(e,1),J(t)}(t)}})})),!h&&y&&j.length>0&&r.createElement("span",{className:"msl-single-value","data-msl":!0},1===j.length?ae(j[0]):j.length+" "+O),h&&1===j.length&&r.createElement("span",{className:"msl-single-value","data-msl":!0},ae(j[0])),ee()&&r.createElement("div",{"data-msl":!0,"data-placeholder":g,className:"msl-input",contentEditable:!N,onKeyUp:function(e){var t=e.target.textContent.trim().replace(/,+/g,"");if(t){var n={label:'Create "'+t+'"',value:t},r=te(t,M);r.length?(R&&!te(t,M,!0,"value").length&&r.push(n),z(r)):z(R?[n]:[]);var a=function(e){var t=e.label,n=e.value;return"object"!=typeof t&&t.match(/Create "|"+/g)&&(t=t.replace(/Create "|"+/g,"")),{label:t,value:n}}(n);"Enter"!==e.key&&","!==e.key||(!R||r.length||W(a,j)?B.length>0&&$(B[0]):(ne(a),$(n)))}else z(null)},ref:G}),!ee()&&j.length<1&&r.createElement("div",{"data-msl":!0,"data-placeholder":g,className:"msl-input"})),(u||p)&&r.createElement("div",{className:"msl-actions msl-flx"},u&&j.length>0&&r.createElement("div",{role:"button",clickable:"true","aria-label":"close-menu",onClick:Q,onKeyPress:Q,tabIndex:"0",className:"msl-btn msl-clear-btn msl-flx"},o||r.createElement(i,null)),p&&r.createElement("div",{role:"button",tabIndex:"0","dropdown-handle":"true",className:"msl-btn msl-arrow-btn msl-flx",style:a({},F&&{transform:"rotate(180deg)"})},n||r.createElement(l,null)))),r.createElement("div",{className:"msl-options"},!B&&M.length?r.createElement(c,{opts:M,singleSelect:h,addValue:$,checkValueExist:W,value:j,largeData:k,menuOpen:F}):B&&B.length?r.createElement(c,{opts:B,singleSelect:h,addValue:$,checkValueExist:W,value:j,largeData:k,menuOpen:F}):(B&&!B.length||M&&!M.length)&&r.createElement("option",{className:"msl-option msl-option-disable"},C)))}u.defaultProps={clearable:!0,clearAll:!1,downArrow:!0,singleSelect:!1,jsonValue:!1,defaultValue:"",disableChip:!1,name:"",style:{},disabled:!1,limit:null,emptyDataLabel:"No Data Found",placeholder:"Select...",onChange:function(){},onMenuOpen:function(){},onMenuClose:function(){},options:[{label:"Empty",value:"",disabled:!0,style:{textAlign:"center"}}],customValue:!1,chipAlternateText:"Item Selected",closeOnSelect:!0,disableSearch:!1};const d=u},78774:(e,t,n)=>{var r=n(93379),a=n.n(r),o=n(7795),i=n.n(o),s=n(90569),l=n.n(s),c=n(3565),u=n.n(c),d=n(19216),p=n.n(d),f=n(44589),h=n.n(f),m=n(77244),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p();a()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals},93379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=o[c]||0,d="".concat(c," ").concat(u);o[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var l=r(e,a),c=0;c<o.length;c++){var u=n(o[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=l}}},90569:e=>{var t={};e.exports=function(e,n){var r=function(e){if("undefined"===typeof t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},19216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a="undefined"!==typeof n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!==typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},44589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},36717:(e,t,n)=>{n.d(t,{Z:()=>o});var r=function(){return new DataTransfer},a=Array.prototype.concat;try{r()}catch(a){r=function(){return new ClipboardEvent("").clipboardData}}function o(){for(var e=a.apply([],arguments),t=0,n=e.length,o=r();t<n;t++)o.items.add(e[t]);return o.files}}}]);