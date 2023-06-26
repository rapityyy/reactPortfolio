import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-map-react';

const MapContainer = (props) => {
  const { google, zipcode } = props;

  // Handle map loaded event
  const handleMapReady = (mapProps, map) => {
    // Fetch the geolocation data for the provided zipcode
    // Use the Google Maps Geocoding API or any other geocoding service
    // to get the latitude and longitude coordinates for the zipcode
    // Here's an example using the Google Maps Geocoding API:
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: zipcode }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const location = results[0].geometry.location;

        // Center the map on the retrieved location
        map.setCenter(location);
      }
    });
  };

  return (
    <Map
      google={google}
      onReady={handleMapReady}
      zoom={14}
      style={{ width: '100%', height: '400px' }}
      initialCenter={{ lat: 0, lng: 0 }} // Initial center before geocoding
    >
      <Marker position={{ lat: 0, lng: 0 }} /> // Placeholder marker
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(MapContainer);
