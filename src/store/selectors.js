export const globalCases = state => state.globalCases
export const countryCases = state => state.countryCases
export const loading = state => state.loading
export const getSortBy = state => state.sortBy
export const getSearchValue = state => state.searchValue
export const getCursorPosition = state => state.cursorPosition;
export const getMapRef = state => state.mapRef;
export const dataForCircle = state => state.countryCases.map(element=>{
    return {country:element.country, size: element.size, location: element.location, number:element[state.sortBy.name] };
})