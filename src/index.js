import './style.css';
import { createHeader } from "./header";
import { createButtons } from './buttons';


const content = document.querySelector('#content');
content.appendChild(createHeader());
content.appendChild(createButtons());
