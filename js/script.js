/** Task One: Add items to list **/

const newItemInput = document.getElementById("item-input");
const form = document.querySelector("#item-form");


const createElement = (el) => {
     document.createElement(`${el}`);
};




const addItemToUi = (e) => {
  e.preventDefault();
  // let itemInput;
  let itemInput = newItemInput.value;
  const li = document.createElement("li"); //NOT DRY
  const liText = document.createTextNode(itemInput);
  const button = document.createElement('button');
  const iTag = document.createElement("i");

  iTag.className= "fa-solid fa-xmark";
  button.className ="remove-item btn-link text-red";
  button.appendChild(iTag);
  li.appendChild(liText);
  li.appendChild(button);
  document.getElementById("item-list").appendChild(li);

  newItemInput.value = "";
};

form.addEventListener("submit", addItemToUi);



