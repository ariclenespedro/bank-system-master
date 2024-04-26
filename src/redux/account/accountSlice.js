import { createSlice } from "@reduxjs/toolkit";
import 
  {getAllDataAccount, 
    createPayment, 
  getAllTransictionClient , 
  getTransictionClient } from './accountActions';


const initialState = {
    loading: true,
    account_data: null,
    paymentReference: null,
    transictions:null,
    transiction_data: null,
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
        console.log('Pending case payment...');
        return{
          ...state,
          loading: true,
        }
      })
      .addCase(getAllTransictionClient.pending, (state) => {
        console.log('Pending case allTrasiction...');
        return{
          ...state,
          loading: true,
        }
      })
      .addCase(getTransictionClient.pending, (state) => {
        console.log('Pending case Trasiction...');
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
        console.log('payload payment:',payload);
        return{
          ...state,
          loading:false,
          paymentReference:[],
          payment: payload,
        }
      })

      .addCase(getAllTransictionClient.fulfilled, (state, {payload}) =>{
        console.log('payload transictions:',payload);
        return{
          ...state,
          loading:false,
          transictions: payload,
        }
      })

      .addCase(getTransictionClient.fulfilled, (state, {payload}) =>{
        console.log('payload specific transiction:',payload);
        return{
          ...state,
          loading:false,
          transiction_data: payload,
        }
      })

      //reject
      .addCase(getAllDataAccount.rejected, (state, action) => {
        /* console.log('Rejected Account:', action.error); */
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

      .addCase(getAllTransictionClient.rejected, ( state, {payload} ) => {
        /* console.log('Rejected transictions:', payload); */
        return{
          ...state,
          loading:false,
          error: payload,
        }
      })

      .addCase(getTransictionClient.rejected, ( state, {payload} ) => {
        console.log('Rejected specific transictions:', payload);
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