
document.getElementById("convertBtn").addEventListener("click", function() { 
const robuxAmount = document.getElementById("robuxAmount").value; 
const exchangeRate = 160; // Rp 16,000 / 100 robux = Rp 160 per robux 
const rupiahAmount = robuxAmount * exchangeRate; 
const formattedRupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(rupiahAmount); 
//const formattedRupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(rupiahAmount); 
//document.getElementById("result").textContent = `${robuxAmount} Robux = ${formattedRupiah}`; 
document.getElementById("result").textContent = `${formattedRupiah}`; 
}); 





let cart = [];

// Add product to the cart
function addToCart(id, name, price) {
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

// Remove product from the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    cartItemsDiv.innerHTML = ''; // Clear current cart items

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <span>${item.name} x${item.quantity} - $${item.price * item.quantity}</span>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });

    totalPriceSpan.innerText = total;
}
