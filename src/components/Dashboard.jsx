import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../components/css/dashboard.css';
import { useDispatch } from 'react-redux';
import { MainContent } from './MainContent';
import { setMainContent } from '../actions';

const Dashboard = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location.state;
  
  const [actor, setActor] = useState({
    saccoName: '',
    saccoOwner: '',
    username: '',
    email: '',
    phonenumber: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.sacco) {
      setActor({
        saccoName: data.sacco.saccoName, 
        saccoOwner: data.sacco.saccoOwner, 
        username: data.sacco.username, 
        email: data.sacco.email,
        phonenumber: data.sacco.phoneNumber 
      });
      setLoading(false);
    }
  }, [data]);
  const handleAccountInformation=(e)=>{
    e.preventDefault();
    dispatch(setMainContent('UserProfile'));
  }

  const handleVehicleAttachment = (e) => {
    e.preventDefault();
    console.log("vehicle button pressed")
    dispatch(setMainContent('VehicleRecords'));
  };

  const handleMapComponent = (e) => {
    e.preventDefault();
    console.log("map button pressed")
    dispatch(setMainContent('MapComponent'));
  };

  const handleFareComponent = (e) => {
    e.preventDefault();
    console.log("fare button pressed")
    dispatch(setMainContent('FareComponent'));
  };

  if (!data) {
    return <p>No data received</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='body'>
      <header className='main-header'>
        <a href="http://localhost:3000/">
          <img src="../components/assets/Matwana _culture_logo.png" alt="Matwana Culture Logo" />
        </a>
        <nav>
          <ul>
            {/* <li><a href="" className="logout-btn"></a></li> */}
          </ul>
        </nav>
        <h1><strong>WELCOME</strong> {actor.saccoName}</h1>
      </header>
      
      <section className='content-div'>
        <div className='main-content sidebar'>
          <ul>
            <li><button onClick={handleAccountInformation}>Account Information</button></li>
            <li><button onClick={handleVehicleAttachment}>Vehicle Records</button></li>
            <li><button onClick={handleMapComponent}>View Map</button></li>
            <li><button onClick={handleFareComponent}>Fare Charts</button></li>
          </ul>
        </div>
        <MainContent actor={actor} />
        <div className='main-content'></div>
      </section>
    </div>
  );
};

export default Dashboard;
