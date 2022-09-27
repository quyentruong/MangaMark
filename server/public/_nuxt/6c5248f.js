(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{738:function(e,t,r){"use strict";r(25),r(22);t.a={required:function(e){return function(t){return!!t||"".concat(e," is required")}},minLength:function(e,t){return function(r){return r&&r.length>=t||"".concat(e," must be at least ").concat(t," characters")}},maxLength:function(e,t){return function(r){return r&&r.length<=t||"".concat(e," must be less than ").concat(t," characters")}},email:function(){return function(e){return/.+@.+/.test(e)||"E-mail must be valid"}},url:function(){return function(e){return/^(http(s?)):\/\//gi.test(e)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(e){return/\d/.test(e)||"Number is required"}},protein:function(){return function(e){return/^(p\.)[\d\w]+/gi.test(e)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(e,t){return e===t||"Password must match"},quantity:function(){return function(e){return!!e&&e>0||"Number has to be greater than 0"}}}},761:function(e,t,r){"use strict";r.r(t);r(5),r(7),r(6),r(4),r(9),r(8),r(10);var n=r(39),o=r(1),c=(r(101),r(738));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={name:"Register",auth:"guest",data:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({show1:!1,show2:!1,modelstate:{},form:{}},c.a)},head:function(){return{title:"Register"}},methods:{onError:function(){this.$store.dispatch("setSnackbar",{color:"error",text:'You need to check "I\'m not a robot"'})},onExpired:function(){this.$store.dispatch("setSnackbar",{color:"error",text:"Verification expired. Check the box again"})},register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=12;break}return t.prev=1,t.next=4,e.$recaptcha.getResponse();case 4:t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(1),t.abrupt("return");case 9:return e.modelstate={},t.next=12,e.$axios.$post("auth/register",e.form).then((function(){e.$router.push("/guest/verify")})).catch((function(t){422===t.response.status&&(e.modelstate=t.response.data.error)}));case 12:case"end":return t.stop()}}),t,null,[[1,6]])})))()}}},m=f,d=r(123),h=r(209),w=r.n(h),v=r(195),x=r(311),y=r(331),k=r(320),O=r(319),j=r(321),P=r(60),_=r(93),E=r(147),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{xs:"12",sm:"8"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Register form")])],1),e._v(" "),r("v-card-text",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register.apply(null,arguments)}}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-text-field",{attrs:{rules:[e.required("Name")],"error-messages":e.modelstate.name,label:"Name","prepend-icon":"mdi-account",type:"text"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Email"),e.email()],"error-messages":e.modelstate.email,label:"Email","prepend-icon":"mdi-email",type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Password"),e.minLength("Password",8)],"error-messages":e.modelstate.password,label:"Password","prepend-icon":"mdi-lock",type:e.show1?"text":"password","append-icon":e.show1?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Confirmation Password"),e.passwordConfirmation(e.form.password,e.form.password_confirmation)],label:"Confirmation Password","prepend-icon":"mdi-lock",type:e.show2?"text":"password","append-icon":e.show2?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.show2=!e.show2}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}}),e._v(" "),r("recaptcha",{on:{error:e.onError,expired:e.onExpired}})],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},on:{click:e.register}},[e._v(" Create a account ")])],1)],1)],1)],1)}),[],!1,null,"0885d9dc",null);t.default=component.exports;w()(component,{VBtn:v.a,VCard:x.a,VCardActions:y.b,VCardText:y.d,VCol:k.a,VForm:O.a,VRow:j.a,VTextField:P.a,VToolbar:_.a,VToolbarTitle:E.c})}}]);