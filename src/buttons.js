const createButtons = () => {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons';
    buttonsDiv.innerHTML = '<div id="product-btn">Products</div><div id="about-btn">About</div><div id="contact-btn">Contact Us</div>';
    buttonsDiv.style.gridRow = '2 / span 1';
    buttonsDiv.style.gridColumn = '1 / span 1';
    buttonsDiv.style.display = 'grid';
    buttonsDiv.style.gridTemplateColumns = 'repeat(3, 1fr)';
    buttonsDiv.style.placeItems = 'center';
    return buttonsDiv;
}
export { createButtons };