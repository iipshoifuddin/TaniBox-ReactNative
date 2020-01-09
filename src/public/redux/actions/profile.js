import axios from 'axios';

export const getProfile = (data) => {
    return {
        type: 'GET_PROFILES',
        payload: axios.post('http://34.226.154.250/ProjectGroup/profilpembeli.json'),
    };
}
