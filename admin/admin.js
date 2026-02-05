// ====== ADMIN LOGIN ======
const ADMIN_ID = "admin";
const ADMIN_PW = "password123";

function loginAdmin() {
  const id = document.getElementById("adminId").value;
  const pw = document.getElementById("adminPw").value;

  if (id === ADMIN_ID && pw === ADMIN_PW) {
    // Save login session
    localStorage.setItem("adminLoggedIn", true);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid ID or Password");
  }
}

// ====== CHECK IF ADMIN IS LOGGED IN ======
function checkAdminLogin() {
  if (!localStorage.getItem("adminLoggedIn")) {
    window.location.href = "login.html";
  }
}

// ====== LOGOUT ======
function adminLogout() {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "login.html";
}

// ====== PRODUCTS MANAGEMENT ======
function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function addProduct(product) {
  const products = getProducts();
  products.push(product);
  saveProducts(products);
}

function updateProduct(index, product) {
  const products = getProducts();
  products[index] = product;
  saveProducts(products);
}

function deleteProduct(index) {
  const products = getProducts();
  products.splice(index, 1);
  saveProducts(products);
}

// ====== ORDERS MANAGEMENT ======
function getOrders() {
  return JSON.parse(localStorage.getItem("orders")) || [];
}

function clearOrders() {
  if (confirm("Are you sure you want to clear all orders?")) {
    localStorage.removeItem("orders");
    displayOrders();
  }
}
document.getElementById("productForm")?.addEventListener("submit", async e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const res = await fetch("http://localhost:5000/admin/add-product", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  alert(data.message);
});

