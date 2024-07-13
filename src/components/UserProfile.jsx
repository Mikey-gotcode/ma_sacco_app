import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
    const location = useLocation();
    const [actor, setActor] = useState({
        saccoName: '',
        saccoOwner: '',
        username: '',
        email: '',
        phonenumber: ''
    });
    const data = location.state;

    useEffect(() => {
        if (data && data.sacco) {
            setActor({
                saccoName: data.sacco.saccoName, 
                saccoOwner: data.sacco.saccoOwner, 
                username: data.sacco.username, 
                email: data.sacco.email,
                phonenumber: data.sacco.phoneNumber 
            });
        }
    }, [data]);

    if (!data) {
        return <p>No data received</p>;
    }

    return (
        <div className='main-section user-profile'>
            <table>
                <tbody>
                    <tr>
                        <td><label><strong>Sacco Name:</strong></label></td>
                        <td><p>{actor.saccoName}</p></td>
                    </tr>
                    <tr>
                        <td><label><strong>Sacco Owner:</strong></label></td>
                        <td><p>{actor.saccoOwner}</p></td>
                    </tr>
                    <tr>
                        <td><label><strong>Email:</strong></label></td>
                        <td><p>{actor.email}</p></td>
                    </tr>
                    <tr>
                        <td><label><strong>Phone Number:</strong></label></td>
                        <td><p>{actor.phonenumber}</p></td>
                    </tr>
                    <tr>
                        <td><label><strong>Username:</strong></label></td>
                        <td><p>{actor.username}</p></td>
                    </tr>
                    <tr>
                        <td><label><strong>Routes:</strong></label></td>
                        <td>
                            <p>to: {data.routes?.to}</p>
                            <p>fro: {data.routes?.fro}</p>
                        </td>
                    </tr>
                    <tr>
                        <td><label><strong>Stages:</strong></label></td>
                        <td>
                            <p>Main stage: {data.stages?.mainCBD}</p>
                            <p>Outskirt: {data.stages?.outskirt}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserProfile;
