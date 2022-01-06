(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{696:function(e,t,r){"use strict";r(26),r(22);t.a={required:function(e){return function(t){return!!t||"".concat(e," is required")}},minLength:function(e,t){return function(r){return r&&r.length>=t||"".concat(e," must be at least ").concat(t," characters")}},maxLength:function(e,t){return function(r){return r&&r.length<=t||"".concat(e," must be less than ").concat(t," characters")}},email:function(){return function(e){return/.+@.+/.test(e)||"E-mail must be valid"}},url:function(){return function(e){return/^(http(s?)):\/\//gi.test(e)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(e){return/\d/.test(e)||"Number is required"}},protein:function(){return function(e){return/^(p\.)[\d\w]+/gi.test(e)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(e,t){return e===t||"Password must match"},quantity:function(){return function(e){return!!e&&e>0||"Number has to be greater than 0"}}}},715:function(e,t,r){"use strict";r.r(t);r(5),r(7),r(6),r(4),r(9),r(8),r(10);var n=r(40),o=r(1),c=(r(101),r(26),r(75),r(696));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={auth:"guest",name:"ResetPassword",data:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({modelstate:{},form:{}},c.a)},head:function(){return{title:"Reset Password"}},created:function(){this.form.token=this.$route.query.token},methods:{reset:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=4;break}return e.modelstate={},t.next=4,e.$axios.$post("auth/reset",e.form).then((function(t){var r=Object.assign({},e.$route.query);delete r.token,e.$router.replace({query:r}),e.$store.dispatch("setSnackbar",{text:t.message}),e.$auth.login({data:e.form})})).catch((function(t){422===t.response.status?e.modelstate=t.response.data.error:401===t.response.status&&e.$store.dispatch("setSnackbar",{color:"error",text:t.response.data.error})}));case 4:case"end":return t.stop()}}),t)})))()}}},d=f,m=r(145),w=r(200),v=r.n(w),h=r(186),y=r(304),k=r(320),x=r(309),O=r(308),P=r(310),j=r(58),$=r(93),_=r(146),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{xs:"12",sm:"8"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Reset form")])],1),e._v(" "),r("v-card-text",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.reset.apply(null,arguments)}}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-text-field",{attrs:{label:"Token","prepend-icon":"mdi-coin",disabled:""},model:{value:e.form.token,callback:function(t){e.$set(e.form,"token",t)},expression:"form.token"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Email"),e.email()],"error-messages":e.modelstate.email,label:"Current Email","prepend-icon":"mdi-email",type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Password"),e.minLength("Password",8)],"error-messages":e.modelstate.password,label:"New Password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Confirmation Password"),e.passwordConfirmation(e.form.password,e.form.password_confirmation)],label:"Confirmation New Password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},on:{click:e.reset}},[e._v(" Reset ")])],1)],1)],1)],1)}),[],!1,null,"42064257",null);t.default=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCardActions:k.b,VCardText:k.d,VCol:x.a,VForm:O.a,VRow:P.a,VTextField:j.a,VToolbar:$.a,VToolbarTitle:_.c})}}]);