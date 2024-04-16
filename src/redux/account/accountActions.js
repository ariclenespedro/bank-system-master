import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";
import axios  from "axios";

export const getAllDataAccount = createAsyncThunk(
    "account/getAllDataAccount",
    async (thunkAPI) => {
        /* console.log('iniciando a request'); */
        try {
            const session = await getSession();
            const token = session?.token;
            const client_id = session?.client._id;

           // Configuração do cabeçalho com o token
            const config = {
              baseURL : process.env.APPLICATION_URL, // URL base da API
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Adiciona o token ao cabeçalho
                }
            };

            const res = await axios.get(`/api/client/${client_id}/account`,config);
            return res.data;

        } catch (error) {
          console.log('response accountActions errors:',error);
          return thunkAPI.rejectWithValue(error);
            
            
        }
    }
);

export const createPayment = createAsyncThunk(
    'payments/create',
    async (values, thunkAPI) => {
      try {
        const session = await getSession();
        const token = session?.token;
        const client_id = session?.client._id;
  
        const config = {
          baseURL: 'http://10.17.20.24:3000',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
  

        const res = await axios.post(`/api/${client_id}/payments/references`, values, config);
        return res.data;
      } catch (error) {
        console.log('response paymentActions errors:',error);
        
        return thunkAPI.rejectWithValue(error);
      }
    }
  );