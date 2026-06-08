import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

let info = ''
let when = ''
let date = ''
let where = ''
let who = ''
let priceLow = ''
let priceLot = ''
let link = ''
let img = ''
let instance = ''

export default function createModal(listRef, API_KEY){

listRef.addEventListener('click', (e) => {
  const li = e.target.closest('.cards__item')
    if(li === null) return
    const idLi = li.id

async function infoLi() {
    const resData = await fetch(`http://localhost:3000/events/${idLi}`)
    const res = await resData.json()
info = res.info || res.pleaseNote || "No information";
when = res.dates?.start?.localDate || "No date";
date = res.dates?.start?.localTime || "No time";
where = `${res._embedded?.venues?.[0]?.city?.name || "Unknown city"}, ${
  res._embedded?.venues?.[0]?.country?.name || "Unknown country"
}`;
const venueName =
  res._embedded?.venues?.[0]?.name || "Unknown venue";
who =res._embedded?.attractions?.[0]?.name || res.name || "Unknown artist";
priceLow = res.priceRanges?.[0]?.min || "N/A";
priceLot = res.priceRanges?.[0]?.max || "N/A";
link = res.url || "#";
img = res.images?.[0]?.url || "";

     instance = basicLightbox.create(`
    <div class="container">
    <div class="modal">
            <p class="modal__close">x</p>
<img class="modal__avatar" src="${img}" alt="">
<div class="modal__wrap">
<img class="modal__full" src="${img}" alt="">
<div>
<h2>INFO</h2>
<p class="modal__text">${info}</p>
<h2>WHEN</h2>
<p>${date}</p>
<p class="modal__text">${when}</p>
<h2>WHERE </h2>
<p>${where}</p>
<p class="modal__text">${venueName}</p>
<h2>WHO</h2>
<p class="modal__text">${who}</p>
<h2>PRICES </h2>
<ul>
  <li>
    <p class="modal__text">Standart ${priceLow}</p>
    <a href="${link}" class="modal__ticet">BUY TICKETS</a>
  </li>
  <li>
    <p class="modal__text">VIP ${priceLot}</p>
    <a href="${link}">BUY TICKETS</a>
  </li>
</ul>
<a href="${link}" class="modal__link">MORE FROM THIS AUTHOR</a>
</div>
</div>
</div>
    </div>
`)
}

infoLi().then(() => instance.show()).then(() => {
const closeBtnRef = document.querySelector('.modal__close')
closeBtnRef.addEventListener('click', () => {
    instance.close()
})

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
            instance.close()
    }
})

}).then(res => res)

})
}