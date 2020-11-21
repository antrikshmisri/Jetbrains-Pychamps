let header = document.querySelector("body");

header.insertAdjacentHTML(
  "afterbegin",
  "<div class='headnav navbar-div px-0'>" +
    '<nav class="navbar navbar-expand-lg navbar-light">' +
    '<a class="navbar-brand my-3" href="landing.html"><span>OpenCity</span></a>' +
    '<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>' +
    '<div class="collapse navbar-collapse my-3" id="navbarNav">' +
    '<ul class="navbar-nav">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="index.html">' +
    '<span class="active-color">WHY OPENCITY</span></a>' +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link" href="404.html"><span>HOW IT WORKS</span></a>' +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link" href="./customers.html"><span>CUSTOMERS</span></a>' +
    "</li>" +
    "</ul>" +
    '<ul class="navbar-nav contact-links">' +
    '<li class="nav-item">' +
    '<a class="nav-link sign-in" href="sign-in.html"><span>SIGN IN</span></a>' +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link demo" href="request-demo.html"><span>REQUEST DEMO</span></a>' +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link drive-thru" href="404.html"><span>DRIVE THRU PROGRAM</span></a>' +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</nav>" +
    "</div>" +
    '<div class="heading overlay-div">' +
    '<h1 class="tagline">A customer experience <span>unlike any other</span></h1>' +
    "</div>"
);
