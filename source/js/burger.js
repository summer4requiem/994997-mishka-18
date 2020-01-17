var burger =  document.querySelector(".main-nav__toggle");
var siteList = document.querySelector(".site-list");

document.querySelector(".main-nav__no-js").classList.remove("main-nav__no-js");
siteList.classList.add("site-list--hidden")

burger.addEventListener ("click", function(evt){
  evt.preventDefault();
  siteList.classList.toggle("site-list--hidden");
  burger.classList.toggle("main-nav__toggle__closed");
});
