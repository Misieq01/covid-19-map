import React, { useState } from "react";
import {useSelector} from 'react-redux';
import {getSortBy} from '../store/selectors'
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";

const CountryBox = ({ data, style }) => {
  const [expanded, expand] = useState(false);
  const dataDisplayed = useSelector(state=>getSortBy(state))

  return (
    <div
      className="country-box__container"
      style={{ ...style, height: expanded ? "200px" : "auto" }}
      onClick={() => expand(true)}
    >
      <div className="country-box__smaller">
        {expanded ? (
          <div className="country-box__expanded">
            <div className="country-box__expanded--main">
              <div className="country-box__expanded--box">
                <h2 className="country-box__main--country">{data.country}</h2>
              </div>
              <div className="country-box__expanded--box orange">
                <span className="country-box__box--total">{data.cases}</span>
                <span className="country-box__box--new">+{data.todayCases}</span>
              </div>
              <div className="country-box__expanded--box red">
                <span className="country-box__box--total">{data.deaths}</span>
                <span className="country-box__box--new">+{data.todayDeaths}</span>
              </div>
              <div className="country-box__expanded--box green">
                <span className="country-box__box--total">{data.recovered}</span>
              </div>
            </div>
            <div className="country-box__expanded--details">
              <div className="country-box__expanded--box">
                <span>Active</span>
                <span>{data.active}</span>
              </div>
              <div className="country-box__expanded--box">
                <span>Critical</span>
                <span>{data.critical}</span>
              </div>
              <div className="country-box__expanded--box">
                <span>Cases per one milion</span>
                <span>{data.casesPerOneMillion}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="country-box__wrapper">
            <span className="white">{data.country}</span>
            <span style={{color:dataDisplayed.color}}>{data[dataDisplayed.name]}</span>
          </div>
        )}
        <ArrowIcon
          className="country-box__arrow"
          onClick={event => {
            event.stopPropagation();
            expand(!expanded);
          }}
        />
      </div>
    </div>
  );
};
export default CountryBox;
