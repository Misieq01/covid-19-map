import React, { useState } from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { dataForCircle, getSortBy } from "../store/selectors";
import { updateCursorPosition } from "../store/actions";
import MapMarker from "../components/MapMarker";

const Map = () => {
  const dispatch = useDispatch();
  const INITIAL_ZOOM = 4;
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const data = useSelector(state => dataForCircle(state));
  const sortBy = useSelector(state => getSortBy(state));

  const setMultiplayer = zoom => {
    switch (zoom) {
      case 3:
        return 1;
      case 4:
        return 2;
      case 5:
        return 4;
      case 6:
        return 8;
      default:
        return INITIAL_ZOOM;
    }
  };

  return (
    <LeafletMap
      style={{ cursor: "default" }}
      center={[52.0, 20.0]}
      zoom={INITIAL_ZOOM}
      minZoom={3}
      maxZoom={6}
      onzoomend={event => setZoom(event.target._zoom)}
      onmousemove={event => dispatch(updateCursorPosition(event.latlng))}
      maxBounds={[
        [-85, -200],
        [85, 200]
      ]}
      maxBoundsViscosity={1}
      markerZoomAnimation={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains='abcd'
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {data.map((element, index) => {
        return (
          <MapMarker
            key={index}
            radius={element.size * setMultiplayer(zoom)}
            color={sortBy.color}
            dataName={sortBy.name}
            dataNumber={element.number}
            country={element.country}
            latlng={element.location}
          />
        );
      })}
    </LeafletMap>
  );
};
export default Map;
