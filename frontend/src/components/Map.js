import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, KmlLayer } from "react-google-maps"

const MapWithAKmlLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBbZ_4gGuYUsjwcMNltvEIFxJtVmtuyBGE&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 41.9, lng: -87.624 }}
  >
    <KmlLayer
      url="https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml"
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
);

export default MapWithAKmlLayer;

