import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
  user: [],
  loginUser:null
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
    // Register User
    setRegisterUser: (state,action)=>{
        const stateData  = state.user
        const data = stateData.push(action.payload)
    },
    //Login user Data
    setLoginUser: (state,action)=>{
        state.loginUser = action.payload
    },
    //Updating hospital Data
    setUpdateData : (state,action) =>{
      state.loginUser.hospitalData[action.payload].apply = true
    }
  },
});
export const { actions } = UserSlice;
export default UserSlice.reducer;
