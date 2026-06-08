export default function createItem (arr, listRef){
    const item = arr.map(({name,images , dates, _embedded, id }) => {
        return ` <li class="cards__item" id="${id}">
                <img class="cards__img" src="${images[4]?.url}" alt="${name}">
                <h2 class="cards__title">${name}</h2>
                <p class="cards__data">${dates.start.localDate}</p>
                <p class="cards__counrty">${_embedded?.venues[0].country.name}</p>
            </li>`
    }).join('')
    listRef.innerHTML = item
}