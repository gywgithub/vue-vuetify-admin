(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73cfc57a"],{"220d":function(e,t,a){"use strict";var n=a("61e1"),s=a.n(n);s.a},"61e1":function(e,t,a){},"690a":function(e,t,a){e.exports=a.p+"img/avatar.58016327.png"},d6fd:function(e,t,a){},e627:function(e,t,a){"use strict";var n=a("d6fd"),s=a.n(n);s.a},ed81:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("v-card",[n("div",{staticClass:"d-flex justify-space-between div-margin"},[n("div",[n("v-btn",{attrs:{color:"secondary"},on:{click:e.addUser}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-account-plus-outline")]),e._v("Add User\n        ")],1)],1),n("div",{staticClass:"search-component"},[n("v-select",{staticClass:"select-size",attrs:{items:e.selectItems,label:"Filter",solo:"",dense:"",clearable:""},model:{value:e.filterKey,callback:function(t){e.filterKey=t},expression:"filterKey"}}),e._v("  \n        "),n("v-text-field",{staticClass:"search-text-size",attrs:{label:"Search",solo:"",dense:"","append-icon":"mdi-magnify",clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter(t)}},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}})],1),n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("page_sum: "+e._s(e.pageSum)+" , page_index: "+e._s(e.pageIndex)+" , page_num: "+e._s(e.pageNum)+" ,")]),e._v(" \n        "),n("span",{staticClass:"body-2"},[e._v(e._s(e.countStart)+" - "+e._s(e.countEnd)+",  total: "+e._s(e.total))]),e._v("\n         \n        "),n("v-btn",{attrs:{icon:"",disabled:e.lastPageDisabled},on:{click:e.lastPage}},[n("v-icon",[e._v("mdi-chevron-left")])],1),e._v(" \n        "),n("v-btn",{attrs:{icon:"",disabled:e.nextPageDisabled},on:{click:e.nextPage}},[n("v-icon",[e._v("mdi-chevron-right")])],1)],1)])]),e.users.length>0?n("div",[n("v-card",[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[e._v("user_id")]),n("th",[e._v("username")]),n("th",[e._v("avatar")]),n("th",[e._v("nickname")]),n("th",[e._v("email")]),n("th",[e._v("created_at")]),n("th",[e._v("options")])])]),n("tbody",e._l(e.users,(function(t,s){return n("tr",{key:s},[n("td",{staticClass:"text-align-left"},[e._v(e._s(t.user_id))]),n("td",{staticClass:"text-align-left"},[e._v(e._s(t.username))]),n("td",{staticClass:"text-align-left"},[t.avatar?n("v-avatar",{attrs:{size:"36"}},[n("img",{attrs:{src:t.avatar,alt:"avatar"}})]):n("v-avatar",{attrs:{size:"36"}},[n("img",{attrs:{src:a("690a"),alt:"avatar"}})])],1),n("td",{staticClass:"text-align-left"},[e._v(e._s(t.nickname))]),n("td",{staticClass:"text-align-left"},[e._v(e._s(t.email))]),n("td",{staticClass:"text-align-left"},[e._v(e._s(t.created_at))]),n("td",{staticClass:"text-align-left"},[n("v-btn",{attrs:{text:"",icon:""},on:{click:function(a){return e.editUser(t)}}},[n("v-icon",[e._v("mdi-pencil-outline")])],1),e._v(" \n              "),n("v-btn",{attrs:{text:"",icon:""},on:{click:function(a){return e.deleteClick(t)}}},[n("v-icon",[e._v("mdi-trash-can-outline")])],1)],1)])})),0)]},proxy:!0}],null,!1,3221685259)})],1)],1):n("div",{staticClass:"nothing"},[n("div",{staticClass:"margin-20"},[n("v-icon",{attrs:{color:"#dbdbdb",size:"100"}},[e._v("mdi-account-outline")])],1),e._v("No user data, you can create a user.\n  ")]),n("v-dialog",{attrs:{"max-width":"450"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Tips")]),n("v-card-text",{staticClass:"subtitle-1 text-align-left"},[e._v("Are you sure you want to delete the user? ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("cancel")]),n("v-btn",{attrs:{color:"red",text:""},on:{click:function(t){return e.deleteUser()}}},[e._v("sure")])],1)],1)],1),n("v-dialog",{attrs:{width:"500px",persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialogUser,callback:function(t){e.dialogUser=t},expression:"dialogUser"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"secondary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:e.closeDialogUser}},[n("v-icon",[e._v("mdi-close")])],1),n("v-toolbar-title",[e._v(e._s(e.dialogUserTitle))]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:e.save}},[e._v("save")])],1)],1),e.dialogUser?n("UserInfo",{ref:"userComp"}):e._e()],1)],1)],1)},s=[],i=(a("6b54"),a("2397"),a("d225")),r=a("b0b4"),o=a("308d"),l=a("6bb5"),c=a("4e2b"),u=a("9ab4"),d=a("60a3"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e._v("\n        userinfo component\n        ")])],1)],1)],1)},f=[];function g(e){return function(){var t,a=Object(l["a"])(e);if(p()){var n=Object(l["a"])(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(o["a"])(this,t)}}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var h=function(e){Object(c["a"])(a,e);var t=g(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(d["b"]);h=Object(u["a"])([Object(d["a"])({components:{}})],h);var b=h,_=b,m=(a("e627"),a("2877")),x=Object(m["a"])(_,v,f,!1,null,"3f0748d5",null),y=x.exports;function k(e){return function(){var t,a=Object(l["a"])(e);if(U()){var n=Object(l["a"])(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(o["a"])(this,t)}}function U(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=function(e){Object(c["a"])(a,e);var t=k(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.selectItems=[],e.filterKey="",e.filterValue="",e.pageNum=20,e.pageSum=0,e.pageIndex=1,e.countStart=0,e.countEnd=0,e.total=0,e.lastPageDisabled=!0,e.nextPageDisabled=!0,e.users=[],e.dialogUser=!1,e.dialogUserTitle="Add User",e.dialog=!1,e.userInfo={},e}return Object(r["a"])(a,[{key:"mounted",value:function(){console.info("mounted"),this.getUsers()}},{key:"getUsers",value:function(){var e=this,t={pageIndex:this.pageIndex,pageNum:this.pageNum};this.axios.get("/api/v1/users",{params:t}).then((function(t){if(console.info(t.data),t&&t.data.status&&t.data.data.users.length>0){var a=t.data.data;e.users=a.users,e.pageSum=a.page_sum,e.pageIndex=a.page_index,e.total=a.total,e.pageIndex===a.page_sum?e.nextPageDisabled=!0:a.page_sum>1&&(e.nextPageDisabled=!1),1===e.pageIndex?(e.countStart=1,e.countEnd=0+e.users.length):(e.countStart=(e.pageIndex-1)*e.pageNum+1,e.countEnd=e.countStart+e.users.length-1)}}))}},{key:"addUser",value:function(){console.info("addUser"),this.dialogUser=!0}},{key:"enter",value:function(){console.info("enter"),this.pageIndex=1,this.getUsers()}},{key:"lastPage",value:function(){console.info("lastPage"),this.pageIndex--,1===this.pageIndex&&(this.lastPageDisabled=!0),this.getUsers()}},{key:"nextPage",value:function(){console.info("nextPage"),this.pageIndex++,this.pageIndex===this.pageSum&&(this.nextPageDisabled=!0),this.lastPageDisabled=!1,this.getUsers()}},{key:"closeDialogUser",value:function(){console.info("closeDialogUser")}},{key:"deleteClick",value:function(e){this.dialog=!0,this.userInfo=e,console.info(e)}},{key:"deleteUser",value:function(){var e=this;console.info("deleteUser");var t=this.userInfo.user_id;this.axios({url:"/api/v1/users/"+t,method:"DELETE"}).then((function(a){a.status?(console.info("delete user success, id: "+t),e.dialog=!1,e.getUsers()):console.error("delete user error")}))}},{key:"editUser",value:function(){console.info("eidtUser"),this.dialogUser=!0}},{key:"save",value:function(){console.info("save")}}]),a}(d["b"]);C=Object(u["a"])([Object(d["a"])({components:{UserInfo:y}})],C);var I=C,j=I,O=(a("220d"),Object(m["a"])(j,n,s,!1,null,"5feaf07c",null));t["default"]=O.exports}}]);
//# sourceMappingURL=chunk-73cfc57a.f619820d.js.map