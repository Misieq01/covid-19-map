import React from "react";
import { useFetchData } from "./hooks/useFetch";
import { useSelector } from "react-redux";
import { loading } from "./store/selectors";

import MainPanel from "./containers/MainPanel";
import Map from "./containers/Map";
import LoadingPanel from "./components/LoadingPanel";

const App = () => {
  const isLoading = useSelector(state => loading(state));
  console.log(isLoading)
  useFetchData();

  return (
    <div className="application">
      {isLoading ? (
        <LoadingPanel />
      ) : (
        <>
          <MainPanel />
          <Map />
        </>
      )}
    </div>
  );
};

export default App;
