import { createSlice } from "@reduxjs/toolkit";
import {getAllDataAccount, createPayment  } from './accountActions';


const initialState = {
    loading: true,
    account_data: null,
    paymentReference: null,
    error: null,
    payment:'',
  };

const accountSlice = createSlice({
    name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(getAllDataAccount.pending, (state) => {
        console.log('Pending case Account...');
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(createPayment.pending, (state) => {
        console.log('Pending case...');
        return{
          ...state,
          loading: true,
        }
      })

      //fulfilled
      .addCase(getAllDataAccount.fulfilled, (state, {payload}) =>{
        console.log('payload Account:',payload);
        return{
          ...state,
          loading:false,
          account_data: payload,
        }
      })
      .addCase(createPayment.fulfilled, (state, {payload}) =>{
        console.log('payload:',payload);
        return{
          ...state,
          loading:false,
          paymentReference:[],
          payment: payload,
        }
      })

      //reject
      .addCase(getAllDataAccount.rejected, (state, action) => {
        console.log('Rejected Account:', action.error);
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      })
      .addCase(createPayment.rejected, ( state, {payload} ) => {
        console.log('Rejected:', payload);
        return{
          ...state,
          loading:false,
          error: payload,
        }
      })

      // Default
      .addDefaultCase((state) => {
        console.log('Default case...');
        return state

      })
  },
});

export default accountSlice.reducer;