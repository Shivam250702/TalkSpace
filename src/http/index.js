import axios from 'axios';

const api=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers:{
        'content-type':'application/json',
        Accept: 'application/json',
    },

});

export const sendOtp=()=> api.post('/api/send-otp',data);
