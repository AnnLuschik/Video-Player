(this["webpackJsonpvideo-player-app"]=this["webpackJsonpvideo-player-app"]||[]).push([[0],{25:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),o=t(10),i=t.n(o),a=t(9),A=(t(25),t(2)),u=t(5),l=t(3),s=t(6),d="GET_DATA_REQUEST",b="GET_DATA_SUCCESS",p="GET_DATA_FAILURE";var f={responseData:null,loading:!1,errorMessage:null};var j,g,x,O,h,m,C,v,k,w=t(1),S=l.a.button(j||(j=Object(A.a)(["\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-top: 10px solid transparent;\n    border-left: 20px solid #ffffff;\n    border-bottom: 10px solid transparent;\n  }\n"]))),Q=function(n){var e=n.onClick;return Object(w.jsx)(S,{onClick:e})},R=l.a.button(g||(g=Object(A.a)(["\n  position: relative;\n  width: 20px;\n  margin: 0 5px;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    border-right: 20px double #ffffff;\n  }\n"]))),y=function(n){var e=n.onClick;return Object(w.jsx)(R,{onClick:e})},B=l.a.div(x||(x=Object(A.a)(["\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  background: #ffffff;\n  cursor: pointer;\n"]))),E=function(n){var e=n.onClick;return Object(w.jsx)(B,{onClick:e})},F=l.a.button(O||(O=Object(A.a)(["\n  width: 22px;\n  height: 22px;\n  background: url(",") center no-repeat;\n  cursor: pointer;\n  outline: none;\n  border: none;\n"])),(function(n){return n.bcg})),U=function(n){var e=n.onClick,t=n.isFullscreen;return Object(w.jsx)(F,{onClick:e,bcg:t?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAX0lEQVRYhe2UMQ7AIAzEclX//2W6dKgCRUCGW+yNICITKRcBsEF7Ob0fcdW1aiCAgF3gzoXdNRox6yFJ37N9AgCgXFjJgbzLlbf2HOiS8O93EespOeuRsU8AAQTsAgAPbPQkFj93FQwAAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAaUlEQVR42uyUUQrAIAxDfcP7Xzn7LWrpNiibrPmroLVJGiS1TBwtGekN+lAv+QJYncvnl9cmmH4QgIiB/UVOb4A1gmOW27BvlgZ/c5HZRIYsCt3i3S8NHqepLqarPueiEnnCCQAA//8DAMMZHCeNmkyJAAAAAElFTkSuQmCC"})},D=l.a.div(h||(h=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]))),I=l.a.div(m||(m=Object(A.a)(["\n  width: 22px;\n  height: 22px;\n  margin: 0 5px 0 10px;\n  background: url(",");\n  cursor: pointer;\n  outline: none;\n  border: none;\n"])),(function(n){return n.bcg})),T=l.a.input(C||(C=Object(A.a)(["\n  width: 75px;\n  height: 5px;\n"]))),z=function(n){var e=n.onClick,t=Object(c.useState)(1),r=Object(u.a)(t,2),o=r[0],i=r[1],a=Object(c.useCallback)((function(){e(o)}),[e,o]),A=Object(c.useCallback)((function(){o<.1?(i(1),e(1)):(i(0),e(0))}),[e,o]);return Object(w.jsxs)(D,{children:[Object(w.jsx)(T,{type:"range",min:0,max:1,step:.1,onChange:function(n){return i(n.target.value)},onMouseMove:a,value:o}),Object(w.jsx)(I,{bcg:o<.1?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAr0lEQVRIie2SMQ7CMAxFC3doxJUQB2KqxNVgqShlaQdghns8lgyW5SoeYiSk/ilykvcUx02z5m8CdMArCn4iJxReXaDhVQUWXAqACzACSdQScAfOFvAAfCzogmDIpTmDU14DXC3BuwRXAgmc1TpZAlfUnRaYxPYD2MkzW/en+LMxq79o0d4jEedvEqiEQ/GdlMe0xx7TEehdzQSOS4Jq0ZLqAi0JEWRJBzzDBGvC8gVH+RUJaT4FzAAAAABJRU5ErkJggg==":o<.6?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAqElEQVRIie2SMQqDMBRARdpNeoKu9S7SAzkJLj2Hs1eoaw/RznW1V3guPyBpsD+SPxR8Swgk731IsmznLwAa4GUlbxFM5ckDvjxpICR3AeAAnGKFV2AMSQOBO/ABypjA+5d8Eehk28cEVMjZs2xHjTtXT7ERF1BNI9xkfahvAJXmHeTsAEzAJWKor+DaNz0CxWb5IlKHAknxI8kDfsQkIJEGeJoFdkyZAR62cbQHZLSiAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA+0lEQVRIie2UsUrDUBhGr6lxCn2A4ixYXOriQ/QRuvcVnAJdXAXbB+jsrFNxEfIGLhaKg2YOuLVQOA79ChJubnNN7yDkW/778YdzArnEmDb/IkAKLEPBJyhB4WUBcAK8As/AWWO4RRABK61mjeF7AXAKdHUeAGtgC/RdwCGQ26AWwQIogAv1qdb3LsHXIfgvwVz1Uf1G/c0lqBU9e66aqyfq3zZ25PgUvrFe470g9wDdaWaaV5qfLsHYQ9IzxhTGmFR9pPlS+xVxX9MYSHS+BjbsrullbUGVpLTvAB9aPXjBqySlXQRkwBMQ/0kg0K1NcNSw+12/BxO0CZofiu+7LJVWcQoAAAAASUVORK5CYII=",onClick:A})]})},J=t(11),V=t.n(J),M=r.a.memo((function(n){var e=n.completed,t=n.onClick;return Object(w.jsx)(K,{onClick:function(n){return t(n.nativeEvent.offsetX)},children:Object(w.jsx)(Z,{completed:e})})}));M.propTypes={completed:V.a.number,onClick:V.a.func};var q,X,Y,G,P,N,L,W,H,K=l.a.div(v||(v=Object(A.a)(["\n  width: 100%;\n  height: 5px;\n  background: #9a9a9a;\n  cursor: pointer;\n"]))),Z=l.a.div(k||(k=Object(A.a)(["\n  width: ","%;\n  height: 100%;\n  background: red;\n"])),(function(n){return n.completed})),_=M,$=function(n){return n<10?"0".concat(n):"".concat(n)},nn=function(n){var e=Math.floor(n);return e/60<1?"0:".concat($(e)):e/3600<1?"".concat(Math.floor(e/60),":").concat($(e%60)):"".concat(Math.floor(e/3600),":").concat($(Math.floor(e%3600/60)),":").concat($(e%3600%60))},en=r.a.memo((function(n){var e,t,r,o=n.url,i=Object(c.useState)(!1),a=Object(u.a)(i,2),A=a[0],l=a[1],s=Object(c.useState)(0),d=Object(u.a)(s,2),b=d[0],p=d[1],f=Object(c.useState)(!1),j=Object(u.a)(f,2),g=j[0],x=j[1],O=Object(c.useRef)(null),h=Object(c.useRef)(null),m=Object(c.useCallback)((function(n){A?n.target.pause():n.target.play()}),[A]),C=Object(c.useCallback)((function(){O.current.pause()}),[]),v=Object(c.useCallback)((function(){O.current.play()}),[]),k=Object(c.useCallback)((function(){O.current.currentTime=0,O.current.play(),l(!0)}),[]),S=Object(c.useCallback)((function(){g?(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullScreen?document.webkitExitFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),x(!1)):(h.current.requestFullscreen?h.current.requestFullscreen():h.current.mozRequestFullScreen?h.current.mozRequestFullScreen():h.current.webkitRequestFullScreen?h.current.webkitRequestFullScreen():h.current.msRequestFullscreen&&h.current.msRequestFullscreen(),x(!0))}),[g]),R=Object(c.useCallback)((function(n){O.current.volume=n}),[]),B=Object(c.useCallback)((function(n){var e=n/O.current.offsetWidth*O.current.duration;p(e),O.current.currentTime=e}),[]);return Object(w.jsxs)(tn,{ref:h,children:[Object(w.jsx)(cn,{ref:O,onClick:m,onTimeUpdate:function(){var n;return p(null===(n=O.current)||void 0===n?void 0:n.currentTime.toFixed(2))},onPause:function(){return l(!1)},onPlay:function(){return l(!0)},children:Object(w.jsx)("source",{src:o,type:"video/mp4"})}),Object(w.jsxs)(rn,{children:[Object(w.jsx)(_,{completed:b/(null===(e=O.current)||void 0===e?void 0:e.duration)*100||0,onClick:B}),Object(w.jsxs)(on,{mode:g,children:[A?Object(w.jsx)(y,{onClick:C}):Object(w.jsx)(Q,{onClick:v}),Object(w.jsx)(E,{onClick:k}),Object(w.jsx)(An,{isVisible:null===(t=O.current)||void 0===t?void 0:t.duration,children:"".concat(nn(b)," / ").concat(nn(null===(r=O.current)||void 0===r?void 0:r.duration))})]}),Object(w.jsxs)(an,{mode:g,children:[Object(w.jsx)(z,{onClick:R}),Object(w.jsx)(U,{onClick:S,isFullscreen:g})]})]})]})})),tn=l.a.div(q||(q=Object(A.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 320px;\n\n  &::full-screen {\n  width: 100%;\n  height: 100%;\n}\n\n  &::-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  }\n\n  &::-moz-full-screen {\n  width: 100%;\n  height: 100%;\n}\n"]))),cn=l.a.video(X||(X=Object(A.a)(["\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  \n  &::-webkit-media-controls {\n    display: none;\n  }\n"]))),rn=l.a.div(Y||(Y=Object(A.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  min-height: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: #323232;\n  transform: translateY(100%) translateY(-40px);\n  z-index: 2147483648;\n"]))),on=l.a.div(G||(G=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  min-width: ",";\n  padding: 5px ",";\n"])),(function(n){return n.mode?"12%":"auto"}),(function(n){return n.mode?"20px":"10px"})),an=l.a.div(P||(P=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  min-width: ",";\n  padding: 5px ",";\n"])),(function(n){return n.mode?"10%":"auto"}),(function(n){return n.mode?"20px":"10px"})),An=l.a.p(N||(N=Object(A.a)(["\n  margin-left: 5px;\n  font-size: 1em;\n  color: #ffffff;\n  visibility: ",";\n"])),(function(n){return n.isVisible?"visible":"hidden"}));var un=l.a.div(L||(L=Object(A.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ln=l.a.p(W||(W=Object(A.a)(["\n  font-weight: 800;\n  font-size: 2em;\n"]))),sn=l.a.div(H||(H=Object(A.a)(["\n  font-size: 1.5em;\n  color: red;\n"]))),dn=function(){var n=Object(a.b)(),e=Object(a.c)((function(n){return n.videoPlayer})),t=e.responseData,r=e.loading,o=e.errorMessage,i=Object(c.useState)(""),A=Object(u.a)(i,2),l=A[0],s=A[1];return Object(c.useEffect)((function(){n({type:d})}),[n]),Object(c.useEffect)((function(){t&&s(t.data.find((function(n){return"mp4"===n.format})).url)}),[t]),Object(w.jsxs)(un,{children:[r?Object(w.jsx)(ln,{children:"Loading..."}):null,t?Object(w.jsx)(en,{url:l}):null,o?Object(w.jsx)(sn,{children:o}):null]})},bn=t(17),pn=t(4),fn=Object(pn.b)({videoPlayer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(s.a)(Object(s.a)({},n),{},{loading:!0});case b:return Object(s.a)(Object(s.a)({},n),{},{responseData:e.payload,loading:!1});case p:return Object(s.a)(Object(s.a)({},n),{},{errorMessage:e.payload,loading:!1});default:return n}}}),jn=Object(bn.a)({reducer:fn,middleware:[function(n){return function(e){return function(t){t.type===d&&fetch("https://dl.dropboxusercontent.com/s/jse5lx9xnmcav51/media.json").then((function(n){return n.json()})).then((function(e){return n.dispatch({type:b,payload:e})})).catch((function(e){return n.dispatch(function(n){return{type:p,payload:n}}(e))})),e(t)}}}]}),gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),o(n),i(n)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(a.a,{store:jn,children:Object(w.jsx)(dn,{})})}),document.getElementById("root")),gn()}},[[28,1,2]]]);
//# sourceMappingURL=main.7a9fb3dc.chunk.js.map