import React from 'react'
import {Map as LeafletMap,TileLayer} from 'react-leaflet'

const Map = () => {
        return <LeafletMap center={[52.0, 20.0]} zoom={6} minZoom={4} maxZoom={7}>
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
        </LeafletMap>;
}
export default Map