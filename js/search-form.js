var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var form = document.querySelector("form");
var arrival = popup.querySelector("[name=date-in]");
var leave = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=amount-adults]");
var children = popup.querySelector("[name=amount-children]");

popup.classList.add("search-form-none");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-down");
  arrival.focus();

});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !leave.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("amount-adults", amount-adults.value);
      localStorage.setItem("amount-children", amount-adults.value);
    }
    }

});
