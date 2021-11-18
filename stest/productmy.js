import { products } from "./productList.mjs";
import { cart } from "./cart1.js";

// function addNewProduct(products) {

//     let product = document.createElement("div") //create element div by assign to product
//     product.setAttribute("class", "product") //set attribute class product in varriable product
//     let image = document.createElement("img") //create element img by assign to image
//     image.setAttribute("src", products.img); //set attribute src that is img in each product
//     let name = document.createElement("div") //create element div by assign to name
//     name.setAttribute("id", "name") //set attribute id that is price
//     name.innerHTML = products.productName; //set value in tag div by productName
//     let pricePD = document.createElement("div") //create element div by assign to pricePD
//     pricePD.setAttribute("id", "price") //set attribute id that is price
//     pricePD.innerHTML = `${products.price}$`; //set value in tag div by price 
//     let id = document.createElement('div')
//     id.setAttribute('id','id')
//     id.setAttribute('style','opacity: 0.0');
//     id.innerHTML = products.productId;

    
//     let button = document.createElement("button"); //create element button by assign to variable button
//     button.setAttribute("class", "button") //set attribute class is button
//     button.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> ADD TO CART` //assign value <i...> in button by innerHTML

//     product.append(image, name, pricePD, button, id); //merge element from image,name,pricePD,button to be child the product 
//     return product;

// }

// function addPd(n) { //add each product
//     n.forEach((n) => {  //loop addNewProduct in each product
//         let product = addNewProduct(n);

//         displayPd(product);

//     }
//     );
// }

// // search button
// addPd(products);

// function displayPd(m) { // display the products
//     let productsList = document.querySelector("#products") // get tag that has class name products
//     productsList.append(m);  //and then merge product from function to be child in tag div calss products
// }

let productsList = document.querySelector("#products");
showProduct();
export function showProduct(list = products) {
    productsList.innerHTML = "";
    for (let pd of list) {
        const List = document.createElement("div");
        List.setAttribute('id', pd.productId);
        List.setAttribute("class", "product");
        List.setAttribute("style", "margin-bottom: 10px; text-align: center; ")

        const productItem = document.createElement("div");
        productItem.setAttribute("class", "card-body text-dark");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", pd.img);

        const productId = document.createElement('p');
        productId.textContent = ` ID : ${pd.productId}`;

        const productName = document.createElement('p');
        productName.textContent = ` ${pd.productName}`;

        const productPrice = document.createElement('p');
        productPrice.textContent = ` Price : ${pd.price}` + ' $';

        const productButton = document.createElement('button');
        productButton.setAttribute("type", "button");
        productButton.setAttribute("class", "button");
        productButton.textContent = "Add To Cart";

        productItem.appendChild(productImg);
        productItem.appendChild(productId);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productButton);

        List.appendChild(productItem);
        productsList.appendChild(List);

        productButton.addEventListener('click', () => {
            if (!cart.itemIdIncart.includes(pd.productId)) {
                cart.itemIdIncart.push(pd.productId);
                cart.items.push({
                    product: pd.productName,
                    productId: pd.productId,
                    qty: 0,
                    price: pd.price
                });
            }

            cart.totalPrice = 0;
            cart.totalQty = 0;

            cart.items.forEach((pc) => {
                    if(pc.productId == pd.productId){
                        pc.qty += 1;
                        document.cookie = `${pc.productId} = ${pc.qty}; expires= ` + new Date(9999,0,1).toUTCString()
                    }
                    cart.totalPrice += pc.price * pc.qty;
                    cart.totalQty += pc.qty
                })


        })

    }

}