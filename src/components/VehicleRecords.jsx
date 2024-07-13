import React from 'react';
import { useDispatch } from 'react-redux';
//import CardComponent from '../components/CardComponent';
import { setVehicleRecords } from '../actions';
import { VehicleAttachment } from './VehicleAttachment';

const VehicleRecords = () => {
   // const [query, setQuery] = useState('');
    //const [results, setResults] = useState([]); // Assuming `vehicles` is the slice of state
    const dispatch = useDispatch();

    // const handleSearch = (e) => {
    //     const searchInput = e.target.value;
    //     setQuery(searchInput);
    // };

    // const handleSearchSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(query);

    //     try {
    //         const response = await fetch("http://localhost:5000/sacco/searchVehicle", {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({query}) // Wrapping query in an object
    //         });
    //         const data = await response.json();

    //         if (!data) {
    //             console.log('No Vehicles found');
    //             return;
    //         }

    //       //  setResults(data); // Setting the fetched data to results state
    //     } catch (error) {
    //         console.error("error", error);
    //     }
    // };

    return (
        <div className='main-section'>
        <VehicleAttachment/>
        <div className="main-panel crud-buttons">
                <button onClick={() => dispatch(setVehicleRecords("CreateVehicle"))}>Create</button>
                <button onClick={() => dispatch(setVehicleRecords("ReadVehicle"))}>Read</button>
                <button onClick={() => dispatch(setVehicleRecords("UpdateVehicle"))}>Update</button>
                <button onClick={() => dispatch(setVehicleRecords("DeleteVehicle"))}>Delete</button>
            </div>
        </div>
    );
};

export default VehicleRecords;
