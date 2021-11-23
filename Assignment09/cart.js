import { getAll , getKey , getValue, deleteC } from './cookieUtil.mjs';
import { products } from './productList.mjs';

let numqty = 0;
let totalPrice = 0;

export const cart = { items: [], totalPrice: 0, itemIdIncart: [], totalQty: 0 };
export const buttonclear = document.querySelector('#clear');

const dataCount = document.querySelectorAll(".has-badge")[0];
oldCart();

buttonclear.addEventListener('click', () => { // clear items in cart
    cart.itemIdIncart = [];
    cart.items = [];
    cart.totalPrice = 0;
    cart.totalQty = 0;
    deleteC(); // delete all cookies
    window.location.reload();
})

const cartIcon = document.querySelector('#ex4');
cartIcon.addEventListener('click', () => { // when click cart icon show all items in cart
    alert(showItemInCart());
})

export default function showItemInCart() {
    let string = ""
    for (let i of cart.items) { // show productName , price , quantity of each item
        string += `${i.product} Price : ${i.price} $ Quantity : ${i.qty}\n`
    }
    string += `\n Total Qty : ${cart.totalQty} `;
    string += `\n Total Price : ${cart.totalPrice} $`;
    return string;
}

export function oldCart() { // get item from cookies to shown in cart
    for(let i =0; i < getAll().length; i++){
        cart.itemIdIncart.push(getKey(i)); //get item from cookie to cart.itemIdIncart
    }
    if(!(cart.itemIdIncart.length === 1)){
    for(let i =0; i< getAll().length; i++){
        cart.items.push({
            product: products.find((pd) => {
                return pd.productId == getKey(i);
            }).productName,
            productId: getKey(i), //call productId from cookie
            qty: parseInt(getValue(getKey(i))), //call qty from cookie
            price: products.find((pd) => {
                return pd.productId == getKey(i); //call price from cookie
            }).price
        })
    }
    }
    cart.items.forEach((pc) => { // calculate productprice from cart items
        cart.totalPrice += pc.price * pc.qty;
        cart.totalQty += pc.qty
    })

    numqty = cart.totalQty;
    totalPrice = cart.totalPrice + " $";
}
dataCount.setAttribute("data-count",`${cart.totalQty}`);// set number of cart items

