var modalshow =  document.querySelector(".modal-overlay");
var thingsBtns = document.querySelectorAll(".modal--btn");

thingsBtns.forEach (function (el) {
    el.addEventListener ("click", function(evt){
    evt.preventDefault();
    modalshow.classList.remove("modal-overlay--closed");
    modalshow.classList.toggle("modal-overlay--opened");
  })
})


modalshow.addEventListener ("click", function(evt){
  evt.preventDefault();
  if (evt.target === modalshow) {
    modalshow.classList.toggle("modal-overlay--opened");
    modalshow.classList.add("modal-overlay--closed");
  }
})
