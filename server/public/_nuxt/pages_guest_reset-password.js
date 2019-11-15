(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{336:function(e,t,r){"use strict";t.a={required:function(e){return function(t){return!!t||"".concat(e," is required")}},minLength:function(e,t){return function(r){return r&&r.length>=t||"".concat(e," must be at least ").concat(t," characters")}},maxLength:function(e,t){return function(r){return r&&r.length<=t||"".concat(e," must be less than ").concat(t," characters")}},email:function(){return function(e){return/.+@.+/.test(e)||"E-mail must be valid"}},url:function(){return function(e){return/^(http(s?)):\/\//gi.test(e)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(e){return/\d/.test(e)||"Number is required"}},protein:function(){return function(e){return/^(p\.)[\d\w]+/gi.test(e)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(e,t){return e===t||"Password must match"},quantity:function(){return function(e){return!!e&&e>0||"Number has to be greater than 0"}}}},412:function(e,t,r){"use strict";r.r(t);r(10),r(8),r(7),r(3),r(9),r(38),r(39);var n=r(13),o=r(2),c=r(336);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f,d={auth:"guest",name:"ResetPassword",data:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({modelstate:{},form:{}},c.a)},created:function(){this.form.token=this.$route.query.token},head:{title:"Reset Password",meta:[{hid:"description",name:"description",content:"Reset password to get access again"}]},methods:{reset:(f=Object(n.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=4;break}return this.modelstate={},e.next=4,this.$axios.$post("auth/reset",this.form).then((function(e){var r=Object.assign({},t.$route.query);delete r.token,t.$router.replace({query:r}),t.$store.dispatch("setSnackbar",{text:e.message}),t.$auth.login({data:t.form})})).catch((function(e){422===e.response.status?t.modelstate=e.response.data.error:401===e.response.status&&t.$store.dispatch("setSnackbar",{color:"error",text:e.response.data.error})}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})}},m=r(58),h=r(81),w=r.n(h),v=r(318),y=r(346),k=r(335),x=r(402),O=r(400),P=r(401),j=r(395),$=r(32),_=r(82),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{xs:"12",sm:"8"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Reset form")])],1),e._v(" "),r("v-card-text",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.reset(t)}}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-text-field",{attrs:{label:"Token","prepend-icon":"mdi-coin",disabled:""},model:{value:e.form.token,callback:function(t){e.$set(e.form,"token",t)},expression:"form.token"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Email"),e.email()],"error-messages":e.modelstate.email,label:"Current Email","prepend-icon":"mdi-email",type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Password"),e.minLength("Password",8)],"error-messages":e.modelstate.password,label:"New Password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.required("Confirmation Password"),e.passwordConfirmation(e.form.password,e.form.password_confirmation)],label:"Confirmation New Password","prepend-icon":"mdi-lock",type:"password"},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},on:{click:e.reset}},[e._v("\n          Reset\n        ")])],1)],1)],1)],1)}),[],!1,null,"74ac1895",null);t.default=component.exports;w()(component,{VBtn:v.a,VCard:y.a,VCardActions:k.a,VCardText:k.b,VCol:x.a,VForm:O.a,VRow:P.a,VTextField:j.a,VToolbar:$.a,VToolbarTitle:_.b})}}]);