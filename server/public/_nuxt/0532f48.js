(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{696:function(t,e,r){"use strict";r(26),r(22);e.a={required:function(t){return function(e){return!!e||"".concat(t," is required")}},minLength:function(t,e){return function(r){return r&&r.length>=e||"".concat(t," must be at least ").concat(e," characters")}},maxLength:function(t,e){return function(r){return r&&r.length<=e||"".concat(t," must be less than ").concat(e," characters")}},email:function(){return function(t){return/.+@.+/.test(t)||"E-mail must be valid"}},url:function(){return function(t){return/^(http(s?)):\/\//gi.test(t)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(t){return/\d/.test(t)||"Number is required"}},protein:function(){return function(t){return/^(p\.)[\d\w]+/gi.test(t)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(t,e){return t===e||"Password must match"},quantity:function(){return function(t){return!!t&&t>0||"Number has to be greater than 0"}}}},705:function(t,e,r){"use strict";r.r(e);r(5),r(7),r(6),r(4),r(9),r(8),r(10);var n=r(1),o=(r(33),r(70),r(696));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"AddNewItem",props:{enabled:{type:String,default:""}},data:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({dialog:!1,modelstate:{},form:{}},o.a)},created:function(){this.form=this.initialForm()},methods:{initialForm:function(){return{name:"",quantity:1,season:1,other_name:"",user_id:this.$auth.user.id}},save:function(){var t=this;this.$refs.form.validate()&&(this.form.name=this.form.name.trim(),this.$axios.$post("category/".concat(this.enabled.toLowerCase(),"/"),this.form).then((function(e){t.dialog=!1,t.$store.dispatch("setSnackbar",{text:"New item added"}),t.$emit("modifyItem"),t.$refs.form.resetValidation(),t.form=t.initialForm()})).catch((function(e){422===e.response.status&&(t.modelstate=e.response.data.error)})))},cancel:function(){this.dialog=!1,this.$refs.form.resetValidation(),this.form=this.initialForm()}}},m=l,d=r(145),f=r(200),v=r.n(f),h=r(186),y=r(304),w=r(320),x=r(309),O=r(295),_=r(164),k=r(308),V=r(159),j=r(310),C=r(302),$=r(58),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mb-2",attrs:{color:!0===t.$vuetify.theme.dark?"":"indigo",dark:"",fab:""}},n),[r("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-card-title",[r("span",{staticClass:"headline"},[t._v("Add new "+t._s(t.enabled))])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{rules:[t.required("Name")],"error-messages":t.modelstate.name,label:"Name",counter:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),"Manga"!==t.enabled?r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{rules:[t.required("Season"),t.quantity()],"error-messages":t.modelstate.season,type:"number",label:"Season",min:"1"},model:{value:t.form.season,callback:function(e){t.$set(t.form,"season",e)},expression:"form.season"}})],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Manga"===t.enabled?"Chapter":"Episode",rules:[t.required("Manga"===t.enabled?"Chapter":"Episode"),t.quantity()],"error-messages":t.modelstate.quantity,type:"number",min:"1"},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancel()}}},[t._v(" Cancel ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.save()}}},[t._v(" Save ")])],1)],1)],1)],1)}),[],!1,null,"1555e056",null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCardActions:w.b,VCardText:w.d,VCardTitle:w.e,VCol:x.a,VContainer:O.a,VDialog:_.a,VForm:k.a,VIcon:V.a,VRow:j.a,VSpacer:C.a,VTextField:$.a})}}]);