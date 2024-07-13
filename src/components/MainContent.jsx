import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from '../components/UserProfile';
import VehicleRecords from '../components/VehicleRecords';
import MapComponent from '../components/MapComponent';
import FareComponent from '../components/FareComponent';

const MainContent = () => {
    const mainContent = useSelector((state) => state.mainContent);
    //console.log(mainContent)

    let ComponentToRender;
    switch (mainContent) {
        case 'UserProfile':
            ComponentToRender = UserProfile;
            break;
        case 'VehicleRecords':
            ComponentToRender = VehicleRecords;
            break;
        case 'MapComponent':
            ComponentToRender = MapComponent;
            break;
        case 'FareComponent':
            ComponentToRender = FareComponent;
            break;
        default:
            ComponentToRender = UserProfile;
    }

    return (
        <div className='main-content'>
            <ComponentToRender />
        </div>
    );
};

// const VehicleAttachment = () => {
//     const mainContent = useSelector((state) => state.vehicleRecords);
//     //console.log(mainContent)

//     let ComponentToRender;
//     switch (mainContent) {
//         case 'CreateVehicle':
//             ComponentToRender = CreateVehicle;
//             break;
//         case 'ReadVehicle':
//             ComponentToRender = ReadVehicle;
//             break;
//         case 'UpdateVehicle':
//             ComponentToRender = UpdateVehicle;
//             break;
//         case 'DeleteVehicle':
//             ComponentToRender = DeleteVehicle;
//             break;
//         default:
//             ComponentToRender = ReadVehicle;
//     }

//     return (
//         <div className='main-section'>
//            <> <ComponentToRender/> </>
//         </div>
//     );
// };

export { MainContent };
