function contact () {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const info = document.createElement('p');

    h1.textContent = 'Contact Us';
    h1.style.textAlign = 'center';
    info.style.background = 'rgba(141, 141, 2, 0.4)';
    info.innerHTML = 'shawarma@gmail.com <br>(123) 456-7890';
    info.style.width = '300px';
    info.style.height = 'auto';
    info.style.textAlign = 'center';
    info.style.margin = 'auto';
    info.style.padding = '10px';

    content.appendChild(h1);
    content.appendChild(info);
}

export {contact};