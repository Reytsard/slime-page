const createButtons = () => {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons';
    buttonsDiv.innerHTML = '<div id="product-btn">Products</div><div id="about-btn">About</div><div id="contact-btn">Contact Us</div>';
    return buttonsDiv;
}

export { createButtons };