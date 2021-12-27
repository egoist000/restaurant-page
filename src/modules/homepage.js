import "../style.scss";
import * as utilis from "./utilis";
import startSlideShow from "./slideshow";

/* Images */
import Valeriaboltneva from "../assets/valeria-boltneva.jpg";
import Emmanuelzua from "../assets/emmanuel-zua.jpg";
import Rajeshtp from "../assets/rajesh-tp.jpg";
import Chevanonphotography from "../assets/chevanon-photography.jpg";
import Logo from "../assets/1f363.svg";

const PLACEHOLDER_TEXT = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eos iusto eveniet tenetur. A sequi sunt ipsa fugit sit, enim ducimus omnis! Iusto facilis facere pariatur quas aliquam atque quaerat!";

function createNav() {
    const nav = document.createElement("ul");
    nav.classList.add("nav");
    const menu = utilis.createNavItem("Menu", "menu", "fish");
    const home = utilis.createNavItem("Home", "home", "home", true);
    const contact = utilis.createNavItem("Contact", "contact", "address-book");
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

function createHeader() {
    const header = document.createElement("div");
    header.setAttribute("id", "header");
    header.appendChild(createHeaderContent());
    return header;
}

function createSlideShowText() {
    const slidesTextContainer = document.createElement("div");
    slidesTextContainer.classList.add("slideshow-text");
    const textHeader = utilis.createHeaderTag("Welcome to Oishii!");
    const textPara = utilis.createPara("Authentic Japanese Restaurant");
    slidesTextContainer.appendChild(textHeader);
    slidesTextContainer.appendChild(textPara);
    return slidesTextContainer;
}

function createSlides() {
    const slidesContainer = document.createElement("div");
    slidesContainer.classList.add("slides-container");
    const img1 = utilis.createImg(Valeriaboltneva, "Valeria Boltneva sushi photo", "slide");
    const img2 = utilis.createImg(Chevanonphotography, "Chevanon Photography sushi photo", "slide");
    const img3 = utilis.createImg(Rajeshtp, "Rajesh Tp sushi photo", "slide");
    slidesContainer.appendChild(img1);
    slidesContainer.appendChild(img2);
    slidesContainer.appendChild(img3);
    return slidesContainer;
}

function createSlideShow() {
    const slideShow = document.createElement("div");
    slideShow.setAttribute("id", "slideshow");
    const header = createHeader();
    const slides = createSlides();
    const text = createSlideShowText();
    slideShow.appendChild(header);
    slideShow.appendChild(slides);
    slideShow.appendChild(text);
    return slideShow;
}

function createAboutText() {
    const textContainer = document.createElement("div");
    textContainer.classList.add("about-text");
    const headerText = utilis.createHeaderTag("About us");
    const aboutPara = utilis.createPara(PLACEHOLDER_TEXT);
    textContainer.appendChild(headerText);
    textContainer.appendChild(aboutPara);
    return textContainer;
}

function createAboutImg() {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("about-img");
    const img = utilis.createImg(Emmanuelzua, "Emmanuel Zua");
    imgContainer.appendChild(img);
    return imgContainer;
}

function createAbout() {
    const about = document.createElement("div");
    about.setAttribute("id", "about");
    const text = createAboutText();
    const img = createAboutImg();
    about.appendChild(text);
    about.appendChild(img);
    return about;
}

function initHome() {
    const content = document.getElementById("content");
    const slideShow = createSlideShow();
    const about = createAbout();
    const footer = utilis.createFooter();
    content.appendChild(slideShow);
    content.appendChild(about);
    content.appendChild(footer);
    startSlideShow();
}

export default initHome;