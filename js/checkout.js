 function placeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const address = document.getElementById("address").value;

  let total = cart.reduce((sum, item) => sum + item.price, 0);

  fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      products: cart,
      total: total,
      address: address
    })
  })
  .then(() => {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });
}
