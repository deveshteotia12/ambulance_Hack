import * as React from 'react';
import Map, { Source, Layer, GeolocateControl } from 'react-map-gl';

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#f0663c',
    'circle-stroke-width': 2,
    'circle-stroke-color': '#000',
  },
};

function App(props) {
  const [viewport, setViewport] = React.useState();
  const [currentFeature, setCurrentFeature] = React.useState([]);
  const [features, setFeatures] = React.useState([
    // { type: 'Feature', geometry: { type: 'Point', coordinates: [80.042304, 12.812956] } },
    // { type: 'Feature', geometry: { type: 'Point', coordinates: [80.042904, 12.817956] } },
  ]);
  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    console.log(props);
    navigator.geolocation.getCurrentPosition(pos => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      setCurrentFeature([
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [pos.coords.longitude, pos.coords.latitude] },
        },
      ]);
      console.log(features);
    });
    if (props.user === 'user' && features.length > 0) {
      window.prompt('There is an ambulance with critical patient near you');
    }
  }, [Data, props]);

  React.useEffect(() => {
    if (props.user === 'user') {
      props.ambulanceData.map(e => {
        setFeatures([
          { type: 'Feature', geometry: { type: 'Point', coordinates: [e.Data.coordinates[1], e.Data.coordinates[0]] } },
        ]);
      });
      setData(props.ambulanceData);
    }
  }, [props.ambulanceData]);

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
      {props.user === 'user' ? (
        <Source
          id="my-data"
          type="geojson"
          data={{ type: 'FeatureCollection', features: [...features, ...currentFeature] }}
        >
          <Layer {...layerStyle} />
        </Source>
      ) : (
        <Source id="my-data" type="geojson" data={{ type: 'FeatureCollection', features: [...currentFeature] }}>
          <Layer {...layerStyle} />
        </Source>
      )}
    </Map>
  );
}

export default App;
