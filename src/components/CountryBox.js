import React, { useState } from "react";
import {useSelector} from 'react-redux';
import {getSortBy} from '../store/selectors'
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";

const CountryBox = ({ data, style }) => {
  const [expanded, expand] = useState(false);
  const dataDisplayed = useSelector(state=>getSortBy(state))

  console.log(data)

  const Data = ({name,number,color}) =>{
    return (
      <div className="box__container">
        <span className="box__data">{name+ ':'}</span>
        <span className={"box__data " + color}>{number}</span>
      </div>
    );  }
  const Country = ({country,point,pointClick})=>{
  return <div className='box__container'><span className='box__country'>{country}</span></div>
  }

  return (
    <div
      className={expanded ? "country-box__container" : "country-box__container country-box__container--hover "}
      onClick={() => expand(true)}
    >
      <div className="country-box__smaller">
        {expanded ? (
          <div className="country-box__expanded">
            <Country country={data.country} />
            <Data name="Cases" number={data.cases} color="orange" />
            <Data name="Today cases" number={data.todayCases} color="orange" />
            <Data name="Deaths" number={data.deaths} color="red" />
            <Data name="Today deaths" number={data.todayDeaths} color="red" />
            <Data name="Recovered" number={data.recovered} color="green" />
            <Data name="Active" number={data.active} color="purple" />
            <Data name="Critical" number={data.critical} color="red" />
            <Data name="Cases per one million" number={data.casesPerOneMillion} color="orange" />
            <Data name="Deaths per one million" number={data.deathsPerOneMillion} color="red" />
          </div>
        ) : (
          <div className="country-box__wrapper">
            <span className="country-box__wrapper--country">{data.country}</span>
            <span style={{ color: dataDisplayed.color }}>{data[dataDisplayed.name]}</span>
          </div>
        )}
        <ArrowIcon
          className="country-box__arrow"
          onClick={event => {
            event.stopPropagation();
            expand(!expanded);
          }}
          style={expanded ? { transform: "rotate(180deg)" } : null}
        />
      </div>
    </div>
  );
};
export default CountryBox;
