(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{339:function(e,t,n){"use strict";t.a={required:function(e){return function(t){return!!t||"".concat(e," is required")}},minLength:function(e,t){return function(n){return n&&n.length>=t||"".concat(e," must be at least ").concat(t," characters")}},maxLength:function(e,t){return function(n){return n&&n.length<=t||"".concat(e," must be less than ").concat(t," characters")}},email:function(){return function(e){return/.+@.+/.test(e)||"E-mail must be valid"}},url:function(){return function(e){return/^(http(s?)):\/\//gi.test(e)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(e){return/\d/.test(e)||"Number is required"}},protein:function(){return function(e){return/^(p\.)[\d\w]+/gi.test(e)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(e,t){return e===t||"Password must match"},quantity:function(){return function(e){return!!e&&e>0||"Number has to be greater than 0"}}}},347:function(e,t,n){var content=n(375);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(11).default)("bbc12b0e",content,!0,{sourceMap:!1})},374:function(e,t,n){"use strict";var o=n(347);n.n(o).a},375:function(e,t,n){(t=n(10)(!1)).push([e.i,"@media only screen and (min-width:600px){.itemName[data-v-5fcf1bc0]{font-family:Be Vietnam,sans-serif;font-size:17px}}@media only screen and (min-width:960px){.itemName[data-v-5fcf1bc0]{font-family:Be Vietnam,sans-serif;font-size:26px}}.old[data-v-5fcf1bc0]{text-decoration:line-through}",""]),e.exports=t},409:function(e,t,n){"use strict";n.r(t);n(33),n(41);var o=n(12),r=(n(14),n(8),n(6),n(4),n(9),n(2)),c=n(339);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={name:"AddNewItem",props:{enabled:{type:String,default:""}},data:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({dialog:!1,modelstate:{},form:{}},c.a)},created:function(){this.form=this.initialForm()},methods:{initialForm:function(){return{name:"",quantity:1,season:1,user_id:this.$auth.user.id}},save:function(){var e=this;this.$refs.form.validate()&&this.$axios.$post("category/".concat(this.enabled.toLowerCase(),"/"),this.form).then((function(t){e.dialog=!1,e.$store.dispatch("setSnackbar",{text:"Data saved"}),e.$emit("modifyItem"),e.$refs.form.resetValidation(),e.form=e.initialForm()})).catch((function(t){422===t.response.status&&(e.modelstate=t.response.data.error)}))},cancel:function(){this.dialog=!1,this.$refs.form.resetValidation(),this.form=this.initialForm()}}},m=n(58),f=n(82),h=n.n(f),v=n(319),y=n(349),x=n(338),_=n(405),w=n(337),$=n(399),k=n(403),C=n(121),S=n(404),I=n(334),V=n(398),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-btn",e._g({staticClass:"mb-2",attrs:{color:!0===e.$vuetify.theme.dark?"":"indigo",dark:"",fab:""}},o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Add new "+e._s(e.enabled))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{rules:[e.required("Name")],"error-messages":e.modelstate.name,label:"Name",counter:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),"Manga"!==e.enabled?n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{rules:[e.required("Season"),e.quantity()],"error-messages":e.modelstate.season,type:"number",label:"Season",min:"1"},model:{value:e.form.season,callback:function(t){e.$set(e.form,"season",t)},expression:"form.season"}})],1):e._e(),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Manga"===e.enabled?"Chapter":"Episode",rules:[e.required("Manga"===e.enabled?"Chapter":"Episode"),e.quantity()],"error-messages":e.modelstate.quantity,type:"number",min:"1"},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.cancel()}}},[e._v("\n          Cancel\n        ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.save()}}},[e._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,"75cf5158",null),N=component.exports;h()(component,{VBtn:v.a,VCard:y.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VCol:_.a,VContainer:w.a,VDialog:$.a,VForm:k.a,VIcon:C.a,VRow:S.a,VSpacer:I.a,VTextField:V.a});var O={name:"ModifyCell",props:{columnName:{type:String,default:""},cell:{type:Object,default:function(){return{}}}},created:function(){this.enabled=this.$warehouse.get("slot","Manga")},methods:{compressTitle:function(title){return title.length>18?title.substr(0,18)+".":title},oldRead:function(){var e=this.$moment.utc(this.cell.item.updated_at).local().format("YYYY-MM-DD HH:mm:ss");return this.$moment().diff(e,"days")>=30?"old":""},save:function(e){var t=this,n=e;n.action="name"===this.columnName?"name":"number",this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(n.id),n).then((function(){t.$store.dispatch("setSnackbar",{text:"Data saved"})})).catch((function(e){422===e.response.status&&t.$store.dispatch("setSnackbar",{color:"error",text:e.response.data.error[t.columnName][0]})})).finally((function(){t.$emit("modifyItem")}))},cancel:function(){this.$store.dispatch("setSnackbar",{color:"error",text:"Canceled"})},open:function(){this.$store.dispatch("setSnackbar",{color:"info",text:"Editing"})}}},j=(n(374),n(406)),D=Object(m.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-edit-dialog",{attrs:{"return-value":e.cell.item[e.columnName],persistent:"",large:""},on:{"update:returnValue":function(t){return e.$set(e.cell.item,e.columnName,t)},"update:return-value":function(t){return e.$set(e.cell.item,e.columnName,t)},save:function(t){return e.save(e.cell.item)},cancel:function(t){return e.cancel(e.cell)},open:e.open},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{type:"name"===e.columnName?"text":"number",label:"Edit","single-line":"",counter:""},model:{value:e.cell.item[e.columnName],callback:function(t){e.$set(e.cell.item,e.columnName,t)},expression:"cell.item[columnName]"}})]},proxy:!0}])},[n("span",{class:["name"===e.columnName?"itemName":"",e.oldRead()]},[e._v(e._s(e.compressTitle(e.cell.item[e.columnName])))])])}),[],!1,null,"5fcf1bc0",null),M=D.exports;h()(D,{VEditDialog:j.a,VTextField:V.a});var E={name:"AddDecreaseNumber",props:{columnName:{type:String,default:""},item:{type:Object,default:function(){return{}}},enabled:{type:String,default:""}},methods:{modifyQuantity:function(e,t,n){var o=this,r=this.simplePlusMinus(parseInt(e[t]),1,n);-1!==r?(e[t]=r,e.action="number",this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(e.id),e).then((function(){o.$emit("modifyItem"),o.$store.dispatch("setSnackbar",{text:"Data updated"})}))):this.$store.dispatch("setSnackbar",{color:"error",text:"The minimum is 1"})},simplePlusMinus:function(a,b,e){var t="+"===e?a+b:a-b;return 0===t?-1:t}}},P=Object(m.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"},on:{click:function(t){return e.modifyQuantity(e.item,e.columnName,"+")}}},[e._v("\n    mdi-arrow-up-circle-outline\n  ")]),e._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"},on:{click:function(t){return e.modifyQuantity(e.item,e.columnName,"-")}}},[e._v("\n    mdi-arrow-down-circle-outline\n  ")])],1)}),[],!1,null,"4ee498ca",null),A=P.exports;h()(P,{VIcon:C.a});var T,R,L={components:{AddDecreaseNumber:A,ModifyCell:M,AddNewItem:N},auth:!1,data:function(){return{options:{},pageCount:0,search:"",enabled:"",slots:["Manga","Anime","TVShow"],headersSlot:{},items:[],modelstate:{}}},head:function(){return{title:"Index"}},watch:{options:{handler:function(){this.$warehouse.set("options_".concat(this.enabled),this.options)},deep:!0},enabled:function(slot){this.$warehouse.set("slot",slot),this.$store.commit("setArrayHeader",{slot:slot,array:this.headersSlot[slot]}),this.fetchItem(),this.options=this.$warehouse.get("options_".concat(slot),{})}},asyncData:(R=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,o,r,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,o=t.$warehouse,!t.$auth.loggedIn){e.next=8;break}return r=o.get("slot","Manga"),e.next=5,n.$get("category/".concat(r.toLowerCase(),"/"));case 5:return c=e.sent,data=c.data,e.abrupt("return",{items:data,enabled:r});case 8:case"end":return e.stop()}}),e)}))),function(e){return R.apply(this,arguments)}),created:function(){this.headersSlot=this.$store.state.headersSlot,this.options=this.$warehouse.get("options_".concat(this.enabled),{})},methods:{oldRead:function(e){},modifyChild:function(){this.fetchItem()},fetchItem:(T=Object(o.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.$get("category/".concat(this.enabled.toLowerCase(),"/"));case 2:t=e.sent,data=t.data,this.items=data;case 5:case"end":return e.stop()}}),e,this)}))),function(){return T.apply(this,arguments)}),deleteItem:function(e){var t=this,n=this.items.indexOf(e);confirm("Are you sure you want to delete ".concat(e.name,"?"))&&this.$axios.$delete("category/".concat(this.enabled.toLowerCase(),"/").concat(e.id)).then((function(){t.$store.dispatch("setSnackbar",{color:"error",text:"Data deleted"}),t.items.splice(n,1)}))},googleItem:function(e){var t=encodeURI("https://www.google.com/search?q=".concat(e.name," season ").concat(parseInt(e.season)," episode ").concat(parseInt(e.quantity)+1));"Manga"===this.enabled&&(t=encodeURI("https://www.google.com/search?q=".concat(e.name," chapter ").concat(parseInt(e.quantity)+1))),window.open(t,"_blank")},copyItem:function(e){var t=this;this.$copyText(e.name).then((function(n){t.$store.dispatch("setSnackbar",{color:"info",text:"Copied ".concat(e.name)})}),(function(e){t.$store.dispatch("setSnackbar",{color:"error",text:"Can not copy"})}))}}},z=n(410),F=n(407),Y=n(354),H=Object(m.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$auth.loggedIn?n("v-card",[n("v-card-title",[e._v("\n      "+e._s(e.enabled)+"\n      "),n("v-spacer"),e._v(" "),n("v-select",{attrs:{items:e.slots,label:"Slot"},model:{value:e.enabled,callback:function(t){e.enabled=t},expression:"enabled"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"",clearable:"","hide-details":"",filled:"",rounded:"",dense:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-spacer"),e._v(" "),n("AddNewItem",{attrs:{enabled:e.enabled},on:{modifyItem:e.modifyChild}})],1),e._v(" "),n("client-only",[n("v-data-table",{attrs:{headers:e.headersSlot[e.enabled],items:e.items,search:e.search,options:e.options,"hide-default-footer":""},on:{"update:options":function(t){e.options=t},"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([e._l(e.$store.state.itemSlots,(function(slot){return{key:slot.name,fn:function(t){return[n("ModifyCell",{key:slot.name,class:e.oldRead(t),attrs:{cell:t,"column-name":slot.value},on:{modifyItem:e.modifyChild}})]}}})),{key:"item.updated_at",fn:function(t){var o=t.item;return[n("div",[e._v(e._s(e.$moment.utc(o.updated_at).local().format("YYYY-MM-DD HH:mm:ss")))])]}},{key:"item.action",fn:function(t){var o=t.item;return[n("AddDecreaseNumber",{attrs:{item:o,enabled:e.enabled,"column-name":"quantity"},on:{modifyItem:e.modifyChild}}),e._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n            mdi-delete\n          ")]),e._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{color:"blue",size:"25px"},on:{click:function(t){return e.googleItem(o)}}},[e._v("\n            mdi-google\n          ")]),e._v(" "),n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"},on:{click:function(t){return e.copyItem(o)}}},[e._v("\n            mdi-content-copy\n          ")])]}}],null,!0)}),e._v(" "),n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:e.pageCount,"total-visible":7},model:{value:e.options.page,callback:function(t){e.$set(e.options,"page",t)},expression:"options.page"}})],1)],1)],1):n("div",[e._v("\n    Please login to enjoy MangaMark. If you don't have an account, sign up one for free.\n  ")])],1)}),[],!1,null,"7c317958",null);t.default=H.exports;h()(H,{VCard:y.a,VCardTitle:x.c,VDataTable:z.a,VIcon:C.a,VPagination:F.a,VSelect:Y.a,VSpacer:I.a,VTextField:V.a})}}]);