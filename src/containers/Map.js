import React, { useState, useEffect, useRef } from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { dataForCircle, getSortBy, getMapRef,getMapParametrs } from "../store/selectors";
import { updateCursorPosition, setMapRef } from "../store/actions";
import MapMarker from "../components/MapMarker";

const Map = () => {
  const ref = useSelector(state => getMapRef(state));
  const mapRef = useRef(ref);
  const dispatch = useDispatch();
  const mapParametrs = useSelector(state=>getMapParametrs(state))
  const [zoom, setZoom] = useState(mapParametrs.zoom);
  //getting specific data for circles
  const data = useSelector(state => dataForCircle(state));
  const sortBy = useSelector(state => getSortBy(state));
  

  useEffect(() => {
    if (ref === null) {
      dispatch(setMapRef(mapRef.current.leafletElement));
    }
  }, [dispatch,ref]);

  // This little switch help me to keep circles in same size at each zoom level (they cover the same amount of terrain)
  // As far as I know Circle component handling it by its own but it not working properly
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
        return 2;
    }
  };

  return (
    <LeafletMap
      ref={mapRef}
      style={{ cursor: "default" }}
      {...mapParametrs}
      minZoom={3}
      maxZoom={6}
      //I need to track curently value of zoom to applay right multiplayer for circle size
      onzoomend={event => setZoom(event.target._zoom)}
      //Red comments inside MapMarker
      onmousemove={window.innerWidth > 1200 ? event => dispatch(updateCursorPosition(event.latlng)) : null}
      maxBounds={[
        [-85, -200],
        [85, 200]
      ]}
      maxBoundsViscosity={1}
      inertia={false}
      onclick={window.innerWidth > 1200 ? null : event => event.target.closePopup()}
      ondrag={window.innerWidth > 1200 ? null : event => event.target.closePopup()}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
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
