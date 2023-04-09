import './style.css';
import { createHeader } from "./header";
import { createButtons } from './buttons';
import { makeMainContentDiv } from './main-content';
import { createProductContent } from './products';


const content = document.querySelector('#content');
content.appendChild(createHeader());
content.appendChild(createButtons());
content.appendChild(makeMainContentDiv());
const mainContentDiv = content.querySelector('#main-content');
const productBtn = content.querySelector('#product-btn');
const aboutBtn = content.querySelector('#about-btn');
const contactBtn = content.querySelector('#contact-btn');
productBtn.addEventListener('click',() => {
    productBtn.setAttribute('pointer-event','none');
    mainContentDiv.innerHTML = createProductContent();
});
aboutBtn.addEventListener('click',() => {
    aboutBtn.style['pointer-event'] = 'none';
    mainContentDiv.innerHTML = 'about tab has been opened';
})
contactBtn.addEventListener('click',() => {
    mainContentDiv.innerHTML = 'contact tab has been opened';
});
