import { productInCart } from './cart.js';
import { CookieUtil } from './cookieUtil.mjs';

// function createBox(){

//   let boxCart = document.createElement('div');
//   boxCart.setAttribute('id','boxCart');
//   boxCart.setAttribute('class','overlay');
//   let content = document.createElement('div');
//   content.setAttribute('id','boxContent');
//   let head = document.createElement('div');
//   head.setAttribute('id','boxHeader');
//   let a = document.createElement('a');
//   a.setAttribute('class','close');
//   a.setAttribute('href','#');
//   a.innerHTML =  `&times;`;
//   let yourCart = document.createElement('h2');
//   yourCart.setAttribute('id','yourCart');
//   yourCart.innerHTML = 'Your Cart';
//   let body = document.createElement('div');
//   body.setAttribute('id','boxBody');
//   boxCart.setAttribute('class','popup');
  
 
//   head.append(yourCart, a);
//   body.append(content);
//   boxCart.append(head, body);
//    showCart();
  
// }  

// function showCart(){
//     let content = document.querySelector('#popup1');
    
//   if(CookieUtil.get(`${productInCart.id}`)){ 
//   productInCart.forEach((productInCart) => {  //add each product
//     alert(555)
    

//     let name = document.createElement('p');
//     name.setAttribute('id','namePd');
//     name.innerHTML = productInCart.name;
//     let img = document.createElement('p');
//     img.setAttribute('id','imgPd');
//     img.setAttribute('src',`${productInCart.img}`);
//     let count = document.createElement('p');
//     count.setAttribute('id','count');
//     count.innerHTML = productInCart.count;

//     content.append(img, name, count);
//   });
//   } 
// }

let icon = document.querySelector('#ex4');
icon.addEventListener('click', () => {
    document.querySelector('#centralModalLg');
});

// function displayPd(content) { // display the products
//     let boxProduct = document.querySelector("#popup") // get tag that has class name products
//     boxProduct.append(content);  //and then merge product from function to be child in tag div calss products
// }




// // Get the button that opens the modal
// var icon = document.getElementById("ex4");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// var modal = document.getElementById("myModal");
// modal.style = 'width: 100%;';

// // When the user clicks on the button, open the modal
// icon.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }