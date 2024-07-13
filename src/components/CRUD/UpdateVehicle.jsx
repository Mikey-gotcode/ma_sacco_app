import React, { useState, useEffect } from 'react';

const UpdateVehicle = ({ vehicleId }) => {
    const [formValues, setFormValues] = useState({
      vehicleNo: '',
      companyName: '',
      vehicleRegistrationNumber: '',
      routesTo: '',
      routesFro: '',
      fareRanges: '',
      docks: '',
      password: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
       async function fetchData(){
         // Fetch vehicle data from the backend using vehicleId
        // This is a placeholder URL, replace it with your actual endpoint
       try {
         // Fetch vehicle data from the backend using vehicleId
        // This is a placeholder URL, replace it with your actual endpoint
        await fetch(`https://localhost:5000/vehicles/update/${vehicleId}`)
            .then(response => response.json())
            .then(data => setFormValues(data))
            .catch(error => console.error('Error fetching vehicle data:', error));
       } catch (error) {
        
       }
       }
       fetchData();
    }, [vehicleId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevFormValues=>({
            ...prevFormValues,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send updated data to the backend
        // This is a placeholder URL, replace it with your actual endpoint
        fetch(`https://localhost:5000/vehicles/update/${vehicleId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Vehicle updated successfully:', data);
            setIsEditing(false); // Exit edit mode
        })
        .catch(error => console.error('Error updating vehicle:', error));
    };

    return (
        <div className='background'>
            <div className='div-object update-vehicle'>
                <h1 className='section-header'>Update Vehicle</h1>

                {isEditing ? (
                    <form className='form-body' onSubmit={handleSubmit}>
                        <table className='form-object update-vehicle-form'>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="vehicleNo" className="input-label">VEHICLE NUMBER</label></td>
                                    <td><input 
                                        type="text" 
                                        name="vehicleNo" 
                                        className="user-input" 
                                        value={formValues.vehicleNo}
                                        onChange={handleChange} 
                                    /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="companyName" className="input-label">COMPANY NAME</label></td>
                                    <td><input 
                                        type="text" 
                                        name="companyName" 
                                        className="user-input" 
                                        value={formValues.companyName}
                                        onChange={handleChange} 
                                    /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="vehicleRegistrationNumber" className="input-label">VEHICLE REGISTRATION NUMBER</label></td>
                                    <td><input 
                                        type="text" 
                                        name="vehicleRegistrationNumber" 
                                        className="user-input" 
                                        value={formValues.vehicleRegistrationNumber}
                                        onChange={handleChange} 
                                    /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="routesTo" className="input-label">ROUTES (TO)</label></td>
                                    <td><input 
                                        type="text" 
                                        name="routesTo" 
                                        className="user-input" 
                                        value={formValues.routesTo}
                                        onChange={handleChange} 
                                    /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="routesFro" className="input-label">ROUTES (FRO)</label></td>
                                    <td><input 
                                        type="text" 
                                        name="routesFro" 
                                        className="user-input" 
                                        value={formValues.routesFro}
                                        onChange={handleChange} 
                                    /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="fareRanges" className="input-label">FARE RANGES</label></td>
                                    <td><input 
                                        type="text" 
                                        name="fareRanges" 
                                        className="user-input" 
                                        value={formValues.fareRanges}
                                        onChange={handleChange} 
                                    /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="docks" className="input-label">DOCKS</label></td>
                                    <td><input 
                                        type="text" 
                                        name="docks" 
                                        className="user-input" 
                                        value={formValues.docks}
                                        onChange={handleChange} 
                                    /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="password" className="input-label">PASSWORD</label></td>
                                    <td><input 
                                        type="password" 
                                        name="password" 
                                        className="user-input" 
                                        value={formValues.password}
                                        onChange={handleChange} 
                                    /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="btn-div">
                            <button type="submit" className="btn btn-update">Update Vehicle</button>
                        </div>
                    </form>
                ) : (
                    <button className="btn btn-edit" onClick={() => setIsEditing(true)}>Edit Vehicle</button>
                )}
            </div>
        </div>
    );
};

export default UpdateVehicle;
