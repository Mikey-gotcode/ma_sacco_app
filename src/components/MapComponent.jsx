// MapComponent.jsx
import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import io from 'socket.io-client';

const socket = io('http://your-server-url'); // Replace with your server URL

const MapComponent = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Listen for vehicle location updates
    socket.on('vehicleLocation', (data) => {
      setVehicles((prevVehicles) => {
        // Update vehicle locations
        const updatedVehicles = prevVehicles.map(vehicle =>
          vehicle.id === data.id ? { ...vehicle, ...data } : vehicle
        );
        // Add new vehicle if it doesn't exist
        if (!updatedVehicles.find(vehicle => vehicle.id === data.id)) {
          updatedVehicles.push(data);
        }
        return updatedVehicles;
      });
    });

    // Clean up the effect
    return () => {
      socket.off('vehicleLocation');
    };
  }, []);

  return (
    <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 8
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="your_mapbox_token" // Replace with your Mapbox token
    >
      {vehicles.map(vehicle => (
        <Marker
          key={vehicle.id}
          latitude={vehicle.latitude}
          longitude={vehicle.longitude}
        >
          <div style={{ backgroundColor: 'red', borderRadius: '50%', width: '10px', height: '10px' }} />
        </Marker>
      ))}
    </Map>
  );
};

export default MapComponent;
