const openHamburger = document.querySelector('.hamburger-menu');
openHamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu-list');
    if (menu.style.display === "flex") {
        console.log("Closing menu");
        menu.style.display = "none";
    } else {
        console.log("Opening menu");
        menu.style.display = "flex";
    }
}