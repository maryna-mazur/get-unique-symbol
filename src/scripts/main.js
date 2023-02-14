'use strict';

const textField = document.querySelector('.textarea');
const message = document.querySelector('.message');
const button = document.querySelector('.button');
const notification = document.querySelector('.notification');
const deleteButton = document.querySelector('.delete');

button.addEventListener('click', () => {
  if (textField.value) {
    message.textContent = getUniqueSymbol(textField.value);
    notification.style.display = 'block';
    textField.value = '';
  }
});

deleteButton.addEventListener('click', () => {
  notification.style.display = 'none';
});

function getUniqueSymbol(data) {
  const text = data.split(' ');
  const filteredText = text.map(el => {
    const word = el.split('');

    const result = word.filter(symbol => (symbol.toLowerCase()
      !== symbol.toUpperCase())).join('');

    if (result) {
      return result;
    }
  }).filter(w => w);

  const symbolList = [];

  for (const word of filteredText) {
    for (const symbol of word) {
      if (!word.includes(symbol, word.indexOf(symbol) + 1)) {
        symbolList.push(symbol);
        break;
      }
    }
  }

  const resultedSymbol = symbolList
    .find((el, index) => !symbolList.includes(el, index + 1));

  if (!resultedSymbol) {
    return 'Текст не містить унікального символу';
  }

  return `Унікальний символ в цьому тексті: "${resultedSymbol}"`;
}
