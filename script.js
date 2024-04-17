

const colorOptions = document.querySelectorAll('.color-option');
const productImage = document.getElementById('productImage');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const color = option.style.backgroundColor;
        // Update image source based on color selection
        if (color === 'red') {
            productImage.src = 'p2073327.jpg';
        } else if (color === 'blue') {
            productImage.src = 't-shirt-design-2336850_640.jpg';
        } else if (color === 'green') {
            productImage.src = 'bbbcd089-e5c9-49d9-9300-0fb176c675031561025677233-Jockey-Men-Green-Solid-Round-Neck-T-shirt-8161561025675768-1.webp';
        } else if (color === 'pink') {
            productImage.src = '126701302_g1.webp';
        }
    });
});

function addToCart() {
    const quantity = document.getElementById('quantity').value;
    const size = document.getElementById('size').value;
    // Add logic to add the selected product to the cart
    alert(`Added ${quantity} ${size} t-shirt to cart.`);
}
