(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24d71f19"],{"690a":function(t,e,a){t.exports=a.p+"img/avatar.58016327.png"},"96b9":function(t,e,a){"use strict";var s=a("c635"),n=a.n(s);n.a},c635:function(t,e,a){},ed81:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("v-card",[s("div",{staticClass:"d-flex justify-space-between div-margin"},[s("div",[s("v-btn",{attrs:{color:"secondary"},on:{click:t.addUser}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-account-plus-outline")]),t._v("新增用户\n        ")],1)],1),s("div",{staticClass:"search-component"},[s("v-select",{staticClass:"select-size",attrs:{items:t.selectItems,label:"查询条件",solo:"",dense:"",clearable:""},model:{value:t.filterKey,callback:function(e){t.filterKey=e},expression:"filterKey"}}),t._v("  \n        "),s("v-text-field",{staticClass:"search-text-size",attrs:{label:"搜索",solo:"",dense:"","append-icon":"mdi-magnify",clearable:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)}},model:{value:t.filterValue,callback:function(e){t.filterValue=e},expression:"filterValue"}})],1),s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v("每页 "+t._s(t.limit)+" 条, 当前第 "+t._s(t.page)+" 页, 共 "+t._s(t.pageNum)+" 页")]),t._v(" \n        "),s("span",{staticClass:"body-2"},[t._v("第 "+t._s(t.countStart)+" - "+t._s(t.countEnd)+" 行,  共 "+t._s(t.userCount)+" 行")]),t._v("\n         \n        "),s("v-btn",{attrs:{icon:"",disabled:t.lastPageDisabled},on:{click:t.lastPage}},[s("v-icon",[t._v("mdi-chevron-left")])],1),s("v-btn",{attrs:{icon:"",disabled:t.nextPageDisabled},on:{click:t.nextPage}},[s("v-icon",[t._v("mdi-chevron-right")])],1)],1)])]),t.users.length>0?s("div",[s("v-card",[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",[t._v("编号")]),s("th",[t._v("用户名")]),s("th",[t._v("头像")]),s("th",[t._v("姓名")]),s("th",[t._v("邮箱")]),s("th",[t._v("创建时间")]),s("th",[t._v("操作")])])]),s("tbody",t._l(t.users,(function(e,n){return s("tr",{key:n},[s("td",{staticClass:"text-align-left"},[t._v(t._s(e.user_id))]),s("td",{staticClass:"text-align-left"},[t._v(t._s(e.username))]),s("td",{staticClass:"text-align-left"},[e.avatar?s("v-avatar",{attrs:{size:"36"}},[s("img",{attrs:{src:e.avatar,alt:"avatar"}})]):s("v-avatar",{attrs:{size:"36"}},[s("img",{attrs:{src:a("690a"),alt:"avatar"}})])],1),s("td",{staticClass:"text-align-left"},[t._v(t._s(e.nickname))]),s("td",{staticClass:"text-align-left"},[t._v(t._s(e.email))]),s("td",{staticClass:"text-align-left"},[t._v(t._s(e.created_at))]),s("td",{staticClass:"text-align-left"},[s("v-btn",{attrs:{text:"",icon:""},on:{click:function(a){return t.editUser(e)}}},[s("v-icon",[t._v("mdi-pencil-outline")])],1),t._v(" \n              "),s("v-btn",{attrs:{text:"",icon:""},on:{click:function(a){return t.deleteClick(e)}}},[s("v-icon",[t._v("mdi-trash-can-outline")])],1)],1)])})),0)]},proxy:!0}],null,!1,2367464106)})],1)],1):s("div",{staticClass:"nothing"},[s("div",{staticClass:"margin-20"},[s("v-icon",{attrs:{color:"#dbdbdb",size:"100"}},[t._v("mdi-account-outline")])],1),t._v("暂无用户数据, 您可以创建一个用户\n  ")]),s("v-dialog",{attrs:{"max-width":"450"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v("提示")]),s("v-card-text",{staticClass:"subtitle-1 text-align-left"},[t._v("确定要删除用户吗? ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("取消")]),s("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.deleteUser()}}},[t._v("确定")])],1)],1)],1),s("v-dialog",{attrs:{width:"500px",persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialogUser,callback:function(e){t.dialogUser=e},expression:"dialogUser"}},[s("v-card",[s("v-toolbar",{attrs:{dark:"",color:"secondary"}},[s("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeDialogUser}},[s("v-icon",[t._v("mdi-close")])],1),s("v-toolbar-title",[t._v(t._s(t.dialogUserTitle))]),s("v-spacer"),s("v-toolbar-items",[s("v-btn",{attrs:{dark:"",text:""},on:{click:t.save}},[t._v("保存")])],1)],1),t.dialogUser?s("UserInfo",{ref:"userComp"}):t._e()],1)],1)],1)},n=[],i=(a("6b54"),a("2397"),a("d225")),l=a("b0b4"),o=a("308d"),r=a("6bb5"),c=a("4e2b"),u=a("9ab4"),d=a("60a3");function v(t){return function(){var e,a=Object(r["a"])(t);if(f()){var s=Object(r["a"])(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return Object(o["a"])(this,e)}}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=function(t){Object(c["a"])(a,t);var e=v(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.selectItems=[],t.filterKey="",t.filterValue="",t.pageNum=1,t.page=1,t.limit=50,t.countStart=0,t.countEnd=0,t.userCount=0,t.lastPageDisabled=!0,t.nextPageDisabled=!0,t.users=[],t.dialogUser=!1,t.dialogUserTitle="新增用户",t.dialog=!1,t.userInfo={},t}return Object(l["a"])(a,[{key:"mounted",value:function(){console.info("mounted"),this.getUsers()}},{key:"getUsers",value:function(){var t=this,e={page:1,limit:50};this.axios.get("/api/v1/users/profile",{params:e}).then((function(e){e&&e.data.status&&e.data.data.users.length>0&&(t.users=e.data.data.users)}))}},{key:"addUser",value:function(){console.info("addUser")}},{key:"enter",value:function(){console.info("enter")}},{key:"lastPage",value:function(){console.info("lastPage")}},{key:"nextPage",value:function(){console.info("nextPage")}},{key:"closeDialogUser",value:function(){console.info("closeDialogUser")}},{key:"deleteClick",value:function(t){this.dialog=!0,this.userInfo=t,console.info(t)}},{key:"deleteUser",value:function(){var t=this;console.info("deleteUser");var e=this.userInfo.user_id;this.axios({url:"/api/v1/users/"+e,method:"DELETE"}).then((function(a){a.status?(console.info("delete user success, id: "+e),t.dialog=!1,t.getUsers()):console.error("delete user error")}))}},{key:"editUser",value:function(){console.info("eidtUser")}},{key:"save",value:function(){console.info("save")}}]),a}(d["b"]);g=Object(u["a"])([Object(d["a"])({components:{}})],g);var b=g,_=b,p=(a("96b9"),a("2877")),m=Object(p["a"])(_,s,n,!1,null,"6fa44fe4",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-24d71f19.7867c68f.js.map