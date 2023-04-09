const makeMainContentDiv = () => {
    const mainContentDiv = document.createElement('div');
    mainContentDiv.id = 'main-content';
    mainContentDiv.style.gridColumn = '1 / span 1';
    mainContentDiv.style.gridRow = '3 / span 1';
    mainContentDiv.style.height = '100%';
    mainContentDiv.style.width = '100%';
    mainContentDiv.style.backgroundColor = 'rgba(136, 136, 136, 65%)';
    mainContentDiv.style.color = 'black';
    mainContentDiv.style.display = 'flex';
    mainContentDiv.style.flexWrap = 'wrap';
    mainContentDiv.style.overflowY = 'auto';
    mainContentDiv.style.alignItems = 'baseline';
    mainContentDiv.style.justifyContent = 'center';
    return mainContentDiv;
}

export { makeMainContentDiv };