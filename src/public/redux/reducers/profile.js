const initialState = {
    number: 10,
    dataProfile: [],
    regions : [],
    city : [],
    message : '',
    isLoading: false,
    isError: false,
    
}

// create a reducer for getting network from RESTful API
export default profile = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PROFILES_PENDING': // in case when loading get data
            return {
                ...state,
                isLoading: true
            }
        case 'GET_PROFILES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_PROFILES_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isError: false,
                dataProfile : action.payload.data.data[0],
            }
        case 'GET_REGIONS_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isError: false,
                regions : action.payload.data.data,
            }

        case 'GET_CITY_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isError: false,
                city : action.payload.data.data,
            }

        case 'UPDATE_PROFILE_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isError: false,
                message : action.payload.data.message,
            }

        default:
            return state;
    }
}