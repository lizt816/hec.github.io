!function(){let t=document.querySelector("body"),e=document.querySelectorAll(".tab-to"),n=document.querySelectorAll(".index-content .h-cloud-product>.product-box>.product-list>.product-content>.product-content-select>.select-box>.select");var o=document.querySelector(".index-header"),l=document.querySelectorAll(".header-nav .ul>div>a"),s=document.querySelector(".nav-show-box");let i=null,r=null,a=null;function c(){i&&(i.style.transform="rotate(0deg) translate(0,-50%)",r.classList.add("fadeOutUpOption"),a.classList.add("fadeOutUpPointer"),r.classList.remove("fadeInDownOption"),a.classList.remove("fadeInDownPointer"))}n.forEach((t=>{t.addEventListener("click",(function(t){t.stopImmediatePropagation(),c(),i=this.children[1];let e=function(t){const e=Array.from(t.parentNode.children),n=e.filter((function(e){return e!==t}));return n}(this);r=e[0],a=e[1],r.classList.remove("fadeOutUpOption"),r.classList.add("fadeInDownOption"),a.classList.remove("fadeOutUpPointer"),a.classList.add("fadeInDownPointer"),i.style.transform="rotate(90deg) translate(-50%,0)"}))})),document.querySelectorAll(".index-content .h-cloud-product>.product-box>.product-list>.product-content>.product-content-select>.select-box>.option-box>.option").forEach(((t,e)=>{t.addEventListener("click",(function(t){t.stopImmediatePropagation(),Array.from(this.parentNode.children).forEach((t=>{t.classList.remove("text")})),this.classList.add("text");let e=this.parentNode?.parentNode?.children[0]?.children[0];e.innerText=this.innerText,c()}))}));let d=document.querySelectorAll(".index-content .main-tab>.tab-span"),u=document.querySelector(".index-content .main-tab>.underline");function f(t){let n=document.querySelector(".index-content .index_huasaiyun"),l=document.querySelectorAll(".lazy-w"),i=[],r=[];if(e.forEach((function(t,e){let n=t.getBoundingClientRect();n.top<=window.innerHeight&&n.bottom-300>=0&&"none"!==getComputedStyle(t).display&&(i.push(e),r.push(t))})),i.length>0){let t=function(t){let e=0,n=t[0];for(let o=1;o<t.length;o++)t[o]<n&&(n=t[o],e=o);return e}(r.map((t=>t.offsetTop)));u.style.setProperty("--w",d[i[t]].innerText.length+"em"),u.style.left=d[i[t]].offsetLeft+"px",d.forEach((t=>{t.classList.remove("text")})),d[i[t]].classList.add("text")}let a=document.querySelector(".return-to-top");if(n.getBoundingClientRect().bottom<=150&&"none"!==getComputedStyle(n).display&&(o.classList.add("tops_current"),a.classList.remove("fadeOutUp"),a.classList.add("opacityToBottom")),n.getBoundingClientRect().bottom>=151&&"none"!==getComputedStyle(n).display&&"none"===getComputedStyle(s).display){Array.from(a.classList).indexOf("opacityToBottom")>-1&&(a.classList.remove("opacityToBottom"),a.classList.add("fadeOutUp"))}document.querySelectorAll(".lazy-dom").forEach((function(t){m(t)&&(t.classList.add("animationToRight"),t.classList.remove("lazy-dom"))})),l.forEach((function(t){m(t)&&t.classList.remove("lazy-w")})),document.querySelectorAll(".lazy-load").forEach(((t,e)=>{let n=t.getBoundingClientRect();n.top<=window.innerHeight&&n.bottom>0&&"none"!==getComputedStyle(t).display&&(t.src=t.dataset.src,t.classList.remove("lazy-load"),t.removeAttribute("data-src"))})),document.querySelectorAll(".lazy-bg").forEach((function(t){if(m(t)){let e=t.getAttribute("data-src");t.style.backgroundImage="url("+e+")",t.classList.remove("lazy-bg"),t.removeAttribute("data-src")}}))}function m(t){let e=t.getBoundingClientRect();return e.top<=window.innerHeight&&e.bottom>=0&&"none"!==getComputedStyle(t).display}d.forEach(((t,n)=>{t.addEventListener("click",(function(t){let o=t.target.offsetLeft;u.style.setProperty("--w",this.innerText.length+"em"),u.style.left=o+"px",d.forEach((t=>{t.classList.remove("text")})),this.classList.add("text"),window.scrollTo({top:e[n].offsetTop-100,left:0,behavior:"smooth"})}))})),t.addEventListener("click",(function(t){l.forEach(((t,e)=>{let n=document.querySelector(".box-"+e);n&&n.classList.remove("flex")})),s.style.display="none",f(),c()})),window.addEventListener("scroll",f),f();let y=document.querySelectorAll(".index-content .h-cloud>.tabImgText>.tabImgText-tab>.tabImgText-list");function p(t){let e=document.querySelector(".index-content .h-cloud>.tabImgText>.tabImgText-tab");e.style.setProperty("--w",this.offsetWidth),y.forEach((t=>{t.classList.remove("current")})),this.classList.add("current"),e.style.setProperty("--l",this.offsetLeft);let n=document.querySelectorAll(".index-content .h-cloud>.tabImgText>.tab>.tabImgText-content>.tabImgText-content-list");n.forEach((t=>{Array.from(t.classList).indexOf("bounceEnterRight")>-1?(t.classList.remove("bounceEnterRight"),t.style.position="absolute",t.style.zIndex="1",t.classList.add("fadeOutUp")):(t.classList.remove("fadeOutUp"),t.classList.remove("grid-in"))})),n[t].style.zIndex="2",n[t].style.position="relative",n[t].classList.remove("fadeOutUp"),n[t].classList.add("bounceEnterRight"),n[t].classList.add("grid-in"),setTimeout((()=>{f()}),800)}y.forEach(((t,e)=>{t.addEventListener("click",(function(){p.call(this,e)}))})),p.call(y[0],0);let h=document.querySelector(".index-content .h-cloud>.cases-box>.banner-button-right"),b=document.querySelector(".index-content .h-cloud>.cases-box>.banner-button-left"),x=document.querySelectorAll(".index-content .h-cloud>.cases-box>.banner-box>.banner-list"),g=Array.from(x);function L(t){for(let t=g.length-1;t+1>0;t--){let e=Array.from(g[t].classList);e.indexOf("banner-list-start")>-1?(g[t].style.zIndex=t,g[t].style.transition="all 0s",S(g[t],"banner-list banner-list-end",100)):(g[t].style.zIndex=g.length-t,g[t].style.transition="all .5s",e.indexOf("amplify")>-1&&(g[t].classList="banner-list banner-list-start",g[t+1].classList="banner-list amplify",g[t+1].style.zIndex=g.length))}let e=g.map((t=>t));for(let t=0;t<g.length;t++){let n=g.length-1;0===t?e.splice(n,1,g[t]):e.splice(t-1,1,g[t])}g=e}function v(t){for(let t=0;t<g.length;t++){let e=Array.from(g[t].classList);g.length-1!==t?(g[t].style.zIndex=g.length-t,g[t].style.transition="all .5s",e.indexOf("amplify")>-1&&(g[t].classList="banner-list banner-list-end",g[t-1].classList="banner-list amplify")):(g[t].style.zIndex=g.length,g[t].style.transition="all 0s",S(g[t],"banner-list banner-list-start",0))}document.querySelector(".amplify").style.zIndex=g.length+2;let e=g.map((t=>t));for(let t=0;t<g.length;t++){t===g.length-1?e.splice(0,1,g[t]):e.splice(t+1,1,g[t])}g=e}function S(t,e,n){t.classList=e}L(),b.addEventListener("click",v),h.addEventListener("click",L),x.forEach((t=>{t.addEventListener("click",(function(){let e=Array.from(t.classList);e.indexOf("amplify")>-1||(e.indexOf("banner-list-start")>-1&&v(),e.indexOf("banner-list-end")>-1&&L())}))}))}();