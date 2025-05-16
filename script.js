let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  cartList.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price} `;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });

  cartTotal.textContent = total;
}
