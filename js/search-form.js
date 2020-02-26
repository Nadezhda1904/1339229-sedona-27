var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var wrapper = document.querySelector(".search-form-wrapper");

var form = document.querySelector("form");

var arrival = popup.querySelector("[name=date-in]");
var leave = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=amount-adults]");
var children = popup.querySelector("[name=amount-children]");

var isStorageSupport = true;
var storageArrival = "";
var storageLeave = "";
var storageAdults = "";
var storageChildren = "";

popup.classList.add("search-form-none");
wrapper.classList.add("block-noon");

try {
  storageArrival = localStorage.getItem("arrival");
  storageLeave = localStorage.getItem("leave");
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-down");
  wrapper.classList.toggle("block-view");
  arrival.focus();
  if (storageArrival) {
    arrival.value = storageArrival;
  }
  if (storageLeave) {
    leave.value = storageLeave;
  }
  if (storageAdults) {
    adults.value = storageAdults;
  }
  if (storageChildren) {
    children.value = storageChildren;
  }

});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !leave.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrival", arrival.value);
      localStorage.setItem("leave", leave.value);
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }

});
