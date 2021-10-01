import React, { useState } from "react";
import { GoogleMap, LoadScript, Data, InfoWindow } from '@react-google-maps/api';

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
  map.data.loadGeoJson('https://raw.githubusercontent.com/gianclbal/covid19CAVaccineProgress/main/frontend/src/assets/cartoboundary/archives/californiaCountyData.json');
  onDataLoad(map.data);
}



const onInfoWindowLoad = infoWindow => {

}

const onClick = (...args) => {
  let current = {
    currentLat: args[0].latLng.lat(),
    currentLng: args[0].latLng.lng(),
  }
  
  console.log('onClick args: ', current.currentLat, ' : ', current.currentLng)

  return current;
}


const onDataLoad = data => {
  console.log('data: ', data)
  data.setStyle((feature) => {
    let color = "gray";

    if (feature.getProperty("isColorful")) {
      color = feature.getProperty("color");
    }
    return /** @type {!google.maps.Data.StyleOptions} */ {
      fillColor: color,
      strokeColor: color,
      strokeWeight: 1,
    };
  });

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
          zoom={6}
          onClick={onClick}
          onLoad={onMapLoad}
       
        
        >
          <Data
            onLoad={onDataLoad}
           
         

          />
          { /* Child components, such as markers, info windows, etc. */}
          {/* <InfoWindow
          onLoad={onInfoWindowLoad}
          
          
          >
            <div>
              <h1>County name</h1>
            </div>
            </InfoWindow> */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )


};

export default MapSelection;