import React from "react";
import { CircleMarker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { getCursorPosition } from "../store/selectors";

const MapMaker = ({ dataNumber, dataName, country, color,latlng, ...props }) => {
  const cursorPosition = useSelector(state => getCursorPosition(state));

  const clickHandler = event =>{
    if(window.innerWidth < 1200){
      event.target.openPopup()
    }
    event.target._map.setView(latlng,6)
  }

  return (
    <CircleMarker
      {...props}
      center={latlng}
      onmouseover={window.innerWidth > 1200 ? event => event.target.openPopup() : null}
      onmouseout={window.innerWidth > 1200 ? event => event.target.closePopup() : null}
      color={color}
      fillColor={color}
      className='map-marker'
      onclick={event=>clickHandler(event)}
  
    >
      <Popup className="leaflet-popup" closeOnClick={false} closeButton={false} position={cursorPosition} autoPan={false}>
        <div className="leaflet-popup-content-data-wrapper">
          <span className="leaflet-popup-data-country">{country}</span>
        </div>
        <div className="leaflet-popup-content-data-wrapper">
          <span className="leaflet-popup-data-name">
            {dataName + ':'}
          </span>
          <span className="leaflet-popup-data-number" style={{ color: color }}>
            {dataNumber}
          </span>
        </div>
      </Popup>
    </CircleMarker>
  );
};

export default MapMaker;
