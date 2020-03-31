import React from "react";

const DataBox = ({ text, data, color, active, onClick }) => {
  const isActive = active ? "data-box-active" : "";
  return (
    <div
      className={"data-box__container " + isActive}
      style={active ? { borderBottom: "2px solid " + color } : null}
      onClick={onClick}
    >
      <div className="data-box__wrapper">
        <span className="data-box__data " style={active ? {color: color} : null}>{data}</span>
        <h2 className="data-box__title ">{text}</h2>
      </div>
    </div>
  );
};

export default DataBox;
