const apiResponse = {
    Men: [
        { title: 'Mens Kurta', vendor: 'Manyavar', price: 500, compareAtPrice: 600, image: 'men product1.png', categoryName: 'Wedding Secial' },
        { title: 'RCB Tshirt', vendor: 'PUMA', price: 100, compareAtPrice: 250, image: 'men product 2.png', categoryName: 'Sports Wear' },
        { title: 'Green Charm', vendor: 'Myntra', price: 150, compareAtPrice: 300, image: 'men product 3.png', categoryName: 'On Offer' },
        { title: 'Mens Tshirt', vendor: 'Myntra', price: 250, compareAtPrice: 500, image: 'men product 4.png', categoryName: 'New Season' },
    ],
    Women: [
        { title: 'Women Kurti', vendor: 'Manyavar', price: 500, compareAtPrice: 650, image: 'women product 1.png', categoryName: 'New Season' },
        { title: 'Yellow Kurti', vendor: 'Myntra', price: 600, compareAtPrice: 700, image: 'women product 2.png', categoryName: 'Casual Wear' },
        { title: 'Women Black', vendor: 'Myntra', price: 400, compareAtPrice: 600, image: 'women product 3.png', categoryName: 'On Offer' },
        { title: 'METRO FASHION blue Kurti', vendor: 'Myntra', price: 450, compareAtPrice: 800, image: 'women product 4.png', categoryName: 'New Season' },
    ],
    Kids: [
        { title: 'Kids white printed Tshirt', vendor: 'Myntra', price: 300, compareAtPrice: 500, image: 'child 1.png', categoryName: 'New Season' },
        { title: 'Kids Black tracksuit', vendor: 'Myntra', price: 350, compareAtPrice: 550, image: 'child 2.png', categoryName: '' },
        { title: 'Kids white Tshirt', vendor: 'Myntra', price: 250, compareAtPrice: 450, image: 'child 3.png', categoryName: 'On Offer' },
        { title: 'Kids Black', vendor: 'Myntra', price: 200, compareAtPrice: 450, image: 'child 4.png', categoryName: 'New Season' },
    ],
};

// Initial load
showProducts('Men');

// Function to show products based on category
function showProducts(category) {
    const products = apiResponse[category];

    // Render products in the product-container
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const discount = Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100);

        // Create a container div for each product card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Create an image element
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productCard.appendChild(productImage);

        // Add category overlay on the image
        const categoryOverlay = document.createElement('div');
        categoryOverlay.classList.add('category-overlay');
        categoryOverlay.textContent = product.categoryName;
        productCard.appendChild(categoryOverlay);

        // Add other product information
        productCard.innerHTML += `
            <div class="badge"></div>
            <p><b class="b1">${product.title}  .  </b>${product.vendor}</p>
            <p>Rs.${product.price}     <b class="b3">${product.compareAtPrice}</b>      <b class="b2">${discount}% off</b></p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;

        // Append the product card to the product container
        productContainer.appendChild(productCard);
    });
}