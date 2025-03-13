let inputEl = document.querySelector(".input-el");
let btnAddEl = document.querySelector(".btn-el");
let ulItem = document.querySelector(".ul-el");
let clearAllBtn = document.querySelector(".clear-all");
let formItem = document.querySelector(".form-el");

formItem.addEventListener("submit", function (e) {
  e.preventDefault();

  // 1 get input value
  let valueItem = inputEl.value;

  // 2
  if (valueItem === " ") {
    return;
  }
  // 3 value => li => ul
  let liEl = document.createElement("li");
  liEl.textContent = valueItem;

  // 4 Create the el from font-awesome
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-delete-left");
  deleteIcon.addEventListener("click", function () {
    liEl.remove();
  });

  liEl.appendChild(deleteIcon);
  ulItem.appendChild(liEl);

  // 5 clear input value
  inputEl.value = " ";
});

clearAllBtn.addEventListener("click", function () {
  ulItem.innerHTML = " ";
});
