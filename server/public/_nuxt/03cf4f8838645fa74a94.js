(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{427:function(e,t,r){"use strict";r.r(t);r(6),r(4),r(9);var n={name:"Verify",auth:"guest",data:function(){return{len:0,verify:!1,error:!1,errorMessage:"Email or token is invalid"}},created:function(){var e=this,t=this.$route.query;this.len=Object.keys(t).length,this.$axios.$post("auth/verify",t).then((function(t){setTimeout((function(){e.verify=!0}),2e3),setTimeout((function(){e.$router.push("/guest/login")}),4e3)})).catch((function(t){401===t.response.status?e.errorMessage=t.response.data.error:e.errorMessage="Invalid verify url",setTimeout((function(){e.error=!0}),2e3)}))}},o=r(63),c=r(87),l=r.n(c),v=r(417),f=r(125),d=r(363),h=r(416),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[0===e.len?r("div",{staticClass:"text-center"},[e._v("\n    An email verification has sent to your account. You need to verify it before login.\n  ")]):[e.verify||e.error?e.verify?[r("div",{staticClass:"text-center"},[e._v("\n        Verify Completed. You can login now.\n      ")]),e._v(" "),r("div",{staticClass:"text-center"},[r("v-icon",{attrs:{color:"primary",size:"50"}},[e._v("\n          mdi-check-circle\n        ")])],1)]:e.error?r("div",{staticClass:"display-1 text-center"},[e._v("\n      "+e._s(e.errorMessage)+"\n    ")]):e._e():r("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[r("v-col",{staticClass:"subtitle-1 text-center",attrs:{cols:"12"}},[e._v("\n        Verifying your account\n      ")]),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"6"}})],1)],1)]],2)}),[],!1,null,"386a1cde",null);t.default=component.exports;l()(component,{VCol:v.a,VIcon:f.a,VProgressLinear:d.a,VRow:h.a})}}]);