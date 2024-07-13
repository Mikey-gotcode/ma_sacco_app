import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setVehicleRecords } from '../../actions'
const CreateVehicle = () => {
  const dispatch=useDispatch()
  const [actor,setActor]=useState({
    vehicleNo: '',
    companyName: '',
    vehicleRegistrationNumber: '',
    routesTo: '',
    routesFro: '',
    fareRanges: '',
    docks: '',
    password: ''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setActor(prevActor=>({
      ...prevActor,
      [name]:value
    }))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(actor)

    const vehicle = {
      vehicleNo: actor.vehicleNo,
      companyName: actor.companyName,
      vehicleRegistrationNumber: actor.vehicleRegistrationNumber,
      routes: {
          to: actor.routesTo,
          fro: actor.routesFro
      },
      fareRanges: actor.fareRanges,
      docks: actor.docks.split(','), // Assuming docks are comma-separated
      password: actor.password
  };




    try {
      const response=await fetch('http://localhost:5000/vehicle/register',{
        method:'POST',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify(vehicle)
      })

      const data=await response.json()

      if(data){
        dispatch(setVehicleRecords("ReadVehicle"))
        alert("Vehicle added successfully")
        console.log(data)
      }
    } catch (error) {
      console.error('error:',error)
    }
  }
  return (
    <div>
        <div className='background'>
            <div className='div-object sign-up'>
                <h1 className='section-header'>Vehicle Registration</h1>

                <form className='form-body' onSubmit={handleSubmit}>
                    <div className='form-object sign-up-form'>
                    <table className='form-object sign-up-form'>
                        <tbody>
                            <tr>
                                <td><label htmlFor="vehicleNo" className="input-label">VEHICLE NUMBER</label></td>
                                <td><input 
                                    type="text" 
                                    name="vehicleNo" 
                                    className="user-input" 
                                    onChange={handleChange} 
                                /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="companyName" className="input-label">COMPANY NAME</label></td>
                                <td><input 
                                    type="text" 
                                    name="companyName" 
                                    className="user-input" 
                                    onChange={handleChange} 
                                /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="vehicleRegistrationNumber" className="input-label">VEHICLE REG No.</label></td>
                                <td><input 
                                    type="text" 
                                    name="vehicleRegistrationNumber" 
                                    className="user-input" 
                                    onChange={handleChange} 
                                /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="routesTo" className="input-label">ROUTES (TO)</label></td>
                                <td><input 
                                    type="text" 
                                    name="routesTo" 
                                    className="user-input" 
                                    onChange={handleChange} 
                                /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="routesFro" className="input-label">ROUTES (FRO)</label></td>
                                <td><input 
                                    type="text" 
                                    name="routesFro" 
                                    className="user-input" 
                                    onChange={handleChange} 
                                /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="fareRanges" className="input-label">FARE RANGES</label></td>
                                <td><input 
                                    type="text" 
                                    name="fareRanges" 
                                    className="user-input" 
                                    onChange={handleChange} 
                                /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="docks" className="input-label">DOCKS</label></td>
                                <td><input 
                                    type="text" 
                                    name="docks" 
                                    className="user-input" 
                                    onChange={handleChange} 
                                /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="password" className="input-label">PASSWORD</label></td>
                                <td><input 
                                    type="password" 
                                    name="password" 
                                    className="user-input" 
                                    onChange={handleChange} 
                                /></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="btn-div">
                        <button type="submit" className="btn btn-sign-up">Register Vehicle</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateVehicle