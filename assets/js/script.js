window.onscroll = function () { myFunction() };

var header = document.getElementById("menuHeader");
var logo = document.getElementById("logoHeader");
var secondMenu = document.getElementById("secondMenu");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        logo.classList.add("sticky");
        logo.classList.add("logo-min-scrolling");
        secondMenu.classList.add("latest-menu-scrolling");
    } else {
        header.classList.remove("sticky");
        logo.classList.remove("sticky");
        logo.classList.remove("logo-min-scrolling");
        secondMenu.classList.remove("latest-menu-scrolling");
    }
}
