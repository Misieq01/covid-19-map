import React from 'react'
import GlobalCasesPanel from './GlobalCasesPanel'
import CountryCasesPanel from './CountryCasesPanel'
import SearchBar from './SearchBar'

const MainPanel = () => {
    return <div className='panel__container'>
        <GlobalCasesPanel/>
        <SearchBar/>
        <CountryCasesPanel/>
    </div>
}
export default MainPanel