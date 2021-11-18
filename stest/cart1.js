import { products } from './productList.mjs';

import { getAll , getKey , getValue } from './cookieUtil.mjs';

let numqty = 0;
let totalPrice = 0;

export let cart = { items: [], totalPrice: 0, itemIdIncart: [], totalQty: 0 };

export const buttonclear = document.querySelector('#clear');



oldCart();


clear.addEventListener('click', () => {
    cart.itemIdIncart = [];
    cart.items = [];
    cart.totalPrice = 0;
    cart.totalQty = 0;
    numqty.textContent = "0";
    totalprice.textContent = "Price : 0";
    deleteC();
    window.location.reload();
})



let cartIcon = document.querySelector('#myBtn');
cartIcon.addEventListener('click', () => {
    alert(showItemInCart());
})

export default function showItemInCart() {
    let string = ""
    for (let i of cart.items) {
        string += `${i.product} Price : ${i.price} $ Qty : ${i.qty}\n`
    }
    string += `\n Total Qty : ${cart.totalQty} `;
    string += `\n Total Price : ${cart.totalPrice} $`;
    return string;
}



export function oldCart() {
    for(let i =0; i < getAll().length; i++){
        cart.itemIdIncart.push(getKey(i));
    }
    if(!(cart.itemIdIncart.length === 1)){
        console.log('Hi suti');
    for(let i =0; i< getAll().length; i++){
        cart.items.push({
            product: products.find((pd) => {
                return pd.productId == getKey(i);
            }).productName,
            productId: getKey(i),
            qty: parseInt(getValue(getKey(i))),
            price: products.find((pd) => {
                return pd.productId == getKey(i);
            }).price
        })
    }
    }
    cart.items.forEach((pc) => {
        cart.totalPrice += pc.price * pc.qty;
        cart.totalQty += pc.qty
    })

    numqty = cart.totalQty;
    totalPrice = cart.totalPrice + " $";
}
