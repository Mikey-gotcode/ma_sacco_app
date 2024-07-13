import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
//import io from 'socket.io-client'


function SignUpForm() {

    const navigate=useNavigate()
    const [actor,setActor]=useState({})
    //const socketRef=useRef(null)

    // useEffect(()=>{
    //     socketRef.current=io('http://10.51.18.11:5000')
        
    //     return ()=>{
    //         if(socketRef.current)socketRef.current.disconnect()
    //     }
    // },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setActor(prevActor => ({
            ...prevActor,
            [name]: value
        }));
    };
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log("button pressed")
        console.log(actor)

        try {
            const response=await fetch('http://localhost:5000/sacco/register',{
                method:'POST',
                headers:{'Content-Type':'Application/json'},
                body:JSON.stringify(actor)
            })

            const data=await response.json()
            console.log(data)
            if (data) {
                const savedVehicle= data
                navigate('/dashboard',{state:savedVehicle})
            } else {
                
            }
        } catch (error) {
            console.error('Error:',error)
            
        }

    


    //   if(socketRef.current){
        
    //     socketRef.current.emit('signup',actor,(response)=>{
    //         console.log(response)

    //         if(response.success){
    //             navigate('/')
    //         }else{
    //             console.error('signup failed:',response.message)
    //         }
    //         socketRef.current.disconnect()
    //     })
    //   }
       
    }

    
  return (
    <div className='background'>
        <div className='div-object sign-up'>
        <h1 className='section-header'>Sign Up</h1>

        <form className='form-body' onSubmit={handleSubmit}>
            <div className='form-object sign-up-form'>
                <label htmlFor="saccoName" className="input-label">SACCO NAME
                    <input 
                        type="text" 
                        name="saccoName" 
                        className="user-input" 
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="saccoOwner" className="input-label">SACCO OWNER
                    <input 
                        type="text" 
                        name="saccoOwner" 
                        className="user-input" 
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="email" className="input-label">EMAIL
                    <input 
                        type="email" 
                        name="email" 
                        className="user-input" 
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="phoneNumber" className="input-label">PHONE NUMBER
                    <input 
                        type="number" 
                        name="phoneNumber" 
                        className="user-input" 
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="username" className="input-label">USERNAME
                    <input 
                        type="text" 
                        name="username" 
                        className="user-input" 
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="password" className="input-label">PASSWORD
                    <input 
                        type="password" 
                        name="password" 
                        className="user-input" 
                        onChange={handleChange} 
                    />
                </label>
            </div>
        </form>
        <div className="btn-div">
            <button className="btn btn-login">Login
                {/* <a href="h">login</a> */}
            </button>
            <button className="btn btn-sign-up" onClick={handleSubmit}>Sign Up
                {/* <a href="h">sign up</a> */}
            </button>
        </div>
    </div>
    </div>
  )
}

export default SignUpForm

 // try {
        //     const response=await fetch('http://localhost:5000/sacco/register',{
        //         method:'POST',
        //         headers:{'Content-Type':'Application/json'},
        //         body:JSON.stringify(actor)
        //     })

        //     const data=await response.json()
        //     console.log(data)
        //     if (data) {
        //         const id=await data
        //         navigate(`../components/${id}`)
        //     } else {
                
        //     }
        // } catch (error) {
        //     console.error('Error:',error)
            
        // }