!function(e){function t(t){for(var a,i,c=t[0],l=t[1],s=t[2],m=0,d=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([38,1]),n()}({1:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useSubscriber",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"useEmitter",{enumerable:!0,get:function(){return i.default}}),t.default=void 0;var r=a(n(20)),o=a(n(21)),i=a(n(31)),c=r.default;t.default=c},10:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.overrideState=t.mergeDeep=t.isArray=t.isObject=t.proceedState=t.getNestedObject=void 0;var r=a(n(9)),o=a(n(30));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?i(Object(t),!0).forEach((function(n){(0,r.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}var l=function(e,t){if(e)return t.reduce((function(e,t){return(e||{})[t]}),e)};t.getNestedObject=l;t.proceedState=function(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"root",a="root"===n?window.masterStore$.value:n;if("function"==typeof e)throw new Error("Will implement soon!!!");if("string"!=typeof e)throw new Error("Invalid type of dependence");if(e){var r=m(e);t=l(a,r)}else t=a;return t};t.overrideState=function(e,t,n){return t?function(e,t,n){var a=(t=m(t)).length,r=e;return t.forEach((function(e,t){t===a-1?"object"!==(0,o.default)(r[e])||"object"!==(0,o.default)(n)||u(n)||null===n?r[e]=n:r[e]=d(r[e],n):(!r[e]&&(r[e]={}),r=r[e])})),e}(e,t,n):e};var s=function(e){return e&&"object"===(0,o.default)(e)&&!Array.isArray(e)};t.isObject=s;t.isArray=function(e){return e&&"object"===(0,o.default)(e)&&Array.isArray(e)};var u=function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return JSON.stringify(e)===JSON.stringify({})},m=function(e){if("string"!=typeof e)return e;var t=[];return e.split(".").forEach((function(e){e.split(/\[([^}]+)\]/g).forEach((function(e){0<e.length&&t.push(e)}))})),t},d=function(e,t){var n=e;return s(e)&&s(t)&&Object.keys(t).forEach((function(a){s(t[a])&&a in e?n[a]=d(e[a],t[a]):n=c(c({},n),(0,r.default)({},a,t[a]))})),n};t.mergeDeep=d},20:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(2)),o=n(37),i=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;(0,r.default)(this,e),window.masterStore$=new o.BehaviorSubject(t)};t.default=i},21:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(22)),o=a(n(9)),i=a(n(26)),c=n(0),l=n(10);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?s(Object(t),!0).forEach((function(n){(0,o.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}var m=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=(0,c.useState)((0,l.proceedState)(e)),n=(0,i.default)(t,2),a=n[0],o=n[1],s=(0,c.useRef)(null);return(0,c.useEffect)((function(){var t,n=!0;return s.current=window.masterStore$.subscribe({next:function(a){if(n)return t=(0,l.proceedState)(e,a),o((function(){return(0,l.isObject)(t)?u({},t):(0,l.isArray)(t)?(0,r.default)(t):t}))}}),function(){n=!1}}),[e]),a};t.default=m},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(10),r=function(e,t){var n=window.masterStore$.value,r=e;t&&"string"==typeof t&&(r=(0,a.overrideState)(n,t,e)),window.masterStore$.next((0,a.mergeDeep)(n,r))};t.default=r},33:function(e,t,n){var a=n(34),r=n(35);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},35:function(e,t,n){(t=n(36)(!1)).push([e.i,"* {\n  font-family: Helvetica;\n}\n\n.App {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.card.border-primary > .card-header{\n  background-color: #0d6efd;\n  color: #FFF;\n}\n\n.feature-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 4rem;\n  height: 4rem;\n  margin-bottom: 1rem;\n  font-size: 2rem;\n  color: #fff;\n  border-radius: 0.75rem;\n}\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n.btn-info {\n  color: #FFF;\n}\n.btn-info:disabled {\n  color: #FFF;\n}\n.btn-info:hover {\n  background-color: #61DAFB;\n  color: #FFF;\n}\n.text-link {\n  cursor: pointer;\n  color: #61DAFB;\n  text-decoration: underline;\n}\n.text-link:hover {\n  color: #0dcaf0;\n}\n.pr-2 {\n  padding-right: 10px;\n}\n",""]),e.exports=t},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=n(1),l=n.n(c),s=n(2),u=n.n(s),m=n(4),d=n.n(m),f=function(){function e(){u()(this,e)}return d()(e,[{key:"getData",value:function(){var e=[{name:"React RetiX",isLiked:!1,isFeatured:!1},{name:"The new approach to React state management",isLiked:!1,isFeatured:!0},{name:"One Redux's competitor",isLiked:!1,isFeatured:!0}];Object(c.useEmitter)(!0,"page.isLoading"),setTimeout((function(){Object(c.useEmitter)({page:{isLoading:!1,data:e}})}),1e3)}}]),e}(),b=n.p+"assets/a2a6aa4e4259a42bd735e0961728ec58-react-rx-white.svg",p=function(e){var t=e.data;return r.a.createElement("div",{className:"feature col"},r.a.createElement("div",{className:"feature-icon bg-info bg-gradient"},r.a.createElement("img",{src:b,alt:"React Rx",className:"bi",width:"32"})),r.a.createElement("h5",null,t.name),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc erat, condimentum eget ullamcorper ut, venenatis a massa. Vivamus tristique dui purus, quis imperdiet eros placerat eu."),r.a.createElement("a",{href:"https://github.com/vixnguyen/react-rx",target:"_blank",className:"icon-link text-info"},"Read »"))},v=function(){return Object(c.useSubscriber)("page.isLoading")&&r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-info",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))},g=function(){return r.a.createElement("h5",null,"Hi Guest! Please ",r.a.createElement("span",{className:"text-link","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"sign in")," to continue.")},y=function(e){e.name;var t=Object(c.useSubscriber)("page.data");return Object(a.useEffect)((function(){t||(new f).getData()}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3 mb-3 text-start"},t&&t.length&&t.map((function(e,t){return r.a.createElement(p,{key:t,data:e})}))))},E=function(){var e=Object(c.useSubscriber)("user"),t=e.name,n=e.isAuthenticated;return r.a.createElement("div",{className:"row row-cols-1 row-cols-md-1 mb-3 text-center"},r.a.createElement("div",{className:"col"},n?r.a.createElement(y,{name:t}):r.a.createElement(g,null)))},h=n(12),O=n.n(h),j=n(13),w=n(14),N=n.n(w),x=n(5),S=n.n(x),P=function(){function e(){u()(this,e)}return d()(e,[{key:"doLogin",value:function(){var e=N()(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.useEmitter)({page:{isLoading:!0}}),e.next=3,this.fakeAsyncRequest();case 3:t&&!t.name&&(t.name="RetiXer"),t.isAuthenticated=!0,Object(c.useEmitter)({page:{isLoading:!1},user:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fakeAsyncRequest",value:function(e){return new Promise((function(t){setTimeout((function(){t(e)}),1e3)}))}}]),e}(),k=function(){var e=Object(c.useSubscriber)("page").isLoading,t=Object(a.useRef)(new P),n=Object(a.useRef)(null),o=Object(j.a)(),i=o.register,l=o.handleSubmit;return r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("form",{className:"form",onSubmit:l((function(e){t.current.doLogin(e).then((function(){n&&n.current.click()}))}))},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Please Sign In"),r.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"recipient-name",className:"col-form-label"},"Username:"),r.a.createElement("input",O()({},i("name"),{className:"form-control",id:"recipient-name"})))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",ref:n,className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:!!e},e&&r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Sign in"))))))},F=n.p+"assets/62f9349eea519413c3e8d9c231663b8d-react-rx.svg",_=function(e){var t=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"text-white pr-2"},"Hi ",t,","),r.a.createElement("button",{onClick:function(){Object(c.useEmitter)({},"user")},className:"btn btn-outline-danger"},"Sign Out"))},R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-outline-info","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Sign In"))},A=function(){var e=Object(c.useSubscriber)("user"),t=e.name,n=e.isAuthenticated;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{href:"",className:"d-flex navbar-brand"},r.a.createElement("img",{src:F,alt:"React Rx",width:"32"}),r.a.createElement("span",{className:"fs-4"}," React RetiX")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-md-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled"},"Demo")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",target:"_blank",href:"https://github.com/vixnguyen/react-rx"},"Reposistory")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",target:"_blank",href:"https://medium.com/@vixnguyen"},"Author"))),n?r.a.createElement(_,{name:t}):r.a.createElement(R,null))))))},D=function(){return r.a.createElement("footer",{className:"footer mt-auto py-3 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"© React RetiX")))};n(33);new l.a({page:{isLoading:!1,hasError:!1,msg:null,data:null},user:{isAuthenticated:!1}});var L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("main",{className:"flex-shrink-0"},r.a.createElement("div",{className:"container mt-5"},r.a.createElement(E,null))),r.a.createElement(k,null),r.a.createElement(D,null))},M=document.getElementById("root");i.a.render(r.a.createElement(L,null),M)}});