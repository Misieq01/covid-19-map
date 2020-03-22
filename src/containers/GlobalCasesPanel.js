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
        color="rgb(255, 176, 87)"
        active={sortBy.name === "cases"}
        onClick={() => dispatch(sortDataBy("cases", "rgb(255, 176, 87)"))}
      />
      <DataBox
        text="Deaths"
        data={data.deaths}
        color="rgb(255, 46, 46)"
        active={sortBy.name === "deaths"}
        onClick={() => dispatch(sortDataBy("deaths", "rgb(255, 46, 46)"))}
      />
      <DataBox
        text="Recovered"
        data={data.recovered}
        color="rgb(119, 255, 112)"
        active={sortBy.name === "recovered"}
        onClick={() => dispatch(sortDataBy("recovered", "rgb(119, 255, 112)"))}
      />
    </div>
  );
};

export default GlobalCasesPanel;
