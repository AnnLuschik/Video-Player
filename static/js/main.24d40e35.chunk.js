(this["webpackJsonpvideo-player-app"]=this["webpackJsonpvideo-player-app"]||[]).push([[0],{25:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),o=t(10),a=t.n(o),i=t(9),A=(t(25),t(2)),u=t(5),l=t(3),s=t(6),b="GET_DATA_REQUEST",d="GET_DATA_SUCCESS",p="GET_DATA_FAILURE";var j={responseData:null,loading:!1,errorMessage:null};var f,g,O,x,h,v,C,m,k,S=t(1),w=l.a.button(f||(f=Object(A.a)(["\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-top: 10px solid transparent;\n    border-left: 20px solid #ffffff;\n    border-bottom: 10px solid transparent;\n  }\n"]))),Q=function(n){var e=n.onClick;return Object(S.jsx)(w,{onClick:e})},y=l.a.button(g||(g=Object(A.a)(["\n  position: relative;\n  width: 20px;\n  margin: 0 5px;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    border-right: 20px double #ffffff;\n  }\n"]))),B=function(n){var e=n.onClick;return Object(S.jsx)(y,{onClick:e})},R=l.a.div(O||(O=Object(A.a)(["\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  background: #ffffff;\n  cursor: pointer;\n"]))),U=function(n){var e=n.onClick;return Object(S.jsx)(R,{onClick:e})},E=l.a.button(x||(x=Object(A.a)(["\n  width: 22px;\n  height: 22px;\n  background: url(",");\n  cursor: pointer;\n  outline: none;\n  border: none;\n"])),(function(n){return n.bcg})),D=function(n){var e=n.onClick;return Object(S.jsx)(E,{onClick:e,bcg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAaUlEQVR42uyUUQrAIAxDfcP7Xzn7LWrpNiibrPmroLVJGiS1TBwtGekN+lAv+QJYncvnl9cmmH4QgIiB/UVOb4A1gmOW27BvlgZ/c5HZRIYsCt3i3S8NHqepLqarPueiEnnCCQAA//8DAMMZHCeNmkyJAAAAAElFTkSuQmCC"})},F=l.a.div(h||(h=Object(A.a)(["\n  display: flex;\n  align-items: center;\n"]))),T=l.a.div(v||(v=Object(A.a)(["\n  width: 22px;\n  height: 22px;\n  margin: 0 5px;\n  background: url(",");\n  cursor: pointer;\n  outline: none;\n  border: none;\n"])),(function(n){return n.bcg})),q=l.a.input(C||(C=Object(A.a)(["\n  width: 75px;\n  height: 5px;\n"]))),I=function(n){var e=n.onClick,t=Object(r.useState)(1),c=Object(u.a)(t,2),o=c[0],a=c[1],i=Object(r.useCallback)((function(){e(o)}),[e,o]);return Object(S.jsxs)(F,{children:[Object(S.jsx)(q,{type:"range",min:0,max:1,step:.1,onChange:function(n){return a(n.target.value)},onMouseMove:i}),Object(S.jsx)(T,{bcg:o<.1?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAr0lEQVRIie2SMQ7CMAxFC3doxJUQB2KqxNVgqShlaQdghns8lgyW5SoeYiSk/ilykvcUx02z5m8CdMArCn4iJxReXaDhVQUWXAqACzACSdQScAfOFvAAfCzogmDIpTmDU14DXC3BuwRXAgmc1TpZAlfUnRaYxPYD2MkzW/en+LMxq79o0d4jEedvEqiEQ/GdlMe0xx7TEehdzQSOS4Jq0ZLqAi0JEWRJBzzDBGvC8gVH+RUJaT4FzAAAAABJRU5ErkJggg==":o<.6?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAqElEQVRIie2SMQqDMBRARdpNeoKu9S7SAzkJLj2Hs1eoaw/RznW1V3guPyBpsD+SPxR8Swgk731IsmznLwAa4GUlbxFM5ckDvjxpICR3AeAAnGKFV2AMSQOBO/ABypjA+5d8Eehk28cEVMjZs2xHjTtXT7ERF1BNI9xkfahvAJXmHeTsAEzAJWKor+DaNz0CxWb5IlKHAknxI8kDfsQkIJEGeJoFdkyZAR62cbQHZLSiAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA+0lEQVRIie2UsUrDUBhGr6lxCn2A4ixYXOriQ/QRuvcVnAJdXAXbB+jsrFNxEfIGLhaKg2YOuLVQOA79ChJubnNN7yDkW/778YdzArnEmDb/IkAKLEPBJyhB4WUBcAK8As/AWWO4RRABK61mjeF7AXAKdHUeAGtgC/RdwCGQ26AWwQIogAv1qdb3LsHXIfgvwVz1Uf1G/c0lqBU9e66aqyfq3zZ25PgUvrFe470g9wDdaWaaV5qfLsHYQ9IzxhTGmFR9pPlS+xVxX9MYSHS+BjbsrullbUGVpLTvAB9aPXjBqySlXQRkwBMQ/0kg0K1NcNSw+12/BxO0CZofiu+7LJVWcQoAAAAASUVORK5CYII="})]})},M=t(11),J=t.n(M),V=c.a.memo((function(n){var e=n.completed,t=n.onClick;return Object(S.jsx)(K,{onClick:function(n){return t(n.nativeEvent.offsetX)},children:Object(S.jsx)(Z,{completed:e})})}));V.propTypes={completed:J.a.number,onClick:J.a.func};var G,P,X,z,Y,N,L,W,H,K=l.a.div(m||(m=Object(A.a)(["\n  width: 100%;\n  height: 5px;\n  background: #9a9a9a;\n  cursor: pointer;\n"]))),Z=l.a.div(k||(k=Object(A.a)(["\n  width: ","%;\n  height: 100%;\n  background: red;\n"])),(function(n){return n.completed})),_=V,$=function(n){return n<10?"0".concat(n):"".concat(n)},nn=function(n){var e=Math.floor(n);return e/60<1?"0:".concat($(e)):e/3600<1?"".concat(Math.floor(e/60),":").concat($(e%60)):"".concat(Math.floor(e/3600),":").concat($(Math.floor(e%3600/60)),":").concat($(e%3600%60))},en=c.a.memo((function(n){var e,t,c,o=n.url,a=Object(r.useState)(!1),i=Object(u.a)(a,2),A=i[0],l=i[1],s=Object(r.useState)(0),b=Object(u.a)(s,2),d=b[0],p=b[1],j=Object(r.useRef)(null),f=Object(r.useCallback)((function(n){A?n.target.pause():n.target.play()}),[A]),g=Object(r.useCallback)((function(){j.current.pause()}),[]),O=Object(r.useCallback)((function(){j.current.play()}),[]),x=Object(r.useCallback)((function(){j.current.currentTime=0,j.current.play(),l(!0)}),[]),h=Object(r.useCallback)((function(){j.current.requestFullscreen?j.current.requestFullscreen():j.current.mozRequestFullScreen?j.current.mozRequestFullScreen():j.current.webkitRequestFullScreen?j.current.webkitRequestFullScreen():j.current.msRequestFullscreen&&j.current.msRequestFullscreen()}),[]),v=Object(r.useCallback)((function(n){j.current.volume=n}),[]),C=Object(r.useCallback)((function(n){var e=n/j.current.offsetWidth*j.current.duration;p(e),j.current.currentTime=e}),[]);return Object(S.jsxs)(tn,{children:[Object(S.jsx)(rn,{src:o,ref:j,onClick:f,onTimeUpdate:function(){var n;return p(null===(n=j.current)||void 0===n?void 0:n.currentTime.toFixed(2))},onPause:function(){return l(!1)},onPlay:function(){return l(!0)},children:Object(S.jsx)("source",{src:o})}),Object(S.jsxs)(cn,{children:[Object(S.jsx)(_,{completed:d/(null===(e=j.current)||void 0===e?void 0:e.duration)*100||0,onClick:C}),Object(S.jsxs)(on,{children:[A?Object(S.jsx)(B,{onClick:g}):Object(S.jsx)(Q,{onClick:O}),Object(S.jsx)(U,{onClick:x}),Object(S.jsx)(An,{isVisible:null===(t=j.current)||void 0===t?void 0:t.duration,children:"".concat(nn(d)," / ").concat(nn(null===(c=j.current)||void 0===c?void 0:c.duration))})]}),Object(S.jsxs)(an,{children:[Object(S.jsx)(I,{onClick:v}),Object(S.jsx)(D,{onClick:h})]})]})]})})),tn=l.a.div(G||(G=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 320px;\n"]))),rn=l.a.video(P||(P=Object(A.a)(["\n  cursor: pointer;\n"]))),cn=l.a.div(X||(X=Object(A.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: #323232;\n"]))),on=l.a.div(z||(z=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n"]))),an=l.a.div(Y||(Y=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n"]))),An=l.a.p(N||(N=Object(A.a)(["\n  margin-left: 5px;\n  font-size: 1em;\n  color: #ffffff;\n  visibility: ","\n"])),(function(n){return n.isVisible?"visible":"hidden"}));var un=l.a.div(L||(L=Object(A.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),ln=l.a.p(W||(W=Object(A.a)(["\n  font-weight: 800;\n  font-size: 2em;\n"]))),sn=l.a.div(H||(H=Object(A.a)(["\n  font-size: 1.5em;\n  color: red;\n"]))),bn=function(){var n=Object(i.b)(),e=Object(i.c)((function(n){return n.videoPlayer})),t=e.responseData,c=e.loading,o=e.errorMessage,a=Object(r.useState)(""),A=Object(u.a)(a,2),l=A[0],s=A[1];return Object(r.useEffect)((function(){n({type:b})}),[n]),Object(r.useEffect)((function(){t&&s(t.data.find((function(n){return"mp4"===n.format})).url)}),[t]),Object(S.jsxs)(un,{children:[c?Object(S.jsx)(ln,{children:"Loading..."}):null,t?Object(S.jsx)(en,{url:l}):null,o?Object(S.jsx)(sn,{children:o}):null]})},dn=t(17),pn=t(4),jn=Object(pn.b)({videoPlayer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(s.a)(Object(s.a)({},n),{},{loading:!0});case d:return Object(s.a)(Object(s.a)({},n),{},{responseData:e.payload,loading:!1});case p:return Object(s.a)(Object(s.a)({},n),{},{errorMessage:e.payload,loading:!1});default:return n}}}),fn=Object(dn.a)({reducer:jn,middleware:[function(n){return function(e){return function(t){t.type===b&&fetch("https://dl.dropboxusercontent.com/s/jse5lx9xnmcav51/media.json").then((function(n){return n.json()})).then((function(e){return n.dispatch({type:d,payload:e})})).catch((function(e){return n.dispatch(function(n){return{type:p,payload:n}}(e))})),e(t)}}}]}),gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),o(n),a(n)}))};a.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(i.a,{store:fn,children:Object(S.jsx)(bn,{})})}),document.getElementById("root")),gn()}},[[28,1,2]]]);
//# sourceMappingURL=main.24d40e35.chunk.js.map