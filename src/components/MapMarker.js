import React from "react";
import { CircleMarker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { getCursorPosition } from "../store/selectors";

const MapMaker = ({ dataNumber, dataName, country, color,latlng, ...props }) => {

  //Displaying Popup:
  //So i wanted to achive effect when popup follow cursor inside circle
  //I did it by adding onmousemove event to map which update cursor position every time it moves
  //Then i'm checking here if cursor is inside circle
  //If its inside I'm showing popup, otherwise i closing it
  //Obviously it would be more efficient when cursor position was updated only inside circle but CircleMarker doesn't have
  //mousemove event. I also tried to wrap it in div and fired event from it but its not working
  //So for now it has to stay like it is

  const cursorPosition = useSelector(state => getCursorPosition(state));


  // Popup working a bit diffrent on mobile and desktops
  // On Desktop it is manage by hover events
  // On mobile I'm using click events 
  // Also in each case it zooming to marker on click
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
