import {pageLoad} from './load.js';
import {contact} from './contact.js';
import {menu} from './menu.js';

const content = document.querySelector('#content');
document.body.style.background = 'url(./sh.jpg) center/cover no-repeat';
content.style.height = '100vh';
content.style.width = '100%';
content.style.color = 'white';
content.style.margin = '50px';
document.body.style.fontSize = '1.2rem';

const nav = document.createElement('nav');
nav.style.display = 'flex';
nav.style.justifyContent = 'center';
nav.style.gap = '30px';
nav.style.marginBottom = '100px';

const homeTab = document.createElement('button');
homeTab.textContent = 'Home';
const contactTab = document.createElement('button');
contactTab.textContent = 'Contact';
const menuTab = document.createElement('button');
menuTab.textContent = 'Menu';

nav.appendChild(homeTab);
nav.appendChild(contactTab);
nav.appendChild(menuTab);
document.body.insertBefore(nav, content);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.style.width = '100px';
    button.style.height = '50px';
    button.style.fontSize = '1.5rem';
    button.style.fontWeight = '700';
    button.style.cursor = 'pointer';
    button.style.background = 'none';
    button.style.color = 'olive';
    button.style.border = 'none';
})

homeTab.addEventListener('click', () => {
    content.innerHTML = '';
    pageLoad();
})
contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    contact();
})
menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    menu();
})


pageLoad();
