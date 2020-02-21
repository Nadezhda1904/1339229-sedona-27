var button = document.querySelector(".search-button");
var popup = document.querySelector(".search-form");
var form = document.querySelector("form");
var arrival = popup.querySelector("[name=date-in]");
var leave = popup.querySelector("[name=date-out]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-none");
  arrival.focus();

});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !leave.value) {
  evt.preventDefault();
  popup.classList.remove("search-form-error");
  popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("search-form-error");
	}
});
