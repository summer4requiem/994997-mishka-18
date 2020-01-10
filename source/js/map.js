
function initMap() {
  var coords = {lat: 59.938939, lng: 30.323186};
  var map = new google.maps.Map(document.getElementById("google-map"), {
    zoom: 17,
    center: coords
  });
  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: {
      url: "./img/icon-map-pin.svg",
      scaledSize: new google.maps.Size(67, 100)
    }
  });
};

function hideImageMap (){
  var hideMap = document.querySelector(".contacts__map_img");
  hideMap.classList.toggle("map--offline");
};

window.onload = hideImageMap;
window.addEventListener("load", initMap);
