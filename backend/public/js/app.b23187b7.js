(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"59180b63"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0260":function(t,e,a){},"13e3":function(t,e,a){},"241b":function(t,e,a){"use strict";var n=a("3d76"),r=a.n(n);r.a},"3d76":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",{staticClass:"app"},[a("TopMenuBar"),a("router-view"),a("Footer")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"TopMenuBar"}},[a("div",{staticClass:"ma-3",attrs:{id:"MainLogo"}},[t._v(" "+t._s(t.Logo)+" ")]),a("ul",{staticClass:"hidden-sm-and-down",attrs:{id:"MenuList"}},t._l(t.Menunames,(function(e){return a("li",{key:e.id,staticClass:"MenuLists"},[a("router-link",{staticClass:"MenuLists",attrs:{to:{path:e.path}}},[t._v("\r\n              "+t._s(e.name)+"\r\n            ")])],1)})),0),a("v-spacer",{staticClass:"hidden-md-and-up MenuIcon"}),a("div",{staticClass:"MenuIcon hidden-md-and-up"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{tile:"",large:"",icon:""}},n),[a("i",{staticClass:"material-icons right"},[t._v("menu")])])]}}])},[a("v-list",t._l(t.Menunames,(function(e){return a("v-list-item",{key:e.id},[a("v-list-item-title",[a("router-link",{staticClass:"MenuLists",attrs:{to:{path:e.path}}},[t._v("\r\n                  "+t._s(e.name)+"\r\n                ")])],1)],1)})),1)],1)],1)],1)},i=[],c={data:function(){return{Logo:"준비중",Menunames:[{id:0,name:"Home",path:"/"},{id:1,name:"About Us",path:"/AboutUs"},{id:2,name:"Products",path:"/Products"},{id:3,name:"Contact Us",path:"/ContactUs"}]}}},u=c,l=(a("241b"),a("2877")),d=a("6544"),p=a.n(d),m=a("8336"),f=a("8860"),v=a("da13"),h=a("5d23"),g=a("e449"),b=a("2fa4"),_=Object(l["a"])(u,o,i,!1,null,null,null),w=_.exports;p()(_,{VBtn:m["a"],VList:f["a"],VListItem:v["a"],VListItemTitle:h["a"],VMenu:g["a"],VSpacer:b["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:""}},[a("v-card",{staticClass:"indigo litghten-1 text-center",attrs:{width:"100%",flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n    ")]),a("v-divider"),a("v-card-text",[t._v("© "+t._s((new Date).getFullYear())+" ")])],1)],1)},k=[],C={data:()=>({icons:["fab fa-facebook","fab fa-twitter","fab fa-google-plus","fab fa-linkedin","fab fa-instagram"]})},y=C,x=a("b0af"),V=a("99d9"),O=a("ce7e"),j=a("553a"),M=a("132d"),T=Object(l["a"])(y,P,k,!1,null,null,null),L=T.exports;p()(T,{VBtn:m["a"],VCard:x["a"],VCardText:V["a"],VDivider:O["a"],VFooter:j["a"],VIcon:M["a"]});var $={name:"App",components:{TopMenuBar:w,Footer:L},data:()=>({})},E=$,D=(a("5c0b"),a("7496")),F=a("a75b"),S=Object(l["a"])(E,r,s,!1,null,null,null),A=S.exports;p()(S,{VApp:D["a"],VContent:F["a"]});var I=a("8c4f"),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HomeContents")},B=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Home"},[a("v-parallax",{attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("h1",[t._v("준비중")])])],1),a("v-card",{attrs:{align:"center",justify:"center"}},[a("v-card-title",[t._v("\n      Facebook tests hiding likes from Australian users\n    ")]),a("v-img",{attrs:{src:t.HomeImage,height:"1000"}},[a("v-card-text",{staticClass:"white--text pa-6 mt-10"},[t._v("\n      Facebook will follow Instagram by hiding the number of likes on users' posts during a trial in Australia.\n      From Friday, some Australian users will no longer be able to see the number of likes - or reactions - on another person's Facebook post.\n      The controversial change has been trialled by sister platform Instagram in several countries since July.\n      Facebook said removing likes from view was an attempt to reduce social pressure among users.\n      People will still be able to see the number of likes on their own posts, the company said.\n    ")])],1)],1)],1)},H=[],K={data:()=>({HomeImage:a("ceb6")})},q=K,J=(a("9c1d"),a("adda")),R=a("8b9c"),z=a("0fd9"),G=Object(l["a"])(q,U,H,!1,null,null,null),Y=G.exports;p()(G,{VCard:x["a"],VCardText:V["a"],VCardTitle:V["b"],VImg:J["a"],VParallax:R["a"],VRow:z["a"]});var Q={components:{HomeContents:Y}},W=Q,X=Object(l["a"])(W,N,B,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Product")},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"Products"},[a("v-row",t._l(t.calData,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",sm:"4"}},[a("router-link",{attrs:{to:{name:"ProductDetail",params:{id:e.number}}}},[a("v-card",{staticClass:"pa-2"},[a("v-card-title",[t._v(" "+t._s(e.number)+" ")]),a("v-card-text",[t._v(" "+t._s(e.img)+" ")]),a("v-card-text",[t._v(" "+t._s(e.pattern)+" | "+t._s(e.color)+" ")])],1)],1)],1)})),1),a("v-pagination",{attrs:{circle:"",length:t.numOfPages},model:{value:t.curPageNum,callback:function(e){t.curPageNum=e},expression:"curPageNum"}})],1)},nt=[],rt={data:()=>({page:1,Products:[],dataPerPage:6,curPageNum:1}),created(){this.$http.get("/api/Products").then(t=>{this.Products=t.data})},computed:{startOffset(){return(this.curPageNum-1)*this.dataPerPage},endOffset(){return this.startOffset+this.dataPerPage},numOfPages(){return Math.ceil(this.Products.length/this.dataPerPage)},calData(){return this.Products.slice(this.startOffset,this.endOffset)}}},st=rt,ot=(a("7cd1"),a("62ad")),it=a("a523"),ct=a("891e"),ut=Object(l["a"])(st,at,nt,!1,null,null,null),lt=ut.exports;p()(ut,{VCard:x["a"],VCardText:V["a"],VCardTitle:V["b"],VCol:ot["a"],VContainer:it["a"],VPagination:ct["a"],VRow:z["a"]});var dt={components:{Product:lt}},pt=dt,mt=(a("8247"),Object(l["a"])(pt,tt,et,!1,null,null,null)),ft=mt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"Products"},[a("v-row",[a("v-col",{attrs:{width:"80%"}},[a("v-card",{staticClass:"pa-2"},[a("v-card-title",[t._v(" "+t._s(t.ProductDetail[0].number)+" ")]),a("v-card-text",[t._v(" "+t._s(t.ProductDetail[0].img)+" ")]),a("v-card-text",[t._v(" "+t._s(t.ProductDetail[0].pattern)+" | "+t._s(t.ProductDetail[0].color)+" ")])],1)],1)],1)],1)},ht=[],gt={name:"productDetail",data:()=>{return{ProductDetail:"hi"}},created(){var t=this.$route.params.id;this.$http.get(`/api/Products/${t}`).then(t=>{this.ProductDetail=t.data})}},bt=gt,_t=Object(l["a"])(bt,vt,ht,!1,null,null,null),wt=_t.exports;p()(_t,{VCard:x["a"],VCardText:V["a"],VCardTitle:V["b"],VCol:ot["a"],VContainer:it["a"],VRow:z["a"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ContactUs"}},[a("KakaoMap")],1)},kt=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"KakaoMap"}},[a("div",{staticStyle:{width:"500px",height:"400px"},attrs:{id:"map"}}),a("h1",[t._v(" "+t._s(t.msg)+" ")])])},yt=[],xt={data(){return{msg:"카카오 맵 테스트"}},mounted(){var t=document.getElementById("map"),e={center:new kakao.maps.LatLng(33.450701,126.570667),level:3},a=new kakao.maps.Map(t,e),n=new kakao.maps.services.Geocoder;n.addressSearch("제주특별자치도 제주시 첨단로 242",(function(t,e){if(e===kakao.maps.services.Status.OK){var n=new kakao.maps.LatLng(t[0].y,t[0].x),r=new kakao.maps.Marker({position:n});a.setCenter(n),r.setMap(position)}}))}},Vt=xt,Ot=Object(l["a"])(Vt,Ct,yt,!1,null,null,null),jt=Ot.exports,Mt={components:{KakaoMap:jt}},Tt=Mt,Lt=Object(l["a"])(Tt,Pt,kt,!1,null,null,null),$t=Lt.exports;n["a"].use(I["a"]);var Et=new I["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"f820"))},{path:"/Products",name:"products",component:ft,props:!0},{path:"/Products/:id",name:"ProductDetail",component:wt,props:!0},{path:"/ContactUs",name:"ContactUs",component:$t}]}),Dt=a("9483");Object(Dt["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var Ft=a("bc3a"),St=a.n(Ft),At=a("f309");n["a"].use(At["a"]);var It=new At["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,n["a"].prototype.$http=St.a,new n["a"]({router:Et,vuetify:It,render:t=>t(A)}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("13e3"),r=a.n(n);r.a},"7cd1":function(t,e,a){"use strict";var n=a("cfd5"),r=a.n(n);r.a},8247:function(t,e,a){"use strict";var n=a("e5b8"),r=a.n(n);r.a},"9c1d":function(t,e,a){"use strict";var n=a("0260"),r=a.n(n);r.a},ceb6:function(t,e,a){t.exports=a.p+"img/fabric2.4741a685.jpg"},cfd5:function(t,e,a){},e5b8:function(t,e,a){}});
//# sourceMappingURL=app.b23187b7.js.map