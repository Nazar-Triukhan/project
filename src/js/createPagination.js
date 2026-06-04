export default function createPagination(totalPages, currentPage, listNumberRef) {
    listNumberRef.innerHTML = '';
    if (totalPages <= 5) {
  for (let i = 1; i <= totalPages; i++) {
    listNumberRef.insertAdjacentHTML(
      'beforeend',
      `<li class="cards__elem">
        <button class="cards__number ${currentPage === i - 1 ? 'active' : ''}" type="button">${i}</button>
      </li>`
    );
  }

  return;
}
  
  if(currentPage < 4){
      for (let i = 1; i <= 5; i++) {
            listNumberRef.insertAdjacentHTML(
      'beforeend',
      `<li class="cards__elem">
        <button class="cards__number ${currentPage === i - 1 ? 'active' : ''}" type="button">${i}</button>
      </li>`
    );
      }
  listNumberRef.insertAdjacentHTML(
    'beforeend',
    `<li class="cards__elem">
      <span class="cards__dots">....</span>
    </li>`
  );

  listNumberRef.insertAdjacentHTML(
    'beforeend',
    `<li class="cards__elem">
      <button class="cards__number" type="button">${totalPages}</button>
    </li>`
  );
  } else if(currentPage > totalPages - 5){
      listNumberRef.insertAdjacentHTML(
    'beforeend',
    `<li class="cards__elem">
      <button class="cards__number" type="button">${1}</button>
    </li>`
  );
    listNumberRef.insertAdjacentHTML(
    'beforeend',
    `<li class="cards__elem">
      <span class="cards__dots">....</span>
    </li>`
  );
   for (let i = totalPages - 4; i <= totalPages; i++) {
            listNumberRef.insertAdjacentHTML(
      'beforeend',
      `<li class="cards__elem">
        <button class="cards__number ${currentPage === i - 1 ? 'active' : ''}" type="button">${i}</button>
      </li>`
    );
      }
  } else {
          listNumberRef.insertAdjacentHTML(
    'beforeend',
    `<li class="cards__elem">
      <button class="cards__number" type="button">${1}</button>
    </li>`
  );
    listNumberRef.insertAdjacentHTML(
    'beforeend',
    `<li class="cards__elem">
      <span class="cards__dots">....</span>
    </li>`
  );
     for (let i = currentPage; i <= currentPage + 2; i++) {
            listNumberRef.insertAdjacentHTML(
      'beforeend',
      `<li class="cards__elem">
        <button class="cards__number ${currentPage === i - 1 ? 'active' : ''}" type="button">${i}</button>
      </li>`
    );
      }
        listNumberRef.insertAdjacentHTML(
    'beforeend',
    `<li class="cards__elem">
      <span class="cards__dots">....</span>
    </li>`
  );
                listNumberRef.insertAdjacentHTML(
    'beforeend',
    `<li class="cards__elem">
      <button class="cards__number" type="button">${totalPages}</button>
    </li>`
  );
  }

}