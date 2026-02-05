fetch("http://localhost:5000/api/products")
.then(res => res.json())
.then(data => {
  const div = document.getElementById("products");
  data.forEach(p => {
    div.innerHTML += `
      <div class="product">
        <img src="${p.image}" style="width:100%">
        <h3>${p.name}</h3>
        <p>Rs ${p.price}</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      </div>
    `;
  });
});
