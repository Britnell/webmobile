(this.webpackJsonpremobile=this.webpackJsonpremobile||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(4),r=n.n(o),a=(n(9),n(2)),s=(n(10),n(0));function l(e,t,n){i.a.useEffect((function(){return window.addEventListener(e,t,n),function(){return window.removeEventListener(e,t)}}),[t])}function d(e){if(e)return Object.keys(e).map((function(t,n){return Object(s.jsxs)("div",{children:[" ",t," : ",e[t]]})}))}function j(e){var t,n,c=e.nextLevel,o=i.a.useState((function(){if(!1 in window)return"X"})),r=Object(a.a)(o,2),j=r[0],u=r[1];return t=function(e){var t={a:e.alpha,b:e.beta,g:e.gamma};u(t)},n=[],l("deviceorientation",i.a.useCallback(t,n)),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"One"}),Object(s.jsx)("div",{children:"Orientation"}),Object(s.jsx)("div",{children:d(j)}),Object(s.jsx)("button",{onClick:c,children:"Next"})]})}function u(e){var t,n,c,o,r,j=e.nextLevel,u=i.a.useState(),v=Object(a.a)(u,2),b=v[0],x=v[1];return t=function(e){var t={acc:{x:e.accelerationIncludingGravity.x,y:e.accelerationIncludingGravity.y,z:e.accelerationIncludingGravity.z},nograv:{x:e.acceleration.x,y:e.acceleration.y,z:e.acceleration.z},gyro:{x:e.rotationRate.alpha,y:e.rotationRate.beta,z:e.rotationRate.gamma}};x(t)},n=[],l("devicemotion",i.a.useCallback(t,n)),b&&b.acc&&(c=b.acc),b&&b.nograv&&(o=b.nograv),b&&b.gyro&&(r=b.gyro),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"Two"}),Object(s.jsx)("div",{children:"ACC "}),Object(s.jsx)("div",{children:d(c)}),Object(s.jsx)("div",{children:"No gravity"}),Object(s.jsx)("div",{children:d(o)}),Object(s.jsx)("div",{children:"Gyro"}),Object(s.jsx)("div",{children:d(r)}),Object(s.jsx)("button",{onClick:j,children:"Next"})]})}function v(e){var t,n,c=e.nextLevel,o=i.a.useState("active"),r=Object(a.a)(o,2),d=r[0],j=r[1];return t=function(){document.hidden&&j(" You left at ".concat(new Date," "))},n=[],l("visibilitychange",i.a.useCallback(t,n)),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"Three"}),Object(s.jsx)("div",{children:" In/Activeness"}),Object(s.jsx)("div",{children:d}),Object(s.jsx)("button",{onClick:c,children:"Next"})]})}function b(e){var t=e.nextLevel,n=i.a.useState(),c=Object(a.a)(n,2),o=c[0],r=c[1];return function(e,t,n){l("touchstart",(function(t){return e(t),!1}));var c=i.a.useCallback((function(e){e.touches.length>1&&e.preventDefault(),t(e)}),[t]);i.a.useEffect((function(){return window.addEventListener("touchmove",c,{passive:!1}),function(){return window.removeEventListener("touchmove",c)}}),[c]),l("touchend",(function(e){return n(e),!1}))}((function(){return r("start")}),(function(e){var t,n="".concat(e.touches[0].clientX,",").concat(e.touches[0].clientY," ");e.touches.length>1&&(t="".concat(e.touches[1].clientX,",").concat(e.touches[1].clientY," ")),r("move ".concat(n," \t  ").concat(t," "))}),(function(){return r("end")})),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"Four"}),Object(s.jsx)("div",{children:o}),Object(s.jsx)("button",{onClick:t,children:"Next"})]})}function x(e){var t,n,c=e.nextLevel,o=i.a.useState(),r=Object(a.a)(o,2),d=r[0],j=r[1];return t=function(e){if("copy"===e.type){var t=document.getSelection().toString();t.length>0&&j(" Copied : ".concat(t)),navigator.clipboard.writeText('"'.concat(t,'"'))}else if("paste"===e.type){var n=e.clipboardData.getData("text/plain");j(" Pasted : ".concat(n," "))}},n=[],l("copy",i.a.useCallback(t,n)),l("paste",i.a.useCallback(t,n)),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"FIVE"}),Object(s.jsx)("div",{children:"Clipboard"}),Object(s.jsx)("div",{children:d}),Object(s.jsx)("button",{onClick:c,children:"Next"})]})}function h(e){var t=e.nextLevel,n=i.a.useState(),c=Object(a.a)(n,2),o=c[0],r=c[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"SIX"}),Object(s.jsx)("div",{children:JSON.stringify(o)}),Object(s.jsx)("button",{onClick:function(){var e;e=function(e){r({lat:e.coords.latitude,long:e.coords.longitude,alt:e.coords.altitude,accur:e.coords.accuracy})},navigator.geolocation.getCurrentPosition(e)},children:"Get location"}),Object(s.jsx)("button",{onClick:t,children:"Next"})]})}function O(e){var t,n=e.nextLevel,c=i.a.useState(window.screen.orientation.type),o=Object(a.a)(c,2),r=o[0],l=o[1];return t=function(e){l(window.screen.orientation.type)},window.screen.orientation.addEventListener("change",t),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"SEVEN"}),Object(s.jsx)("div",{children:r}),Object(s.jsx)("button",{onClick:n,children:"Next"})]})}function f(e){var t=e.nextLevel;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"ZERO"}),Object(s.jsx)("button",{onClick:t,children:"Next"})]})}function g(e){var t=i.a.useState(0),n=Object(a.a)(t,2),c=n[0],o=n[1];function r(){o(c+1)}return 0==c?Object(s.jsx)(f,{nextLevel:r}):1==c?Object(s.jsx)(j,{nextLevel:r}):2==c?Object(s.jsx)(u,{nextLevel:r}):3==c?Object(s.jsx)(v,{nextLevel:r}):4==c?Object(s.jsx)(b,{nextLevel:r}):5==c?Object(s.jsx)(x,{nextLevel:r}):6==c?Object(s.jsx)(h,{nextLevel:r}):7==c?Object(s.jsx)(O,{nextLevel:r}):Object(s.jsx)("div",{children:"?"})}var w=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(g,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),y()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.48096917.chunk.js.map