const createProductContent = () => {
    const productTab = document.createElement('div');
    productTab.id = 'product-tab';
    productTab.innerHTML = 'Hi';
}
const productContent = '<div class="product"><div class="prdct-img"><img src="" alt="product1"></div><div class="prdct-prc">100</div><div class="prdct-name">Cloud slime</div></div>';

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