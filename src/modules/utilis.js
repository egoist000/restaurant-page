function createHeaderTag(text, size = 1) {
    if(size >= 1 && size <= 4) {
        const header = document.createElement(`h${size}`);
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

function createNavItem(text, idAttr, iconName) {
    const item = document.createElement("li");
    item.setAttribute("id", idAttr);
    item.classList.add("nav-item");
    item.textContent = text;
    const itemIcon = document.createElement("i");
    itemIcon.classList.add("fas", `fa-${iconName}`);
    item.appendChild(itemIcon);
    return item;
}

export {createHeaderTag, createPara, createImg, createNavItem};