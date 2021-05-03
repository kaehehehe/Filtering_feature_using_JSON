'use strict';

function loadItems() {
  return fetch('data.json')
  .then(response => response.json())
  .then(json => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.name}">
    <span>${item.name}</span>
  </li>
  `;
}

loadItems()
.then(items => {
  displayItems(items);
})
.catch(console.log);