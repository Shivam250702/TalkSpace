import axios from 'axios';

const api=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers:{
        'content-type':'application/json',
        Accept: 'application/json',
    },

});

export const sendOtp=(data)=> api.post('/api/send-otp',data);
export const sendOtp=(data)=> api.post('/api/verify-otp',data);
