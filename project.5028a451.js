var e,t="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},n={};n=(function e(t,n,a){function r(s,i){if(!n[s]){if(!t[s]){var c=void 0;if(!i&&c)return c(s,!0);if(o)return o(s,!0);var l=Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){return r(t[s][1][e]||e)},d,d.exports,e,t,n,a)}return n[s].exports}for(var o=void 0,s=0;s<a.length;s++)r(a[s]);return r})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n,s,i,c,l,d,u,f=(n=e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(a(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),s=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),c=(i=a('\n		<div class="basicLightbox '.concat(s.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),n.forEach(function(e){return c.appendChild(e)}),l=r(c,"IMG"),d=r(c,"VIDEO"),u=r(c,"IFRAME"),!0===l&&i.classList.add("basicLightbox--img"),!0===d&&i.classList.add("basicLightbox--video"),!0===u&&i.classList.add("basicLightbox--iframe"),i),m=function(e){var n;return!1!==t.onClose(_)&&(n=function(){if("function"==typeof e)return e(_)},f.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===o(f)||f.parentElement.removeChild(f),n()},410),!0)};!0===t.closable&&f.addEventListener("click",function(e){e.target===f&&m()});var _={element:function(){return f},visible:function(){return o(f)},show:function(e){var n;return!1!==t.onShow(_)&&(n=function(){if("function"==typeof e)return e(_)},document.body.appendChild(f),setTimeout(function(){requestAnimationFrame(function(){return f.classList.add("basicLightbox--visible"),n()})},10),!0)},close:m};return _}},{}]},{},[1])(1);let a="",r="",o="",s="",i="",c="",l="",d="",u="",f="";var m={},_=0/0,b=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,h=/^0o[0-7]+$/i,y=parseInt,L="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,$=L||g||Function("return this")(),T=Object.prototype.toString,w=Math.max,E=Math.min,M=function(){return $.Date.now()};function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==T.call(t))return _;if(j(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(b,"");var a=v.test(e);return a||h.test(e)?y(e.slice(2),a?2:8):p.test(e)?_:+e}m=function(e,t,n){var a,r,o,s,i,c,l=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function m(t){var n=a,o=r;return a=r=void 0,l=t,s=e.apply(o,n)}function _(e){var n=e-c,a=e-l;return void 0===c||n>=t||n<0||u&&a>=o}function b(){var e,n,a,r=M();if(_(r))return p(r);i=setTimeout(b,(e=r-c,n=r-l,a=t-e,u?E(a,o-n):a))}function p(e){return(i=void 0,f&&a)?m(e):(a=r=void 0,s)}function v(){var e,n=M(),o=_(n);if(a=arguments,r=this,c=n,o){if(void 0===i)return l=e=c,i=setTimeout(b,t),d?m(e):s;if(u)return i=setTimeout(b,t),m(c)}return void 0===i&&(i=setTimeout(b,t)),s}return t=x(t)||0,j(n)&&(d=!!n.leading,o=(u="maxWait"in n)?w(x(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==i&&clearTimeout(i),l=0,a=c=r=i=void 0},v.flush=function(){return void 0===i?s:p(M())},v};let H=0,N=0,A="",O="",S=[],C=document.querySelector(".cards__list"),k=document.querySelector(".cards__items"),I=document.getElementById("search"),U=document.getElementById("country"),q=document.querySelector(".cards__error"),P=document.querySelector(".header__items");async function D(){return(await fetch(`http://localhost:3000/events?page=${H}${A?`&keyword=${A}`:""}${O?`&countryCode=${O}`:""}`)).json()}async function R(){let e=await D();if(!e._embedded){q.innerHTML="Нічого не знайшлось",C.innerHTML="",k.innerHTML="";return}q.innerHTML="",N=Math.min(e.page.totalPages,50),C.innerHTML=e._embedded.events.map(({name:e,images:t,dates:n,_embedded:a,id:r})=>` <li class="cards__item" id="${r}">
                <img class="cards__img" src="${t[4]?.url}" alt="${e}">
                <h2 class="cards__title">${e}</h2>
                <p class="cards__data">${n.start.localDate}</p>
                <p class="cards__counrty">${a?.venues[0].country.name}</p>
            </li>`).join(""),function(e,t,n){if(n.innerHTML="",e<=5){for(let a=1;a<=e;a++)n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
        <button class="cards__number ${t===a-1?"active":""}" type="button">${a}</button>
      </li>`);return}if(t<4){for(let e=1;e<=5;e++)n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
        <button class="cards__number ${t===e-1?"active":""}" type="button">${e}</button>
      </li>`);n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
      <span class="cards__dots">....</span>
    </li>`),n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
      <button class="cards__number" type="button">${e}</button>
    </li>`)}else if(t>e-5){n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
      <button class="cards__number" type="button">1</button>
    </li>`),n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
      <span class="cards__dots">....</span>
    </li>`);for(let a=e-4;a<=e;a++)n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
        <button class="cards__number ${t===a-1?"active":""}" type="button">${a}</button>
      </li>`)}else{n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
      <button class="cards__number" type="button">1</button>
    </li>`),n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
      <span class="cards__dots">....</span>
    </li>`);for(let e=t;e<=t+2;e++)n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
        <button class="cards__number ${t===e-1?"active":""}" type="button">${e}</button>
      </li>`);n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
      <span class="cards__dots">....</span>
    </li>`),n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
      <button class="cards__number" type="button">${e}</button>
    </li>`)}}(N,H,k)}async function F(){return(await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")).json()}async function B(e){P.innerHTML=e.map(e=>`<li class="header__elem" data-code="${e.cca2}"><p class="header__country" data-code="${e.cca2}">${e.name.common}</p></li>`).join("")}R(),k.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;let t=k.querySelector(".active");"active"!==e.target.classList[1]&&t.classList.remove("active"),e.target.classList.add("active"),H=Number(e.target.textContent)-1,R()}),I.addEventListener("input",((e=m)&&e.__esModule?e.default:e)(e=>{A=e.target.value.trim(),H=0,R()},300)),U.addEventListener("click",e=>{P.classList.add("nohiden"),window.addEventListener("click",e=>{"header__country"!==e.target.classList.value&&"header__elem"!==e.target.classList.value&&"header__input"!==e.target.classList.value&&(P.classList.remove("nohiden"),P.classList.add("hiden"))})}),P.addEventListener("click",e=>{O=e.target.dataset.code,H=0,R()}),U.addEventListener("input",e=>{let t=e.target.value.toLowerCase().trim();B(S.filter(e=>e.name.common.toLowerCase().includes(t)))}),async function(){let e=await F();S=e,B(e)}(),C.addEventListener("click",e=>{let t=e.target.closest(".cards__item");if(null===t)return;let m=t.id;(async function(){let e=await fetch(`http://localhost:3000/events/${m}`),t=await e.json();a=t.info||t.pleaseNote||"No information",r=t.dates?.start?.localDate||"No date",o=t.dates?.start?.localTime||"No time",s=`${t._embedded?.venues?.[0]?.city?.name||"Unknown city"}, ${t._embedded?.venues?.[0]?.country?.name||"Unknown country"}`;let _=t._embedded?.venues?.[0]?.name||"Unknown venue";i=t._embedded?.attractions?.[0]?.name||t.name||"Unknown artist",c=t.priceRanges?.[0]?.min||"N/A",l=t.priceRanges?.[0]?.max||"N/A",d=t.url||"#",u=t.images?.[0]?.url||"",f=n.create(`
    <div class="container">
    <div class="modal">
            <p class="modal__close">x</p>
<img class="modal__avatar" src="${u}" alt="">
<div class="modal__wrap">
<img class="modal__full" src="${u}" alt="">
<div>
<h2>INFO</h2>
<p class="modal__text">${a}</p>
<h2>WHEN</h2>
<p>${o}</p>
<p class="modal__text">${r}</p>
<h2>WHERE </h2>
<p>${s}</p>
<p class="modal__text">${_}</p>
<h2>WHO</h2>
<p class="modal__text">${i}</p>
<h2>PRICES </h2>
<ul>
  <li>
    <p class="modal__text">Standart ${c}</p>
    <a href="${d}" class="modal__ticet">BUY TICKETS</a>
  </li>
  <li>
    <p class="modal__text">VIP ${l}</p>
    <a href="${d}">BUY TICKETS</a>
  </li>
</ul>
<a href="${d}" class="modal__link">MORE FROM THIS AUTHOR</a>
</div>
</div>
</div>
    </div>
`)})().then(()=>f.show()).then(()=>{document.querySelector(".modal__close").addEventListener("click",()=>{f.close()}),window.addEventListener("keydown",e=>{"Escape"===e.key&&f.close()})}).then(e=>e)});
//# sourceMappingURL=project.5028a451.js.map
