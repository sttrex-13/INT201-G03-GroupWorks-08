import { CookieUtil } from './cookieUtil.mjs';
import { products } from "./productList.mjs";

//------------Add selected product-----------//

const productInCart = []
let divprod = document.querySelectorAll(".product"); //select all product class
let amount = 0;
const dataCount = document.querySelectorAll(".has-badge")[0];

dataCount.setAttribute("data-count", amount);

function updateProductInCart(productToCart) { //function check if product in cart yet.
  amount++; // change amount according to product in cart
  dataCount.setAttribute("data-count", amount);
  for (let i = 0; i < productInCart.length; i++) {
    if (productInCart[i].name == productToCart.name) {
      productInCart[i].count += 1; // if product is in cart count +1
      productInCart[i].price = productInCart[i].basePrice * productInCart[i].count // sum of price of product
      console.log("1111111111");
      return;
    }
  }
  window.location.reload();
  productInCart.push(productToCart);
  addPd(productInCart);
  
}

function addCart(){
  divprod.forEach(divprods => {
    // iterate to add eventlistener to each product
    divprods.addEventListener("click", (e) => {
      if (e.target.classList.contains("button")) { // select only when user click button class
        const prodName = divprods.querySelector("#name").innerHTML; //return HTML content of tag name
        const prodPrice = divprods.querySelector("#price").innerHTML;
        prodPrice.trim('$');
        const pdId = divprods.querySelector('#id').innerHTML;
        const img = document.querySelector('#img');
      
        alert(`${prodName} has been added to your cart.`);

        let productToCart = {
          id: pdId,
          name: prodName,
          img: img,
          price:  parseInt(prodPrice) , // convert prodprice from string to number
          basePrice: parseInt(prodPrice),
          count: 1
        }

        updateProductInCart(productToCart);
        // console.log(prodPrice);
        // console.log(productInCart);
        console.log(cart);
        addCookies();
      }
    });
  });
  
}
addCart();

//------------Add & Get Cookies-----------//

function addCookies(){
  productInCart.forEach( (productInCart) => {
      CookieUtil.set( `Quantity_of_${productInCart.id}`,productInCart.count,new Date('November 30, 2021')); // create cookie in each product that selected
      CookieUtil.set( `Name_of_${productInCart.id}`,productInCart.name,new Date('November 30, 2021'));
      CookieUtil.set('amount',amount); // create cookie to store amount of product
  });
}

console.log(document.cookie);

let cart = [];
function getCookies(){
  amount = CookieUtil.get('amount') // get value off amount's cookie
  if(amount === null){
    amount = 0;
  }

  for (let i=0;i<amount;i++) {
    let inCart = {};
    inCart.name = CookieUtil.get(`Name_of_${productInCart.id}`);
    inCart.count = CookieUtil.get(`Quantity_of_${productInCart.id}`);
    // let keepCookie = CookieUtil.get(`Name_of_${productInCart.id}`);
    // let keepCount = CookieUtil.get(`Quantity_of_${productInCart.id}`);
    cart.push(inCart);
  }
}
getCookies();

dataCount.setAttribute("data-count", amount); // set amount's cookie to dataCount

// export { productInCart } 

function remove(id) {
  productInCart = productInCart.filter((productInCart) => productInCart.id === id);
  count--;
  amount.innerHTML = count;
  update
  removeCookie();
}

// function clearCart() {
//   productInCart = [];
//   count = 0;
//   amount.innerHTML = count;

// }

function removeCookie(){
  productInCart.forEach( (productInCart) => {
    CookieUtil.unset(`Quantity_of_${productInCart.id}`);
    CookieUtil.unset(`Name_of_${productInCart.id}`);
  });
}


//-----------------------Show cart--------------------//



// function createCast(){
//   // let amount = CookieUtil.get('amount');
//   for (let i=0;i<amount;i++) {
//         let keepCookie = CookieUtil.get(`Name_of_${productInCart.id}`);
//         let keepCount = CookieUtil.get(`Quantity_of_${productInCart.id}`);
//         cart.push(keepName,keepCount);
//     }
//   console.log(cart);
// }
// createCast();

function showCast(cart){
    let product = document.createElement("div") //create element div by assign to product
    product.setAttribute("class", "product") //set attribute class product in varriable product

    let name = document.createElement("p") //create element div by assign to name
    name.setAttribute("id", "name") //set attribute id that is price
    name.innerHTML = cart.name; //set value in tag div by productName

    // let image = document.createElement("img") //create element img by assign to image
    // image.setAttribute("src", products.img); //set attribute src that is img in each product

    let pricePD = document.createElement("p") //create element div by assign to pricePD
    pricePD.setAttribute("id", "price") //set attribute id that is price
    pricePD.innerHTML = `${cart.price}$`; //set value in tag div by price 

    let buttonRemove = document.createElement("button"); //create element button by assign to variable button
    buttonRemove.setAttribute("class", "mybtn") //set attribute class is button
    buttonRemove.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> Remove`

    product.append( name, pricePD,buttonRemove); //merge element from image,name,pricePD,button to be child the product 
    return product;
}

function addPd(n) { //add each product
    n.forEach((n) => {  //loop addNewProduct in each product
        let product = showCast(n);
        displayPd(product);
    }
    );
}

function displayPd(m) { // display the products
    let productsList = document.querySelector(".modal-content") // get tag that has class name products
    productsList.append(m);  //and then merge product from function to be child in tag div calss products
}