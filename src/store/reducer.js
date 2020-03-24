import {FETCH_DATA,CHOOSE_DATA,SEARCH_COUNTRY,UPDATE_CURSOR_POSITION} from './types'
import countries from '../JSON/countries.json'

const initialState = {
    globalCases: {},
    countryCases: {},
    countries: countries,
    loading: true,
    sortBy: {name:'cases',color:'orange'},
    searchValue: '',
    cursorPosition:{},
    errorMessage: ''
}

const getGeoLocation = (country) =>{
    const data = countries.find(element=>{
        return element.name === country
    })
    return data ? data.latlng : null
}

const declareCircleSize = (cases) =>{
    switch (true) {
        case (cases > 0 && cases < 50):
            return 1
        case (cases > 50 && cases < 100):
            return 2
        case (cases > 100 && cases < 250):
            return 3
        case (cases > 250 && cases < 500):
            return 4
        case (cases > 500 && cases < 1000):
            return 5
        case (cases > 1000 && cases < 5000):
            return 7
        case (cases > 5000 && cases < 10000):
            return 9
        case (cases > 10000 && cases < 15000):
            return 11
        case (cases > 15000 && cases < 25000):
            return 12
        case (cases > 25000 && cases < 50000):
            return 14
        case (cases > 50000 && cases < 100000):
            return 23
        case (cases > 100000 && cases < 500000):
            return 28
        default:
            return 1
    }
}

const removeCountrysWithoutLocation = (countries) =>{
    return countries.filter((element=>{
        return element.location !==null
    }))
}

const compareNumbers = (a,b,byData)=>{
      if (a[byData] < b[byData]) {
        return -1;
      }
      if (a[byData] > b[byData]) {
        return 1;
      }
      return 0;
}

export const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case FETCH_DATA.LOADING:
            return {...state,loading: true}
        case FETCH_DATA.SUCCESS:
            const countryCasesWithLocation = action.countryCases.map(element =>{
                return {...element,location:getGeoLocation(element.country),size: declareCircleSize(element.cases)}
            })
            return {...state,globalCases:action.globalCases,countryCases: removeCountrysWithoutLocation(countryCasesWithLocation),loading:false}
        case FETCH_DATA.FAILED:
            return {...state,loading:false,errorMessage:'Something went wrong with loading data, please try again in few minuts'}
        case CHOOSE_DATA:
                const updatedCountryCases = [...state.countryCases].map(element =>{
                    return {...element,size: declareCircleSize(element[action.sortBy.name])}
                }).sort((a,b)=>compareNumbers(a,b,action.sortBy.name)).reverse()
            return {...state,sortBy: action.sortBy,countryCases:updatedCountryCases}
        case SEARCH_COUNTRY:
            return {...state,searchValue: action.country}
        case UPDATE_CURSOR_POSITION:
            return {...state,cursorPosition: action.position}
        default:
            return state
    }
}