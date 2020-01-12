import axios from 'axios';

export const getProfile = (data) => {
    // const body = {params:{user_id:9}}
    // const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
    return {
        type: 'GET_PROFILES',
        payload: axios.get(`http://34.202.135.29:4000/api/v1/profile/${data}`)
    };
}

export const getRegions = (data) => {
    // const body = {params:{user_id:9}}
    // const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
    return {
        type: 'GET_REGIONS',
        payload: axios.get(`http://34.202.135.29:4000/api/v1/shipment/province`)
    };
}

export const getCity = (prov_id) => {
    // const body = {params:{user_id:9}}
    // const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
    return {
        type: 'GET_CITY',
        payload: axios.get(`http://34.202.135.29:4000/api/v1/shipment/city?province_id=${prov_id}`)
    };
}

export const updateProfile = (token, data) => {
    // const body = {params:{user_id:9}}
    const config = { headers: { 'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}` } };
    return {
        type: 'UPDATE_PROFILE',
        payload: axios.patch(`http://34.202.135.29:4000/api/v1/profile`,data,config)
    };
}