import {FETCH_DATA,CHOOSE_DATA,SEARCH_COUNTRY,UPDATE_CURSOR_POSITION,SET_MAP_REF,SET_CONTENT_DISPLAY,SET_MAP_PARAMETRS} from './types'
import countries from '../JSON/countries.json'

const initialState = {
  globalCases: {},
  countryCases: {},
  countries: countries,
  loading: true,
  sortBy: { name: "cases", color: "rgb(255, 160, 51)" },
  searchValue: "",
  mapParametrs: {center: [52.0, 20.0],zoom:4},
  //only for mobile
  contentDisplay: 'map',
  cursorPosition: {},
  mapRef: null,
  errorMessage: ""
};

//Data about coronavirus that i fetching doesn't include location of each country
//So i downloaded JSON data were it is include and after fetch i compose geolocation with each country data 

const getGeoLocation = (country) =>{
    const data = countries.find(element=>{
        return element.name === country
    })
    return data ? data.latlng : null
}

//Declaring size of circles
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

// Some country names are diffrent in each dataset or there is not geolocation for some data 
// I unifed names for big countries like UK and etc
// Others i just removing from dataset
//It's applly for some little coutries, mostly affrican i think and also for one cruise ship
const removeCountrysWithoutLocation = (countries) =>{
    return countries.filter((element=>{
        return element.location !==null
    }))
}

// sorting algorithm
//I think in future i will made 3 datasets sorted by each data that user can choose before application open
// And then it will just choose with one to use witout sorting with each time
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
            //Adding geolocation for each country and also setting cirlce size for 'cases' data which is default
            const countryCasesWithLocation = action.countryCases.map(element =>{
                return {...element,location:getGeoLocation(element.country),size: declareCircleSize(element.cases)}
            })
            return {...state,globalCases:action.globalCases,countryCases: removeCountrysWithoutLocation(countryCasesWithLocation),loading:false}
        case FETCH_DATA.FAILED:
            return {...state,loading:false,errorMessage:'Something went wrong with loading data, please try again in few minuts'}
        case CHOOSE_DATA:
            //Setting circle size for each country and then sorting
                const updatedCountryCases = [...state.countryCases].map(element =>{
                    return {...element,size: declareCircleSize(element[action.sortBy.name])}
                }).sort((a,b)=>compareNumbers(a,b,action.sortBy.name)).reverse()
            return {...state,sortBy: action.sortBy,countryCases:updatedCountryCases}
        case SEARCH_COUNTRY:
            return {...state,searchValue: action.country}
        case UPDATE_CURSOR_POSITION:
            return {...state,cursorPosition: action.position}
        case SET_MAP_REF:
            return {...state,mapRef: action.ref}
        case SET_CONTENT_DISPLAY:
            return {...state,contentDisplay: action.display}
        case SET_MAP_PARAMETRS:
            return { ...state, mapParametrs: action.parametrs };
        default:
            return state
    }
}