(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{576:function(t,e,r){"use strict";e.a={required:function(t){return function(e){return!!e||"".concat(t," is required")}},minLength:function(t,e){return function(r){return r&&r.length>=e||"".concat(t," must be at least ").concat(e," characters")}},maxLength:function(t,e){return function(r){return r&&r.length<=e||"".concat(t," must be less than ").concat(e," characters")}},email:function(){return function(t){return/.+@.+/.test(t)||"E-mail must be valid"}},url:function(){return function(t){return/^(http(s?)):\/\//gi.test(t)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(t){return/\d/.test(t)||"Number is required"}},protein:function(){return function(t){return/^(p\.)[\d\w]+/gi.test(t)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(t,e){return t===e||"Password must match"},quantity:function(){return function(t){return!!t&&t>0||"Number has to be greater than 0"}}}},582:function(t,e,r){"use strict";r.r(e);r(5),r(6),r(4),r(7),r(8);var n=r(31),o=r(1),c=(r(74),r(576));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"ForgotPassword",auth:"guest",data:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({modelstate:{},form:{}},c.a)},head:function(){return{title:"Forgot Password"}},methods:{request:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=3;break}return e.next=3,t.$axios.$post("auth/recovery",t.form).then((function(e){t.$store.dispatch("setSnackbar",{text:e.message}),t.modelstate={},t.$refs.form.reset()})).catch((function(e){401===e.response.status&&(t.modelstate=e.response.data.error)}));case 3:case"end":return e.stop()}}),e)})))()}}},m=r(112),d=r(160),h=r.n(d),v=r(146),w=r(234),y=r(249),O=r(239),x=r(238),j=r(240),k=r(47),P=r(66),V=r(113),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{xs:"12",sm:"8"}},[r("v-card",{staticClass:"elevation-12",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.request(e)}}},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("Request new password form")])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){t.preventDefault()}}},[r("v-text-field",{attrs:{rules:[t.required("Email"),t.email()],"error-messages":t.modelstate.email,label:"Email","prepend-icon":"mdi-email",type:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},on:{click:t.request}},[t._v("\n          Request\n        ")])],1)],1)],1)],1)}),[],!1,null,"93141eea",null);e.default=component.exports;h()(component,{VBtn:v.a,VCard:w.a,VCardActions:y.b,VCardText:y.d,VCol:O.a,VForm:x.a,VRow:j.a,VTextField:k.a,VToolbar:P.a,VToolbarTitle:V.c})}}]);