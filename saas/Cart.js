
// Initialize an empty cart array
let cart = [];

// Function to add item to the cart
function addToCart(item) {
    // Check if the item already exists in the cart
    if (!cart.includes(item)) {
        cart.push(item);
        updateCartDisplay();
        alert(item + ' has been added to the cart.');
    } else {
        alert(item + ' is already in the cart.');
    }
}

// Function to remove item from the cart
function removeFromCart(item) {
    const itemIndex = cart.indexOf(item);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCartDisplay();
        alert(item + ' has been removed from the cart.');
    } else {
        alert(item + ' is not in the cart.');
    }
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsElement.appendChild(li);
    });
}

// Function to scroll to top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
