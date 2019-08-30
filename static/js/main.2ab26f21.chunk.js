(window["webpackJsonpreact-tetris"]=window["webpackJsonpreact-tetris"]||[]).push([[0],{15:function(t,n,e){t.exports=e(26)},20:function(t,n,e){},26:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),c=e(8),a=e.n(c),i=(e(20),e(1)),u=function(){return Array.from(Array(20),function(){return new Array(12).fill([0,"clear"])})},l=function(t,n,e){for(var r=e.x,o=e.y,c=0;c<t.tetromino.length;c++)for(var a=0;a<t.tetromino.length;a++)if(0!==t.tetromino[c][a]&&(!n[c+t.pos.y+o]||!n[c+t.pos.y+o][a+t.pos.x+r]||"clear"!==n[c+t.pos.y+o][a+t.pos.x+r][1]))return!0},f=e(2),s=e(3),d=e(9),p=e.n(d);function b(){var t=Object(f.a)(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\tpadding: 40px;\n\tmargin: 0 auto;\n\tmax-width: 900px;\n\n\taside {\n\t\twidth: 100%;\n\t\tmax-width: 200px;\n\t\tdisplay: block;\n\t\tpadding: 0 20px;\n\t}\n"]);return b=function(){return t},t}function m(){var t=Object(f.a)(["\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: url(",") #000;\n\tbackground-size: cover;\n\toverflow: hidden;\n"]);return m=function(){return t},t}var v=s.a.div(m(),p.a),O=s.a.div(b());var g=e(12),x={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],[0,"S","S"],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},h=function(){var t="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return x[t]};function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}var j=function(){var t=Object(r.useState)({pos:{x:0,y:0},tetromino:x[0].shape,collided:!1}),n=Object(i.a)(t,2),e=n[0],o=n[1],c=function(t,n){var e=t.map(function(n,e){return t.map(function(t){return t[e]})});return n>0?e.map(function(t){return t.reverse()}):e.reverse()},a=Object(r.useCallback)(function(){o({pos:{x:4,y:0},tetromino:h().shape,collided:!1})},[]);return[e,function(t){var n=t.x,e=t.y,r=t.collided;o(function(t){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(e,!0).forEach(function(n){Object(g.a)(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({},t,{pos:{x:t.pos.x+=n,y:t.pos.y+=e},collided:r})})},a,function(t,n){var r=JSON.parse(JSON.stringify(e));r.tetromino=c(r.tetromino,n);for(var a=r.pos.x,i=1;l(r,t,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return c(r.tetromino,-n),void(r.pos.x=a);o(r)}]},w=function(t,n){var e=Object(r.useState)(u()),o=Object(i.a)(e,2),c=o[0],a=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),s=f[0],d=f[1];return Object(r.useEffect)(function(){d(0);var e=function(e){var r=e.map(function(t){return t.map(function(t){return"clear"===t[1]?[0,"clear"]:t})});return t.tetromino.forEach(function(n,e){n.forEach(function(n,o){0!==n&&(r[e+t.pos.y][o+t.pos.x]=[n,"".concat(t.collided?"merged":"clear")])})}),t.collided?(n(),function(t){return t.reduce(function(n,e){return-1===e.findIndex(function(t){return 0===t[0]})?(d(function(t){return t+1}),n.unshift(new Array(t[0].length).fill([0,"clear"])),n):(n.push(e),n)},[])}(r)):r};a(function(t){return e(t)})},[t,n]),[c,a,s]};function E(){var t=Object(f.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: repeat(\n\t\t",",\n\t\tcalc(25vw / ",")\n\t);\n\tgrid-template-columns: repeat(",", 1fr);\n\tgrid-gap: 1px;\n\tborder: 2px solid #333;\n\twidth: 100%;\n\tmax-width: 25vw;\n\tbackground: #111;\n"]);return E=function(){return t},t}var S=s.a.div(E(),function(t){return t.height},function(t){return t.width},function(t){return t.width});function k(){var t=Object(f.a)(["\n\twidth: auto;\n\tbackground: rgba(",", 0.8);\n\tborder: ",";\n\tborder-bottom-color: rgba(",", 0.1);\n\tborder-right-color: rgba(",", 1);\n\tborder-top-color: rgba(",", 1);\n\tborder-left-color: rgba(",", 0.3);\n"]);return k=function(){return t},t}var I=s.a.div(k(),function(t){return t.color},function(t){return 0===t.type?"0px solid":"3px solid"},function(t){return t.color},function(t){return t.color},function(t){return t.color},function(t){return t.color}),J=o.a.memo(function(t){var n=t.type;return o.a.createElement(I,{type:n,color:x[n].color})}),P=function(t){var n=t.stage;return o.a.createElement(S,{width:n[0].length,height:n.length},n.map(function(t){return t.map(function(t,n){return o.a.createElement(J,{key:n,type:t[0]})})}))};function L(){var t=Object(f.a)(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tborder: 4px solid #333;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tcolor: ",";\n\tbackground: #000;\n\tfont-family: Pixel, Arial, Helvetica, sans-serif;\n\tfont-size: 0.8rem;\n"]);return L=function(){return t},t}var A=s.a.div(L(),function(t){return t.gameOver?"red":"#999"}),T=function(t){t.gameOver;var n=t.text;return o.a.createElement(A,null,n)};function Z(){var t=Object(f.a)(["\n\tbox-sizing: border-box;\n\tmargin: 0 0 20px 0;\n\tpadding: 20px;\n\tmin-height: 30px;\n\twidth: 100%;\n\tborder-radius: 20px;\n\tborder: none;\n\tcolor: white;\n\tbackground: #333;\n\tfont-family: Pixel, Arial, Helvetica, sans-serif;\n\tfont-size: 1rem;\n\toutline: none;\n\tcursor: pointer;\n\n\t&::selection {\n\t\tbackground: transparent;\n\t}\n"]);return Z=function(){return t},t}var z=s.a.div(Z()),C=function(t){var n=t.callback;return o.a.createElement(z,{onClick:n},"Start Game")},D=function(){var t=Object(r.useState)(null),n=Object(i.a)(t,2),e=n[0],c=n[1],a=Object(r.useState)(!1),f=Object(i.a)(a,2),s=f[0],d=f[1],p=j(),b=Object(i.a)(p,4),m=b[0],g=b[1],x=b[2],h=b[3],y=w(m,x),E=Object(i.a)(y,3),S=E[0],k=E[1],I=function(t){var n=Object(r.useState)(0),e=Object(i.a)(n,2),o=e[0],c=e[1],a=Object(r.useState)(0),u=Object(i.a)(a,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],b=d[1],m=[40,100,300,1200],v=Object(r.useCallback)(function(){t>0&&(c(function(n){return n+m[t-1]*p}),f(function(n){return n+t}))},[p,m,t]);return Object(r.useEffect)(function(){v()},[v,t,o]),[o,c,l,f,p,b]}(E[2]),J=Object(i.a)(I,6),L=J[0],A=J[1],Z=J[2],z=J[3],D=J[4],N=J[5],G=function(t){l(m,S,{x:t,y:0})||g({x:t,y:0})},H=function(){Z>10*(D+1)&&(N(function(t){return t+1}),c(1e3/(D+1)+200)),l(m,S,{x:0,y:1})?(m.pos.y<1&&(d(!0),c(null)),g({x:0,y:0,collided:!0})):g({x:0,y:1,collided:!1})},K=function(t){var n=t.keyCode;s||(37===n?G(-1):39===n?G(1):40===n?(c(null),H()):38===n&&h(S,1))};return function(t,n){var e=Object(r.useRef)();Object(r.useEffect)(function(){e.current=t},[t]),Object(r.useEffect)(function(){if(null!==n){var t=setInterval(function(){e.current()},n);return function(){clearInterval(t)}}},[n])}(function(){H()},e),o.a.createElement(v,{role:"button",tabIndex:"0",onKeyDown:function(t){return K(t)},onKeyUp:function(t){var n=t.keyCode;s||40===n&&c(1e3/(D+1)+200)}},o.a.createElement(O,null,o.a.createElement(P,{stage:S}),o.a.createElement("aside",null,s?o.a.createElement(T,{gameOver:s,text:"Game Over - Score: ".concat(L)}):o.a.createElement("div",null,o.a.createElement(T,{text:"Score: ".concat(L)}),o.a.createElement(T,{text:"Rows: ".concat(Z)}),o.a.createElement(T,{text:"Level: ".concat(D)})),o.a.createElement(C,{callback:function(){k(u()),c(1e3),x(),d(!1),A(0),z(0),N(1)}}))))},N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(D,null))};a.a.render(o.a.createElement(N,null),document.getElementById("root"))},9:function(t,n,e){t.exports=e.p+"static/media/bg.2810fe6b.png"}},[[15,1,2]]]);
//# sourceMappingURL=main.2ab26f21.chunk.js.map