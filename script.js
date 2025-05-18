// Simple cart system (you'll link this later with your products page)
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert(`${productName} added to cart!`);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartBox = document.getElementById("cart-box");
  if (!cartBox) return;

  cartBox.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const el = document.createElement("div");
    el.textContent = `${item.name} - ₹${item.price}`;
    cartBox.appendChild(el);
    total += item.price;
  });

  const totalEl = document.createElement("div");
  totalEl.innerHTML = `<strong>Total: ₹${total}</strong>`;
  cartBox.appendChild(totalEl);
}
