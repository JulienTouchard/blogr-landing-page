var menubtn1 = document.querySelector("#menubtn1");
var menubtn2 = document.querySelector("#menubtn2");
var menubtn3 = document.querySelector("#menubtn3");

menubtn1.addEventListener("click",function(){
    var submenu = document.querySelector("#menubtn1 ul");
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
});
menubtn2.addEventListener("click",function(){
    var submenu = document.querySelector("#menubtn2 ul");
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
});
menubtn3.addEventListener("click",function(){
    var submenu = document.querySelector("#menubtn3 ul");
    submenu.classList.toggle("hide");
    submenu.classList.toggle("show");
});