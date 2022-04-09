

import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken = 'pk.eyJ1IjoieW80MjI0IiwiYSI6ImNreXRzNmt1djBocXIyeG84ZHhpZXFtZnkifQ.luOi_hUSVx_NLpaYfqFOSg'

const Map = () => {
   const mapContainer = useRef()

   useEffect(() => {
      const map = new mapboxgl.Map({
         container: mapContainer.current,
         style: "mapbox://styles/mapbox/streets-v11",
         center: [-87.903982, 43.020403],
         zoom: 12,
      })

      map.addControl(
         new mapboxgl.GeolocateControl({
            positionOptions: {
               enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
         })
      );

      return () => map.remove()
   }, [])

   return <div ref={mapContainer} style={{ height: 1000 }} />
}

export default Map
