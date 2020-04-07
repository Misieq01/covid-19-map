import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSortBy } from "../store/selectors";
import { setContentDisplay } from "../store/actions";

import { ReactComponent as MapIcon } from "../assets/map.svg";
import { ReactComponent as PanelIcon } from "../assets/panel.svg";

const Navigation = ({ content }) => {
  const dispatch = useDispatch();
  const color = useSelector((state) => getSortBy(state)).color;
  const style = { borderBottom: "6px solid " + color };

  const setContent = (content) => {
    dispatch(setContentDisplay(content));
  };

  return (
    <div className="navigation__container">
      <div
        className="navigation__wrapper"
        style={content === "panel" ? style : null}
        onClick={() => setContent("panel")}
      >
        <PanelIcon className="navigation__icon" />
      </div>
      <div className="navigation__wrapper" style={content === "map" ? style : null} onClick={() => setContent("map")}>
        <MapIcon className="navigation__icon" />
      </div>
    </div>
  );
};

export default Navigation;
