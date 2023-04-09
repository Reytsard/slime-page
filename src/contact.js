const aboutContent = () => '<div class="product" id="facebook">facebook</div><div class="product" id="tiktok">slime@baguio</div><div class="product" id="insta">instagram</div><div class="product" id="shopee">shopee</div><div class="product" id="lazada">lazada</div><div class="product" id="viber">viber</div>';
const createContactContent = () => {
    const contactTab = document.createElement('div');
    contactTab.id = 'contact-tab';
    contactTab.innerHTML = aboutContent();
    contactTab.style.height = '100%';
    contactTab.style.width = '100%';
    contactTab.style.display = 'flex';
    contactTab.style.flexWrap = 'wrap';
    return contactTab;
}

export {createContactContent};