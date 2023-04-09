import './style.css';
import { createHeader } from "./header";
import { createButtons } from './buttons';
import { makeMainContentDiv } from './main-content';
import { createProductContent } from './products';
import { createAboutContent } from './about';
import { createContactContent } from './contact';

const content = document.querySelector('#content');
content.appendChild(createHeader());
content.appendChild(createButtons());
content.appendChild(makeMainContentDiv());
const mainContentDiv = content.querySelector('#main-content');
const productBtn = content.querySelector('#product-btn');
const aboutBtn = content.querySelector('#about-btn');
const contactBtn = content.querySelector('#contact-btn');
productBtn.addEventListener('click',() => {
    mainContentDiv.innerHTML = "";
    mainContentDiv.appendChild(createProductContent());
});
aboutBtn.addEventListener('click',() => {
    mainContentDiv.innerHTML = "";
    mainContentDiv.appendChild(createAboutContent());
})
contactBtn.addEventListener('click',() => {
    mainContentDiv.innerHTML = "";
    mainContentDiv.appendChild(createContactContent());
});
