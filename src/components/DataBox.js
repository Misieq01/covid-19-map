import React from 'react'

const DataBox = ({text,data,color,active,onClick}) =>{
  const isActive = active ? "data-box-active" : "";
    return (
      <div className={"data-box__container " + isActive} onClick={onClick}>
        <h2 className="data-box__title" style={{ color: color }}>
          {text}
        </h2>
        <span className="data-box__data" style={{ color: color }}>
          {data}
        </span>
      </div>
    );
}

export default DataBox