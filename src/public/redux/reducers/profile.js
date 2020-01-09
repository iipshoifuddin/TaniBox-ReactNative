const initialState = {
    number: 10,
    dataProfile: [],
    isLoading: false,
    isError: false,
}

// create a reducer for getting network from RESTful API
export default profile = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PROFILES_PENDING': // in case when loading get data
            return {
                isLoading: true
            }
        case 'GET_PROFILES_REJECTED': // in case error network/else
            return {
                isLoading: false,
                isError: true,
            }
        case 'GET_PROFILES_FULFILLED': // in case successfuly get data
        //console.warn(action.payload.data.data[0])
            return {
                isLoading: false,
                isError: false,
                dataProfile: action.payload.data.data[0]
            }

        default:
            return state;
    }
}