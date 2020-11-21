var title = document.querySelector(".tagline");
const overlayDiv = document.querySelector(".overlay-div");
const taglineDiv = document.querySelector(".tagline-div");
var sPath = window.location.pathname;

var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);

if (sPage == "customers.html") {
  console.log(sPage);
  title.innerHTML = title.innerHTML.replace(
    "A customer experience <span>unlike any other</span>",
    "Today’s Restaurants Rely on OpenCity"
  );
} else if (sPage == "landing.html") {
  console.log(sPage);
  title.innerHTML = title.innerHTML.replace(
    "A customer experience <span>unlike any other</span>",
    "The way customers & restaurants <span>communicate has changed<span>"
  );
  taglineDiv.insertAdjacentHTML(
    "afterend",
    '<div class = "col-lg-12"><button class = "drive-thru">DRIVE THRU PROGRAM</button></div>'
  );
  overlayDiv.style.minHeight = "85%";
  overlayDiv.style.backgroundImage = "url('/images/landing_back.jpg')";
  overlayDiv.style.backgroundSize = "1800px 1200px";
  overlayDiv.style.backgroundPosition = "center right";
} else if (sPage == "request-demo.html") {
  console.log(sPage);
  title.innerHTML = title.innerHTML.replace(
    "A customer experience <span>unlike any other</span>",
    "<span> Request Demo </span>"
  );
}
