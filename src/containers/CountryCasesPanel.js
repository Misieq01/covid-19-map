import React from 'react'
import {useSelector} from 'react-redux'
import {countryCases,getSearchValue} from '../store/selectors'

import CountryBox from '../components/CountryBox'

const CountryCasesPanel = () =>{

    const searchValue = useSelector(state=>getSearchValue(state))
    //filter data by search value so in result I will get all countries that includes what user typed
    const data = useSelector(state => countryCases(state)).filter(element =>
      element.country.toLowerCase().includes(searchValue.toLowerCase())
    );
    //Basic mapping to display all Data
    const Elements = () =>{
        return data.map((data,index)=> {
            return <CountryBox data={data} key={index} />; } )
    }

    return<div className='country-cases-panel__container'>
        <Elements/>
    </div>
}

export default CountryCasesPanel