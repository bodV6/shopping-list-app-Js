/** Task One: Add items to list **/

const newItemInput = document.getElementById("item-input");
const form = document.querySelector("#item-form");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");

const createElementAndCLass = (el, classname) => {
  const element = document.createElement(el);
  element.className = classname && classname;

  return element;
};

const addItemToUi = (e) => {
  e.preventDefault();
  let itemInput;
  if (newItemInput.value === "") {
    alert("Please enter an item");
  }

  itemInput =
    newItemInput.value.trim().at(0).toUpperCase() +
    newItemInput.value.trim().slice(1);

  const li = createElementAndCLass("li");
  const liText = document.createTextNode(itemInput);
  const button = createElementAndCLass(
    "button",
    "remove-item btn-link text-red"
  );
  const icon = createElementAndCLass("i", "fa-solid fa-xmark");

  button.appendChild(icon);
  li.appendChild(liText);
  li.appendChild(button);
  itemList.appendChild(li);

  newItemInput.value = "";
};

const removeItemFromUi = (e) => {
  if (e.target && e.target.nodeName == "I") {
    itemList.removeChild(e.target.parentElement.parentElement);
  }
};

const clearUI = (e) => {
  while (itemList.childNodes.length > 1 ) {
    itemList.removeChild(itemList.firstChild);
  }
  clearBtn.remove();
  document.getElementById("filter").remove();
};

form.addEventListener("submit", addItemToUi);

itemList.addEventListener("click", removeItemFromUi);

clearBtn.addEventListener("click", clearUI);






/***
 * add filter and clear button after adding item.
 */