const createHeader = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = 'header';
    headerDiv.innerHTML = 'Slimtastic';
    headerDiv.style.gridRow = '1 / span 1';
    headerDiv.style.gridColumn = '1 / span 3';
    headerDiv.style.display = 'grid';
    headerDiv.style.placeItems = 'center';
    headerDiv.style.fontSize = '5rem';
    headerDiv.style.fontWeight = 'bold';
    headerDiv.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    return headerDiv;
}

export { createHeader };