
import createPagination from "./js/createPagination";
import createModal from "./js/createModal";
import createItem from "./js/createItem";
import debounce from "lodash.debounce";

const API_KEY = "kNyt8vinYUHyIzlEodFscntWQ6MRYa9m";
let currentPage = 0;
let totalPages = 0;
let searchValue = "";
let country = ''
let countryLot = []

const listRef = document.querySelector(".cards__list");
const listNumberRef = document.querySelector(".cards__items");
const searchRef = document.getElementById("search");
const countryRef = document.getElementById("country");
const errorRef = document.querySelector(".cards__error");
const listCountryRef = document.querySelector(".header__items");

export default async function getApi() {
  const res = await fetch(
    `http://localhost:3000/events?page=${currentPage}${
      searchValue ? `&keyword=${searchValue}` : ""
    }${country ? `&countryCode=${country}` : ""}`
  );

  return res.json();
}



async function getCreate() {
  const res = await getApi();

  if (!res._embedded) {
    errorRef.innerHTML = "Нічого не знайшлось";
    listRef.innerHTML = "";
    listNumberRef.innerHTML = ''
    return;
  }
  errorRef.innerHTML = "";
  totalPages = Math.min(res.page.totalPages, 50);
  createItem(res._embedded.events, listRef);
  createPagination(totalPages, currentPage, listNumberRef);
}

getCreate();

listNumberRef.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const activeBtn = listNumberRef.querySelector(".active");

  if (e.target.classList[1] !== "active") {
    activeBtn.classList.remove("active");
  }
  e.target.classList.add("active");

  currentPage = Number(e.target.textContent) - 1;
  getCreate();
});

searchRef.addEventListener(
  "input",
  debounce((e) => {
    searchValue = e.target.value.trim();
    currentPage = 0;
    getCreate();
  }, 300),
);

countryRef.addEventListener("click", (e) => {
  listCountryRef.classList.add("nohiden");

  window.addEventListener("click", (e) => {
    if (
      e.target.classList.value !== "header__country" &&
      e.target.classList.value !== "header__elem" &&
      e.target.classList.value !== "header__input"
    ) {
      listCountryRef.classList.remove("nohiden");
      listCountryRef.classList.add("hiden");
    }
  });
});

listCountryRef.addEventListener('click',(e) => {
    country = e.target.dataset.code
        currentPage = 0
    getCreate()
})

countryRef.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase().trim()

    const filterCountry = countryLot.filter(country => 
        country.name.common.toLowerCase().includes(value)
    )

    createCountry(filterCountry)
})


async function getCountry() {
  const res = await  fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
    return res.json()

}

async function createCountryApi() {
    const res = await getCountry()
    countryLot = res
    createCountry(res)
}

createCountryApi()

async function  createCountry(arr) {
    const item = arr.map(e => {
        return `<li class="header__elem" data-code="${e.cca2}"><p class="header__country" data-code="${e.cca2}">${e.name.common}</p></li>`
    }).join('')

    listCountryRef.innerHTML = item
}

createModal(listRef, API_KEY )