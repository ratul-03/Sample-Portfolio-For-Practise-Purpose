// Mobile Bar
const mobile_bars = document.querySelector(".mobile_bars");
mobile_bars.addEventListener("click", () => {
    document.querySelector(".main_menu").classList.toggle("open");
});

// Light & Dark Mode
const darkTheme = document.querySelector(".dark_theme");
const icon = darkTheme.querySelector("i");

darkTheme.addEventListener("click", () => {
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// Set the initial icon based on the theme
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    } else {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    }
});
