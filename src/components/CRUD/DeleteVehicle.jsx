import React, { useState } from 'react';

const DeleteVehicle = () => {
    const [vehicleRegistrationNumber, setVehicleRegistrationNumber] = useState('');

    const handleChange = (e) => {
        setVehicleRegistrationNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here you would send a request to your backend to delete the vehicle
        // This is a placeholder URL, replace it with your actual endpoint
        const response = await fetch(`https://localhost:5000/vehicle/delete/${vehicleRegistrationNumber}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('Vehicle deleted successfully');
            // Optionally, handle successful deletion (e.g., clear input, show message)
            setVehicleRegistrationNumber('');
        } else {
            console.error('Failed to delete vehicle');
            // Optionally, handle errors (e.g., show error message)
        }
    };

    return (
        <div className='background'>
            <div className='div-object delete-vehicle'>
                <h1 className='section-header'>Delete Vehicle</h1>

                <form className='form-body' onSubmit={handleSubmit}>
                    <div className='form-object delete-vehicle-form'>
                        <label htmlFor="vehicleRegistrationNumber" className="input-label">VEHICLE REGISTRATION NUMBER
                            <input 
                                type="text" 
                                name="vehicleRegistrationNumber" 
                                className="user-input" 
                                value={vehicleRegistrationNumber}
                                onChange={handleChange} 
                            />
                        </label>
                    </div>
                    <div className="btn-div">
                        <button type="submit" className="btn btn-delete">Delete Vehicle</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteVehicle;
