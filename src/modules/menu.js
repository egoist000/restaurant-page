import createFooter from "./footer";
import createHeader from "./header";
import getItems from "./sushi-menu";
import { createHeaderTag, createPara, createImg } from "./utilis";
import "../styles/menu.scss";

/* Import images */
function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context("../assets/sushi/", false, /\.jpg$/));

function createSushiImg(src, alt) {
    const container = document.createElement("div");
    container.classList.add("card-img");
    const img = createImg(src, alt);
    container.appendChild(img);
    return container;
}

function createSushiDetails(sushiName, sushiDescription) {
    const details = document.createElement("div");
    details.classList.add("card-details");
    const title = createHeaderTag(sushiName, 2);
    const description = createPara(sushiDescription);
    details.appendChild(title);
    details.appendChild(description);
    return details;
}

function createSushiCard(imgSrc, imgAlt, sushiName, sushiDescription) {
    const card = document.createElement("div");
    card.classList.add("sushi-card");
    const img = createSushiImg(imgSrc, imgAlt);
    const details = createSushiDetails(sushiName, sushiDescription);
    card.appendChild(img);
    card.appendChild(details);
    return card;
}

function createSushiList() {
    const container = document.createElement("div");
    container.setAttribute("id", "sushi-list");
    const items = getItems();
    items.forEach(sushi => {
        console.table(sushi);
        const card = createSushiCard(sushi.imgsrc, sushi.alt, sushi.name, sushi.description);
        container.appendChild(card);
    });
    return container;
}

function createMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-bg");
    const header = createHeader();
    const sushiList = createSushiList();
    menuContainer.appendChild(header);
    menuContainer.appendChild(sushiList);
    return menuContainer;
}

function initMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const menu = createMenu();
    const footer = createFooter();
    content.appendChild(menu);
    content.appendChild(footer);
    document.getElementById("menu").classList.add("active");
}

export default initMenu;