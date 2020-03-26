import React from 'react'

const DataBox = ({text,data,color,active,onClick}) =>{
  const isActive = active ? "data-box-active" : "";
    return (
      <div className={"data-box__container " + isActive} style={active ? {borderBottom: '1px solid ' + color} : null} onClick={onClick}>
        <h2 className={"data-box__title " + color}>
          {text}
        </h2>
        <span className={"data-box__data " + color}>
          {data}
        </span>
      </div>
    );
}

export default DataBox