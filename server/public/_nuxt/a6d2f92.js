(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{570:function(e,t,n){"use strict";t.a={required:function(e){return function(t){return!!t||"".concat(e," is required")}},minLength:function(e,t){return function(n){return n&&n.length>=t||"".concat(e," must be at least ").concat(t," characters")}},maxLength:function(e,t){return function(n){return n&&n.length<=t||"".concat(e," must be less than ").concat(t," characters")}},email:function(){return function(e){return/.+@.+/.test(e)||"E-mail must be valid"}},url:function(){return function(e){return/^(http(s?)):\/\//gi.test(e)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(e){return/\d/.test(e)||"Number is required"}},protein:function(){return function(e){return/^(p\.)[\d\w]+/gi.test(e)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(e,t){return e===t||"Password must match"},quantity:function(){return function(e){return!!e&&e>0||"Number has to be greater than 0"}}}},571:function(e,t,n){var content=n(573);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("39d17426",content,!0,{sourceMap:!1})},572:function(e,t,n){"use strict";var o=n(571);n.n(o).a},573:function(e,t,n){(t=n(9)(!1)).push([e.i,'@media only screen and (min-width:600px){.itemName[data-v-9be17930]{font-family:"Be Vietnam",sans-serif;font-size:17px}}@media only screen and (min-width:960px){.itemName[data-v-9be17930]{font-family:"Be Vietnam",sans-serif;font-size:26px}}.old[data-v-9be17930]{text-decoration:line-through}',""]),e.exports=t},575:function(e,t,n){"use strict";n.r(t);n(188),n(5),n(126),n(22),n(25),n(20),n(21),n(4),n(38),n(24),n(69);var o=n(30),r=(n(8),n(7),n(6),n(1)),c=n(570);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m={name:"AddNewItem",props:{enabled:{type:String,default:""}},data:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({dialog:!1,modelstate:{},form:{}},c.a)},created:function(){this.form=this.initialForm()},methods:{initialForm:function(){return{name:"",quantity:1,season:1,other_name:"",user_id:this.$auth.user.id}},save:function(){var e=this;this.$refs.form.validate()&&(this.form.name=this.form.name.trim(),this.$axios.$post("category/".concat(this.enabled.toLowerCase(),"/"),this.form).then((function(t){e.dialog=!1,e.$store.dispatch("setSnackbar",{text:"New item added"}),e.$emit("modifyItem"),e.$refs.form.resetValidation(),e.form=e.initialForm()})).catch((function(t){422===t.response.status&&(e.modelstate=t.response.data.error)})))},cancel:function(){this.dialog=!1,this.$refs.form.resetValidation(),this.form=this.initialForm()}}},d=n(108),f=n(155),v=n.n(f),h=n(140),y=n(229),_=n(242),x=n(234),w=n(220),k=n(122),$=n(233),C=n(116),I=n(235),V=n(227),S=n(44),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-btn",e._g({staticClass:"mb-2",attrs:{color:!0===e.$vuetify.theme.dark?"":"indigo",dark:"",fab:""}},o),[n("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Add new "+e._s(e.enabled))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{rules:[e.required("Name")],"error-messages":e.modelstate.name,label:"Name",counter:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),"Manga"!==e.enabled?n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{rules:[e.required("Season"),e.quantity()],"error-messages":e.modelstate.season,type:"number",label:"Season",min:"1"},model:{value:e.form.season,callback:function(t){e.$set(e.form,"season",t)},expression:"form.season"}})],1):e._e(),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Manga"===e.enabled?"Chapter":"Episode",rules:[e.required("Manga"===e.enabled?"Chapter":"Episode"),e.quantity()],"error-messages":e.modelstate.quantity,type:"number",min:"1"},model:{value:e.form.quantity,callback:function(t){e.$set(e.form,"quantity",t)},expression:"form.quantity"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.cancel()}}},[e._v("\n          Cancel\n        ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.save()}}},[e._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,"5eb92a7f",null),N=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCardActions:_.b,VCardText:_.d,VCardTitle:_.e,VCol:x.a,VContainer:w.a,VDialog:k.a,VForm:$.a,VIcon:C.a,VRow:I.a,VSpacer:V.a,VTextField:S.a});var O={name:"ModifyCell",props:{columnName:{type:String,default:""},cell:{type:Object,default:function(){return{}}},enabled:{type:String,default:""}},created:function(){this.enabled=this.$warehouse.get("slot","Manga")},methods:{compressTitle:function(title){if("string"==typeof title&&("sm"===this.$vuetify.breakpoint.name||"md"===this.$vuetify.breakpoint.name)){var e=title.split(" "),t=e.length>0?e.pop().length:0,n=e.length>0?e.pop().length:0,o=e.length>0?e.pop().length:0,r=title.length;if("sm"===this.$vuetify.breakpoint.name&&(r=25-t-n-o)<0&&(r=25-t-n),"md"===this.$vuetify.breakpoint.name&&(r=50-t-n-o)<0&&(r=50-t-n),title.length>r)return title.substr(0,r).trim()+"+"}return title},oldRead:function(){var e=this.$moment.utc(this.cell.item.updated_at).local().format("YYYY-MM-DD HH:mm:ss");return this.$moment().diff(e,"days")>=30?"old":""},save:function(e){var t=this,n=e;n.action="name"===this.columnName?"name":"other_name"===this.columnName?"other_name":"number",this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(n.id),n).then((function(){t.$store.dispatch("setSnackbar",{text:n.name+" updated"})})).catch((function(e){422===e.response.status&&t.$store.dispatch("setSnackbar",{color:"error",text:e.response.data.error[t.columnName][0]})})).finally((function(){t.$emit("modifyItem")}))},cancel:function(){this.$store.dispatch("setSnackbar",{color:"error",text:"Canceled"})},open:function(){this.$store.dispatch("setSnackbar",{color:"info",text:"Editing"})}}},D=(n(572),n(231)),j=Object(d.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-edit-dialog",{attrs:{"return-value":e.cell.item[e.columnName],large:""},on:{"update:returnValue":function(t){return e.$set(e.cell.item,e.columnName,t)},"update:return-value":function(t){return e.$set(e.cell.item,e.columnName,t)},save:function(t){return e.save(e.cell.item)},cancel:function(t){return e.cancel(e.cell)},open:e.open},scopedSlots:e._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{type:"name"===e.columnName||"other_name"===e.columnName?"text":"number",label:"Edit","single-line":"",counter:""},model:{value:e.cell.item[e.columnName],callback:function(t){e.$set(e.cell.item,e.columnName,t)},expression:"cell.item[columnName]"}})]},proxy:!0}])},["other_name"===e.columnName?[null===e.cell.item[e.columnName]?n("v-text-field",{attrs:{readonly:"",placeholder:"Add other name"}}):n("span",{class:["name"===e.columnName?"itemName":"",e.oldRead()]},[e._v(e._s(e.cell.item[e.columnName]))])]:n("span",{class:["name"===e.columnName?"itemName":"",e.oldRead()]},[e._v(e._s(e.compressTitle(e.cell.item[e.columnName])))])],2)}),[],!1,null,"9be17930",null),E=j.exports;v()(j,{VEditDialog:D.a,VTextField:S.a});var L={name:"AddDecreaseNumber",props:{columnName:{type:String,default:""},item:{type:Object,default:function(){return{}}},enabled:{type:String,default:""},buttonType:{type:String,default:"+"}},methods:{modifyQuantity:function(e,t,n){var o=this,r=this.simplePlusMinus(parseInt(e[t]),1,n);if(-1!==r){e[t]=r,e.action="number";var text="+"===n?"Increase":"Decrease",c="+"===n?"primary":"secondary";this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(e.id),e).then((function(){o.$emit("modifyItem"),o.$store.dispatch("setSnackbar",{color:c,text:text+" activated"})}))}else this.$store.dispatch("setSnackbar",{color:"error",text:"The minimum is 1"})},simplePlusMinus:function(a,b,e){var t="+"===e?a+b:a-b;return 0===t?-1:t}}},M=n(142),T=n(64),A=n(117),P=Object(d.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",["+"===e.buttonType?n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"},on:{click:function(t){return e.modifyQuantity(e.item,e.columnName,"+")}}},[e._v("\n    mdi-arrow-up-circle-outline\n  ")]):n("v-list-item",{on:{click:function(t){return e.modifyQuantity(e.item,e.columnName,"-")}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"}},[e._v("\n        mdi-arrow-down-circle-outline\n      ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Decrease")])],1)],1)],1)}),[],!1,null,"3e8f0272",null),R=P.exports;v()(P,{VIcon:C.a,VListItem:M.a,VListItemContent:T.g,VListItemIcon:A.a,VListItemTitle:T.k});var F={name:"DeleteDialog",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1}},methods:{confirmDelete:function(){this.dialog=!1,this.$emit("deleteItem",this.item)}}},z=Object(d.a)(F,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{persistent:"","max-width":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-list-item",e._g({},o),[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"}},[e._v("\n          mdi-delete\n        ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Delete")])],1)],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n      "+e._s(e.item.name)+"\n    ")]),e._v(" "),n("v-card-text",[e._v("Are you sure you want to delete this ?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.confirmDelete}},[e._v("\n        Delete\n      ")])],1)],1)],1)}),[],!1,null,"1ff29363",null),Y=z.exports;v()(z,{VBtn:h.a,VCard:y.a,VCardActions:_.b,VCardText:_.d,VCardTitle:_.e,VDialog:k.a,VIcon:C.a,VListItem:M.a,VListItemContent:T.g,VListItemIcon:A.a,VListItemTitle:T.k,VSpacer:V.a});var B={components:{DeleteDialog:Y,AddDecreaseNumber:R,ModifyCell:E,AddNewItem:N},auth:!1,data:function(){return{selectExpand:!1,showExpand:!0,editable:!1,options:{},pageCount:0,search:"",enabled:"",slots:["Manga","Anime","TVShow"],headersSlot:{},items:[],modelstate:{}}},head:function(){return{title:"Index"}},watch:{options:{handler:function(){this.$warehouse.set("options_".concat(this.enabled),this.options)},deep:!0},enabled:function(slot){this.showExpand="Manga"===slot,this.selectExpand=!1,this.$warehouse.set("slot",slot),this.$store.commit("setArrayHeader",{slot:slot,array:this.headersSlot[slot]}),this.fetchItem(),this.options=this.$warehouse.get("options_".concat(slot),{})}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$axios,o=e.$warehouse,!e.$auth.loggedIn){t.next=8;break}return r=o.get("slot","Manga"),t.next=5,n.$get("category/".concat(r.toLowerCase(),"/"));case 5:return c=t.sent,data=c.data,t.abrupt("return",{items:data,enabled:r});case 8:case"end":return t.stop()}}),t)})))()},created:function(){this.headersSlot=this.$store.state.headersSlot,this.showExpand="Manga"===this.enabled,this.options=this.$warehouse.get("options_".concat(this.enabled),{})},methods:{customFilter:function(e,t,n){var o=n.name,r=n.quantity,c=n.season,l=n.other_name,m=n.updated_at;return t.toString().toLowerCase().split(" ").filter((function(e){return e})).every((function(e){return JSON.stringify(Object.values({name:o,quantity:r,season:c,other_name:l,updated_at:m})).toString().toLowerCase().includes(e)}))},expandFunc:function(e,t){e(t),this.selectExpand=!0},oldRead:function(e){},modifyChild:function(){this.fetchItem(),this.search=""},fetchItem:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("category/".concat(e.enabled.toLowerCase(),"/"));case 2:n=t.sent,data=n.data,e.items=data;case 5:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){var t=this,n=this.items.indexOf(e);this.$axios.$delete("category/".concat(this.enabled.toLowerCase(),"/").concat(e.id)).then((function(){t.$store.dispatch("setSnackbar",{color:"error",text:"Data deleted"}),t.items.splice(n,1)}))},googleItem:function(e,t,n){var o=encodeURI("https://www.google.com/search?q=".concat(e," season ").concat(parseInt(t)," episode ").concat(parseInt(n)+1));"Manga"===this.enabled&&(o=encodeURI("https://www.google.com/search?q=".concat(e," chapter ").concat(parseInt(n)+1))),window.open(o,"_blank")},copyItem:function(e){var t=this;this.$copyText(e).then((function(n){t.$store.dispatch("setSnackbar",{color:"info",text:"Copied ".concat(e)})}),(function(e){t.$store.dispatch("setSnackbar",{color:"error",text:"Can not copy"})}))}}},H=n(237),J=n(223),Q=n(225),U=n(236),G=n(29),K=Object(d.a)(B,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$auth.loggedIn?n("v-card",[n("v-card-title",[n("v-select",{attrs:{items:e.slots,label:"Slot"},model:{value:e.enabled,callback:function(t){e.enabled=t},expression:"enabled"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-magnify",label:"Search","single-line":"",clearable:"","hide-details":"",filled:"",rounded:"",dense:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-spacer"),e._v(" "),n("AddNewItem",{attrs:{enabled:e.enabled},on:{modifyItem:e.modifyChild}})],1),e._v(" "),n("v-data-table",{attrs:{"custom-filter":e.customFilter,headers:e.headersSlot[e.enabled],items:e.items,search:e.search,options:e.options,"show-expand":e.showExpand,"hide-default-footer":"","single-expand":""},on:{"update:options":function(t){e.options=t},"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-btn",{on:{click:function(t){e.editable=!e.editable}}},[e._v("\n          Turn on editable other name\n        ")])]},proxy:!0},e._l(e.$store.state.itemSlots,(function(slot){return{key:slot.name,fn:function(t){return[n("ModifyCell",{key:slot.name,class:e.oldRead(t),attrs:{cell:t,"column-name":slot.value,enabled:e.enabled},on:{modifyItem:e.modifyChild}})]}}})),{key:"item.updated_at",fn:function(t){var o=t.item;return[n("div",[e._v(e._s(e.$moment.utc(o.updated_at).local().format("YYYY-MM-DD HH:mm:ss")))])]}},{key:"item.action",fn:function(t){var o=t.item;return[n("AddDecreaseNumber",{attrs:{item:o,enabled:e.enabled,"button-type":"+","column-name":"quantity"},on:{modifyItem:e.modifyChild}}),e._v(" "),n("v-menu",{attrs:{"offset-y":"","close-on-content-click":""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-btn",e._g({attrs:{icon:"",color:"cyan",dark:""}},o),[n("v-icon",[e._v("\n                mdi-tools\n              ")])],1)]}}],null,!0)},[e._v(" "),n("v-list",[n("AddDecreaseNumber",{attrs:{item:o,enabled:e.enabled,"button-type":"-","column-name":"quantity"},on:{modifyItem:e.modifyChild}}),e._v(" "),n("DeleteDialog",{attrs:{item:o},on:{deleteItem:e.deleteItem}}),e._v(" "),n("v-list-item",{on:{click:function(t){return e.googleItem(o.name,o.season,o.quantity)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"blue",size:"25px"}},[e._v("\n                  mdi-google\n                ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Google Name")])],1)],1),e._v(" "),null!==o.other_name?n("v-list-item",{on:{click:function(t){return e.googleItem(o.other_name,o.season,o.quantity)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"blue",size:"25px"}},[e._v("\n                  mdi-google\n                ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Google Other name")])],1)],1):e._e(),e._v(" "),n("v-list-item",{on:{click:function(t){return e.copyItem(o.name)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"}},[e._v("\n                  mdi-content-copy\n                ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Copy Name")])],1)],1),e._v(" "),null!==o.other_name?n("v-list-item",{on:{click:function(t){return e.copyItem(o.other_name)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"}},[e._v("\n                  mdi-content-copy\n                ")])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("Copy Other Name")])],1)],1):e._e()],1)],1)]}},{key:"item.data-table-expand",fn:function(t){var o=t.item,r=t.expand,c=t.isExpanded;return[o.season||null===o.other_name&&!e.editable?e._e():n("v-icon",{on:{click:function(t){return e.expandFunc(r,!c)}}},[e._v("\n          mdi-chevron-down\n        ")])]}},e.selectExpand?{key:"expanded-item",fn:function(t){return[n("td",{attrs:{colspan:t.headers.length}},[n("ModifyCell",{class:e.oldRead(t),attrs:{cell:t,enabled:e.enabled,"column-name":"other_name"},on:{modifyItem:e.modifyChild}})],1)]}}:null],null,!0)}),e._v(" "),n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:e.pageCount,"total-visible":7},model:{value:e.options.page,callback:function(t){e.$set(e.options,"page",t)},expression:"options.page"}})],1)],1):n("div",[e._v("\n    Please login to enjoy MangaMark. If you don't have an account, sign up one for free. update\n  ")])],1)}),[],!1,null,"242c236d",null);t.default=K.exports;v()(K,{VBtn:h.a,VCard:y.a,VCardTitle:_.e,VDataTable:H.a,VIcon:C.a,VList:J.a,VListItem:M.a,VListItemContent:T.g,VListItemIcon:A.a,VListItemTitle:T.k,VMenu:Q.a,VPagination:U.a,VSelect:G.a,VSpacer:V.a,VTextField:S.a})}}]);