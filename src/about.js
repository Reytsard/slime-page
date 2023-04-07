

const addAboutContent = (content) => {
    const contentBox = document.createElement('div');
    content.removeChild(contentBox);
    contentBox.innerHTML = '<div id="about"><p>We are a local business in Baguio</p><p>your one stop shop</p></div>';
    content.appendChild(contentBox);
}
