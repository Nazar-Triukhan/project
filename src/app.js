import createPagination from "./js/createPagination"
import createItem from "./js/createItem"
import debounce from "lodash.debounce";

const API_KEY = 'GRgPLejlX3n1xRw2ZUAghOOqvV89ftUq'
let currentPage = 0
let totalPages = 0
let searchValue = ''

const listRef = document.querySelector('.cards__list')
const listNumberRef = document.querySelector('.cards__items')
const searchRef = document.getElementById('search')
const countryRef = document.getElementById('country')
const errorRef = document.querySelector('.cards__error')

async function getApi() {
     const res = await  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&page=${currentPage}&keyword=${searchValue}`)
    return res.json()
}

async function getCreate() {
    const res = await getApi()

    if(!res._embedded){
        errorRef.innerHTML = 'Нічого не знайшлось'
        listRef.innerHTML = ''
        return
    }
errorRef.innerHTML = ''
 totalPages = Math.min(res.page.totalPages, 50);
    createItem(res._embedded.events, listRef)
    createPagination(totalPages, currentPage, listNumberRef)
}

getCreate()

listNumberRef.addEventListener('click',(e) => {
    if(e.target.nodeName !== 'BUTTON'){
        return
    }
    const activeBtn = listNumberRef.querySelector('.active')

    if(e.target.classList[1] !== 'active'){
        activeBtn.classList.remove('active')
    }
    e.target.classList.add('active')
    
    currentPage = Number(e.target.textContent) - 1
    getCreate()
},)

searchRef.addEventListener('input',debounce( e => {
  searchValue = e.target.value.trim();
  currentPage = 0;
  getCreate();
}, 300));


