var title = document.querySelector(".tagline");

var sPath = window.location.pathname;

var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
if (sPage == "customers.html") {
  console.log(sPage);
  title.innerHTML = title.innerHTML.replace(
    "A customer experience <span>unlike any other</span>",
    "Today’s Restaurants Rely on OpenCity"
  );
  var para = document.createElement("P");
  para.innerHTML =
    "Our customers have one thing in common...they all use OpenCity to take the customer experience to the next level.";
  document.querySelector(".heading").style.flexDirection = "column";
  document.querySelector(".heading").appendChild(para);
} else sPage == "arteevspage.html";
{
}
