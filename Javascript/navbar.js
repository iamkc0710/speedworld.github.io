
// ***** Javascript For Toggle Menu Bar *****
$(document).ready(function(){

    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
        
});
});

var menu = document.querySelector(".menu");
var menubtn = document.querySelector(".menu-btn");
var closebtn = document.querySelector(".close-btn");

menubtn.addEventListener("click", () =>{
    menu.classList.add("active");
});

closebtn.addEventListener("click", () =>{
    menu.classList.remove("active");
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
