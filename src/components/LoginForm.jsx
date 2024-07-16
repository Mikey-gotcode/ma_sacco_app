import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/css/forms.css'
//import {Link} from 'react-router-dom'

function LoginForm() {

    const [actor,setActor]=useState({})
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const{name,value}=e.target 
        setActor(prevActor=>({...prevActor,[name]:value}))

       
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(actor)
        console.log("button pressed")

        try {
            const response=await fetch('https://server-application-rizh.onrender.com/api/data/sacco/login',{
                method:'POST',
                headers:{'Content-Type':'Application/json'},
                body:JSON.stringify(actor)
            })

            const data=await response.json()
            //console.log(data)
            if (data) {
              const loggedData=data
              navigate('/dashboard',{state:loggedData})
              
            } else {
              
            }
        } catch (error) {
            console.error('Error:',error)
            
        }
    }

    
  return (
    <div className='background'>
      <div className=' div-object login'>
        <h2 className='section-header'>LOGIN</h2>
        <form  className='form-body'>
           <div className=" form-object login-form">
           <label htmlFor="" className="input-label">Username
                <input type="text" name="username" className="user-input" onChange={handleChange} />
            </label>
            <label htmlFor="" className="input-label">Password
                <input type="text" name="password" className="user-input" onChange={handleChange} />
            </label>
           </div>
        
         </form>
         <div className="btn-div">
         <button className="btn btn-login" onClick={handleSubmit}>Login</button>
            <button className="btn btn-sign-up">Sign up</button>
         </div>
    </div>
    </div>
  )
}

export default LoginForm