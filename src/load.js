function pageLoad () {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const info = document.createElement('p');

    h1.textContent = 'Welcome To Shawarma Heaven';
    h1.style.textAlign = 'center';
    info.textContent = 'Satisfy your shawarma cravings with just a few clicks! Our user-friendly online ordering system ensures convenience, and our swift delivery brings the shawarma experience to your doorstep.';
    info.style.width = '700px';
    info.style.backgroundColor = 'rgba(141, 141, 2, 0.4)';
    info.style.margin = 'auto';
    info.style.padding = '10px';

    content.appendChild(h1);
    content.appendChild(info);
}

export {pageLoad};