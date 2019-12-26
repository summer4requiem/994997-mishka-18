var burger =  document.querySelector(".main-nav__toggle");
var menuOpen = document.querySelector(".main-nav__no-js");

burger.addEventListener ("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.remove("main-nav__no-js");
});

  menuOpen.classList.add("main-nav__opened");
