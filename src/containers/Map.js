import React,{useState} from 'react'
import {Map as LeafletMap,TileLayer,CircleMarker} from 'react-leaflet'
import {useSelector} from 'react-redux'
import {dataForCircle,getSortBy} from '../store/selectors'

const Map = () => {
  const INITIAL_ZOOM = 4
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const data = useSelector(state=>dataForCircle(state))
  const circleColor = useSelector(state=>getSortBy(state)).color

  const setMultiplayer = (zoom) =>{
    switch (zoom) {
      case 3:
        return 1
      case 4:
        return 2;
      case 5:
        return 4;
      case 6:
        return 8;
      default:
        return INITIAL_ZOOM
    }
  }

        return (
          <LeafletMap
            center={[52.0, 20.0]}
            zoom={INITIAL_ZOOM}
            minZoom={3}
            maxZoom={6}
            onzoomend={event => setZoom(event.target._zoom)}
          >
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
            {data.map((element, index) => {

              return (
                <CircleMarker
                  center={element.location}
                  key={index}
                  radius={element.size * setMultiplayer(zoom)}
                  fillColor={circleColor}
                  color={circleColor}
                />
              );
            })}
          </LeafletMap>
        );
}
export default Map