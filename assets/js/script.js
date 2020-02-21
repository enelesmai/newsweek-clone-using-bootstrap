window.onscroll = function () { myFunction() };

var header = document.getElementById("header");
var navHeader = document.getElementById("nav-header");
var logo = document.getElementById("logo");
var date = document.getElementById("date");
var headerTop = document.getElementById("header-top");
var btnMenu = document.getElementById("btn-menu");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed-top");
        navHeader.classList.add("d-none");
        logo.classList.add("brand-fixed");
        logo.classList.remove("brand");
        date.classList.add("d-none");
        headerTop.classList.add("header-top-hfixed");
        headerTop.classList.remove("header-top-h");
        btnMenu.classList.remove("d-none");
    } else {
        header.classList.remove("fixed-top");
        navHeader.classList.remove("d-none");
        logo.classList.remove("brand-fixed");
        logo.classList.add("brand");
        date.classList.remove("d-none");
        headerTop.classList.remove("header-top-hfixed");
        headerTop.classList.add("header-top-h");
        btnMenu.classList.add("d-none");
    }
}
