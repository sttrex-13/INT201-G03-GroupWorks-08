import { products } from "./ProductList.mjs";
import { cart } from "./cart.js";

let productsList = document.querySelector("#products");
showProduct();

export function showProduct(list = products) { // add product to html
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
        productId.setAttribute('style','opacity: 0.0');

        const productName = document.createElement('p');
        productName.setAttribute('id','name');
        productName.textContent = `${pd.productName}`;

        const productPrice = document.createElement('p');
        productPrice.setAttribute('id','price')
        productPrice.textContent = `${pd.price}` + ' $';

        const productButton = document.createElement('button');
        productButton.setAttribute("type", "button");
        productButton.setAttribute("class", "button");
        productButton.textContent = "Add To Cart";

        productItem.append(productImg,productId,productName,productPrice,productButton);

        List.appendChild(productItem);
        productsList.appendChild(List);

        productButton.addEventListener('click', () => { //if click at 'Add to cart' button this function will run
            if (!cart.itemIdIncart.includes(pd.productId)) { //check product that you added in cart is exist on the real product
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
                        document.cookie = `${pc.productId} = ${pc.qty}; expires= ` + new Date(9999,0,1).toUTCString() // add cookie in each product
                    }
                    cart.totalPrice += pc.price * pc.qty; //calculate total price
                    cart.totalQty += pc.qty // calculate total quantity
                })
            alert(`${productName.innerHTML} has been added to your cart.`);
            window.location.reload(); //reload window page
        })
    }
}