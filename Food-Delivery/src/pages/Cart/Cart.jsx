import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

 const {cartItems,food_list,removeFromCart, getTotalCartAmount,url} = useContext(StoreContext)

  

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=> {      
          if (cartItems?.[item._id]>0) 
            {
            return (
              <div key={item._id}>
              <div className='cart-items-title cart-items-item'>
              <img src={url+"/images/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>₹{item.price*cartItems[item._id]}</p>
              <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>
              
              </div>
              <hr />
              </div>
            )
          }
          return null
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-details'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0 ? 0 : 49}</p>
            </div>
            <hr />
            <div className="cart-details total-row">
              <b>Total</b>
              <p><b>₹{getTotalCartAmount()===0 ? 0 : getTotalCartAmount() + 49}</b></p>
              <hr />
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
