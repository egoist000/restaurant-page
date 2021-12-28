import createFooter from "./footer";
import createHeader from "./header";
import { createHeaderTag, createImg } from "./utilis";
import "../styles/contact.scss";

import Logo from "../assets/1f363.svg"

function createContactLogo() {
    const logo = document.createElement("div");
    logo.classList.add("logo");
    const img = createImg(Logo, "sushi-logo");
    logo.appendChild(img);
    return logo;
}

function createContactInfo(property, value) {
    const info = document.createElement("div");
    info.classList.add("contact-info");
    const prop = createHeaderTag(`${property}: `, 2);
    const val = document.createElement("span");
    val.textContent = value;
    prop.appendChild(val);
    info.appendChild(prop);
    return info;
}

function createSocialIconLink(socialName) {
    const link = document.createElement("a");
    link.href = "http://";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    const logo = document.createElement("i");
    logo.classList.add("fa-brands", `fa-${socialName}`);
    link.appendChild(logo);
    return link;
}

function createSocialMedias() {
    const container = document.createElement("div");
    container.classList.add("social-medias", "fa-lg");
    const instagram = createSocialIconLink("instagram");
    const facebook = createSocialIconLink("facebook");
    const twitter = createSocialIconLink("twitter");
    const tiktok = createSocialIconLink("tiktok");
    container.appendChild(instagram);
    container.appendChild(facebook);
    container.appendChild(twitter);
    container.appendChild(tiktok);
    return container;
}

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    const logo = createContactLogo();
    const titleContainer = document.createElement("div");
    titleContainer.setAttribute("id", "contact-title");
    const title = createHeaderTag("Contact us", 2);
    titleContainer.appendChild(title);
    const telephone = createContactInfo("Telephone", "646-658-2667");
    const email = createContactInfo("Email",  "oishii@example.com");
    const address = createContactInfo("Address", "497 Purple Finch Street Brooklyn, NY 11228");
    const socialMedias = createSocialMedias();
    contact.appendChild(logo);
    contact.appendChild(titleContainer);
    contact.appendChild(telephone);
    contact.appendChild(email);
    contact.appendChild(address);
    contact.appendChild(socialMedias);
    return contact;
}

function createMain() {
    const main = document.createElement("div");
    main.setAttribute("id","main");
    const contact = createContact();
    main.appendChild(contact);
    return main;
}

function initContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const bg = document.createElement("div");
    bg.classList.add("content-bg");
    const header = createHeader();
    const footer = createFooter();
    const main = createMain();
    bg.appendChild(header);
    bg.appendChild(main);
    content.appendChild(bg);
    content.appendChild(footer);
    document.getElementById("contact").classList.add("active");
}

export default initContact;