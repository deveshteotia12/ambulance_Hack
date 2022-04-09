import * as React from 'react';
import Map, { Source, Layer, GeolocateControl } from 'react-map-gl';

const geojson = {
   type: 'FeatureCollection',
   features: [
      { type: 'Feature', geometry: { type: 'Point', coordinates: [80.042304, 12.812956] } },
      { type: 'Feature', geometry: { type: 'Point', coordinates: [80.042904, 12.817956] } }
   ]
};

const layerStyle = {
   id: 'point',
   type: 'circle',
   paint: {
      'circle-radius': 10,
      'circle-color': '#f0663c',
   }
};

function App({ user }) {
   const [viewport, setViewport] = React.useState();


   React.useEffect(() => {
      navigator.geolocation.getCurrentPosition(pos => {
         setViewport({
            ...viewport,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
         });
      });
   }, []);


   return (
      <Map
         {...viewport}
         initialViewState={{
            longitude: -120.042304,
            latitude: 40.812956,
            zoom: 14,
         }}

         style={{ width: '100vw', height: '100vh' }}
         mapStyle="mapbox://styles/mapbox/streets-v9"
         mapboxAccessToken="pk.eyJ1IjoieW80MjI0IiwiYSI6ImNsMXJzdDRpbTBwcjkzZW8zamcyb3gzc3MifQ.viJJpIOlvSZRMeEqir-7wQ"

      >
         <GeolocateControl trackUserLocation={true} />
         {user === "user" &&
            <Source id="my-data" type="geojson" data={geojson}>
               <Layer {...layerStyle} />
            </Source>
         }
      </Map>
   );
}

export default App;