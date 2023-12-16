let inputElement = document.getElementById("inputElement");

let container = document.getElementById("bottomCart");

let arrayOfObjs = null;

let initialize = async () => {
  await fetch("https://products-api-2ttf.onrender.com/api/products")
    .then((response) => {
      arrayOfObjs = response.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

initialize();

function makeCart(obj, isYes) {
  let { product_image, product_title, product_badge, product_variants } = obj;
  let cartCon = document.createElement("div");
  cartCon.classList.add("container");
  container.appendChild(cartCon);

  let insideCart = document.createElement("div");
  insideCart.classList.add("insideCart");
  cartCon.appendChild(insideCart);
  if (product_badge !== "") {
    let newEle = document.createElement("p");
    newEle.textContent = "New";
    newEle.classList.add("new");
    insideCart.appendChild(newEle);
  }

  let imageEle = document.createElement("img");
  imageEle.setAttribute("src", product_image);
  imageEle.classList.add("image");
  insideCart.appendChild(imageEle);

  let contentCon = ;
  let contentEle = document.createElement("p");
}
