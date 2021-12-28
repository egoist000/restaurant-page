import Logo from "../assets/1f363.svg";
import initHome from "./homepage";
import initMenu from "./menu";
import * as utilis from "./utilis";
import { stopSlideShow } from "./slideshow";
import initContact from "./contact";


function cleanActiveFromNav() {
    const items = document.querySelectorAll(".nav-item")
    items.forEach(item => {
        item.classList.remove("active");
    });
}

function createNav() {
    const nav = document.createElement("ul");
    nav.classList.add("nav");
    const menu = utilis.createNavItem("Menu", "menu", "fish");
    const home = utilis.createNavItem("Home", "home", "home");
    const contact = utilis.createNavItem("Contact", "contact", "address-book");
    menu.addEventListener("click", e => {
        if(e.target.classList.contains("active")) {return;}
        cleanActiveFromNav();
        stopSlideShow();
        initMenu();
    });
    home.addEventListener("click", e => {
        if(e.target.classList.contains("active")) {return;}
        cleanActiveFromNav();
        initHome();
    })
    contact.addEventListener("click", e => {
        if(e.target.classList.contains("active")) {return;}
        cleanActiveFromNav();
        stopSlideShow();
        initContact();
    })
    nav.appendChild(menu);
    nav.appendChild(home);
    nav.appendChild(contact);
    return nav;
}

function createHeaderLogo() {
    const headerLogo = document.createElement("div");
    headerLogo.classList.add("header-logo");
    const logo = utilis.createImg(Logo, "sushi-emoji");
    const logoText = utilis.createHeaderTag("Oishii")
    headerLogo.appendChild(logo);
    headerLogo.appendChild(logoText);
    return headerLogo;
}

function createHeaderContent() {
    const headerContent = document.createElement("div");
    headerContent.classList.add("header-content");
    const logo = createHeaderLogo();
    const nav = createNav();
    headerContent.appendChild(logo);
    headerContent.appendChild(nav);
    return headerContent;
}

export default function createHeader() {
    const header = document.createElement("div");
    header.setAttribute("id", "header");
    header.appendChild(createHeaderContent());
    return header;
}