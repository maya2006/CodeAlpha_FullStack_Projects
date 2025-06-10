const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" width="100%">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function displayCart() {
  let total = 0;
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>Price: ₹${item.price}</p>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });
  if (totalPriceEl) totalPriceEl.innerText = "Total: ₹" + total;
}

if (productList) displayProducts();
if (cartItems) displayCart();
