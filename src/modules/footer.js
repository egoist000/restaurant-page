export default function createFooter() {
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