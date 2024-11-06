import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import axios from 'axios';
const Contact = () => {
    const [message,setMessage]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [loading,setLoading]=useState(false)
    const [alertMessage,setAlertMessage]=useState('');
const hideMessage = ()=>{
    setTimeout(() => {
        setAlertMessage("")
    }, 3000);
}
    const RestoreDefault= ()=>{
        setName('');
        setMessage('');
        setEmail('');
    }
    const PostMessage= async (e)=>{

        try {
            setLoading(true)
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/message',{email, name, message},{withCredentials:true});
        console.log(res);
        if(res.data=='Ok'){
            setLoading(false)
            setAlertMessage('Message sent successfully');
            console.log(alertMessage)
           RestoreDefault();
          
           hideMessage();
         
        }else{
            setAlertMessage('An error occured! Please try again');
            setLoading(false)
        }
        setLoading(false)
        } catch (error) {
            setAlertMessage('An error occured! Please try again');
            setLoading(false)
            setTimeout(() => {
                setAlertMessage("")
            }, 3000);
        }


    }
  return (
    <div className='form-wrapper'>
        
        <div className="form-container">
        <h4 className='text-center text-white'>CONTACT ME</h4>
          
           

           <form onSubmit={PostMessage}>
  <div class="mb-3">
    <label for="name" class="form-label text-white">Name:</label>
    <input type="text" class="" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" required/>
  </div>

  <div class="">
    <label for="email" class="form-label text-white">Email:</label>
    <input type="email" class="" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required/>
  </div>

  <div class="mb-3">
    <label for="message" class="form-label text-white">Message:</label>
    <textarea class="" id="message" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Enter your message" required></textarea>
  </div>
<div className='btn-wrapper'>
    <div>
    <button type="submit" disabled={loading} className="btn"  style={{width:'170px',}}>{loading?'loading':'Send'}</button>
    </div>

</div>
{alertMessage.length>1 &&(
 <div className={alertMessage.includes('error')?'alert error text-center':'alert success text-center '}>{alertMessage}</div>
            )}
</form>
 
        </div>
    </div>
  )
}

export default Contact