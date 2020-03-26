import React from "react";
import {useSelector} from 'react-redux'
import {getSortBy} from '../store/selectors'

import { ReactComponent as MapIcon } from "../assets/map.svg";
import { ReactComponent as PanelIcon } from "../assets/panel.svg";

const Navigation = ({ setContent, content }) => {

  const color = useSelector(state=>getSortBy(state)).color
  const style = {borderBottom: '6px solid ' + color}

  return (
    <div className="navigation__container">
      <div className="navigation__wrapper" style={content === "panel" ? style : null}>
        <PanelIcon className="navigation__icon" onClick={() => setContent("panel")} />
      </div>
      <div className="navigation__wrapper" style={content === "map" ? style : null}>
        <MapIcon className="navigation__icon" onClick={() => setContent("map")} />
      </div>
    </div>
  );
};

export default Navigation;
