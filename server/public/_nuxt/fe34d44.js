(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{708:function(t,e,n){"use strict";n.r(e);var o={name:"DeleteDialog",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1}},methods:{confirmDelete:function(){this.dialog=!1,this.$emit("deleteItem",this.item)}}},l=n(145),c=n(200),r=n.n(c),d=n(186),v=n(304),m=n(320),_=n(164),f=n(159),V=n(188),h=n(94),k=n(160),w=n(302),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-list-item",t._g({},o),[n("v-list-item-icon",[n("v-icon",{staticClass:"mr-2",attrs:{color:"red",size:"25px"}},[t._v(" mdi-delete ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Delete")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.item.name)+"\n    ")]),t._v(" "),n("v-card-text",[t._v("Are you sure you want to delete this ?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Cancel\n      ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.confirmDelete}},[t._v("\n        Delete\n      ")])],1)],1)],1)}),[],!1,null,"7718c9c3",null);e.default=component.exports;r()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.b,VCardText:m.d,VCardTitle:m.e,VDialog:_.a,VIcon:f.a,VListItem:V.a,VListItemContent:h.g,VListItemIcon:k.a,VListItemTitle:h.k,VSpacer:w.a})}}]);