(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3,4,5,6,7],{703:function(t,e,n){"use strict";n(26),n(23);e.a={required:function(t){return function(e){return!!e||"".concat(t," is required")}},minLength:function(t,e){return function(n){return n&&n.length>=e||"".concat(t," must be at least ").concat(e," characters")}},maxLength:function(t,e){return function(n){return n&&n.length<=e||"".concat(t," must be less than ").concat(e," characters")}},email:function(){return function(t){return/.+@.+/.test(t)||"E-mail must be valid"}},url:function(){return function(t){return/^(http(s?)):\/\//gi.test(t)||"Url starts with 'http://' or 'https://'. Ex: http://example.com"}},number:function(){return function(t){return/\d/.test(t)||"Number is required"}},protein:function(){return function(t){return/^(p\.)[\d\w]+/gi.test(t)||"protein starts with 'p.'. Ex: p.Ala1225del, p.Phe1546Leufs"}},passwordConfirmation:function(t,e){return t===e||"Password must match"},quantity:function(){return function(t){return!!t&&t>0||"Number has to be greater than 0"}}}},704:function(t,e,n){var content=n(708);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("48e33984",content,!0,{sourceMap:!1})},705:function(t,e,n){var r=n(18),o=n(706),c=Math.abs;r({target:"Number",stat:!0},{isSafeInteger:function(t){return o(t)&&c(t)<=9007199254740991}})},706:function(t,e,n){var r=n(63),o=Math.floor;t.exports=Number.isInteger||function(t){return!r(t)&&isFinite(t)&&o(t)===t}},707:function(t,e,n){"use strict";n(704)},708:function(t,e,n){var r=n(11)(!1);r.push([t.i,'@media only screen and (min-width:600px){.itemName[data-v-1a345ed2]{font-family:"Be Vietnam",sans-serif;font-size:17px}}@media only screen and (min-width:960px){.itemName[data-v-1a345ed2]{font-family:"Be Vietnam",sans-serif;font-size:26px}}.old[data-v-1a345ed2]{text-decoration:line-through}',""]),t.exports=r},714:function(t,e,n){"use strict";n.r(e);n(5),n(7),n(6),n(4),n(9),n(8),n(10);var r=n(1),o=(n(32),n(69),n(703));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"AddNewItem",props:{enabled:{type:String,default:""}},data:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({dialog:!1,modelstate:{},form:{}},o.a)},created:function(){this.form=this.initialForm()},methods:{initialForm:function(){return{name:"",quantity:1,season:1,other_name:"",user_id:this.$auth.user.id}},save:function(){var t=this;this.$refs.form.validate()&&(this.form.name=this.form.name.trim(),this.$axios.$post("category/".concat(this.enabled.toLowerCase(),"/"),this.form).then((function(e){t.dialog=!1,t.$store.dispatch("setSnackbar",{text:"New item added"}),t.$emit("modifyItem"),t.$refs.form.resetValidation(),t.form=t.initialForm()})).catch((function(e){422===e.response.status&&(t.modelstate=e.response.data.error)})))},cancel:function(){this.dialog=!1,this.$refs.form.resetValidation(),this.form=this.initialForm()}}},m=l,d=n(145),f=n(201),h=n.n(f),v=n(187),y=n(306),_=n(326),x=n(315),O=n(297),I=n(164),w=n(314),k=n(159),$=n(316),C=n(304),V=n(57),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"mb-2",attrs:{color:!0===t.$vuetify.theme.dark?"":"indigo",dark:"",fab:""}},r),[n("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Add new "+t._s(t.enabled))])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{rules:[t.required("Name")],"error-messages":t.modelstate.name,label:"Name",counter:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),"Manga"!==t.enabled?n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{rules:[t.required("Season"),t.quantity()],"error-messages":t.modelstate.season,type:"number",label:"Season",min:"1"},model:{value:t.form.season,callback:function(e){t.$set(t.form,"season",e)},expression:"form.season"}})],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Manga"===t.enabled?"Chapter":"Episode",rules:[t.required("Manga"===t.enabled?"Chapter":"Episode"),t.quantity()],"error-messages":t.modelstate.quantity,type:"number",min:"1"},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancel()}}},[t._v(" Cancel ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.save()}}},[t._v(" Save ")])],1)],1)],1)],1)}),[],!1,null,"1555e056",null);e.default=component.exports;h()(component,{VBtn:v.a,VCard:y.a,VCardActions:_.b,VCardText:_.d,VCardTitle:_.e,VCol:x.a,VContainer:O.a,VDialog:I.a,VForm:w.a,VIcon:k.a,VRow:$.a,VSpacer:C.a,VTextField:V.a})},715:function(t,e,n){"use strict";n.r(e);n(5),n(7),n(6),n(9),n(8),n(10);var r=n(1);n(32),n(26),n(52),n(69),n(4),n(23);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"ModifyCell",props:{columnName:{type:String,default:""},oldCell:{type:Object,default:function(){return{}}}},created:function(){this.cell=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.oldCell),this.enabled=this.$warehouse.get("slot","Manga")},methods:{compressTitle:function(title){if("string"==typeof title&&("sm"===this.$vuetify.breakpoint.name||"md"===this.$vuetify.breakpoint.name)){var t=title.split(" "),e=t.length>0?t.pop().length:0,n=t.length>0?t.pop().length:0,r=t.length>0?t.pop().length:0,o=title.length;if("sm"===this.$vuetify.breakpoint.name&&(o=40-e-n-r)<0&&(o=40-e-n),"md"===this.$vuetify.breakpoint.name&&(o=50-e-n-r)<0&&(o=50-e-n),title.length>o)return title.substr(0,o).trim()+"+"}return title},oldRead:function(){var t=this.$moment.utc(this.cell.item.updated_at).local().format("YYYY-MM-DD HH:mm:ss");return this.$moment().diff(t,"days")>=30?"old":""},save:function(t){var e=this,n=t;n.action="name"===this.columnName?"name":"other_name"===this.columnName?"other_name":"number",delete n.created_at,delete n.updated_at,this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(n.id),n).then((function(){e.$store.dispatch("setSnackbar",{text:n.name+" updated"})})).catch((function(t){422===t.response.status&&e.$store.dispatch("setSnackbar",{color:"error",text:t.response.data.error[e.columnName][0]})})).finally((function(){e.$emit("modifyItem")}))},cancel:function(){this.$store.dispatch("setSnackbar",{color:"error",text:"Canceled"})},open:function(){this.$store.dispatch("setSnackbar",{color:"info",text:"Editing"})}}},l=c,m=(n(707),n(145)),d=n(201),f=n.n(d),h=n(308),v=n(57),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-edit-dialog",{attrs:{"return-value":t.cell.item[t.columnName],large:""},on:{"update:returnValue":function(e){return t.$set(t.cell.item,t.columnName,e)},"update:return-value":function(e){return t.$set(t.cell.item,t.columnName,e)},save:function(e){return t.save(t.cell.item)},cancel:function(e){return t.cancel(t.cell)},open:t.open},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{type:"name"===t.columnName?"text":"number",label:"Edit","single-line":"",counter:""},model:{value:t.cell.item[t.columnName],callback:function(e){t.$set(t.cell.item,t.columnName,e)},expression:"cell.item[columnName]"}})]},proxy:!0}])},[n("span",{class:["name"===t.columnName?"itemName":"",t.oldRead()]},[t._v(t._s(t.compressTitle(t.cell.item[t.columnName])))])])}),[],!1,null,"1a345ed2",null);e.default=component.exports;f()(component,{VEditDialog:h.a,VTextField:v.a})},716:function(t,e,n){"use strict";n.r(e);n(23),n(705),n(16);var r={name:"AddDecreaseNumber",props:{columnName:{type:String,default:""},item:{type:Object,default:function(){return{}}},enabled:{type:String,default:""},buttonType:{type:String,default:"+"}},methods:{modifyQuantity:function(t,e,n){var r=this,o=this.simplePlusMinus(parseFloat(t[e]),1,n);if(-1!==o){t[e]=o,t.action="number";var text="+"===n?"Increase":"Decrease",c="+"===n?"primary":"secondary";delete t.created_at,delete t.updated_at,this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(t.id),t).then((function(){r.$emit("modifyItem"),r.$store.dispatch("setSnackbar",{color:c,text:text+" activated"})}))}else this.$store.dispatch("setSnackbar",{color:"error",text:"The minimum is 1"})},simplePlusMinus:function(a,b,t){var e="+"===t?function(a,b){return Number.isSafeInteger(a)?a+b:Math.ceil(a)}(a,b):function(a,b){return Number.isSafeInteger(a)?a-b:Math.floor(a)}(a,b);return 0===e?-1:e}}},o=n(145),c=n(201),l=n.n(c),m=n(159),d=n(189),f=n(93),h=n(160),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",["+"===t.buttonType?n("v-list-item",{on:{click:function(e){return t.modifyQuantity(t.item,t.columnName,"+")}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"}},[t._v("\n        mdi-arrow-up-circle-outline\n      ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Increase")])],1)],1):n("v-list-item",{on:{click:function(e){return t.modifyQuantity(t.item,t.columnName,"-")}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"}},[t._v("\n        mdi-arrow-down-circle-outline\n      ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Decrease")])],1)],1)],1)}),[],!1,null,"fa9a13e8",null);e.default=component.exports;l()(component,{VIcon:m.a,VListItem:d.a,VListItemContent:f.g,VListItemIcon:h.a,VListItemTitle:f.k})},717:function(t,e,n){"use strict";n.r(e);var r={name:"DeleteDialog",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1}},methods:{confirmDelete:function(){this.dialog=!1,this.$emit("deleteItem",this.item)}}},o=n(145),c=n(201),l=n.n(c),m=n(187),d=n(306),f=n(326),h=n(164),v=n(159),y=n(189),_=n(93),x=n(160),O=n(304),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-list-item",t._g({},r),[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"}},[t._v(" mdi-delete ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Delete")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.item.name)+"\n    ")]),t._v(" "),n("v-card-text",[t._v("Are you sure you want to delete this ?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Cancel\n      ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.confirmDelete}},[t._v("\n        Delete\n      ")])],1)],1)],1)}),[],!1,null,"7718c9c3",null);e.default=component.exports;l()(component,{VBtn:m.a,VCard:d.a,VCardActions:f.b,VCardText:f.d,VCardTitle:f.e,VDialog:h.a,VIcon:v.a,VListItem:y.a,VListItemContent:_.g,VListItemIcon:x.a,VListItemTitle:_.k,VSpacer:O.a})},718:function(t,e,n){"use strict";n.r(e);n(5),n(7),n(6),n(9),n(8),n(10);var r=n(1);n(4),n(23),n(32);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"OtherName",props:{oldCell:{type:Object,default:function(){return{}}},enabled:{type:String,default:""}},data:function(){return{dialog:!1,modelstate:{}}},created:function(){this.cell=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.oldCell)},methods:{save:function(){var t=this;this.cell.action="other_name",delete this.cell.created_at,delete this.cell.updated_at,this.$axios.$put("category/".concat(this.enabled.toLowerCase(),"/").concat(this.cell.id),this.cell).then((function(){t.dialog=!1,t.$store.dispatch("setSnackbar",{text:t.cell.name+" updated"})})).catch((function(t){t.response.status})).finally((function(){t.$emit("modifyItem")}))},cancel:function(){this.dialog=!1,this.$emit("modifyItem")},copyItem:function(t){this.$emit("copyItem",t,this.$refs.container)},googleItem:function(t,e,n){this.$emit("googleItem",t,e,n)}}},l=c,m=n(145),d=n(201),f=n.n(d),h=n(187),v=n(306),y=n(326),_=n(315),x=n(297),O=n(164),I=n(159),w=n(189),k=n(93),$=n(160),C=n(316),V=n(304),S=n(57),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"600px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-list-item",t._g({},r),[n("v-list-item-icon",[n("v-icon",t._g({staticClass:"mr-2",attrs:{color:"grey",size:"25px"}},r),[t._v("\n          mdi-axis-arrow\n        ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Other Name")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Other Name")])]),t._v(" "),n("v-card-text",[n("v-container",{ref:"container"},[n("v-row",[n("v-col",[n("v-text-field",{attrs:{"error-messages":t.modelstate.other_name_1,label:"Other Name 1",counter:""},model:{value:t.cell.other_name_1,callback:function(e){t.$set(t.cell,"other_name_1",e)},expression:"cell.other_name_1"}})],1),t._v(" "),n("v-col",{attrs:{sm:"3",md:"3"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copyItem(t.cell.other_name_1)}}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"}},[t._v("\n                mdi-content-copy\n              ")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.googleItem(t.cell.other_name_1,t.cell.season,t.cell.quantity)}}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"blue",size:"25px"}},[t._v("\n                mdi-google\n              ")])],1)],1)],1),t._v(" "),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"error-messages":t.modelstate.other_name_2,label:"Other Name 2",counter:""},model:{value:t.cell.other_name_2,callback:function(e){t.$set(t.cell,"other_name_2",e)},expression:"cell.other_name_2"}})],1),t._v(" "),n("v-col",{attrs:{sm:"3",md:"3"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copyItem(t.cell.other_name_2)}}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"}},[t._v("\n                mdi-content-copy\n              ")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.googleItem(t.cell.other_name_2,t.cell.season,t.cell.quantity)}}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"blue",size:"25px"}},[t._v("\n                mdi-google\n              ")])],1)],1)],1),t._v(" "),n("v-row",[n("v-col",[n("v-text-field",{attrs:{"error-messages":t.modelstate.other_name_3,label:"Other Name 3",counter:""},model:{value:t.cell.other_name_3,callback:function(e){t.$set(t.cell,"other_name_3",e)},expression:"cell.other_name_3"}})],1),t._v(" "),n("v-col",{attrs:{sm:"3",md:"3"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copyItem(t.cell.other_name_3)}}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"}},[t._v("\n                mdi-content-copy\n              ")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.googleItem(t.cell.other_name_3,t.cell.season,t.cell.quantity)}}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"blue",size:"25px"}},[t._v("\n                mdi-google\n              ")])],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.cancel()}}},[t._v(" Cancel ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.save()}}},[t._v(" Save ")])],1)],1)],1)}),[],!1,null,"a4d46346",null);e.default=component.exports;f()(component,{VBtn:h.a,VCard:v.a,VCardActions:y.b,VCardText:y.d,VCardTitle:y.e,VCol:_.a,VContainer:x.a,VDialog:O.a,VIcon:I.a,VListItem:w.a,VListItemContent:k.g,VListItemIcon:$.a,VListItemTitle:k.k,VRow:C.a,VSpacer:V.a,VTextField:S.a})},721:function(t,e,n){"use strict";n.r(e);var r=n(38),o=(n(26),n(203),n(29),n(48),n(6),n(4),n(49),n(23),n(113),n(705),n(16),n(100),n(714)),c=n(715),l=n(716),m=n(717),d=n(718);n(98),n(32),n(52),n(58),n(169);var f=function(t,e,n,filter){if(filter.startsWith("name=")){var r=n.name,o=n.other_name_1,c=n.other_name_2,l=n.other_name_3;return e.toString().toLowerCase().split(" ").filter((function(t){return t})).every((function(t){return JSON.stringify(Object.values({name:r,other_name_1:o,other_name_2:c,other_name_3:l})).toString().toLowerCase().includes(t)}))}if(filter.startsWith("chapter=")&&parseInt(n.quantity)===parseInt(e))return JSON.stringify(Object.values(n));if(filter.startsWith("chapter≥")&&parseInt(n.quantity)>=parseInt(e))return JSON.stringify(Object.values(n));if(filter.startsWith("chapter≤")&&parseInt(n.quantity)<=parseInt(e))return JSON.stringify(Object.values(n));if(filter.startsWith("day=")&&10===e.length&&t(n.updated_at).isSame(e,"day"))return JSON.stringify(Object.values(n));if(filter.startsWith("month=")&&7===e.length&&t(n.updated_at).isSame(e,"month"))return JSON.stringify(Object.values(n));if(filter.startsWith("year=")&&4===e.length&&t(n.updated_at).isSame(e,"year"))return JSON.stringify(Object.values(n))},h={components:{OtherName:d.default,DeleteDialog:m.default,AddDecreaseNumber:l.default,ModifyCell:c.default,AddNewItem:o.default},auth:!1,asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,r=t.$warehouse,!t.$auth.loggedIn){e.next=8;break}return o=r.get("slot","Manga"),e.next=5,n.$get("category/".concat(o.toLowerCase(),"/"));case 5:return c=e.sent,data=c.data,e.abrupt("return",{items:data,enabled:o});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{timer:"",isLoading:!1,editable:!1,options:{},pageCount:0,search:"",enabled:"",slots:["Manga","Anime","TVShow"],headersSlot:{},items:[],modelstate:{},searchPlaceholder:"Filter by name. Ex: Naruto",filter:"name=",filterSlot:["name=","chapter=","chapter≥","chapter≤","year=","month=","day="]}},head:function(){return{title:"Index"}},watch:{options:{handler:function(){this.$warehouse.set("options_".concat(this.enabled),this.options)},deep:!0},enabled:function(slot){this.isLoading=!0,this.$warehouse.set("slot",slot),this.$store.commit("setArrayHeader",{slot:slot,array:this.headersSlot[slot]}),this.items=[],this.fetchItem(),this.options=this.$warehouse.get("options_".concat(slot),{})},filter:function(){this.search="",this.filter.includes("name")?this.searchPlaceholder="Filter by name. Ex: Naruto":this.filter.includes("chapter")?this.searchPlaceholder="Filter by chapter. Ex: 1":this.filter.includes("year")?this.searchPlaceholder="Filter by year. Ex: 2020":this.filter.includes("month")?this.searchPlaceholder="Filter by month. Ex: 2020-01":this.filter.includes("day")&&(this.searchPlaceholder="Filter by day. Ex: 2020-01-01")}},created:function(){this.headersSlot=this.$store.state.headersSlot,this.options=this.$warehouse.get("options_".concat(this.enabled),{}),this.timer=setInterval(this.fetchItem,3e5)},beforeDestroy:function(){this.cancelAutoUpdate()},methods:{customFilter:function(t,e,n){return f(this.$moment,e,n,this.filter)},oldRead:function(t){},modifyChild:function(){this.search=""},fetchItem:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("setSnackbar",{color:"info",text:"Refresh data"}),setTimeout((function(){t.items=[]}),1e3),e.next=4,t.$axios.$get("category/".concat(t.enabled.toLowerCase(),"/"));case 4:n=e.sent,data=n.data,setTimeout((function(){t.isLoading=!1,t.items=data}),1e3);case 7:case"end":return e.stop()}}),e)})))()},cancelAutoUpdate:function(){clearInterval(this.timer)},deleteItem:function(t){var e=this,n=this.items.indexOf(t);this.$axios.$delete("category/".concat(this.enabled.toLowerCase(),"/").concat(t.id)).then((function(){e.$store.dispatch("setSnackbar",{color:"error",text:"Data deleted"}),e.items.splice(n,1)}))},googleItem:function(t,e,n){var r=function(t){return Number.isSafeInteger(t)?t+1:Math.ceil(t)},o=encodeURI("https://www.google.com/search?q=".concat(t," season ").concat(parseInt(e)," episode ").concat(r(parseFloat(n))));"Manga"===this.enabled&&(o=encodeURI("https://www.google.com/search?q=".concat(t," chapter ").concat(r(parseFloat(n))))),window.open(o,"_blank")},copyItem:function(t,e){var n=this;this.$copyText(t,e).then((function(e){n.$store.dispatch("setSnackbar",{color:"info",text:"Copied ".concat(t)})}),(function(t){n.$store.dispatch("setSnackbar",{color:"error",text:"Can not copy"})}))}}},v=n(145),y=n(201),_=n.n(y),x=n(187),O=n(306),I=n(326),w=n(315),k=n(318),$=n(159),C=n(300),V=n(189),S=n(93),j=n(160),N=n(302),D=n(317),P=n(316),L=n(37),E=n(304),M=n(57),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$auth.loggedIn?n("v-card",[n("v-card-title",[n("v-row",[n("v-col",{attrs:{xl:"1",lg:"1",md:"2",sm:"2",cols:"12"}},[n("v-select",{attrs:{items:t.slots,label:"Slot"},model:{value:t.enabled,callback:function(e){t.enabled=e},expression:"enabled"}})],1),t._v(" "),n("v-col",{attrs:{xl:"1",lg:"1",md:"2",sm:"2",cols:"12"}},[n("v-select",{attrs:{items:t.filterSlot,label:"Filter"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),n("v-col",{attrs:{xl:"9",lg:"9",md:"6",sm:"6",cols:"12"}},[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-magnify","single-line":"",placeholder:t.searchPlaceholder,clearable:"","hide-details":"",filled:"",rounded:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",[n("AddNewItem",{attrs:{enabled:t.enabled},on:{modifyItem:t.modifyChild}})],1)],1)],1),t._v(" "),n("v-data-table",{attrs:{"custom-filter":t.customFilter,headers:t.headersSlot[t.enabled],items:t.items,search:t.search,options:t.options,loading:t.isLoading,"loading-text":"Loading... Please wait","hide-default-footer":""},on:{"update:options":function(e){t.options=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([t._l(t.$store.state.itemSlots,(function(slot){return{key:slot.name,fn:function(e){return[n("ModifyCell",{key:slot.name,class:t.oldRead(e),attrs:{"old-cell":e,"column-name":slot.value},on:{modifyItem:t.modifyChild}})]}}})),{key:"item.updated_at",fn:function(e){var r=e.item;return[n("div",[t._v("\n          "+t._s(t.$moment.utc(r.updated_at).local().format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])]}},{key:"item.action",fn:function(e){var r=e.item;return[n("v-menu",{attrs:{"offset-y":"","close-on-content-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:"",color:"cyan",dark:""}},r),[n("v-icon",[t._v(" mdi-tools ")])],1)]}}],null,!0)},[t._v(" "),n("v-list",[n("AddDecreaseNumber",{attrs:{item:r,enabled:t.enabled,"button-type":"+","column-name":"quantity"},on:{modifyItem:t.modifyChild}}),t._v(" "),n("AddDecreaseNumber",{attrs:{item:r,enabled:t.enabled,"button-type":"-","column-name":"quantity"},on:{modifyItem:t.modifyChild}}),t._v(" "),n("DeleteDialog",{attrs:{item:r},on:{deleteItem:t.deleteItem}}),t._v(" "),n("v-list-item",{on:{click:function(e){return t.googleItem(r.name,r.season,r.quantity)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"blue",size:"25px"}},[t._v("\n                  mdi-google\n                ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Google Name")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.copyItem(r.name)}}},[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"green",size:"25px"}},[t._v("\n                  mdi-content-copy\n                ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Copy Name")])],1)],1),t._v(" "),n("OtherName",{attrs:{enabled:t.enabled,"old-cell":r},on:{modifyItem:t.modifyChild,copyItem:t.copyItem,googleItem:t.googleItem}})],1)],1)]}}],null,!0)}),t._v(" "),n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:t.pageCount,"total-visible":7},model:{value:t.options.page,callback:function(e){t.$set(t.options,"page",e)},expression:"options.page"}})],1)],1):n("div",[t._v("\n    Please login to enjoy MangaMark. If you don't have an account, sign up one\n    for free.\n  ")])],1)}),[],!1,null,"18628a44",null);e.default=component.exports;_()(component,{VBtn:x.a,VCard:O.a,VCardTitle:I.e,VCol:w.a,VDataTable:k.a,VIcon:$.a,VList:C.a,VListItem:V.a,VListItemContent:S.g,VListItemIcon:j.a,VListItemTitle:S.k,VMenu:N.a,VPagination:D.a,VRow:P.a,VSelect:L.a,VSpacer:E.a,VTextField:M.a})}}]);