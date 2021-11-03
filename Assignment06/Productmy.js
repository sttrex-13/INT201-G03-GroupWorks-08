import { products } from "./ProductList.mjs";
let num = 0
function addNewProduct(productName,price,img){

    let product = document.createElement("div") //create element div by assign to product
    product.setAttribute("class","product") //set attribute class product in varriable product
    let image = document.createElement("img") //create element img by assign to image
    image.setAttribute("src",img); //set attribute src that is img in each product
    let name = document.createElement("div") //create element div by assign to name
    name.setAttribute("id","name") //set attribute id that is price
    name.innerHTML = productName; //set value in tag div by productName
    let pricePD = document.createElement("div") //create element div by assign to pricePD
    pricePD.setAttribute("id","price") //set attribute id that is price
    pricePD.innerHTML = price; //set value in tag div by price 
    let button = document.createElement("button"); //create element button by assign to variable button
    button.setAttribute("class","button") //set attribute class is button
    button.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> BUY` //assign value <i...> in button by innerHTML
    product.append(image,name,pricePD,button); //merge element from image,name,pricePD,button to be child the product 
    return product;

}

products.forEach((products) =>{  
    //loop addNewProduct in each product from ProductList.mjs 
    let product = addNewProduct(
            products.productName,
            products.price,
            products.img
        )  
        
     let productsList = document.querySelector("#products") // get tag that has class name products
     productsList.append(product);  //and then merge product from function to be child in tag div calss products
}
    
);