import React, { useState } from "react";
import { GoogleMap, LoadScript, Data } from '@react-google-maps/api';

const containerStyle = {
  width: 'auto',
  height: '800px'
};

const center = {
  lat: 38.575764,
  lng: -121.478851
};

const onMapLoad = (map) => {
  console.log('map.data ', map.data)
  map.data.loadGeoJson('frontend/src/assets/cartoboundary/californiaCountyData.geojson');
}

const onClick = (...args) => {
  console.log('onClick args: ', args[0].latLng.lat(), ' : ', args[0].latLng.lng())
}

const onDataLoad = data => {
  console.log('data: ', data)
}


const MapSelection = () => {
  const [map, setMap] = useState('');
  const [dataLayer, setDataLayer] = useState('');

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyBbZ_4gGuYUsjwcMNltvEIFxJtVmtuyBGE"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          onClick={onClick}
          onLoad={onMapLoad}
        
        >
          <Data
            onLoad={onDataLoad}

          />
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )


};

export default MapSelection;