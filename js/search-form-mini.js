var button=document.querySelector(".search-button"),popup=document.querySelector(".search-form"),form=document.querySelector("form"),arrival=popup.querySelector("[name=date-in]"),leave=popup.querySelector("[name=date-out]"),adults=popup.querySelector("[name=amount-adults]"),children=popup.querySelector("[name=amount-children]");popup.classList.add("search-form-none"),button.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("search-form-down"),arrival.focus()}),form.addEventListener("submit",function(e){arrival.value&&leave.value&&adults.value&&children.value?isStorageSupport&&(localStorage.setItem("amount-adults",amount-adults.value),localStorage.setItem("amount-children",amount-adults.value)):(e.preventDefault(),popup.classList.remove("search-form-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("search-form-error"))});
