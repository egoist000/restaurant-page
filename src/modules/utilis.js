function createHeaderTag(text, size = 1) {
    if(size >= 1 && size <= 4) {
        const header = document.createElement("h1");
        header.textContent = text;
        return header;
    }
    else {
        console.log("header size!");
        throw Error;
    }
}

function createPara(text) {
    const para = document.createElement("p");
    para.textContent = text;
    return para;
}

function createImg(src, alt = "", className = "") {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    if(className !== "") {img.classList.add(className);}
    return img;
}

function createNavItem(text, idAttr, iconName, isActive = false) {
    const item = document.createElement("li");
    item.setAttribute("id", idAttr);
    item.classList.add("nav-item");
    item.textContent = text;
    const itemIcon = document.createElement("i");
    itemIcon.classList.add("fas", `fa-${iconName}`);
    if(isActive) {item.classList.add("active");}
    item.appendChild(itemIcon);
    return item;
}

function createFooter() {
    const footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    const icon = document.createElement("i");
    icon.classList.add("fab", "fa-github-alt");
    const githubSpan = document.createElement("span");
    githubSpan.textContent = "GitHub: ";
    const link = document.createElement("a");
    link.href = "https://github.com/egoist000";
    link.textContent = "egoist000";
    footer.appendChild(icon);
    footer.appendChild(githubSpan);
    footer.appendChild(link);
    return footer;
}

export {createHeaderTag, createPara, createImg, createNavItem, createFooter};