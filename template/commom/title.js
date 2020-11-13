var title = document.querySelector(".tagline");

var sPath = window.location.pathname;

var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
if (sPage == "customers.html") {
  console.log(sPage);
  title.innerHTML = title.innerHTML.replace(
    "A customer experience <span>unlike any other</span>",
    "Today’s Restaurants Rely on OpenCity"
  );
} else sPage == "arteevspage.html";
{
}
