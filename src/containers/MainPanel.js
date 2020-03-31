import React from 'react'
import GlobalCasesPanel from './GlobalCasesPanel'
import CountryCasesPanel from './CountryCasesPanel'
import SearchBar from '../components/SearchBar'
import About from './About'

const MainPanel = () => {
    return (
      <div className="panel__container">
        <About/>
        <GlobalCasesPanel />
        <SearchBar />
        <CountryCasesPanel />
      </div>
    );
}
export default MainPanel