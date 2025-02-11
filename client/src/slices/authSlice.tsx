import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLocalStorage } from "../utils/localstorage";

interface InitialStateType {
  token: string | null;
  user: any;
  loading: boolean;
}

const initialState: InitialStateType = {
  token: getItemFromLocalStorage('token') ? JSON.parse(getItemFromLocalStorage('token')!) : null,
  user: getItemFromLocalStorage('user') ? JSON.parse(getItemFromLocalStorage('user')!) : null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken:(state,actions)=>{
        state.token = actions.payload;
    },

    setUser:(state,actions)=>{
        state.user = actions.payload;
    },

    setLoading:(state,actions)=>{
        state.loading = actions.payload;
    }
  },
});

export const {setToken,setUser,setLoading} = authSlice.actions;

export default authSlice.reducer;
