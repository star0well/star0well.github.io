(function(){var e={2734:function(e,n,t){"use strict";var r=t(9242),o=t(3396),a=t(4870),u=t(7376),i={__name:"App",setup(e){return(e,n)=>{const t=(0,o.up)("router-view"),r=(0,o.up)("a-config-provider");return(0,o.wg)(),(0,o.j4)(r,{locale:(0,a.SU)(u.Z)},{default:(0,o.w5)((()=>[(0,o.Wm)(t)])),_:1},8,["locale"])}}};const l=i;var s=l,c=t(2483),d=(t(7658),t(7139)),f=t(8896),p=t(2338);let m,h;function v(){const e=[],n=t(9799);return n.keys().forEach((n=>{if(-1!==n.indexOf("./main.js"))return;const r=t(7259)("./main"+n.split(".")[1]);e.push(r.default)})),h=e[0],m=e[0].path,e}const g=e=>((0,o.dD)("data-v-24acb29a"),e=e(),(0,o.Cn)(),e),w={class:"left-menu"},y=g((()=>(0,o._)("div",{class:"logo"},"VUE-THREEJS",-1))),b={class:"phone__title"};var _={__name:"leftMenu",props:{menus:{type:Array,default:()=>[]}},setup(e){const n=e,t=(0,c.tv)(),r=(0,a.iH)([m]),u=e=>{t.push({path:e.path})};return(e,t)=>{const i=(0,o.up)("a-menu-item"),l=(0,o.up)("a-sub-menu"),s=(0,o.up)("a-menu");return(0,o.wg)(),(0,o.iD)("div",w,[y,(0,o.Wm)(s,{selectedKeys:r.value,"onUpdate:selectedKeys":t[0]||(t[0]=e=>r.value=e),theme:"dark",mode:"inline"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.menus,(e=>((0,o.wg)(),(0,o.iD)(o.HY,null,[1==e.type?((0,o.wg)(),(0,o.j4)(i,{key:e.path,onClick:n=>u(e)},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(f.Z),{class:"phone"}),(0,o._)("span",b,(0,d.zw)(e.name),1)])),_:2},1032,["onClick"])):((0,o.wg)(),(0,o.j4)(l,{key:e},{title:(0,o.w5)((()=>[(0,o._)("span",null,[(0,o._)("span",null,(0,d.zw)(e.name),1)])])),default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.children,(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.path,onClick:n=>u(e)},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(p.Z),{class:"phone"}),(0,o.Uk)(" "+(0,d.zw)(e.name),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024))],64)))),256))])),_:1},8,["selectedKeys"])])}}},k=t(89);const j=(0,k.Z)(_,[["__scopeId","data-v-24acb29a"]]);var C=j,O=t(3441),D=t(9643),E=t(65);const S={class:"layout-header"};var Z={__name:"layoutHeader",emits:["collapsed"],setup(e,{emit:n}){const t=(0,E.oR)(),r=(0,a.iH)(!1),u=async()=>{r.value=!r.value,n("collapsed",r.value),await(0,o.Y3)(),setTimeout((()=>t.commit("changeCollapsed",r.value)),200)};return(e,n)=>((0,o.wg)(),(0,o.iD)("div",S,[r.value?((0,o.wg)(),(0,o.j4)((0,a.SU)(O.Z),{key:0,class:"trigger",onClick:u})):((0,o.wg)(),(0,o.j4)((0,a.SU)(D.Z),{key:1,class:"trigger",onClick:u}))]))}};const H=Z;var P=H;const T=e=>((0,o.dD)("data-v-2217f1e2"),e=e(),(0,o.Cn)(),e),U={class:"drawer"},W=T((()=>(0,o._)("div",{class:"color"},null,-1)));var B={__name:"main",setup(e){const n=(0,a.iH)(!1),t=(0,a.iH)(!1),r=(0,a.iH)([{name:"风电演示demo",type:1,path:"/main/windDemo"},{name:"萌宠三兄弟",type:1,path:"/main/threeBrother"}]),u=e=>{console.log("e",e),n.value=e},i=()=>{t.value=!0};return(e,a)=>{const l=(0,o.up)("a-layout-sider"),s=(0,o.up)("a-drawer"),c=(0,o.up)("a-layout-header"),d=(0,o.up)("router-view"),f=(0,o.up)("a-layout-content"),p=(0,o.up)("a-layout");return(0,o.wg)(),(0,o.j4)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{class:"left",collapsed:n.value,"onUpdate:collapsed":a[0]||(a[0]=e=>n.value=e),trigger:null,collapsible:""},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{menus:r.value},null,8,["menus"])])),_:1},8,["collapsed"]),(0,o._)("div",U,[(0,o.Wm)(s,{class:"drawer",width:"40%",title:"菜单",placement:"left",visible:t.value,onClose:a[1]||(a[1]=()=>t.value=!t.value)},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{menus:r.value},null,8,["menus"])])),_:1},8,["visible"])]),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{style:{background:"#fff",padding:"0"}},{default:(0,o.w5)((()=>[(0,o.Wm)(P,{class:"showHeader",onCollapsed:u}),(0,o.Wm)(P,{class:"hiddenHeader",onCollapsed:i})])),_:1}),(0,o.Wm)(f,{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"280px"}},{default:(0,o.w5)((()=>[W,(0,o.Wm)(d,null,{default:(0,o.w5)((({Component:e})=>[((0,o.wg)(),(0,o.j4)(o.Ob,{include:"threeBrother,windDemo"},[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))],1024))])),_:1})])),_:1})])),_:1})])),_:1})}}};const x=(0,k.Z)(B,[["__scopeId","data-v-2217f1e2"]]);var A=x;const N=[{path:"/",redirect:"/main"},{path:"/main",name:"main",component:A}],L=(0,c.p7)({history:(0,c.r5)(),routes:N});L.beforeEach((e=>{if("/login"!==e.path&&"/main"===e.path)return h?.path}));var M=L;const F=(0,E.MT)({state:{name:"root",spinning:!1,collapsed:!1},mutations:{changeSpinning(e,n){e.spinning=n},changeCollapsed(e,n){e.collapsed=n}},getters:{},actions:{},modules:{}});var K=F,Y=(t(4957),t(9645)),z=(t(9149),t(6557)),I=(t(8119),t(6440)),R=(t(1844),t(7977)),q=(t(8403),t(2450)),J=(t(8783),t(1291)),V=(t(8788),t(5114)),G=(t(7291),t(4895));const Q=[G.ZP,V.Z,J.ZP,q.Z,R.ZP,I.ZP,z.ZP,Y.Z];function X(e){for(const n of Q)e.use(n)}var $=X;function ee(e){$(e)}const ne=(0,r.ri)(s);ee(ne);const te=v();te.forEach((e=>{M.addRoute("main",e)})),ne.use(K).use(M).mount("#app")},9208:function(e,n,t){"use strict";t.r(n);const r=()=>Promise.all([t.e(737),t.e(412)]).then(t.bind(t,9412));n["default"]={path:"/main/threeBrother",name:"threeBrother",component:r,children:[]}},8097:function(e,n,t){"use strict";t.r(n);const r=()=>Promise.all([t.e(737),t.e(22)]).then(t.bind(t,2022));n["default"]={path:"/main/windDemo",name:"windDemo",component:r,children:[]}},9799:function(e,n,t){var r={"./threeBrother/threeBrother.js":9208,"./windDemo/windDemo.js":8097};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=9799},7259:function(e,n,t){var r={"./main/threeBrother/threeBrother":9208,"./main/threeBrother/threeBrother.js":9208,"./main/windDemo/windDemo":8097,"./main/windDemo/windDemo.js":8097};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=7259}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{22:"281f6e7d",412:"7a697872",737:"1407a09c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{22:"649df972",412:"ebca4a8a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-threejs:";t.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var i,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=r),e[r]=[o];var f=function(n,t){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/front/dist/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var u=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=i,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var u=t.miniCssF(r),i=t.p+u;if(n(u,i))return o();e(r,i,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={22:1,412:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var u=t.p+t.u(n),i=new Error,l=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};t.l(u,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,u=r[0],i=r[1],l=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var c=l(t)}for(n&&n(r);s<u.length;s++)a=u[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},r=self["webpackChunkvue_threejs"]=self["webpackChunkvue_threejs"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2734)}));r=t.O(r)})();
//# sourceMappingURL=app.02d3af58.js.map