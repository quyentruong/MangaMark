(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{349:function(t,e,n){"use strict";e.a={required:function(t){return function(e){return!!e||"".concat(t," is required")}},minLength:function(t,e){return function(n){return n&&n.length>=e||"".concat(t," must be at least ").concat(e," characters")}},maxLength:function(t,e){return function(n){return n&&n.length<=e||"".concat(t," must be less than ").concat(e," characters")}},email:function(){return function(t){return/.+@.+/.test(t)||"E-mail must be valid"}},url:function(){return function(t){return/^(http(s?)):\/\//gi.test(t)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(t){return/\d/.test(t)||"Number is required"}},protein:function(){return function(t){return/^(p\.)[\d\w]+/gi.test(t)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(t,e){return t===e||"Password must match"},quantity:function(){return function(t){return!!t&&t>0||"Number has to be greater than 0"}}}},358:function(t,e,n){var content=n(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5a4a4fac",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";var o=n(358);n.n(o).a},387:function(t,e,n){(e=n(10)(!1)).push([t.i,"@media only screen and (min-width:600px){.itemName[data-v-c68897b6]{font-family:Be Vietnam,sans-serif;font-size:17px}}@media only screen and (min-width:960px){.itemName[data-v-c68897b6]{font-family:Be Vietnam,sans-serif;font-size:26px}}.old[data-v-c68897b6]{text-decoration:line-through}",""]),t.exports=e},420:function(t,e,n){"use strict";n.r(e);n(24),n(44);var o=n(13),r=(n(12),n(8),n(6),n(4),n(9),n(2)),c=n(349);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={name:"AddNewItem",props:{enabled:{type:String,default:""}},data:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({dialog:!1,modelstate:{},form:{}},c.a)},created:function(){this.form=this.initialForm()},methods:{initialForm:function(){return{name:"",quantity:1,season:1,user_id:this.$auth.user.id}},save:function(){var t=this;this.$refs.form.validate()&&(this.form.name=this.form.name.trim(),this.$axios.$post("category/".concat(this.enabled.toLowerCase(),"/"),this.form).then((function(e){t.dialog=!1,t.$store.dispatch("setSnackbar",{text:"New item added"}),t.$emit("modifyItem"),t.$refs.form.resetValidation(),t.form=t.initialForm()})).catch((function(e){422===e.response.status&&(t.modelstate=e.response.data.error)})))},cancel:function(){this.dialog=!1,this.$refs.form.resetValidation(),this.form=this.initialForm()}}},d=n(63),f=n(87),v=n.n(f),h=n(330),y=n(361),_=n(348),x=n(417),$=n(347),w=n(410),k=n(415),V=n(125),I=n(416),C=n(345),S=n(411),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"mb-2",attrs:{color:!0===t.$vuetify.theme.dark?"":"indigo",dark:"",fab:""}},o),[n("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Add new "+t._s(t.enabled))])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{rules:[t.required("Name")],"error-messages":t.modelstate.name,label:"Name",counter:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),"Manga"!==t.enabled?n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{rules:[t.required("Season"),t.quantity()],"error-messages":t.modelstate.season,type:"number",label:"Season",min:"1"},model:{value:t.form.season,callback:function(e){t.$set(t.form,"season",e)},expression:"form.season"}})],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Manga"===t.enabled?"Chapter":"Episode",rules:[t.required("Manga"===t.enabled?"Chapter":"Episode"),t.quantity()],"error-messages":t.modelstate.quantity,type:"number",min:"1"},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancel()}}},[t._v("\n          Cancel\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,"3f4a5fde",null),D=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:x.a,VContainer:$.a,VDialog:w.a,VForm:k.a,VIcon:V.a,VRow:I.a,VSpacer:C.a,VTextField:S.a});n(45);var N={name:"ModifyCell",props:{columnName:{type:String,default:""},cell:{type:Object,default:function(){return{}}},enabled:{type:String,default:""}},created:function(){this.enabled=this.$warehouse.get("slot","Manga")},methods:{compressTitle:function(title){if("string"==typeof title&&("sm"===this.$vuetify.breakpoint.name||"md"===this.$vuetify.breakpoint.name)){var t=title.split(" ").pop().length,e=title.length;if("sm"===this.$vuetify.breakpoint.name&&(e=32-t),"md"===this.$vuetify.breakpoint.name&&(e=61-t),"Manga"!==this.enabled&&(e-=12),title.length>e)return title.substr(0,e).trim()+"+"}return title},oldRead:function(){var t=this.$moment.utc(this.cell.item.updated_at).local().format("YYYY-MM-DD HH:mm:ss");return this.$moment().diff(t,"days")>=30?"old":""},save:function(t){var e=this,n=t;n.action="name"===this.columnName?"name":"number",this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(n.id),n).then((function(){e.$store.dispatch("setSnackbar",{text:n.name+" updated"})})).catch((function(t){422===t.response.status&&e.$store.dispatch("setSnackbar",{color:"error",text:t.response.data.error[e.columnName][0]})})).finally((function(){e.$emit("modifyItem")}))},cancel:function(){this.$store.dispatch("setSnackbar",{color:"error",text:"Canceled"})},open:function(){this.$store.dispatch("setSnackbar",{color:"info",text:"Editing"})}}},O=(n(386),n(418)),j=Object(d.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-edit-dialog",{attrs:{"return-value":t.cell.item[t.columnName],large:""},on:{"update:returnValue":function(e){return t.$set(t.cell.item,t.columnName,e)},"update:return-value":function(e){return t.$set(t.cell.item,t.columnName,e)},save:function(e){return t.save(t.cell.item)},cancel:function(e){return t.cancel(t.cell)},open:t.open},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{type:"name"===t.columnName?"text":"number",label:"Edit","single-line":"",counter:""},model:{value:t.cell.item[t.columnName],callback:function(e){t.$set(t.cell.item,t.columnName,e)},expression:"cell.item[columnName]"}})]},proxy:!0}])},[n("span",{class:["name"===t.columnName?"itemName":"",t.oldRead()]},[t._v(t._s(t.compressTitle(t.cell.item[t.columnName])))])])}),[],!1,null,"c68897b6",null),L=j.exports;v()(j,{VEditDialog:O.a,VTextField:S.a});var M={name:"AddDecreaseNumber",props:{columnName:{type:String,default:""},item:{type:Object,default:function(){return{}}},enabled:{type:String,default:""},buttonType:{type:String,default:"+"}},methods:{modifyQuantity:function(t,e,n){var o=this,r=this.simplePlusMinus(parseInt(t[e]),1,n);if(-1!==r){t[e]=r,t.action="number";var text="+"===n?"Increase":"Decrease",c="+"===n?"primary":"secondary";this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(t.id),t).then((function(){o.$emit("modifyItem"),o.$store.dispatch("setSnackbar",{color:c,text:text+" activated"})}))}else this.$store.dispatch("setSnackbar",{color:"error",text:"The minimum is 1"})},simplePlusMinus:function(a,b,t){var e="+"===t?a+b:a-b;return 0===e?-1:e}}},T=n(82),E=n(54),A=n(71),P=Object(d.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",["+"===t.buttonType?n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"},on:{click:function(e){return t.modifyQuantity(t.item,t.columnName,"+")}}},[t._v("\n    mdi-arrow-up-circle-outline\n  ")]):n("v-list-item",{on:{click:function(e){return t.modifyQuantity(t.item,t.columnName,"-")}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"}},[t._v("\n        mdi-arrow-down-circle-outline\n      ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Decrease")])],1)],1)],1)}),[],!1,null,"7505cb35",null),R=P.exports;v()(P,{VIcon:V.a,VListItem:T.a,VListItemContent:E.a,VListItemIcon:A.a,VListItemTitle:E.b});var z={name:"DeleteDialog",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1}},methods:{confirmDelete:function(){this.dialog=!1,this.$emit("deleteItem",this.item)}}},F=Object(d.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-list-item",t._g({},o),[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"}},[t._v("\n          mdi-delete\n        ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Delete")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.item.name)+"\n    ")]),t._v(" "),n("v-card-text",[t._v("Are you sure you want to delete this ?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Cancel\n      ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.confirmDelete}},[t._v("\n        Delete\n      ")])],1)],1)],1)}),[],!1,null,"f40b93b4",null),Y=F.exports;v()(F,{VBtn:h.a,VCard:y.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:w.a,VIcon:V.a,VListItem:T.a,VListItemContent:E.a,VListItemIcon:A.a,VListItemTitle:E.b,VSpacer:C.a});var B={components:{DeleteDialog:Y,AddDecreaseNumber:R,ModifyCell:L,AddNewItem:D},auth:!1,data:function(){return{options:{},pageCount:0,search:"",enabled:"",slots:["Manga","Anime","TVShow"],headersSlot:{},items:[],modelstate:{}}},head:function(){return{title:"Index"}},watch:{options:{handler:function(){this.$warehouse.set("options_".concat(this.enabled),this.options)},deep:!0},enabled:function(slot){this.$warehouse.set("slot",slot),this.$store.commit("setArrayHeader",{slot:slot,array:this.headersSlot[slot]}),this.fetchItem(),this.options=this.$warehouse.get("options_".concat(slot),{})}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,o=t.$warehouse,!t.$auth.loggedIn){e.next=8;break}return r=o.get("slot","Manga"),e.next=5,n.$get("category/".concat(r.toLowerCase(),"/"));case 5:return c=e.sent,data=c.data,e.abrupt("return",{items:data,enabled:r});case 8:case"end":return e.stop()}}),e)})))()},created:function(){this.headersSlot=this.$store.state.headersSlot,this.options=this.$warehouse.get("options_".concat(this.enabled),{})},methods:{oldRead:function(t){},modifyChild:function(){this.fetchItem()},fetchItem:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("category/".concat(t.enabled.toLowerCase(),"/"));case 2:n=e.sent,data=n.data,t.items=data;case 5:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var e=this,n=this.items.indexOf(t);this.$axios.$delete("category/".concat(this.enabled.toLowerCase(),"/").concat(t.id)).then((function(){e.$store.dispatch("setSnackbar",{color:"error",text:"Data deleted"}),e.items.splice(n,1)}))},googleItem:function(t){var e=encodeURI("https://www.google.com/search?q=".concat(t.name," season ").concat(parseInt(t.season)," episode ").concat(parseInt(t.quantity)+1));"Manga"===this.enabled&&(e=encodeURI("https://www.google.com/search?q=".concat(t.name," chapter ").concat(parseInt(t.quantity)+1))),window.open(e,"_blank")},copyItem:function(t){var e=this;this.$copyText(t.name).then((function(n){e.$store.dispatch("setSnackbar",{color:"info",text:"Copied ".concat(t.name)})}),(function(t){e.$store.dispatch("setSnackbar",{color:"error",text:"Can not copy"})}))}}},H=n(421),Q=n(126),U=n(331),J=n(419),G=n(368),K=Object(d.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$auth.loggedIn?n("v-card",[n("v-card-title",[n("v-select",{attrs:{items:t.slots,label:"Slot"},model:{value:t.enabled,callback:function(e){t.enabled=e},expression:"enabled"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"",clearable:"","hide-details":"",filled:"",rounded:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-spacer"),t._v(" "),n("AddNewItem",{attrs:{enabled:t.enabled},on:{modifyItem:t.modifyChild}})],1),t._v(" "),n("client-only",[n("v-data-table",{attrs:{headers:t.headersSlot[t.enabled],items:t.items,search:t.search,options:t.options,"hide-default-footer":""},on:{"update:options":function(e){t.options=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([t._l(t.$store.state.itemSlots,(function(slot){return{key:slot.name,fn:function(e){return[n("ModifyCell",{key:slot.name,class:t.oldRead(e),attrs:{cell:e,"column-name":slot.value,enabled:t.enabled},on:{modifyItem:t.modifyChild}})]}}})),{key:"item.updated_at",fn:function(e){var o=e.item;return[n("div",[t._v(t._s(t.$moment.utc(o.updated_at).local().format("YYYY-MM-DD HH:mm:ss")))])]}},{key:"item.action",fn:function(e){var o=e.item;return[n("AddDecreaseNumber",{attrs:{item:o,enabled:t.enabled,"button-type":"+","column-name":"quantity"},on:{modifyItem:t.modifyChild}}),t._v(" "),n("v-menu",{attrs:{"offset-y":"","close-on-content-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:"",color:"cyan",dark:""}},o),[n("v-icon",[t._v("\n                  mdi-tools\n                ")])],1)]}}],null,!0)},[t._v(" "),n("v-list",[n("AddDecreaseNumber",{attrs:{item:o,enabled:t.enabled,"button-type":"-","column-name":"quantity"},on:{modifyItem:t.modifyChild}}),t._v(" "),n("DeleteDialog",{attrs:{item:o},on:{deleteItem:t.deleteItem}}),t._v(" "),n("v-list-item",{on:{click:function(e){return t.googleItem(o)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"blue",size:"25px"}},[t._v("\n                    mdi-google\n                  ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Google")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.copyItem(o)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"}},[t._v("\n                    mdi-content-copy\n                  ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Copy")])],1)],1)],1)],1)]}}],null,!0)}),t._v(" "),n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:t.pageCount,"total-visible":7},model:{value:t.options.page,callback:function(e){t.$set(t.options,"page",e)},expression:"options.page"}})],1)],1)],1):n("div",[t._v("\n    Please login to enjoy MangaMark. If you don't have an account, sign up one for free. update\n  ")])],1)}),[],!1,null,"d443901c",null);e.default=K.exports;v()(K,{VBtn:h.a,VCard:y.a,VCardTitle:_.c,VDataTable:H.a,VIcon:V.a,VList:Q.a,VListItem:T.a,VListItemContent:E.a,VListItemIcon:A.a,VListItemTitle:E.b,VMenu:U.a,VPagination:J.a,VSelect:G.a,VSpacer:C.a,VTextField:S.a})}}]);