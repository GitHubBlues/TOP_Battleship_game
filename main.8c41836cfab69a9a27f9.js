(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),l=n.n(i),a=n(667),s=n.n(a),c=new URL(n(961),n.b),d=l()(o()),u=s()(c);d.push([e.id,"*{\n   box-sizing: border-box;\n   color: white;\n}\n\nbody {\n    background-image: url("+u+");\n    /* background-color: #cccccc; */\n   }\n\n.main-title {\n    display: flex;\n    justify-content: center;\n    letter-spacing: .15rem;\n}\n\n.main-instructions {\n    display: flex;\n    justify-content: center;\n    letter-spacing: .2px;\n}\n\n.board-placement {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    border: 2px solid cadetblue;\n    width: 504px;\n    height: 504px;\n    margin-left: 4rem;\n}\n\n.cell-placement {\n    border: 2px solid cadetblue;\n    width: 50px;\n    height: 50px;\n}",""]);const p=d},490:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),l=n.n(i)()(o());l.push([e.id,".main-container{\n    position: relative; /*for positioning modal box*/\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    margin-top: 4rem;\n}   \n\n.board-left,\n.board-right{\n    display: flex;\n    flex-wrap: wrap;\n    border: 2px solid black;\n    width: 504px;\n    height: 504px;\n    box-sizing: border-box;\n    margin: 2rem;\n}\n\n.cell-left,\n.cell-right {\n    display: flex;\n    border: 3px solid  cadetblue; \n    width: 50px;\n    height: 50px;\n    box-sizing: border-box;\n}\n\n.cell-left {\n    opacity: 0.5;\n}",""]);const a=l},350:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),l=n.n(i)()(o());l.push([e.id,".window-won{\n  position: absolute;\n  z-index: 1;\n  background-color: lightgrey;\n  height: 544px;\n  width: 800px;\n  left: calc(50% - 420px);\n  top: -20px;\n  border: 4px solid midnightblue;\n  font-weight: 700;\n}\n\n.window-won-text{\n   display: flex;\n   justify-content: center;\n   font-size: xx-large;\n   color: black;\n   margin: 4rem auto;\n   padding: 10px;\n   padding-top: 2rem;\n}\n\n.window-won-btn{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: lightsteelblue;\n    color: black;\n    border: 2px solid midnightblue;\n    margin: auto;\n} ",""]);const a=l},701:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),l=n.n(i)()(o());l.push([e.id,".left-container {\n    display: flex;\n    flex-direction: column;\n    width: 420px;\n}\n\n.ship-container.vert {\n    display: flex;\n    flex-direction: row;\n    padding: 30px 15px;\n}\n\n.ship-container.horiz {\n    display: flex;\n    flex-direction: column;\n    padding: 20px 30px 20px 30px; \n}\n\n.button-container {\n    display: flex;\n    padding: 15px;\n    justify-content: left;\n    margin-top: 20px;\n}\n\nbutton {\n   border: 2px solid grey;\n   height: 40px;\n   width: 150px;\n   border-radius: 10px;\n   color: darkblue;\n   font-size: large;\n   font-weight: 600;\n} \n\n.horizontal {\n    height: 50px;   \n    background-color: lightseagreen; \n    margin: 12px;\n}\n\n.vertical  {\n    width: 50px;   \n    background-color: lightseagreen; \n    margin: 12px;\n}\n\n.ship-01.horizontal {\n    width: 250px;\n}\n\n.ship-02.horizontal {\n    width: 200px;\n}\n\n.ship-03.horizontal {\n    width: 150px;\n}\n\n.ship-04.horizontal {\n    width: 150px;\n}\n\n.ship-05.horizontal {\n    width: 100px;\n}\n\n.ship-01.vertical {\n    height: 250px;\n}\n\n.ship-02.vertical {\n    height: 200px;\n}\n\n.ship-03.vertical {\n    height: 150px;\n}\n\n.ship-04.vertical {\n    height: 150px;\n}\n\n.ship-05.vertical {\n    height: 100px;\n}",""]);const a=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(l[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&l[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},l=[],a=0;a<e.length;a++){var s=e[a],c=r.base?s[0]+r.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var g=o(h,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:g,references:1})}l.push(u)}return l}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var a=n(i[l]);t[a].references--}for(var s=r(e,o),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},961:(e,t,n)=>{e.exports=n.p+"0f7a87ed53b2bd4b22c6.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/TOP_Battleship_game/",n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),l=n.n(i),a=n(565),s=n.n(a),c=n(216),d=n.n(c),u=n(589),p=n.n(u),h=n(424),g={};function f(){const e=document.querySelector(".ship-container"),t=document.querySelectorAll(".horizontal"),n=document.querySelectorAll(".vertical");t.length>0?(t.forEach((e=>e.classList.remove("horizontal"))),t.forEach((e=>e.classList.add("vertical"))),e.classList.remove("horiz"),e.classList.add("vert")):n.length>0&&(n.forEach((e=>e.classList.remove("vertical"))),n.forEach((e=>e.classList.add("horizontal"))),e.classList.remove("vert"),e.classList.add("horiz"))}function m(){const e=new Array(100).fill(0),t=new Array(100).fill(0);let n=[],r=1;return{gbShips:e,gbProgress:t,dbShips:n,placeShip:function(t){for(let n=0;n<t.length;n++)e[t[n]]=r;n.push(function(e){return{length:e.length,coord:e,hitStatus:new Array(e.length).fill(!1),hit(e){return this.hitStatus[e]=!0,this.hitStatus},isSunk(){return!this.hitStatus.includes(!1)}}}(t)),r+=1},receiveAttack:function(e){const t=e,n=this.gbShips[t];if(n>0&&n<1e3){const e=this.dbShips[n-1],r=e.coord.findIndex((e=>e==t));e.hit(r),this.gbProgress[t]=1e3}else this.gbProgress[t]=-99},allSunk:function(e){return!0!==e.some((e=>!1===e.isSunk()))}}}g.styleTagTransform=p(),g.setAttributes=s(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var v=n(490),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=l().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),t()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var x=n(350),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=l().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=d(),t()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;const w=(()=>{let e=[5,4,3,3,2],t=[];function n(e){return e.filter((e=>t.includes(e))).length>0&&(e=!1),e}function r(t){let n=[];for(let r=0;r<e[0];r++){let e=t-10*r;e>=0&&n.push(e)}return n.length==e[0]&&n}function o(t){let n=[];for(let r=0;r<e[0];r++){let e=t+10*r;e<=99&&n.push(e)}return n.length==e[0]&&n}function i(t){let n=[];for(let r=0;r<e[0];r++){let e=t-1*r;(Math.floor(10*e/100)==Math.floor(10*t/100)||t<10&&e>=0)&&n.push(e)}return n.length==e[0]&&n}function l(t){let n=[];for(let r=0;r<e[0];r++){let e=t+1*r;(Math.floor(10*e/100)==Math.floor(10*t/100)||t<10&&e<10)&&n.push(e)}return n.length==e[0]&&n}return{doPlacement:function(a){let s=a;do{let a,c=[],d=Math.floor(99*Math.random());if(a=r(d),a&&(a=n(a)),a&&c.push(a),a=o(d),a&&(a=n(a)),a&&c.push(a),a=i(d),a&&(a=n(a)),a&&c.push(a),a=l(d),a&&(a=n(a)),a&&c.push(a),c.length>0){let n=Math.floor(Math.random()*c.length);t.push(...c[n]),s.placeShip(c[n]),e.splice(0,1)}console.log(s)}while(e.length>0)}}})(),L=(()=>{const e=function(e){let t=[];for(let n=0;n<100;n++)0==e[n]&&t.push(n);return t[Math.floor(Math.random()*t.length)]},t=m(),n=m();let r;function o(t){let r;"A"==t&&(r=e(n.gbProgress),n.receiveAttack(r),n.allSunk(n.dbShips)&&i("A"),document.querySelectorAll(".cell-left"),t="B")}function i(e){console.log(e+"won"),function(e){const t=document.querySelector(".main-container"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("button");n.classList.add("window-won"),r.classList.add("window-won-text"),o.classList.add("window-won-btn"),n.appendChild(r),n.appendChild(o),t.appendChild(n),r.innerText="A"==e?"Bad news capitain, the bot won!":"Capitain, you won! Congratulations!",o.innerText="Play again",o.addEventListener("click",(()=>{document.querySelector(".main-container").innerHTML="",A(),location.reload(!0)}))}(e)}return{startGame:function(){!function(){const e=document.querySelectorAll(".cell-placement"),t=["sh-1","sh-2","sh-3","sh-4","sh-5"];let r;for(let o=0;o<5;o++)console.log(o),r=[],e.forEach(((e,n)=>{e.classList.contains(t[o])&&r.push(n)})),n.placeShip(r)}(),document.querySelector(".main-container").innerHTML="",w.doPlacement(t),function(){const e=document.querySelector(".main-container");document.querySelector(".main-instructions").innerText="Start shooting at the enemy!";const t=document.createElement("div"),n=document.createElement("div");t.classList.add("board-left"),n.classList.add("board-right");for(let e=0;e<100;e++){let n=document.createElement("div");n.classList.add("cell-left"),n.classList.add("cell-"+e.toString()),t.appendChild(n)}console.log(t);for(let e=0;e<100;e++){let t=document.createElement("div");t.classList.add("cell-right"),t.classList.add("cell-"+e.toString()),n.appendChild(t),t.addEventListener("click",L.clickForAttack)}e.appendChild(t),console.log(e),e.appendChild(n),console.log(e)}(),r="A",o(r)},clickForAttack:function(e){const n=document.querySelectorAll(".cell-right");if(r="B"){const l=e.target.classList[1].split("-")[1];t.receiveAttack(l),0==t.gbProgress[l]||(-99==t.gbProgress[l]?n[l].style.background="slategrey":1e3==t.gbProgress[l]&&(n[l].style.background="orange")),t.allSunk(t.dbShips)&&i("B"),r="A",o(r)}}}})(),S=(()=>{let e,t=[],n=[],r=[],o=[],i=[],l=1;function a(){return e.classList.contains("ship-01")?5:e.classList.contains("ship-02")?4:e.classList.contains("ship-03")||e.classList.contains("ship-04")?3:e.classList.contains("ship-05")?2:void 0}function s(){const e=document.querySelectorAll(".cell-placement");for(let t=0;t<=99;t++)e[t].classList.contains("has-ship")?e[t].style.backgroundColor="lightseagreen":e[t].style.backgroundColor="transparent"}function c(e){let t=[];t.push(e);for(let n=1;n<=r.length;n++)t.push(e-10*n);for(let n=1;n<=o.length;n++)t.push(e+10*n);return t}function d(e){u(e);let r=[];r.push(e);for(let n=1;n<=t.length;n++)r.push(e-n);for(let t=1;t<=n.length;t++)r.push(e+t);return r}function u(e){let t=[],n=Math.floor(e/10);for(let e=0;e<10;e++)t.push(10*n+e);return t}function p(e,t,n){for(let n=0;n<e.length;n++){let r=document.querySelector(".cell-place-"+e[n].toString());if(r.classList.contains("has-ship"))return void(r.style.backgroundColor=t)}for(let t=0;t<e.length;t++)document.querySelector(".cell-place-"+e[t].toString()).style.backgroundColor=n}function h(e,t){for(let n=0;n<e.length;n++){let r=document.querySelector(".cell-place-"+e[n].toString());r.classList.add("has-ship"),r.classList.add(t),i.push(e[n])}}return{dragStart:function(i){e=i.target;let l=i.pageX,a=i.pageY;i.target.style.opacity=.5,i.dataTransfer.setData("text/plain",i.target.id),function(e,i,l){let a,s=e.getBoundingClientRect(),c=function(e){const t=e.getBoundingClientRect();return{left:t.left+window.scrollX,top:t.top+window.scrollY}}(e).top;if(t=[],n=[],r=[],o=[],50==s.width){a=s.height/50;for(let e=1;e<a;e++)l+50*e<c+s.height&&o.push(1),l-50*e>c&&r.push(1)}else if(50==s.height){const e=s.width/50;for(let r=1;r<e;r++)i+50*r<s.right&&n.push(1),i-50*r>s.left&&t.push(1)}}(e,l,a)},dragEnd:function(e){e.target.style.opacity="",s()},dragEnter:function(e){let i;if(s(),e.target.classList.contains("dropzone")){let l=Number(e.target.classList[2].split("-")[2]);if(t.length+n.length==0)l-10*r.length>-1&&l+10*o.length<100&&(i=c(l),p(i,"red","papayawhip"));else if(r.length+o.length==0){let e=u(l);e.includes(l-t.length)&&e.includes(l+n.length)&&(i=d(l),p(i,"red","papayawhip"))}else p(i,"red","transparent")}},dragDrop:function(s){s.preventDefault(),console.log(s);const g=document.querySelector(".ship-container");if(s.target.classList.contains("dropzone")&&(t.length+n.length==0?function(t){let n,s=Number(t.target.classList[2].split("-")[2]);if(s-10*r.length>-1&&s+10*o.length<100&&(n=c(s),n.length==a())){for(let e=0;e<n.length;e++)if(i.includes(n[e]))return;p(n,"red","lightseagreen"),h(n,"sh-"+l.toString()),e.remove(),l+=1}}(s):r.length+o.length==0&&function(r){let o,s=Number(r.target.classList[2].split("-")[2]),c=u(s);if(c.includes(s-t.length)&&c.includes(s+n.length)&&(o=d(s),o.length==a())){for(let e=0;e<o.length;e++)if(i.includes(o[e]))return;p(o,"red","lightseagreen"),h(o,"sh-"+l.toString()),e.remove(),l+=1}}(s),0==g.childNodes.length)){const e=document.querySelector(".button");e.innerHTML="start game",e.removeEventListener("click",f),e.addEventListener("click",L.startGame)}},dragOver:function(e){e.preventDefault()},draggedShip:e}})();var E=n(701),k={};function A(){const e=document.querySelector(".main-container"),t=document.createElement("div");t.classList.add("left-container");const n=document.createElement("div");n.classList.add("button-container");const r=document.createElement("div");r.classList.add("ship-container");const o=document.createElement("button");o.classList.add("button"),o.innerHTML="rotate ships",o.addEventListener("click",f),n.appendChild(o),t.appendChild(n),t.appendChild(r),e.appendChild(t);const i=document.createElement("div");i.classList.add("board-placement");for(let e=0;e<100;e++){let t=document.createElement("div");t.classList.add("cell-placement"),t.classList.add("dropzone"),t.classList.add("cell-place-"+e.toString()),i.appendChild(t)}e.appendChild(i),i.addEventListener("dragover",S.dragOver),i.addEventListener("dragenter",S.dragEnter),i.addEventListener("drop",S.dragDrop),function(e){for(let t=0;t<=4;t++){const n=e,r=document.createElement("div");r.setAttribute("draggable","true"),r.classList.add("horizontal"),0==t&&r.classList.add("ship-01"),1==t&&r.classList.add("ship-02"),2==t&&r.classList.add("ship-03"),3==t&&r.classList.add("ship-04"),4==t&&r.classList.add("ship-05"),r.addEventListener("dragstart",S.dragStart,!1),r.addEventListener("dragend",S.dragEnd,!1),n.appendChild(r)}}(r)}k.styleTagTransform=p(),k.setAttributes=s(),k.insert=l().bind(null,"head"),k.domAPI=o(),k.insertStyleElement=d(),t()(E.Z,k),E.Z&&E.Z.locals&&E.Z.locals,A()})()})();