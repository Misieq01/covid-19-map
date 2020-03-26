import React,{useRef,useEffect} from "react";
import { CircleMarker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { getCursorPosition } from "../store/selectors";

const MapMaker = ({ dataNumber, dataName, country, color,latlng, ...props }) => {
  const cursorPosition = useSelector(state => getCursorPosition(state));
  const ref = useRef()


  useEffect(()=>{
    console.log(ref.current)
  },[])

  return (
    <CircleMarker
      {...props}
      ref={ref}
      center={latlng}
      onmouseover={event => event.target.openPopup()}
      onmouseout={event => event.target.closePopup()}
      color={color}
      fillColor={color}
      className='map-marker'
      onclick={event=>event.target._map.setView(latlng,6)}
      onmousedown={()=>console.log('siema')}
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
