import React from 'react'
import {useSelector} from 'react-redux'
import {countryCases} from '../store/selectors'

import CountryBox from '../components/CountryBox'

const CountryCasesPanel = () =>{

    const data = useSelector(state=>countryCases(state))
    const Elements = () =>{
        return data.map((data,index)=> {
            const border = {borderRadius:'5px 0 0 0'}
            return <CountryBox data={data} style={index === 0 ? border : null} key={index} />; } )
    }

    return<div className='country-cases-panel__container'>
        <Elements/>
    </div>
}

export default CountryCasesPanel