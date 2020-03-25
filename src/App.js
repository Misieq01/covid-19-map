import React from "react";
import { useFetchData } from "./hooks/useFetch";

import ContentDisplayer from './containers/ContentDisplayer'

const App = () => {
  useFetchData();

  return (
    <div className="application">
      <ContentDisplayer/>
    </div>
  );
};

export default App;
