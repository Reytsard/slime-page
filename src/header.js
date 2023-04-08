const createHeader = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = 'header';
    headerDiv.innerHTML = 'Slimtastic';
    return headerDiv;
}

export { createHeader };