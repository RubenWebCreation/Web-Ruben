const productsDOM = document.querySelector(".product");
const baseUrl = "https://www.course-api.com/javascript-store-single-products";
const fetchProduct = async () => {
  try {
    productsDOM.innerHTML = `<h4 class=".product-loading">Cargando...</h4>`;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const res = await fetch(`${baseUrl}?id=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">Se ha producido un error</p>';
  }
};

const displayProducts = () => {};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
console.log("El script sigue");
