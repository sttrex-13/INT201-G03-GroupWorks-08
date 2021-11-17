import { CookieUtil } from './cookieUtil.mjs';

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
      return;
    }
  }
  productInCart.push(productToCart);
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
        console.log(prodPrice);
        console.log(productInCart);
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
      CookieUtil.set( `Value_of_${productInCart.id}`,productInCart,new Date('November 30, 2021'));
      CookieUtil.set('amount',amount); // create cookie to store amount of product
  });
}

function getCookies(){
  amount = CookieUtil.get('amount') // get value off amount's cookie
  if(amount === null){
    amount = 0;
  }
}
getCookies();
dataCount.setAttribute("data-count", amount); // set amount's cookie to dataCount

export { productInCart } 

// function remove(id) {
//   productInCart = productInCart.filter((productInCart) => productInCart.id === id);
//   count--;
//   amount.innerHTML = count;
//   removeCookie();
// }

// function clearCart() {
//   productInCart = [];
//   count = 0;
//   amount.innerHTML = count;

// }

// function removeCookie(){
//   productInCart.forEach( (productInCart) => {
//     CookieUtil.unset(productInCart.id);
//   });
// }

