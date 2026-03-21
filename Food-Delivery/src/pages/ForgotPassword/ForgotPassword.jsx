import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import "./ForgotPassword.css"


const ForgotPassword = () => {
  
    const {url} = useContext(StoreContext);

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
     
        if (!email) return;
          
        setLoading(true);
        setMessage("")
        
       try {
        const {data} = await axios.post(url+"/api/auth/forgot-password", {email});
        setMessage(data.message)
        setEmail("");


       } catch (error) {
        setMessage(error.response?.data?.message || "Something went wrong. Please try again.")
       }
       
     setLoading(false);
    }


  return (
    <div className='forgot-container'>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        
        <input type="email" placeholder='Enter your registered email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <button type='submit' disabled={loading}>{loading ? "Sending..." : "Send reset link"}</button>
      </form>
      {message && (<p style={{marginTop: "10px", color: message.toLowerCase().includes("sent") ? "green" : "red", }}>{message}</p>)}
    </div>
  )
}

export default ForgotPassword
