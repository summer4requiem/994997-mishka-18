var modalshow =  document.querySelector(".modal-overlay");
var thingsBtn = document.querySelector(".things__btn");


thingsBtn.addEventListener ("click", function(evt){
  evt.preventDefault();
  modalshow.classList.remove("modal-overlay--closed");
  modalshow.classList.toggle("modal-overlay--opened");
})

window.addEventListener ("click", function(evt){
  evt.preventDefault();
  if (evt.target === modalshow) {
    modalshow.classList.toggle("modal-overlay--opened");
    modalshow.classList.add("modal-overlay--closed");
  }
})
