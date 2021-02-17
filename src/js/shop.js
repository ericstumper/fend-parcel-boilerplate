import products from "./products.json";

function handleCartButtonClick(event) {
  const productId = parseInt(this.dataset.productId, 10);
  const chosenProduct3 = products.find(function (product) {
    if (product.id === productId) {
      return true;
    }
    return false;
  });

  const chosenProduct = products.find((product) => {
    if (product.id === productId) {
      return true;
    }
    return false;
  });

  const chosenProduct2 = products.find((product) => product.id === productId);

  const currentCart = JSON.parse(localStorage.getItem("cart"));

  console.log(currentCart);

  if (currentCart !== null) {
    const updatedCart = [...currentCart, chosenProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    localStorage.setItem("cart", JSON.stringify([chosenProduct]));
  }
}

function shop() {
  const productContainer = document.querySelector(".products");
  const productTemplate = `
   ${products
     .map(
       (product) => `
    <div class="product">
      <h3 class="headline">${product.productName}</h3>
      <div class="description">${product.description}</div>
      <div class="price">${product.price / 100}€</div>
      <button class="add-to-cart-button" data-product-id="${
        product.id
      }">Add to cart</button>
    </div>
   `
     )
     .join("")} 
  `;

  productContainer.innerHTML = productTemplate;

  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  addToCartButtons.forEach((cartButton) =>
    cartButton.addEventListener("click", handleCartButtonClick)
  );
}

export default shop;
