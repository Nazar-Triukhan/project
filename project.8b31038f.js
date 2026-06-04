var e,t="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},n={},s=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")(),f=Object.prototype.toString,_=Math.max,b=Math.min,m=function(){return d.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return s;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=c.test(e);return l||i.test(e)?o(e.slice(2),l?2:8):a.test(e)?s:+e}n=function(e,t,n){var s,r,a,c,i,o,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function v(t){var n=s,a=r;return s=r=void 0,l=t,c=e.apply(a,n)}function T(e){var n=e-o,s=e-l;return void 0===o||n>=t||n<0||d&&s>=a}function j(){var e,n,s,r=m();if(T(r))return g(r);i=setTimeout(j,(e=r-o,n=r-l,s=t-e,d?b(s,a-n):s))}function g(e){return(i=void 0,f&&s)?v(e):(s=r=void 0,c)}function L(){var e,n=m(),a=T(n);if(s=arguments,r=this,o=n,a){if(void 0===i)return l=e=o,i=setTimeout(j,t),u?v(e):c;if(d)return i=setTimeout(j,t),v(o)}return void 0===i&&(i=setTimeout(j,t)),c}return t=y(t)||0,p(n)&&(u=!!n.leading,a=(d="maxWait"in n)?_(y(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),L.cancel=function(){void 0!==i&&clearTimeout(i),l=0,s=o=r=i=void 0},L.flush=function(){return void 0===i?c:g(m())},L};let v=0,T=0,j="",g=document.querySelector(".cards__list"),L=document.querySelector(".cards__items"),M=document.getElementById("search");document.getElementById("country");let $=document.querySelector(".cards__error");async function H(){return(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=GRgPLejlX3n1xRw2ZUAghOOqvV89ftUq&page=${v}&keyword=${j}`)).json()}async function h(){let e=await H();if(!e._embedded){$.innerHTML="Нічого не знайшлось",g.innerHTML="";return}$.innerHTML="",T=Math.min(e.page.totalPages,50),g.innerHTML=e._embedded.events.map(({name:e,images:t,dates:n,_embedded:s})=>` <li class="cards__item">
                <img class="cards__img" src="${t[4]?.url}" alt="${e}">
                <h2 class="cards__title">${e}</h2>
                <p class="cards__data">${n.start.localDate}</p>
                <p class="cards__counrty">${s?.venues[0].country.name}</p>
            </li>`).join(""),function(e,t,n){if(n.innerHTML="",e<=5){for(let s=1;s<=e;s++)n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
        <button class="cards__number ${t===s-1?"active":""}" type="button">${s}</button>
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
    </li>`);for(let s=e-4;s<=e;s++)n.insertAdjacentHTML("beforeend",`<li class="cards__elem">
        <button class="cards__number ${t===s-1?"active":""}" type="button">${s}</button>
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
    </li>`)}}(T,v,L)}h(),L.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;let t=L.querySelector(".active");"active"!==e.target.classList[1]&&t.classList.remove("active"),e.target.classList.add("active"),v=Number(e.target.textContent)-1,h()}),M.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(e=>{j=e.target.value.trim(),v=0,h()},300));
//# sourceMappingURL=project.8b31038f.js.map
