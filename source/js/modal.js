var modalShow =  document.querySelector(".modal-overlay");
var thingsBtns = document.querySelectorAll(".modal--btn");
var modalCart = document.querySelector(".modal-cart");


thingsBtns.forEach (function (el) {
    el.addEventListener ("click", function(evt){
    evt.preventDefault();
    modalShow.classList.remove("modal-overlay--closed");
    modalCart.classList.remove("modal-overlay--closed");
    modalShow.classList.add("modal-overlay--opened");
    modalCart.classList.add("modal-overlay--opened");
  })
})


modalShow.addEventListener ("click", function(evt){
  evt.preventDefault();
  if (evt.target === modalShow) {
    modalShow.classList.remove("modal-overlay--opened");
    modalShow.classList.add("modal-overlay--closed");
    modalCart.classList.add("modal-overlay--closed");
  }
})
