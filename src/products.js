const productContent = '<div class="product"><div class="prdct-img"><img src="" alt="product1"></div><div class="prdct-prc">100</div><div class="prdct-name">Cloud slime</div></div>';
const createProductContent = () => {
    const productTab = document.createElement('div');
    productTab.id = 'product-tab';
    productTab.innerHTML = productContent;
    productTab.style.height = '100%';
    productTab.style.width = '100%';
    productTab.style.display = 'flex';
    productTab.style.flexWrap = 'wrap';
    return productTab;
}

export { createProductContent } ;



{/* <div id="product-tab">
    <div class="product">
        <div class="prdct-img">
            <img src="" alt="product1">
        </div>
        <div class="prdct-prc">100</div>
        <div class="prdct-name">Cloud slime</div>
    </div>
</div> */}

//make a div to put the product in