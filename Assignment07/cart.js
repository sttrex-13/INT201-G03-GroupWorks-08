const productInCart = []
let divprod = document.querySelectorAll(".product"); //select all product class
let amount = 0;
const dataCount = document.querySelectorAll(".has-badge")[0];

  dataCount.setAttribute("data-count",amount);

function updateProductInCart(productToCart){ //function check if product in cart yet.
  amount ++; // change amount according to product in cart
  dataCount.setAttribute("data-count",amount);
  for(let i = 0 ; i < productInCart.length ; i++){
      if(productInCart[i].name == productToCart.name){
        productInCart[i].count +=1; // if product is in cart count +1
        productInCart[i].price = productInCart[i].basePrice * productInCart[i].count // sum of price of product
        
        return;
      }
    }
   productInCart.push(productToCart)
}
console.log(productInCart)

divprod.forEach(divprods => { 
// iterate to add eventlistener to each product
  divprods.addEventListener("click", (e) => {
    if (e.target.classList.contains("button")) { // select only when user click button class
      const prodName = divprods.querySelector("#name").innerHTML; //return HTML content of tag name
      const prodPrice = divprods.querySelector("#price").innerHTML
      alert(`${prodName} has been added to your cart.`);
      
    
      let productToCart = {
        name : prodName ,
        price : +prodPrice , // + change prodprice from string to number
        basePrice : +prodPrice ,
        count : 1 
      }
  
      updateProductInCart(productToCart); 
    }
  });
});