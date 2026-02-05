function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists
  const existing = cart.find(item => item.name === name);
  if(existing){
    existing.quantity += 1;
  } else {
    cart.push({name, price, quantity:1, image});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.reduce((sum,i)=>sum+i.quantity,0);
}

// Initialize cart count on page load
updateCartCount();
