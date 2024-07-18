
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
});
const products = [
    { id: 1, name: "Product 1", price: 10, description: "Description of Product 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description of Product 2" },
    { id: 3, name: "Product 3", price: 30, description: "Description of Product 3" },
  ];
  
  let cart = [];
  
  function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "col-md-4";
      productCard.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      `;
      productList.appendChild(productCard);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
  }
  
  function displayCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach(item => {
      const cartItem = document.createElement("li");
      cartItem.className = "list-group-item";
      cartItem.innerHTML = $`{item.name} - $${item.price}`;
      cartList.appendChild(cartItem);
    });
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("total").innerText =` Total: ${total}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
  });
  document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const cardNumber = document.getElementById("card-number").value;
    const expirationDate = document.getElementById("expiration-date").value;
    const cvv = document.getElementById("cvv").value;
  
    console.log("Payment Information:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("Card Number:", cardNumber);
    console.log("Expiration Date:", expirationDate);
    console.log("CVV:", cvv);
  
    alert("Payment submitted!");
  });