import React from 'react'

const Navigation = ({setContent}) =>{
    return (
      <div className="navigation__container">
        <div className="navigation__button" onClick={() => setContent("panel")}>
          panel
        </div>
        <div className="navigation__button" onClick={() => setContent("map")}>
          map
        </div>
      </div>
    );
}

export default Navigation