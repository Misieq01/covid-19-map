import React from "react";
import { CircleMarker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { getCursorPosition } from "../store/selectors";

const MapMaker = ({ dataNumber, dataName, country, color, ...props }) => {
  const cursorPosition = useSelector(state => getCursorPosition(state));

  return (
    <CircleMarker
      {...props}
      onmouseover={event => event.target.openPopup()}
      onmouseout={event => event.target.closePopup()}
      color={color}
      fillColor={color}
      className='map-marker'
    >
      <Popup className="leaflet-popup" closeOnClick={false} closeButton={false} position={cursorPosition}>
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
