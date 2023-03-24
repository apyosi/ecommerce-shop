import React  from 'react';
import { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import CartList from './CartList';
import "../assets/css/cart.css";
// const cartData=require('../cart.json');
// const fs = require('fs')


const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0);
    // const [cartItemQty, setCartItemQty] = useState([]);
         // JSON.parse(localStorage.getItem('cartItemQty')|| []));
    
        // JSON.parse(localStorage.getItem('cartInfo'))|| []
    const [existingCartData, setExistingCartData] = useState(JSON.parse(localStorage.getItem('cartInfo'))|| []);
    console.log("Carts first call", existingCartData);
    // function checkData()

    const handleIncrease = (item) => {

        item.qty++;
        // console.log("click",item.qty)

    }
    const handleDecrease = (item) => {

        if (item.qty > 0) {
            item.qty--;
            // console.log("click",item.qty)
        }

    }
    const handlePrice = () => {
        let ans = 0;
        let cartItemQty = 0
        existingCartData.map((item) => (

            // console.log(item),
            ans += item.qty * item.price
        ))
        // existingCartData.map((item) => (
        //     cartItemQty += item.qty
        // ))
        setPrice(ans);
        // setCartItemQty(cartItemQty);
        // localStorage.setItem('cartItemQty', cartItemQty);
        localStorage.setItem('cartInfo', JSON.stringify(existingCartData));
        console.log((existingCartData))
        // const result= localStorage.getItem('cartInfo');
        console.log("after changes", JSON.parse(localStorage.getItem('cartInfo')), "items", cartItemQty);
        // adding in object c.push(g)
    }

    const handleRemove = (cartItem) => {
        // console.log("cartItem",cartItem);

        // finding what is the position of the item that need to be removed

        let obj = existingCartData.find(x => x.id == cartItem.id);
        let index = existingCartData.indexOf(obj)
        // console.log(index);
        existingCartData.splice(index, 1);
        // console.log(cartData);
        localStorage.setItem('cartInfo', JSON.stringify(existingCartData));
    }

    useEffect(() => {
        handlePrice();
    })

    return (
        // <h1>sdgbnsngfs</h1>

        <article id="cart"  className="mt-[120px] bg-slate-50 shadow-xl">
      <h1 className="text-3xl  text-slate-600 mb-5">Your shopping basket</h1>
            {
                existingCartData?.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.images[0]} />
                            <p>{item.title}</p>
                        </div>
                        <div>
                            <button onClick={() => {
                                // console.log(item);
                                handleIncrease(item);
                                handlePrice();
                            }
                            }> + </button>
                            <button>{item.qty}</button>
                            <button onClick={() => {
                                // console.log(item);
                                handleDecrease(item);
                                handlePrice();
                            }}> - </button>
                        </div>
                        <div>
                            <span>£{item.price}</span>
                            <button onClick={() => {
                                handleRemove(item);
                                handlePrice();
                            }} >Remove</button>
                        </div>

                    </div>
                ))}

            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>£ {price}</span>
            </div>
              <button className="w-[300px] text-2xl font-bold p-3 m-10 bg-red-500 rounded-lg text-white">Buy now</button>
        </article>
    )
}
// handleClick={handleClick}
export default Cart;