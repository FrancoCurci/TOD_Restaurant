import { menuHTML } from "./menu.js";
import { contactHTML } from "./contact.js";
import { homeHTML } from "./home.js";
import { headerHtml } from "./header.js";
import { footerHTML } from "./footer.js";

const elementheader = document.getElementById("header")
const elementfooter = document.getElementById("footer")

const elementPrincipal = document.getElementById("content")
const elementBody = document.createElement("div")





main()

function main() {
    elementheader.appendChild(createheaderHtml())
    elementPrincipal.appendChild(elementBody.appendChild(createMenuHTML()))
    elementfooter.appendChild(createfooterHTML())
    addEventListenerToButtons()
}


function addEventListenerToButtons() {
    const buttonHomeContainer = document.getElementById("homeButton")
    const buttonMenuContainer = document.getElementById("menuButton")
    const buttonContactContainer = document.getElementById("contactButton")

    buttonHomeContainer.addEventListener("click", () => {
        console.log("click en home")
        addBodyPage(createhomeHTML())
    })
    buttonMenuContainer.addEventListener("click", () => {
        console.log("click en menu")
        addBodyPage(createMenuHTML())

    })
    buttonContactContainer.addEventListener("click", () => {
        console.log("click en contact")
        addBodyPage(createcontactHTML())

    })
}

function addBodyPage(bodySection) {
    elementPrincipal.innerHTML = ""
    elementBody.innerHTML = ""
    elementBody.appendChild(bodySection)
    elementPrincipal.appendChild(elementBody)
}

function createMenuHTML() {
    const elementSection = document.createElement("section")
    elementSection.innerHTML = menuHTML;
    return elementSection
}

function createcontactHTML() {
    const elementSection = document.createElement("section")
    elementSection.innerHTML = contactHTML;
    return elementSection
}

function createhomeHTML() {
    const elementSection = document.createElement("main")
    elementSection.innerHTML = homeHTML;
    return elementSection
}

function createheaderHtml() {
    const elementSection = document.createElement("header")
    elementSection.innerHTML = headerHtml;
    return elementSection
}

function createfooterHTML() {
    const elementSection = document.createElement("footer")
    elementSection.innerHTML = footerHTML;
    return elementSection
}