import*as e from"@dropins/elsie/event-bus.js";import*as t from"@dropins/elsie/preact-compat.js";import*as r from"@dropins/elsie/preact-hooks.js";import*as a from"@dropins/elsie/preact-jsx-runtime.js";import*as i from"@dropins/elsie/preact.js";export const id=70;export const ids=[70];export const modules={8393:(e,t,r)=>{r.d(t,{M:()=>d,o:()=>l});var a=r(6364),i=r(3474),n=r(5437),o=r(7188),s=(0,i.createContext)(void 0);function l(e){var t,r=e.initialState,i=e.children,n={isBillToShipping:(0,a.td)(null===(t=null==r?void 0:r.isBillToShipping)||void 0===t||t)};return(0,o.jsx)(s.Provider,{value:{state:n},children:i})}function d(){var e=(0,n.useContext)(s);if(void 0===e)throw new Error("useCheckout must be used within a CheckoutProvider");return e}},4560:(e,t,r)=>{r.d(t,{s:()=>p});var a=r(3516),i=r(138),n=r(6765),o=r(5437),s=r(8393),l=r(7188);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var u={default:r(7770)},c=function(e){var t,r,a=e.children,c=(t=(0,o.useState)("en_US"),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,i,n,o,s=[],l=!0,d=!1;try{if(n=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(a=n.call(r)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){d=!0,i=e}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(d)throw i}}return s}}(t,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=c[0],m=c[1];return(0,o.useEffect)((function(){var e=n.events.on("locale",(function(e){m(e)}),{eager:!0});return function(){null==e||e.off()}}),[]),(0,l.jsx)(i.J,{lang:p,langDefinitions:u,children:(0,l.jsx)(s.o,{children:a})})},p=new a.H((0,l.jsx)(c,{}))},6765:(t,r,a)=>{var i,n;t.exports=(i={events:()=>e.events},n={},a.d(n,i),n)},4853:(e,r,a)=>{var i,n;e.exports=(i={createElement:()=>t.createElement,useCallback:()=>t.useCallback,useEffect:()=>t.useEffect,useMemo:()=>t.useMemo,useRef:()=>t.useRef,useState:()=>t.useState},n={},a.d(n,i),n)},5437:(e,t,a)=>{var i,n;e.exports=(i={useCallback:()=>r.useCallback,useContext:()=>r.useContext,useDebugValue:()=>r.useDebugValue,useEffect:()=>r.useEffect,useId:()=>r.useId,useImperativeHandle:()=>r.useImperativeHandle,useLayoutEffect:()=>r.useLayoutEffect,useMemo:()=>r.useMemo,useReducer:()=>r.useReducer,useRef:()=>r.useRef,useState:()=>r.useState},n={},a.d(n,i),n)},4142:(e,t,r)=>{var i,n;e.exports=(i={Fragment:()=>a.Fragment,jsx:()=>a.jsx,jsxs:()=>a.jsxs},n={},r.d(n,i),n)},3474:(e,t,r)=>{var a,n;e.exports=(a={Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray},n={},r.d(n,a),n)},7770:e=>{e.exports=JSON.parse('{"Checkout":{"title":"Checkout","LoginForm":{"title":"Contact details","account":"Already have an account?","ariaLabel":"Email","invalidEmailError":"Please enter a valid email address.","missingEmailError":"Enter an email address.","emailExists":"It looks like you already have an account. Sign in for a faster checkout.","floatingLabel":"Email *","placeholder":"Enter your email address","signIn":"Sign in"},"ShippingMethods":{"title":"Shipping options","emptyState":"This order can\'t be shipped to the address provided. Please review the address details you entered and make sure they\'re correct."},"ShippingAddress":{"title":"Delivery"},"BillingAddress":{"title":"Billing Address"},"AddressForm":{"Validity":{"badInput":"Provide a valid {field}.","patternMismatch":"Ensure you have entered a correct {field} format.","rangeOverflow":"Choose a valid {field} within the allowed range.","rangeUnderflow":"Choose a valid {field} within the allowed range.","tooLong":"This entry is too long. Keep it under {field} characters.","tooShort":"Use at least {field} characters.","typeMismatch":"Enter a valid {field}.","valueMissing":"Enter a {field}, this field is required."}},"BillToShippingAddress":{"title":"Bill to shipping address"},"PaymentMethods":{"title":"Payment","emptyState":"No payment methods available"},"OrderSummary":{"title":"Order summary","subtotal":"Subtotal","shipping":"Shipping","freeShipping":"Free shipping","tax":"Tax","total":"Total"},"PlaceOrder":{"button":"Place Order"}}}')}};import n from"./runtime.js";import*as o from"./757.js";n.C(o);import*as s from"./985.js";n.C(s);import*as l from"./render.js";n.C(l);var d=(4560,n(n.s=4560)).s;export{d as render};