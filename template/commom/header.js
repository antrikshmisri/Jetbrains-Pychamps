var header = document.querySelector("body");

header.insertAdjacentHTML(
  "afterbegin",
  '<div class="container-fluid overlay-div justify-content-center">' +
    '<h1 class="tagline" data-aos = "fade-up" data-aos-delay = "500">A customer experience <span>unlike any other</span></h1>' +
    "</div>" +
    "<div class='container navbar-div px-0'>" +
    '<nav class="navbar navbar-expand-lg navbar-light">' +
    '<a class="navbar-brand my-3" href="#"><span>OpenCity</span></a>' +
    '<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>' +
    '<div class="collapse navbar-collapse my-3" id="navbarNav">' +
    '<ul class="navbar-nav">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#">' +
    '<span class="active-color">WHY OPENCITY</span></a>' +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#"><span>HOW IT WORKS</span></a>' +
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
    '<a class="nav-link demo" href="#"><span>REQUEST DEMO</span></a>' +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link drive-thru" href="#"><span>DRIVE THRU PROGRAM</span></a>' +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</nav>" +
    "</div>"
);
