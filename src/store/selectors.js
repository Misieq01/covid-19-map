export const globalCases = state => state.globalCases
export const countryCases = state => state.countryCases
export const loading = state => state.loading
export const getSortBy = state => state.sortBy
export const getSearchValue = state => state.searchValue
export const dataForCircle = state => state.countryCases.map(element=>{
    return { size: element.size, location: element.location };
})