!function(){"use strict";var t={7384:function(t,e,n){n.d(e,{m:function(){return c}});let o,s,i=1,r=10,l=0,a=[],d=0;function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;var n,c;o=document.createElement("div"),o.style.position="fixed",o.style.pointerEvents="auto",o.style.zIndex=(n=document.querySelectorAll("*"),c=-1,n.forEach((function(t){var e=window.getComputedStyle(t).getPropertyValue("z-index");e=parseInt(e,10),!isNaN(e)&&e>c&&(c=e)})),c+"10"),o.style.left="0",o.style.right="0",o.style.bottom="0",o.style.top="0",o.style.display="flex",o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="center",o.style.backgroundColor="#00000080",window.addEventListener("wheel",y,{passive:!1}),i=1,r=10,l=0,d=0,a=t,d=e,p(t[e]),o.innerHTML='\n  <style>\n    .my-show-mask-close{\n      position: absolute;\n      z-index: 9;\n      top: 5%;\n      right: 5%;\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background: #606266;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor:pointer;\n    }\n    .my-show-mask-box{\n      position: absolute;\n      z-index: 9;\n      display: flex;\n      bottom: 8%;\n      border-radius: 20px;\n      background-color: #606266;\n      height: 44px;\n      width: 282px;\n      justify-content: space-evenly;\n      align-items: center;\n    }\n    .my-show-mask-box>div{\n      color:#fff;\n      font-style: normal;\n      font-weight: 400;\n      font-size: 23px;\n      align-items: center;\n      cursor:pointer;\n      display: flex;\n    }\n    .my-show-mask-box>.my-show-mask-box-reduce{\n     padding-top: 5px;\n    }\n    .my-show-mask-box>.my-show-mask-box-amplify{\n     padding-top: 5px;\n    }\n    .my-show-mask-box>.my-show-mask-box-rotate-left{\n     border-radius: 50%;\n     position: relative;\n     width: 20px;\n     height: 20px;\n     border: 2px solid #fff;\n    }\n    .my-show-mask-box>.my-show-mask-box-rotate-left::after{\n     content: \'\';\n     position: absolute;\n     z-index: 2;\n     transform: rotate(65deg);\n     left: -3px;\n     top: -1px;\n     border-right: 2px solid #fff;\n     width: 5px;\n     height: 5px;\n     border-bottom: 2px solid #fff;\n    }\n    .my-show-mask-box>.my-show-mask-box-rotate-left::before{\n     content: \'\';\n     position: absolute;\n     width: 12px;\n     height: 7px;\n     top: 5px;\n     left: -6px;\n     background-color: #606266;\n    }\n\n    .my-show-mask-box>.my-show-mask-box-rotate-right{\n     border-radius: 50%;\n     position: relative;\n     width: 20px;\n     height: 20px;\n     border: 2px solid #fff;\n    }\n    .my-show-mask-box>.my-show-mask-box-rotate-right::after{\n     content: \'\';\n     position: absolute;\n     z-index: 2;\n     transform: rotate(19deg);\n     right: -3px;\n     top: 0px;\n     border-right: 2px solid #fff;\n     width: 5px;\n     height: 5px;\n     border-bottom: 2px solid #fff;\n    }\n    .my-show-mask-box>.my-show-mask-box-rotate-right::before{\n     content: \'\';\n     position: absolute;\n     width: 12px;\n     height: 7px;\n     top: 5px;\n     right: -6px;\n     background-color: #606266;\n    }\n    .my-show-mask-switch{\n     position: absolute;\n     z-index: 10;\n     font-size: 31px;\n     color: #fff;\n     font-family: cursive, sans-serif;\n     font-weight: 400;\n     border-radius: 50%;\n     width: 50px;\n     height: 50px;\n     background-color: #606266;\n     text-align: center;\n     line-height: 50px;\n     top: 50%;\n     transform: translateY(-50%);\n     cursor: pointer;\n     -webkit-user-select:none;\n     -moz-user-select:none;\n     -ms-user-select:none;\n     user-select:none;\n    }\n    .my-show-mask-switch-left{\n     left: 40px;\n    }\n    .my-show-mask-switch-right{\n     right: 40px;\n    }\n  </style>\n  <div class=\'my-show-mask-close\'>\n    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">\n      <line x1="0" y1="0" x2="18" y2="18" stroke="white" stroke-width="2.3" />\n      <line x1="0" y1="18" x2="18" y2="0" stroke="white" stroke-width="2.3" />\n    </svg>\n  </div>\n  <div class=\'my-show-mask-switch my-show-mask-switch-right\'>\n    >\n  </div>  \n  <div class=\'my-show-mask-switch my-show-mask-switch-left\'>\n    <\n  </div> \n\n  <div class=\'my-show-mask-box\'>\n   <div class="my-show-mask-box-amplify">\n    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="10" cy="10" r="9" stroke="white" fill="none" stroke-width="2" />\n      <line x1="6" y1="10" x2="14" y2="10" stroke="white" stroke-width="2" />\n      \x3c!-- 垂直线 --\x3e\n      <line x1="10" y1="6" x2="10" y2="14" stroke="white" stroke-width="2" />\n      <line x1="16" y1="17" x2="20" y2="20" stroke="white" stroke-width="2" />\n    </svg>\n   </div>\n\n   <div class="my-show-mask-box-reduce">\n    <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="10" cy="10" r="9" stroke="white" fill="none" stroke-width="2" />\n      <line x1="6" y1="10" x2="14" y2="10" stroke="white" stroke-width="2" />\n      <line x1="16" y1="17" x2="20" y2="20" stroke="white" stroke-width="2" />\n    </svg>\n   </div>\n   <div class=\'my-show-mask-box-rotate-left\'>\n   </div>\n   <div class=\'my-show-mask-box-rotate-right\'>\n   </div>\n  </div>\n ',Array.from(o.children).forEach((t=>{let e=Array.from(t.classList);if(e.indexOf("my-show-mask-close")>-1&&t.addEventListener("click",(function(){f()})),e.indexOf("my-show-mask-box")>-1){t.addEventListener("click",(function(t){t.stopPropagation()})),Array.from(t.children).forEach((t=>{let e=Array.from(t.classList);e.indexOf("my-show-mask-box-amplify")>-1&&t.addEventListener("click",(function(){r*=1.2;let t=Number(s.offsetWidth),e=Number(s.offsetHeight);h(1.2*t,t,1.2*e,e)})),e.indexOf("my-show-mask-box-reduce")>-1&&t.addEventListener("click",(function(){if(r<100)return;r/=1.2;let t=Number(s.offsetWidth),e=Number(s.offsetHeight);h(t/1.2,t,e/1.2,e)})),e.indexOf("my-show-mask-box-rotate-left")>-1&&t.addEventListener("click",(function(){l=0===l?270:l-90,i=1,s.style.transform=`rotate(${l}deg) scale(${i})`})),e.indexOf("my-show-mask-box-rotate-right")>-1&&t.addEventListener("click",(function(){l=360===l?90:l+90,i=1,s.style.transform=`rotate(${l}deg) scale(${i})`}))}))}e.indexOf("my-show-mask-switch-right")>-1&&t.addEventListener("click",(function(t){t.stopPropagation(),d=d===a.length-1?0:d+1,p(a[d])})),e.indexOf("my-show-mask-switch-left")>-1&&t.addEventListener("click",(function(t){t.stopPropagation(),d=0===d?a.length-1:d-1,p(a[d])}))}))}let u=null;function h(t,e,n,o){s.style.transition="all .3s",s.style.width=`${r}px`,s.style.left=Number(s.style.left.replaceAll("px",""))-(t-e)/2+"px",s.style.top=Number(s.style.top.replaceAll("px",""))-(n-o)/2+"px",clearTimeout(u),u=setTimeout((()=>{s.style.transition="none"}),300)}function m(t,e,n,o){if(0===l||180===l||360===l){r="add"===e?r+.2*r:r-.2*r,s.style.width=r+"px";let o=s.getBoundingClientRect();s.style.left=o.left-(o.width-t.width)*(n.clientX-t.left)/t.width+"px",s.style.top=o.top-(o.height-t.height)*(n.clientY-t.top)/t.height+"px"}else if("large"===o)i+=.2,s.style.transform=`rotate(${l}deg) scale(${i})`;else{if(i<=.5)return;i-=.2,s.style.transform=`rotate(${l}deg) scale(${i})`}}function f(){window.removeEventListener("wheel",y),o.remove()}function p(t){let e=document.getElementById("my-show-mask-img");e&&e.remove(),s=document.createElement("img"),s.src=t,s.id="my-show-mask-img",s.addEventListener("load",(function(t){r=s.width>window.innerWidth?window.innerWidth:s.width,s.style.width=r+"px",s.style.position="absolute",s.draggable="true",s.style.cursor="grab",o.appendChild(s),document.body.appendChild(o),o.addEventListener("click",(function(t){f(),t.stopPropagation()})),s.addEventListener("click",(function(t){t.stopPropagation()})),s.addEventListener("dragstart",(function(t){t.preventDefault()})),s.style.top=s.offsetTop+"px",s.style.left=s.offsetLeft+"px",s.addEventListener("mousedown",(function(t){s.style.cursor="grabbing";let e=t.pageX-s.offsetLeft,n=t.pageY-s.offsetTop;window.onmousemove=function(t){let o=t.pageX-e,i=t.pageY-n;s.style.top=i+"px",s.style.left=o+"px"},window.onmouseup=function(t){s.style.cursor="grab",window.onmousemove=null,window.onmouseup=null}})),s.addEventListener("wheel",(function(t){let e=s.getBoundingClientRect();if(t.deltaY<0&&m(e,"add",t,"large"),t.deltaY>0){if(r<100)return;m(e,"reduce",t,"small")}t.preventDefault()}))}))}function y(t){t.preventDefault()}}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t=n(7384);document.querySelectorAll(".myShowMask").forEach(((e,n)=>{e.addEventListener("click",(function(e){(0,t.m)([e.target.src,"./img/index/index_h_cloud6.png"],0)}))}));let e=document.querySelector("body"),o=document.querySelectorAll(".index-content .h-cloud-product>.product-box>.product-list>.product-content>.product-content-select>.select-box>.select"),s=document.querySelectorAll(".index-content .index_huasaiyun .illustrate>.banner-bright>.banner-drop"),i=document.querySelectorAll(".index-content .index_huasaiyun>.huasaiyun-img");s.forEach(((t,e)=>{t.addEventListener("mouseover",(function(t){s.forEach((t=>{t.classList.remove("drop-bright")})),i.forEach(((t,n)=>{t.classList.remove("banner-currently"),n===e&&t.classList.add("banner-currently")})),this.classList.add("drop-bright")}))}));var r=document.querySelector(".index-header"),l=document.querySelectorAll(".header-nav .ul>div>a"),a=document.querySelector(".nav-show-box");e.addEventListener("click",(function(t){l.forEach(((t,e)=>{let n=document.querySelector(".box-"+e);n&&n.classList.remove("flex")})),a.style.display="none",u(),y()}));let d=document.querySelectorAll(".index-content .h-cloud .h-cloud-tabs>li"),c=document.querySelector(".index-content .h-cloud .h-cloud-tabs>.tabsAfter");function u(t){let e=document.querySelectorAll(".lazy-js"),n=document.querySelectorAll(".lazy-dom"),o=document.querySelector(".index-content .index_huasaiyun"),s=document.querySelector(".return-to-top");if(o.getBoundingClientRect().bottom<=150&&"none"!==getComputedStyle(o).display&&(r.classList.add("tops_current"),s.classList.remove("fadeOutUp"),s.classList.add("opacityToBottom")),o.getBoundingClientRect().bottom>=151&&"none"!==getComputedStyle(o).display&&"none"===getComputedStyle(a).display){r.classList.remove("tops_current"),Array.from(s.classList).indexOf("opacityToBottom")>-1&&(s.classList.remove("opacityToBottom"),s.classList.add("fadeOutUp"))}e.forEach(((t,e)=>{let n=t.getBoundingClientRect();n.top<=window.innerHeight&&n.bottom>=0&&"none"!==getComputedStyle(t).display&&(v("https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js",(function(t){v("./js/echarts/index_china1.js",(function(t){v("./js/echarts/index_world1.js",(function(t){v("./js/index/index_echarts1.js",(function(t){}))}))}))})),t.classList.remove("lazy-js"))})),n.forEach((function(t){h(t)&&(t.classList.add("animationToRight"),t.classList.remove("lazy-dom"))})),document.querySelectorAll(".lazy-load").forEach(((t,e)=>{let n=t.getBoundingClientRect();n.top<=window.innerHeight&&n.bottom>0&&"none"!==getComputedStyle(t).display&&(t.src=t.dataset.src,t.classList.remove("lazy-load"),t.removeAttribute("data-src"))})),document.querySelectorAll(".lazy-bg").forEach((function(t){if(h(t)){let e=t.getAttribute("data-src");t.style.backgroundImage="url("+e+")",t.classList.remove("lazy-bg"),t.removeAttribute("data-src")}}))}function h(t){let e=t.getBoundingClientRect();return e.top<=window.innerHeight&&e.bottom>=0&&"none"!==getComputedStyle(t).display}d.forEach(((t,e)=>{t.addEventListener("click",(function(){d.forEach((t=>{t.classList.remove("text")})),this.classList.add("text");let t=0;for(let n=0;n<e;n++)t+=d[n].scrollWidth;c.style.width=this.clientWidth+"px",c.style.left=t+"px"}))})),window.addEventListener("scroll",u),u();let m=null,f=null,p=null;function y(){m&&(m.style.transform="rotate(0deg) translate(0, -50%)",f.classList.add("fadeOutUpOption"),p.classList.add("fadeOutUpPointer"),f.classList.remove("fadeInDownOption"),p.classList.remove("fadeInDownPointer"))}o.forEach((t=>{t.addEventListener("click",(function(t){t.stopImmediatePropagation(),y(),m=this.children[1];let e=function(t){const e=Array.from(t.parentNode.children),n=e.filter((function(e){return e!==t}));return n}(this);f=e[0],p=e[1],f.classList.remove("fadeOutUpOption"),f.classList.add("fadeInDownOption"),p.classList.remove("fadeOutUpPointer"),p.classList.add("fadeInDownPointer"),m.style.transform="rotate(90deg) translate(-50%, -0%)"}))})),document.querySelectorAll(".index-content .h-cloud-product>.product-box>.product-list>.product-content>.product-content-select>.select-box>.option-box>.option").forEach(((t,e)=>{t.addEventListener("click",(function(t){t.stopImmediatePropagation(),Array.from(this.parentNode.children).forEach((t=>{t.classList.remove("text")})),this.classList.add("text");let e=this.parentNode?.parentNode?.children[0]?.children[0];e.innerText=this.innerText,y()}))}));let x=document.querySelectorAll(".index-content .h-cloud>.mutual>.ul-1>li"),w=document.querySelectorAll(".index-content .h-cloud>.mutual>.ul-2>li");x.forEach(((t,e)=>{t.addEventListener("click",(function(t){x.forEach((t=>{t.classList.remove("bright")})),this.classList.add("bright"),w.forEach((t=>{t.className.indexOf("bounceEnterRight")>-1?(t.classList.remove("bounceEnterRight"),t.classList.add("fadeOutUp")):t.classList.remove("flex")})),w[e].classList.add("flex"),w[e].classList.add("bounceEnterRight"),w[e].classList.remove("fadeOutUp")}))})),document.querySelectorAll(".index-content .h-cloud-product>.guide>ul>li").forEach(((t,e)=>{t.addEventListener("click",(function(t){let n=this.parentNode,o=n.children,s=0;for(let t=0;t<e;t++)s+=o[t].clientWidth;n.style.setProperty("--w",this.clientWidth+"px"),n.style.setProperty("--l",s+"px")}))}));let g=document.querySelectorAll(".index-content .h-cloud>.region>ul>li"),b=document.querySelector(".index-content .h-cloud>.region>ul>span");function v(t,e){var n=document.createElement("script");n.src=t,n.onload=t=>{e&&e(t)},document.body.appendChild(n)}g.forEach(((t,e)=>{0===e&&b.style.setProperty("--w",t.clientWidth+"px");let n=[];t.addEventListener("click",(function(t){-1===n.indexOf(e)&&0!==e&&(n.push(e),v("./js/index/index_echarts"+(e+1)+".js"));let o=document.querySelectorAll(".index-content .h-cloud>.region>.map>div");o.forEach((t=>{t.classList.remove("flex")})),g.forEach((t=>{t.classList.remove("text")})),o[e].classList.add("flex"),this.classList.add("text");let s=0;for(let t=0;t<e;t++)s+=g[t].clientWidth;b.style.setProperty("--w",this.clientWidth+"px"),b.style.setProperty("--l",s+"px")}))}))}()}();