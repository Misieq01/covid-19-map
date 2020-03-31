import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContentDisplay, setMapParametrs } from "../store/actions";
import { getSortBy, getMapRef } from "../store/selectors";
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";
import { ReactComponent as PinIcon } from "../assets/pin-point.svg";

const CountryBox = ({ data }) => {
  const dispatch = useDispatch();
  const [expanded, expand] = useState(false);
  //getting data that user wants to display in not expaned box
  const dataDisplayed = useSelector(state => getSortBy(state));
  // const mapRef = useSelector(state => getMapRef(state));
  //Component for displaying each data in expaned box

  const Data = ({ name, number, color }) => {
    return (
      <div className="data__container">
        <span className="data__container--data">{name + ":"}</span>
        <span className={"data__container--data " + color}>{number}</span>
      </div>
    );
  };

  //Separate component for displaying country name
  //In future I will add button to show country on the map
  const Country = () => {
    return (
      <div className={expanded ? "country__container" : "country__container-hover"} onClick={() => expand(!expanded)}>
        <div className="country__wrapper">
          <PinIcon
            className="country__icon"
            onClick={event => {
              event.stopPropagation();
              dispatch(setContentDisplay("map"));
              dispatch(setMapParametrs(data.location, 5));
            }}
          />
          <span className="country__wrapper--country" style={{fontSize: expanded ? '32px' : ''}}>{data.country}</span>
          {expanded ? null : (
            <span className="country__wrapper--data" style={{ color: dataDisplayed.color }}>
              {data[dataDisplayed.name]}
            </span>
          )}
        </div>
        <ArrowIcon className="country__icon" style={{ transform: expanded ? "rotate(180deg)" : null }} />
      </div>
    );
  };

  return (
    <div className="country-box__container">
      <Country />
      {expanded ? (
        <div className="country-box__expanded">
          <Data name="Cases" number={data.cases} color="orange" />
          <Data name="Today cases" number={data.todayCases} color="orange" />
          <Data name="Cases per one million" number={data.casesPerOneMillion} color="orange" />
          <Data name="Deaths" number={data.deaths} color="red" />
          <Data name="Today deaths" number={data.todayDeaths} color="red" />
          <Data name="Deaths per one million" number={data.deathsPerOneMillion} color="red" />
          <Data name="Critical" number={data.critical} color="red" />
          <Data name="Recovered" number={data.recovered} color="green" />
          <Data name="Active" number={data.active} color="purple" />
        </div>
      ) : null}
    </div>
  );
};
export default CountryBox;
