var burger =  document.querySelector(".main-nav__toggle");
var siteList = document.querySelector(".site-list");

document.querySelector(".no-js--hidden").classList.remove("no-js--hidden");
siteList.classList.add("site-list--hidden")

burger.addEventListener ("click", function(evt){
  evt.preventDefault();
  siteList.classList.toggle("site-list--hidden");
  burger.classList.toggle("main-nav__toggle__closed");
});
