var modalShow =  document.querySelector(".modal-overlay");
var thingsBtns = document.querySelectorAll(".modal_btn");
var modalCart = document.querySelector(".modal-cart");


thingsBtns.forEach (function (el) {
    el.addEventListener ("click", function(evt){
    evt.preventDefault();
    modalShow.classList.remove("modal-overlay__closed");
    modalCart.classList.remove("modal-overlay__closed");
    modalShow.classList.add("modal-overlay__opened");
    modalCart.classList.add("modal-overlay__opened");
  })
})


modalShow.addEventListener ("click", function(evt){
  evt.preventDefault();
  if (evt.target === modalShow) {
    modalShow.classList.remove("modal-overlay__opened");
    modalShow.classList.add("modal-overlay__closed");
    modalCart.classList.add("modal-overlay__closed");
  }
})
