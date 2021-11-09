import { products } from "./ProductList.mjs";
let num = 0
const dataCount = document.querySelectorAll(".has-badge")[0];
let amount = 0;

function addNewProduct(productName,price,img,id){

    let product = document.createElement("div"); //create element div by assign to product
    product.setAttribute("class","product"); //set attribute class product in varriable product

    let image = document.createElement("img"); //create element img by assign to image
    image.setAttribute("src",img); //set attribute src that is img in each product

    let name = document.createElement("div"); //create element div by assign to name
    name.setAttribute("id","name"); //set attribute id that is price
    name.innerHTML = productName; //set value in tag div by productName

    let pricePD = document.createElement("div"); //create element div by assign to pricePD
    pricePD.setAttribute("id","price"); //set attribute id that is price
    pricePD.innerHTML = price; //set value in tag div by price 

    let button = document.createElement("button"); //create element button by assign to variable button
    button.setAttribute("class","button"); //set attribute class is button
    button.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> ADD TO CART` ;//assign value <i...> in button by innerHTML

    product.append(image,name,pricePD,button); //merge element from image,name,pricePD,button to be child the product 
    
    return product;

}

products.forEach((products) =>{  
    //loop addNewProduct in each product from ProductList.mjs 
    let product = addNewProduct(
            products.productName,
            products.price,
            products.img,
            products.productId
        )  
        
     let productsList = document.querySelector("#products") // get tag that has class name products
     productsList.append(product);  //and then merge product from function to be child in tag div calss products
}
);

let click = false;
function toggleSearch(){  //Show and hidden search panel 
    let inputName = document.querySelector("#input");
    
    click = !click;
    if(click) {
        inputName.setAttribute('class','visible');//Press to display the search panel.

    } else {
        inputName.setAttribute('class','invisible');//Press to hide search panel.
    }
}

let search = document.querySelector("#search");
search.setAttribute('style','padding-top: 15px');
search.addEventListener('click', toggleSearch); //If click the magnifying glass code will calling toggleSearch function

const searching = () => { 
    let input, filter, div, div2, pdName, txtValue,i;
      input = document.querySelector("#inputValue") ;
      filter = input.value.toUpperCase(); // Assign value from tag input to filter in uppercase 
      div = document.getElementById("products"); // Select all products and put them in the div
      div2 = div.getElementsByClassName("product"); // Select product and put them in the div2
      
     for (i = 0; i < products.length; i++) { 
        pdName = div2[i].getElementsByTagName("div")[0];
        txtValue = pdName.textContent || pdName.innerText; // assign value in first tag div that the name of product to txtValue
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div2[i].style.display = ""; // Bring the product that include the condition to show while sreaching
       } else {
           div2[i].style.display = "none"; // Hidden the product that is't include the condition while sreaching
        }
} }

let btn = document.querySelector("#searchBtn"); 
btn.onclick = searching; // Add event onclick to search button for searching