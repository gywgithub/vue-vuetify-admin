(function(e){function t(t){for(var a,r,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1465c70c","chunk-15ca35a0":"ad2840bb","chunk-20918c6f":"0146b29b","chunk-2d0a49fd":"af0dc84f","chunk-2d0e93b4":"0ede5562","chunk-2d207aaa":"a3ecc36d","chunk-2d228eee":"7b6c4a0b","chunk-3e13c242":"f6171bda","chunk-3f7bc161":"5aa6cf54","chunk-a56d9480":"1136e2da","chunk-43a7a6b6":"6b60324a","chunk-70d495d6":"9404af57","chunk-95b23c16":"af64c14e","chunk-18f4969c":"f69e3f8c","chunk-a6358860":"7f6a67ae","chunk-b47b4a38":"f12bb4e4","chunk-f2759192":"f753e569"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-15ca35a0":1,"chunk-20918c6f":1,"chunk-3e13c242":1,"chunk-a56d9480":1,"chunk-43a7a6b6":1,"chunk-70d495d6":1,"chunk-18f4969c":1,"chunk-a6358860":1,"chunk-b47b4a38":1,"chunk-f2759192":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-15ca35a0":"b5f33af2","chunk-20918c6f":"ec7a01cc","chunk-2d0a49fd":"31d6cfe0","chunk-2d0e93b4":"31d6cfe0","chunk-2d207aaa":"31d6cfe0","chunk-2d228eee":"31d6cfe0","chunk-3e13c242":"86bbe6f0","chunk-3f7bc161":"31d6cfe0","chunk-a56d9480":"0b26e157","chunk-43a7a6b6":"9a81327d","chunk-70d495d6":"79a0b5e7","chunk-95b23c16":"31d6cfe0","chunk-18f4969c":"f77b9f97","chunk-a6358860":"21ac63db","chunk-b47b4a38":"3ea8a59a","chunk-f2759192":"8cead368"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-vuetify-admin/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),o=(n("6b54"),n("2397"),n("d225")),i=n("b0b4"),c=n("308d"),u=n("6bb5"),s=n("4e2b"),l=n("9ab4"),f=n("6fc5");function d(e){return function(){var t,n=Object(u["a"])(e);if(h()){var a=Object(u["a"])(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c["a"])(this,t)}}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var p=function(e){Object(s["a"])(n,e);var t=d(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.showAlert=!1,e.alertBorder="left",e.alertType="info",e.alertMessage="message",e}return Object(i["a"])(n,[{key:"setShowAlert",value:function(e){this.showAlert=e}},{key:"setAlertBorder",value:function(e){this.alertBorder=e}},{key:"setAlertType",value:function(e){this.alertType=e}},{key:"setAlertMessage",value:function(e){this.alertMessage=e}},{key:"updateShowAlert",value:function(e){var t=this;this.context.commit("setShowAlert",e.showAlert),this.context.commit("setAlertMessage",e.alertMessage),this.context.commit("setAlertType",e.alertType),setTimeout((function(){t.context.commit("setShowAlert",!1)}),4e3)}}]),n}(f["d"]);Object(l["b"])([f["c"]],p.prototype,"setShowAlert",null),Object(l["b"])([f["c"]],p.prototype,"setAlertBorder",null),Object(l["b"])([f["c"]],p.prototype,"setAlertType",null),Object(l["b"])([f["c"]],p.prototype,"setAlertMessage",null),Object(l["b"])([f["a"]],p.prototype,"updateShowAlert",null),p=Object(l["b"])([f["b"]],p);var m=p;a["default"].use(r["a"]);var v=new r["a"].Store({modules:{alert:m}});t["a"]=v},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"69b0":function(e,t,n){"use strict";n.r(t);n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("ac6a"),n("6b54"),n("c5f6"),n("28a5"),n("3b2b");var a=n("96eb"),r=n.n(a);function o(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=i(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,o=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,r=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw r}}}}function i(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=r.a.Random;r.a.setup({timeout:"500-2000"});var s="http://127.0.0.1:3000",l=u.image("200x200","#ecc247","#fff","png","A"),f=r.a.mock({"array|10-120":[{user_id:"@natural(1, 999)",username:"@word",avatar:l,email:"@word@qq.com",password:"12345678a",created_at:"@datetime",nickname:"nickname-@word"}]}).array,d=f;function h(e,t){var n,a=e.split("&"),r=o(a);try{for(r.s();!(n=r.n()).done;){var i=n.value,c=i.split("=");if(c[0]===t)return c[1]}}catch(u){r.e(u)}finally{r.f()}return!1}d.unshift({user_id:1,username:"admin",password:"admin123",email:"admin@qq.com",avatar:"/img/avatar.png",nickname:"ADMIN",created_at:r.a.mock("@now")}),r.a.mock("/api/v1/get_upload_url","get",(function(e){var t=JSON.parse(e.body).filename;return{status:!0,data:{url:s+"/file_upload",file_address:s+"/images/"+t}}})),r.a.mock(RegExp("/api/v1/get/username.*"),"get",(function(e){var t=e.url.split("/"),n=t[t.length-1],a=d.filter((function(e){return e.username===n}));return a.length>0?{status:!1}:{status:!0}})),r.a.mock(RegExp("/api/v1/get/email.*"),"get",(function(e){var t=e.url.split("/"),n=t[t.length-1],a=d.filter((function(e){return e.email===n}));return a.length>0?{status:!1}:{status:!0}})),r.a.mock(RegExp("/api/v1/users.*"),"get",(function(e){var t=e.url.split("?")[1],n=Number(h(t,"pageIndex")),a=Number(h(t,"pageNum")),r=h(t,"filterKey"),o=h(t,"filterValue"),i=[];i=r&&o?d.filter((function(e){return-1!==e[r].toString().indexOf(o)})):d;var c=i.length,u=0;1!==n&&(u=Number(a*n)-Number(a));var s=JSON.parse(JSON.stringify(i)).splice(u,a),l=c/a,f=Math.ceil(l);return{status:!0,data:{users:s,page_sum:f,page_index:n,total:c}}})),r.a.mock(RegExp("/api/v1/users/.*"),"delete",(function(e){var t=e.url.split("/"),n=Number(t[t.length-1]),a=-1;return d.filter((function(e,t){if(e.user_id===n)return a=t,!1})),-1!==a?d.splice(a,1):console.warn("data not found"),{status:!0}})),r.a.mock("/api/v1/users","post",(function(e){var t=u.natural(1e4,9999999),n={};return n=JSON.parse(e.body),n.user_id=t,n.created_at=r.a.mock("@now"),d.unshift(n),{status:!0,data:n}})),r.a.mock("/api/v1/users","put",(function(e){var t={};t=JSON.parse(e.body);var n=t.user_id,a=t.user_info,r=-1;return d.forEach((function(e,t){e.user_id===n&&(r=t)})),d.splice(r,1,a),{status:!0}})),r.a.mock("/api/v1/login","post",(function(e){var t=JSON.parse(e.body),n=-1;return d.forEach((function(e,a){if(e.username===t.username)return n=a,!1})),d[n].password===t.password?{status:!0,data:d[n]}:{status:!1}})),t["default"]=r.a},"8b01":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"name":"vue-vuetify-admin","version":"0.1.0","private":true,"author":"YuanWei GUO","scripts":{"dev":"vue-cli-service serve","serve":"vue-cli-service serve","build":"vue-cli-service build","test:unit":"vue-cli-service test:unit","test:e2e":"vue-cli-service test:e2e","lint":"vue-cli-service lint"},"dependencies":{"@types/echarts":"^4.6.0","@types/mockjs":"^1.0.2","core-js":"^2.6.5","register-service-worker":"^1.6.2","vue":"^2.6.10","vue-class-component":"^7.0.2","vue-property-decorator":"^8.1.0","vue-router":"^3.0.3","vuex":"^3.0.1","vuex-module-decorators":"^0.16.1"},"devDependencies":{"@types/chai":"^4.1.0","@types/d3":"^5.7.2","@types/mocha":"^5.2.4","@vue/cli-plugin-babel":"^3.12.0","@vue/cli-plugin-e2e-cypress":"^3.12.0","@vue/cli-plugin-pwa":"^3.12.0","@vue/cli-plugin-typescript":"^3.12.0","@vue/cli-plugin-unit-mocha":"^4.4.1","@vue/cli-service":"^4.4.1","@vue/test-utils":"1.0.0-beta.29","axios":"^0.19.2","chai":"^4.1.2","cz-conventional-changelog":"^3.1.0","d3":"^5.16.0","echarts":"^4.8.0","mockjs":"^1.1.0","sass":"^1.19.0","sass-loader":"^8.0.0","typescript":"^3.4.3","vega":"^5.13.0","vega-embed":"^6.9.0","vega-lite":"^4.13.1","vega-typings":"^0.18.0","vue-axios":"^2.1.5","vue-template-compiler":"^2.6.10","vuetify":"^2.2.21"},"config":{"commitizen":{"path":"./node_modules/cz-conventional-changelog"}}}')},"9c0c":function(e,t,n){},bcda:function(e,t,n){"use strict";var a=n("ed71"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("router-view"),n("Alert",{staticClass:"alert-component-position mx-2"})],1)],1)},o=[],i=(n("6b54"),n("2397"),n("d225")),c=n("308d"),u=n("6bb5"),s=n("4e2b"),l=n("9ab4"),f=n("60a3"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"slide-fade"}},[e.alertShow?n("v-alert",{staticClass:"alert-container",attrs:{border:e.alertBorder,type:e.alertType,"colored-border":"",elevation:"2"}},[e._v(e._s(e.alertMessage))]):e._e()],1)],1)},h=[],p=n("b0b4"),m=n("0613");function v(e){return function(){var t,n=Object(u["a"])(e);if(b()){var a=Object(u["a"])(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c["a"])(this,t)}}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var g=function(e){Object(s["a"])(n,e);var t=v(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(p["a"])(n,[{key:"alertShow",get:function(){return m["a"].state.alert.showAlert}},{key:"alertType",get:function(){return m["a"].state.alert.alertType}},{key:"alertMessage",get:function(){return m["a"].state.alert.alertMessage}},{key:"alertBorder",get:function(){return m["a"].state.alert.alertBorder}}]),n}(f["b"]);g=Object(l["b"])([Object(f["a"])({components:{}})],g);var y=g,k=y,w=(n("bcda"),n("2877")),S=Object(w["a"])(k,d,h,!1,null,null,null),_=S.exports;function O(e){return function(){var t,n=Object(u["a"])(e);if(j()){var a=Object(u["a"])(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c["a"])(this,t)}}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var x=function(e){Object(s["a"])(n,e);var t=O(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(f["b"]);x=Object(l["b"])([Object(f["a"])({components:{Alert:_}})],x);var A=x,I=A,C=(n("5c0b"),Object(w["a"])(I,r,o,!1,null,null,null)),N=C.exports,P=(n("7f7f"),n("8c4f")),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-app",[n("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:"",width:"280"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-divider"),n("v-list",e._l(e.items,(function(t,a){return n("v-list-group",{key:a,attrs:{"append-icon":t.appendIcon},on:{click:function(n){return e.itemClick(t,a)}},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)]},proxy:!0}],null,!0),model:{value:t.active,callback:function(n){e.$set(t,"active",n)},expression:"item.active"}},[t.children?n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.subItemActive,callback:function(t){e.subItemActive=t},expression:"subItemActive"}},e._l(t.children,(function(t,a){return n("v-list-item",{key:a,on:{click:function(n){return e.subItemClick(t,a)}}},[n("v-list-item-icon"),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1):e._e()],1)})),1)],1),n("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{staticClass:"hidden-sm-and-down"},[e._v("Vue Vuetify Admin")])]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:e.changeTheme}},[e.dark?n("v-icon",[e._v("mdi-brightness-4")]):n("v-icon",[e._v("mdi-brightness-7")])],1),n("v-btn",{attrs:{icon:""},on:{click:e.openTab}},[n("v-icon",{attrs:{size:"28"}},[e._v("mdi-github")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!0}}},[n("v-icon",{attrs:{size:"28"}},[e._v("mdi-information-outline")])],1),n("v-menu",{attrs:{transition:"slide-x-transition",bottom:"",right:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{icon:""}},a),[n("v-avatar",{attrs:{size:"32"}},[n("img",{attrs:{src:""+e.publicPath+e.userInfo.avatar,alt:e.userInfo.nickname}})])],1)]}}])},[n("v-list",{staticClass:"user-list",attrs:{flat:""}},[n("v-list-item-group",{attrs:{color:"primary"}},[n("v-list-item",{on:{click:function(t){return e.usernameClick(e.userInfo)}}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-account-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.userInfo.username))])],1)],1),n("v-list-item",{on:{click:function(t){t.stopPropagation(),e.modalDialog=!0}}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-logout-variant")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("sign out")])],1)],1)],1)],1)],1)],1),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-dialog",{attrs:{width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[e._v("Vue Vuetify Admin")]),n("v-card-text",[e._v("Version: v"+e._s(e.version))]),n("v-card-text",[e._v("Author: YuanWei Guo")]),n("v-card-text",[e._v("Email: qingyi_w@outlook.com")])],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.modalDialog,callback:function(t){e.modalDialog=t},expression:"modalDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("Tips")]),n("v-card-text",{staticClass:"subtitle-1 text-align-left"},[e._v("Are you sure you want to log out?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.modalDialog=!1}}},[e._v("cannel")]),n("v-btn",{attrs:{color:"error",text:""},on:{click:e.logout}},[e._v("sure")])],1)],1)],1)],1)],1)},D=[],T=(n("c5f6"),n("9224"));function E(e){return function(){var t,n=Object(u["a"])(e);if($()){var a=Object(u["a"])(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(c["a"])(this,t)}}function $(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var M=function(e){Object(s["a"])(n,e);var t=E(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.publicPath="/vue-vuetify-admin/",e.version="0.1.0",e.dialog=!1,e.modalDialog=!1,e.dark=!1,e.drawer=null,e.itemActive=0,e.subItemActive=0,e.items=[{icon:"mdi-alpha-i-box-outline",title:"Introduction",path:"/home/introduction",appendIcon:null,active:!0},{icon:"mdi-alpha-u-box-outline",title:"Users",path:"/home/users",appendIcon:null},{icon:"mdi-alpha-d-box-outline",title:"D3",path:"/home/d3",appendIcon:null},{icon:"mdi-alpha-q-box-outline",title:"Quill",path:"/home/quill",appendIcon:null},{icon:"mdi-alpha-i-box-outline",title:"Icons",children:[{title:"iconfont",path:"/icons/iconfont"},{title:"materialdesignicons",path:"/icons/materialdesignicons"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-c-box-outline",title:"Charts",children:[{title:"ECharts",path:"/charts/echarts"},{title:"Vega Charts",path:"/charts/vega-charts"},{title:"D3 Charts",path:"/charts/d3-charts"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-z-box-outline",title:"zoom",children:[{title:"openlayer",path:"/basic/hello"},{title:"openseadragon",path:"/basic/hello2"},{title:"leaflet",path:"/basic/hello2"}],appendIcon:"mdi-chevron-down"},{icon:"mdi-alpha-s-box-outline",title:"Schema",children:[{title:"JSON Schema",path:"/basic/hello"},{title:"Vue Schema",path:"/basic/hello"}],appendIcon:"mdi-chevron-down"}],e.userInfo={username:"username",avatar:"/img/avatar.png"},e}return Object(p["a"])(n,[{key:"created",value:function(){"/"===this.publicPath?this.publicPath="":this.publicPath="/vue-vuetify-admin",this.version=T.version,localStorage.getItem("themeDark")&&"true"===localStorage.getItem("themeDark")&&(this.$vuetify.theme.dark=!0,this.dark=!0),"/home"===this.$route.path?this.$router.push("/home/introduction").catch((function(e){})):(this.$router.push(this.$route.path).catch((function(e){})),sessionStorage.getItem("itemActive")&&(this.items[0].active=!1,this.items[Number(sessionStorage.getItem("itemActive"))].active=!0),sessionStorage.getItem("subItemActive")&&(this.subItemActive=Number(sessionStorage.getItem("subItemActive"))))}},{key:"mounted",value:function(){sessionStorage.getItem("userInfo")&&""!==sessionStorage.getItem("userInfo")&&(this.userInfo=JSON.parse(String(sessionStorage.getItem("userInfo"))))}},{key:"beforeDestroy",value:function(){sessionStorage.removeItem("subItemActive"),sessionStorage.removeItem("itemActive")}},{key:"openTab",value:function(){window.open("https://github.com/gywgithub/vue-vuetify-admin","_blank")}},{key:"usernameClick",value:function(){console.info("")}},{key:"itemClick",value:function(e,t){this.subItemActive=-1,sessionStorage.setItem("itemActive",t),""!==e.path&&this.$router.push(e.path)}},{key:"subItemClick",value:function(e,t){sessionStorage.setItem("subItemActive",t),this.$router.push(e.path).catch((function(e){}))}},{key:"goHome",value:function(){this.$router.push("/Home").catch((function(e){}))}},{key:"changeTheme",value:function(){this.dark=!this.dark,localStorage.setItem("themeDark",String(this.dark)),this.$vuetify.theme.dark=this.dark}},{key:"logout",value:function(){sessionStorage.clear(),localStorage.clear(),this.$router.push({path:"/login"})}}]),n}(f["b"]);M=Object(l["b"])([Object(f["a"])({components:{}})],M);var q=M,z=q,B=(n("ec2e"),Object(w["a"])(z,R,D,!1,null,"27ecc705",null)),J=B.exports;a["default"].use(P["a"]);var V=new P["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"login",component:function(){return n.e("chunk-70d495d6").then(n.bind(null,"a55b"))}},{path:"/home",name:"home",component:J,children:[{path:"/home/users",name:"users",component:function(){return Promise.all([n.e("chunk-3f7bc161"),n.e("chunk-a56d9480")]).then(n.bind(null,"ed81"))}},{path:"/home/introduction",name:"introduction",component:function(){return n.e("chunk-20918c6f").then(n.bind(null,"5368"))}},{path:"/home/d3",name:"d3",component:function(){return n.e("chunk-2d0e93b4").then(n.bind(null,"8d3e"))}},{path:"/home/quill",name:"quill",component:function(){return n.e("chunk-2d207aaa").then(n.bind(null,"a203"))}}]},{path:"/basic",name:"basic",component:J,children:[{path:"/basic/hello",name:"hello",component:function(){return n.e("chunk-2d228eee").then(n.bind(null,"dafa"))}},{path:"/basic/hello2",name:"hello2",component:function(){return n.e("chunk-2d0a49fd").then(n.bind(null,"06de"))}}]},{path:"/icons",name:"icons",component:J,children:[{path:"/icons/iconfont",name:"iconfont",component:function(){return n.e("chunk-43a7a6b6").then(n.bind(null,"cd2a"))}},{path:"/icons/materialdesignicons",name:"materialdesignicons",component:function(){return n.e("chunk-15ca35a0").then(n.bind(null,"1fc7"))}}]},{path:"/charts",name:"charts",component:J,children:[{path:"/charts/echarts",name:"echarts",component:function(){return n.e("chunk-3e13c242").then(n.bind(null,"0262"))}},{path:"/charts/vega-charts",name:"vega-charts",component:function(){return Promise.all([n.e("chunk-95b23c16"),n.e("chunk-3f7bc161"),n.e("chunk-a6358860")]).then(n.bind(null,"eb73"))}},{path:"/charts/d3-charts",name:"d3-charts",component:function(){return Promise.all([n.e("chunk-95b23c16"),n.e("chunk-18f4969c")]).then(n.bind(null,"17c6"))}}]},{path:"/zoom",name:"zoom",component:J,children:[{path:"/zoom/openlayer",name:"openlayer",component:function(){return n.e("chunk-2d228eee").then(n.bind(null,"dafa"))}},{path:"/basic/openseadragon",name:"openseadragon",component:function(){return n.e("chunk-2d0a49fd").then(n.bind(null,"06de"))}},{path:"/basic/leaflet",name:"leaflet",component:function(){return n.e("chunk-2d0a49fd").then(n.bind(null,"06de"))}}]},{path:"*",name:"notfound",component:function(){return n.e("chunk-b47b4a38").then(n.bind(null,"9703"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-70d495d6").then(n.bind(null,"a55b"))}},{path:"/join",name:"join",component:function(){return n.e("chunk-f2759192").then(n.bind(null,"c283"))}}]});V.beforeEach((function(e,t,n){sessionStorage.setItem("pathName",e.name),"login"===e.name||"join"===e.name||sessionStorage.getItem("userInfo")?n():n({path:"/login"})}));var U=V,L=n("9483");Object(L["a"])("".concat("/vue-vuetify-admin/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var F=n("ce5b"),H=n.n(F),G=(n("bf40"),n("fcf4"));a["default"].use(H.a);var K={theme:{dark:!1,themes:{light:{primary:"#409eff",secondary:"#54a8ff",accent:"#9c27b0",error:"#f44336",warning:"#ff5722",info:"#607d8b",success:"#4caf50"},dark:{primary:G["a"].blue.darken1}}}},W=new H.a(K),Y=n("bc3a"),Q=n.n(Y),X=n("a7fe"),Z=n.n(X);a["default"].config.productionTip=!1,n("69b0"),a["default"].use(Z.a,Q.a),new a["default"]({router:U,store:m["a"],vuetify:W,render:function(e){return e(N)}}).$mount("#app")},ec2e:function(e,t,n){"use strict";var a=n("8b01"),r=n.n(a);r.a},ed71:function(e,t,n){}});
//# sourceMappingURL=app.cbd68b62.js.map