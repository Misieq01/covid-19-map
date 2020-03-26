import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { globalCases,getSortBy } from "../store/selectors";
import { sortDataBy } from "../store/actions";
import DataBox from "../components/DataBox";

const GlobalCasesPanel = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => globalCases(state));
  const sortBy = useSelector(state=>getSortBy(state))
  console.log(data);
  return (
    <div className="global-cases-panel__container">
      <DataBox
        text="Cases"
        data={data.cases}
        color='orange'
        active={sortBy.name === "cases"}
        onClick={() => dispatch(sortDataBy("cases", "rgb(255, 160, 51)"))}
      />
      <DataBox
        text="Deaths"
        data={data.deaths}
        color='red'
        active={sortBy.name === "deaths"}
        onClick={() => dispatch(sortDataBy("deaths", "rgb(255, 82, 82)"))}
      />
      <DataBox
        text="Recovered"
        data={data.recovered}
        color='green'
        active={sortBy.name === "recovered"}
        onClick={() => dispatch(sortDataBy("recovered", "rgb(120, 212, 92)"))}
      />
    </div>
  );
};

export default GlobalCasesPanel;
