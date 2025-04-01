let input = document.getElementById("input");
let list = document.getElementById("taskList");
let inputBtn = document.getElementById("taskinput");

inputBtn.addEventListener("click", () => {
  let listItem = document.createElement("li");
  let inputValue = input.value;
  if (inputValue !== "") {
    listItem.textContent = inputValue;
    list.appendChild(listItem);
    input.value = "";
  }
});
