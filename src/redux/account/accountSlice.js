import { createSlice } from "@reduxjs/toolkit";
import {getAllDataAccount} from './accountActions';

const initialState = {
    loading: true,
    account_data: null,
    error: null,
  };

const accountSlice = createSlice({
    name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(getAllDataAccount?.pending, (state) => {
        /* console.log('Pending case...'); */
        return {
          ...state,
          loading: true,
        };
      })

      //fulfilled
      .addCase(getAllDataAccount?.fulfilled, (state, {payload}) =>{
        /* console.log('payload:',payload); */
        return{
          ...state,
          loading:false,
          account_data: payload,
        }
      })

      //reject
      .addCase(getAllDataAccount?.rejected, (state, { payload }) => {
        /* console.log('Rejected:', payload); */
        return {
          ...state,
          loading: false,
          error: payload,
        };
      })

      // Default
      .addDefaultCase((state) => {
       /*  console.log('Default case...'); */
        return state

      })
  },
});

export default accountSlice.reducer;