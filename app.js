var nav = document.querySelector("header .container .nav");
var menu_btn = document.getElementById("menu_btn");

menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("fa-times");
    nav.classList.toggle("active");
});

window.onscroll = () => {
    nav.classList.remove("active");
    menu_btn.classList.replace("fa-times", "fa-bars");
}