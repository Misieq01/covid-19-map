import React from 'react'
import GlobalCasesPanel from './GlobalCasesPanel'
import CountryCasesPanel from './CountryCasesPanel'

const MainPanel = () => {
    return <div className='panel__container'>
        <GlobalCasesPanel/>
        <CountryCasesPanel/>
    </div>
}
export default MainPanel