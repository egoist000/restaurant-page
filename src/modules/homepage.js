import "../styles/home.scss";
import * as utilis from "./utilis";
import createHeader from "./header";
import createFooter from "./footer";
import startSlideShow from "./slideshow";

/* Images */
import Valeriaboltneva from "../assets/valeria-boltneva.jpg";
import Emmanuelzua from "../assets/emmanuel-zua.jpg";
import Rajeshtp from "../assets/rajesh-tp.jpg";
import Chevanonphotography from "../assets/chevanon-photography.jpg";

const PLACEHOLDER_TEXT = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eos iusto eveniet tenetur. A sequi sunt ipsa fugit sit, enim ducimus omnis! Iusto facilis facere pariatur quas aliquam atque quaerat!";

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
    content.innerHTML = "";
    const slideShow = createSlideShow();
    const about = createAbout();
    const footer = createFooter();
    content.appendChild(slideShow);
    content.appendChild(about);
    content.appendChild(footer);
    document.getElementById("home").classList.add("active");
    startSlideShow();
}

export default initHome;