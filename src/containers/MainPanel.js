import React from 'react'
import GlobalCasesPanel from './GlobalCasesPanel'
import CountryCasesPanel from './CountryCasesPanel'
import SearchBar from '../components/SearchBar'

const MainPanel = () => {
    return (
      <div className="panel__container">
        <SearchBar />
        <GlobalCasesPanel />
        <CountryCasesPanel />
      </div>
    );
}
export default MainPanel