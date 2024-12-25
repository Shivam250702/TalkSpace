import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isAuth:false,
    user:null,
 otp:{
  phone:'',
  hash:'',
 }
    // const isAuth = false;
    // const user = {
    //   activated: false,
    // };
    
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     const {user}=action.payload;
     state.user = user;
     state.isAuth=true;

    },
    setOtp:(state,action)=>{
const {phone,hash}=action.payload;
state.otp.phone=phone;
state.otp.hash=hash;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment,setOtp } = authSlice.actions

export default authSlice.reducer