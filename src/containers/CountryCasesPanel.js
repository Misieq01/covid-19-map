import React from 'react'
import {useSelector} from 'react-redux'
import {countryCases,getSearchValue} from '../store/selectors'

import CountryBox from '../components/CountryBox'

const CountryCasesPanel = () =>{

    const searchValue = useSelector(state=>getSearchValue(state))
    const data = useSelector(state => countryCases(state)).filter(element =>
      element.country.toLowerCase().includes(searchValue.toLowerCase())
    );
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