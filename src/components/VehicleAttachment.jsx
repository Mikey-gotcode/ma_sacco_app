// VehicleAttachment.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CreateVehicle from './CRUD/CreateVehicle';
import ReadVehicle from './CRUD/ReadVehicle';
import UpdateVehicle from './CRUD/UpdateVehicle';
import DeleteVehicle from './CRUD/DeleteVehicle';

const VehicleAttachment = () => {
    const mainContent = useSelector((state) => state.vehicleRecords);
    console.log(mainContent);

    let ComponentToRender;
    switch (mainContent) {
        case 'CreateVehicle':
            ComponentToRender = CreateVehicle;
            break;
        case 'ReadVehicle':
            ComponentToRender = ReadVehicle;
            break;
        case 'UpdateVehicle':
            ComponentToRender = UpdateVehicle;
            break;
        case 'DeleteVehicle':
            ComponentToRender = DeleteVehicle;
            break;
        default:
            ComponentToRender = ReadVehicle;
    }

    return (
        <div className='main-content'>
            <ComponentToRender />
        </div>
    );
};

export { VehicleAttachment };
