(this["webpackJsonpvideo-player-app"]=this["webpackJsonpvideo-player-app"]||[]).push([[0],{25:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),a=t(10),o=t.n(a),i=t(9),A=(t(25),t(2)),u=t(5),l=t(3),s=t(6),b="GET_DATA_REQUEST",d="GET_DATA_SUCCESS",p="GET_DATA_FAILURE";var j={responseData:null,loading:!1,errorMessage:null};var f,g,O,x,h,v,C,m,k,S=t(1),Q=l.a.button(f||(f=Object(A.a)(["\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-top: 10px solid transparent;\n    border-left: 20px solid #ffffff;\n    border-bottom: 10px solid transparent;\n  }\n"]))),w=function(n){var e=n.onClick;return Object(S.jsx)(Q,{onClick:e})},y=l.a.button(g||(g=Object(A.a)(["\n  position: relative;\n  width: 20px;\n  margin: 0 5px;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    border-right: 20px double #ffffff;\n  }\n"]))),B=function(n){var e=n.onClick;return Object(S.jsx)(y,{onClick:e})},U=l.a.div(O||(O=Object(A.a)(["\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  background: #ffffff;\n  cursor: pointer;\n"]))),E=function(n){var e=n.onClick;return Object(S.jsx)(U,{onClick:e})},D=l.a.button(x||(x=Object(A.a)(["\n  width: 22px;\n  height: 22px;\n  background: url(",");\n  cursor: pointer;\n  outline: none;\n  border: none;\n"])),(function(n){return n.bcg})),R=function(n){var e=n.onClick;return Object(S.jsx)(D,{onClick:e,bcg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAaUlEQVR42uyUUQrAIAxDfcP7Xzn7LWrpNiibrPmroLVJGiS1TBwtGekN+lAv+QJYncvnl9cmmH4QgIiB/UVOb4A1gmOW27BvlgZ/c5HZRIYsCt3i3S8NHqepLqarPueiEnnCCQAA//8DAMMZHCeNmkyJAAAAAElFTkSuQmCC"})},I=l.a.div(h||(h=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]))),T=l.a.div(v||(v=Object(A.a)(["\n  width: 25px;\n  height: 22px;\n  margin: 0 5px;\n  background: url(",");\n  cursor: pointer;\n  outline: none;\n  border: none;\n"])),(function(n){return n.bcg})),J=l.a.input(C||(C=Object(A.a)(["\n  width: 75px;\n  height: 5px;\n"]))),V=function(n){var e=n.onClick,t=Object(c.useState)(1),r=Object(u.a)(t,2),a=r[0],o=r[1],i=Object(c.useCallback)((function(){e(a)}),[e,a]);return Object(S.jsxs)(I,{children:[Object(S.jsx)(J,{type:"range",min:0,max:1,step:.1,onChange:function(n){return o(n.target.value)},onClick:i}),Object(S.jsx)(T,{bcg:a<.1?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAr0lEQVRIie2SMQ7CMAxFC3doxJUQB2KqxNVgqShlaQdghns8lgyW5SoeYiSk/ilykvcUx02z5m8CdMArCn4iJxReXaDhVQUWXAqACzACSdQScAfOFvAAfCzogmDIpTmDU14DXC3BuwRXAgmc1TpZAlfUnRaYxPYD2MkzW/en+LMxq79o0d4jEedvEqiEQ/GdlMe0xx7TEehdzQSOS4Jq0ZLqAi0JEWRJBzzDBGvC8gVH+RUJaT4FzAAAAABJRU5ErkJggg==":a<.6?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAqElEQVRIie2SMQqDMBRARdpNeoKu9S7SAzkJLj2Hs1eoaw/RznW1V3guPyBpsD+SPxR8Swgk731IsmznLwAa4GUlbxFM5ckDvjxpICR3AeAAnGKFV2AMSQOBO/ABypjA+5d8Eehk28cEVMjZs2xHjTtXT7ERF1BNI9xkfahvAJXmHeTsAEzAJWKor+DaNz0CxWb5IlKHAknxI8kDfsQkIJEGeJoFdkyZAR62cbQHZLSiAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA+0lEQVRIie2UsUrDUBhGr6lxCn2A4ixYXOriQ/QRuvcVnAJdXAXbB+jsrFNxEfIGLhaKg2YOuLVQOA79ChJubnNN7yDkW/778YdzArnEmDb/IkAKLEPBJyhB4WUBcAK8As/AWWO4RRABK61mjeF7AXAKdHUeAGtgC/RdwCGQ26AWwQIogAv1qdb3LsHXIfgvwVz1Uf1G/c0lqBU9e66aqyfq3zZ25PgUvrFe470g9wDdaWaaV5qfLsHYQ9IzxhTGmFR9pPlS+xVxX9MYSHS+BjbsrullbUGVpLTvAB9aPXjBqySlXQRkwBMQ/0kg0K1NcNSw+12/BxO0CZofiu+7LJVWcQoAAAAASUVORK5CYII="})]})},G=t(12),M=t.n(G),F=r.a.memo((function(n){var e=n.completed;return Object(S.jsx)(H,{children:Object(S.jsx)(W,{completed:e})})}));F.propTypes={completed:M.a.number};var P,X,Y,N,q,L,z,H=l.a.div(m||(m=Object(A.a)(["\n  width: 100%;\n  height: 5px;\n  background: #9a9a9a;\n"]))),W=l.a.div(k||(k=Object(A.a)(["\n  width: ","%;\n  height: 100%;\n  background: red;\n"])),(function(n){return n.completed})),K=F,Z=function(n){return n<10?"0".concat(n):"".concat(n)},_=function(n){var e=Math.floor(n);return e/60<1?"0:".concat(Z(e)):e/3600<1?"".concat(Math.floor(e/60),":").concat(Z(e%60)):"".concat(Math.floor(e/3600),":").concat(Z(Math.floor(e%3600/60)),":").concat(Z(e%3600%60))},$=r.a.memo((function(n){var e,t,r,a=n.url,o=Object(c.useState)(!1),i=Object(u.a)(o,2),A=i[0],l=i[1],s=Object(c.useState)(0),b=Object(u.a)(s,2),d=b[0],p=b[1],j=Object(c.useRef)(null),f=Object(c.useCallback)((function(n){A?n.target.pause():n.target.play()}),[A]),g=Object(c.useCallback)((function(){j.current.pause()}),[]),O=Object(c.useCallback)((function(){j.current.play()}),[]),x=Object(c.useCallback)((function(){j.current.currentTime=0,j.current.play(),l(!0)}),[]),h=Object(c.useCallback)((function(){j.current.requestFullscreen()}),[]),v=Object(c.useCallback)((function(n){j.current.volume=n}),[]);return Object(S.jsxs)(nn,{children:[Object(S.jsx)(en,{src:a,ref:j,onClick:f,onTimeUpdate:function(){var n;return p(null===(n=j.current)||void 0===n?void 0:n.currentTime.toFixed(2))},onPause:function(){return l(!1)},onPlay:function(){return l(!0)}}),Object(S.jsx)(K,{completed:d/(null===(e=j.current)||void 0===e?void 0:e.duration)*100}),Object(S.jsxs)(tn,{children:[Object(S.jsxs)(cn,{children:[A?Object(S.jsx)(B,{onClick:g}):Object(S.jsx)(w,{onClick:O}),Object(S.jsx)(E,{onClick:x}),Object(S.jsx)(an,{isVisible:null===(t=j.current)||void 0===t?void 0:t.duration,children:"".concat(_(d)," / ").concat(_(null===(r=j.current)||void 0===r?void 0:r.duration))})]}),Object(S.jsxs)(rn,{children:[Object(S.jsx)(V,{onClick:v}),Object(S.jsx)(R,{onClick:h})]})]})]})})),nn=l.a.div(P||(P=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 350px;\n"]))),en=l.a.video(X||(X=Object(A.a)(["\n  cursor: pointer;\n"]))),tn=l.a.div(Y||(Y=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5% 3%;\n  background: #323232;\n"]))),cn=l.a.div(N||(N=Object(A.a)(["\n  min-width: 25%;\n  display: flex;\n  justify-content: space-between;\n"]))),rn=l.a.div(q||(q=Object(A.a)(["\n  min-width: 10%;\n  display: flex;\n  justify-content: space-between;\n"]))),an=l.a.p(L||(L=Object(A.a)(["\n  margin-left: 5px;\n  color: #ffffff;\n  visibility: ","\n"])),(function(n){return n.isVisible?"visible":"hidden"}));var on=l.a.div(z||(z=Object(A.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),An=function(){var n=Object(i.b)(),e=Object(i.c)((function(n){return n.videoPlayer})).responseData,t=Object(c.useState)(""),r=Object(u.a)(t,2),a=r[0],o=r[1];return Object(c.useEffect)((function(){n({type:b})}),[n]),Object(c.useEffect)((function(){e&&o(e.data.find((function(n){return"mp4"===n.format})).url)}),[e]),Object(S.jsx)(on,{children:e?Object(S.jsx)($,{url:a}):null})},un=t(17),ln=t(4),sn=Object(ln.b)({videoPlayer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(s.a)(Object(s.a)({},n),{},{loading:!0});case d:return Object(s.a)(Object(s.a)({},n),{},{responseData:e.payload,loading:!1});case p:return Object(s.a)(Object(s.a)({},n),{},{errorMessage:e.payload,loading:!1});default:return n}}}),bn=Object(un.a)({reducer:sn,middleware:[function(n){return function(e){return function(t){t.type===b&&fetch("https://dl.dropboxusercontent.com/s/jse5lx9xnmcav51/media.json").then((function(n){return n.json()})).then((function(e){return n.dispatch({type:d,payload:e})})).catch((function(e){return n.dispatch(function(n){return{type:p,payload:n}}(e))})),e(t)}}}]}),dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),a(n),o(n)}))};o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(i.a,{store:bn,children:Object(S.jsx)(An,{})})}),document.getElementById("root")),dn()}},[[28,1,2]]]);
//# sourceMappingURL=main.276a9c37.chunk.js.map