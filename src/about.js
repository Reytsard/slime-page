const aboutContent = '<p>Philippine local Business</p><p>We are located at Baguio City, Philippines</p><p>Making kids dream of having a slime and to be able to play with them</p>';
const createAboutContent = () => {
    const aboutTab = document.createElement('div');
    aboutTab.id = 'aboutTab';
    aboutTab.innerHTML = aboutContent;
    return aboutTab;
}

export {createAboutContent};