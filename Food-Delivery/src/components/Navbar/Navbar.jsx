import { useContext, useState } from "react";
import { asset } from "../../../assets/asset";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css"

const Navbar = ({setShowLogin}) => {

 const [menu,setMenu] = useState("home")
 const navigate = useNavigate()

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
  
   
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
     <Link to="/"><img src={asset.logo} alt="" className="logo" /> </Link>
     <ul className='navbar-menu'>
      <Link to='/' onClick={()=> setMenu("home")}
      className={`${menu === "home" ? "underline" : ""}  `}>Home</Link>
      <a href="#explore-menu" onClick={()=> setMenu("menu")}
      className={`${menu === "menu" ? "underline" : ""}    `}>Menu</a>
      <a href="#app-donlod" onClick={()=> setMenu("mobile-app")}
      className={`${menu === "mobile-app"? "underline" : ""}  `}>Mobile-App</a>
      <a href="#footer" onClick={()=> setMenu("contact-us")}
      className={`${menu === "contact-us"  ? "underline" : ""} `}>Contact-us</a>
     </ul>
     <div className="navbar-right">
      <div className="navbar-search-icon">
      <Link to="/cart"><img src={asset.basket_icon} /></Link>
      {getTotalCartAmount() > 0 && <div className="red-dot"></div>}
     </div>
     {!token ? <button onClick={()=>setShowLogin(true)}>
      sign in
    </button> : <div className="navbar-profile">
      <img src={asset.profile_icon} alt="" />
      <ul className="nav-profile-dropdown">
        <li onClick={()=>navigate("/myorders")}><img src={asset.bag_icon} alt="" /><p>Orders</p></li>
        <hr />
        <li onClick={logout}><img src={asset.logout_icon} alt="" /><p>Logout</p></li>
      </ul>
    </div> }
     
     </div>
    </div>
  )
}

export default Navbar
