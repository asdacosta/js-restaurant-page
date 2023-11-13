function menu () {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const box = document.createElement('div');

    h1.style.textAlign = 'center';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.gap = '1.5rem';
    box.style.marginTop = '100px';

    function createDish (title, cost) {
        const section = document.createElement('section');
        section.style.backgroundColor = 'rgba(141, 141, 2, 0.7)';
        section.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.4)';
        section.style.height = '100px';
        section.style.width = '200px';
        section.style.textAlign = 'center';
        section.style.paddingTop = '45px';
        section.style.cursor = 'pointer';
        section.innerHTML = `${title} <br>${cost} Dollars`;
        
        box.appendChild(section);
    }
    createDish('M-Shawarma', 100);
    createDish('L-Shawarma', 1000);
    createDish('XL-Shawarma', 10000);

    h1.textContent = 'Walk Through Our Menu';

    content.appendChild(h1);
    content.appendChild(box);
}

export {menu};