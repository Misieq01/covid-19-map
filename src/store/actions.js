import {FETCH_DATA,CHOOSE_DATA} from './types'
import axios from 'axios';

export const fetchData = () => dispatch =>{
    dispatch({type:FETCH_DATA.LOADING});
    axios.get("https://coronavirus-19-api.herokuapp.com/all").then(resAll=>{
        axios.get("https://coronavirus-19-api.herokuapp.com/countries").then(resCountry=>{
            dispatch({type:FETCH_DATA.SUCCESS,globalCases:resAll.data,countryCases: resCountry.data})
        }).catch(err=>{
            console.log(err.message)
            dispatch({type:FETCH_DATA.FAILED})
        });
    }).catch(err=>{
        console.log(err.message)
        dispatch({type:FETCH_DATA.FAILED})
    });
}

export const sortDataBy = (name,color) =>{
    return {
        type: CHOOSE_DATA,
        sortBy: {name: name,color:color}
    }
}
