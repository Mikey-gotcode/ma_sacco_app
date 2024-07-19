import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Map from 'react-map-gl';
import VehicleMarker from './VehicleMarker';
import VehicleSubscription from './VehicleSubscription'; // Import the subscription component

const MapComponent = () => {
  const vehicles = useSelector(state => state.vehicles);
  
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 8,
    bearing: 0,
    pitch: 0
  });

  useEffect(() => {
    // Requesting location permission and setting map center
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setViewport({
          ...viewport,
          latitude,
          longitude
        });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, [viewport]);

  return (
    <>
      <VehicleSubscription /> {/* Use the subscription component */}
      <Map
        {...viewport}
        width="300px"
        height="300px"
        onViewportChange={(newViewport) => setViewport(newViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        scrollZoom={true}
        doubleClickZoom={true}
        touchZoom={true}
        dragPan={true}
      >
        {vehicles.map(vehicle => (
          <VehicleMarker
            key={vehicle.vehicleID}
            latitude={vehicle.latitude}
            longitude={vehicle.longitude}
            vehicleID={vehicle.vehicleID}
          />
        ))}
      </Map>
    </>
  );
};

export default MapComponent;
