import React, { useContext} from 'react'
import './FoodItem.css'
import { asset } from "../../../assets/asset";
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (

    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {
          !cartItems[id] ?
           <img className='add' onClick={() =>addToCart(id)}
           src={asset.add_icon_white} /> : 
           <div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)}
            src={asset.remove_icon_red
            } alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)}
            src={asset.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-rating'>
          <p>{name}</p>
          <img src={asset.rating_stars} alt="" />
        </div>
        <p className='food-item-desc'>
          {description}
        </p>
        <p className='food-item-price'>
          ₹{price}
        </p>
      </div>

    </div>
  )
}

export default FoodItem
