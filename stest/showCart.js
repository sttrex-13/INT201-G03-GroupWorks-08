import { productInCart } from './cart.js';
import { CookieUtil } from './cookieUtil.mjs';

let cart = []

createCast();
addPd(cart);

function createCast(){
    console.log(cart);
    for (let i=0;i<cart.length;i++) {
        let keepCookie = CookieUtil.get(`Value_of_${productInCart.id}`);
        cart.push(keepCookie);
    }
}

function showCast(cart){
    let product = document.createElement("div") //create element div by assign to product
    product.setAttribute("class", "product") //set attribute class product in varriable product

    let name = document.createElement("p") //create element div by assign to name
    name.setAttribute("id", "name") //set attribute id that is price
    name.innerHTML = name; //set value in tag div by productName

    let pricePD = document.createElement("p") //create element div by assign to pricePD
    pricePD.setAttribute("id", "price") //set attribute id that is price
    pricePD.innerHTML = `${price}$`; //set value in tag div by price 

    let id = document.createElement("p")
    id.setAttribute('id','id')
    id.setAttribute('style','opacity: 0.0');
    id.innerHTML = id;

    product.append( name, pricePD, id); //merge element from image,name,pricePD,button to be child the product 
    return product;
}

function addPd(n) { //add each product
    n.forEach((n) => {  //loop addNewProduct in each product
        let product = showCast(n);
        displayPd(product);
        
    }
    );
    console.log("test1")
}

function displayPd(m) { // display the products
    let productsList = document.querySelector(".modal-content") // get tag that has class name products
    console.log("Productlist");
    console.log(productsList);
    let name = document.createElement("p") //create element div by assign to name
    name.setAttribute("id", "name") //set attribute id that is price
    name.innerHTML = "sssss"; //set value in tag div by productName

    productsList.append(name);  //and then merge product from function to be child in tag div calss products
}
