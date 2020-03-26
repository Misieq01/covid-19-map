import React,{useState} from "react";
import { useSelector } from "react-redux";
import { loading } from "../store/selectors";

import MainPanel from "./MainPanel";
import Map from "./Map";
import Navigation from "../components/Navigation";
import LoadingScreen from "../components/LoadingPanel";

const ContentDisplayer = () => {
  const isLoading = useSelector(state => loading(state));
  const [contentDisplay,setContent] = useState('map')
  const isMobileDisplay = window.innerWidth < 1200;

  return (
    <div className="content-displayer__container">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {isMobileDisplay ? (
            <>
            {contentDisplay === 'map' ? <Map/> : <MainPanel/>}
            <Navigation setContent={setContent} content={contentDisplay}/></>
          ) : (
            <>
              <MainPanel />
              <Map />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ContentDisplayer;
