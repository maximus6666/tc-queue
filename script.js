const textInput = document.getElementById('text-input');
const list = document.querySelector('.list');
const addItemButton = document.querySelector('.add-item-button');
const delItemButton = document.querySelector('.del-item-button');

const initialList = JSON.parse(localStorage.getItem("list")) ||  ['item1', 'item2', 'item3'];

localStorage.setItem("list", JSON.stringify(initialList));

const storedList = JSON.parse(localStorage.getItem("list"));
const age = 27;

function addItem() {
  const inputValue = textInput.value;

  if (storedList.length >= age) {
    alert("List is full.");

    return
  }
  else if (inputValue && !inputValue.startsWith(' ')) {
    storedList.push(inputValue);
    localStorage.setItem("list", JSON.stringify(storedList));
    textInput.value = '';
  }
  else {
    alert("Input can't be empty.");

    return
  }

  list.innerHTML = '';
  displayItems(storedList);
}

function deleteItem() {
  if (!storedList.length) {
    alert('List is empty');

    return
  }
  storedList.shift();
  localStorage.setItem("list", JSON.stringify(storedList));
  list.innerHTML = '';
  displayItems(storedList);
}

function displayItems(arr) {
  const items = arr.map((element) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = element;

    return  li;
  });

  arr.length 
    ? list.append(...items) 
    : list.append('List is empty');
}

addItemButton.addEventListener('click', addItem);
delItemButton.addEventListener('click', deleteItem);
displayItems(initialList);
