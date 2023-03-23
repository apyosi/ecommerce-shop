import React,{useState} from 'react';
import { useEffect } from 'react';
import Cards from '../components/Cards';
import Amazon from './Amazon';
import "../assets/css/cart.css";
const cartData=require('../cart.json');
// const fs = require('fs')

const Cart = ({cart, setCart}) => {
    const [price, setPrice] = useState(0);
    // const [cartData, setCartData] = useState(0);

    const handleIncrease = (item, d) =>{

        item.qty ++;
            // console.log("click",item.qty)
            
	}
    const handleDecrease = (item, d) =>{

        if (item.qty>0) {
            item.qty--;
            // console.log("click",item.qty)
        }
		
	}
    const handlePrice = ()=>{
        let ans = 0;
        cartData.map((item)=>(
            ans += item.qty * item.price
        ))
        setPrice(ans);
        // console.log(cartData);
        localStorage.setItem('cartInfo', JSON.stringify(cartData));
        // const result= localStorage.getItem('cartInfo');
        console.log("locaL",JSON.parse(localStorage.getItem('cartInfo')));
        // adding in object c.push(g)
    }

    const handleRemove = (id) =>{
        console.log(id);
        const arr = cartData.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    // <h1>sdgbnsngfs</h1>

    <article id="cart">
        {
            cartData?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.images[0]} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>{
                            // console.log(item);
                            handleIncrease(item, +1);
                            handlePrice();}
                            }> + </button>
                        <button>{item.qty}</button>
                        <button onClick={()=>{
                            // console.log(item);
                            handleDecrease(item, -1);
                            handlePrice();}}> - </button>
                    </div>
                    <div>
                        <span>£{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
   
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>£ {price}</span>
        </div>
    </article>
  )
}
// handleClick={handleClick}
export default Cart;