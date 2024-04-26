import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";
import axios  from "axios";

export const getAllDataAccount = createAsyncThunk(
    "account/getAllDataAccount",
    async () => {
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

            const res = await axios.get(`/api/client/${client_id}/account`,config)
            console.log('response axios:',res);
            return res.data;

        } catch (error) {
          console.log('response accountActions errors:',error);
          throw new Error(error.message);
         
            
            
        }
    }
);

// Método para criar um pagamento por referencia

export const createPayment = createAsyncThunk(
    'payments/createPayment',
    async (values, thunkAPI) => {
      try {
        const session = await getSession();
        const token = session?.token;
        const client_id = session?.client._id;

        /* console.log('session:',session); */
  
        const config = {
          baseURL: process.env.APPLICATION_URL,
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


  /* 
  Action para pegar todas as transações bancárias(movimentos) de um cliente.
   */
  export const getAllTransictionClient = createAsyncThunk(
    'account/getAllTransictionClient',
    async () => {
      try {
        const session = await getSession();
        const token = session?.token;
        const client_id = session?.client._id;
  
        const config = {
          baseURL: process.env.APPLICATION_URL,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
  

        const res = await axios.get(`/api/${client_id}/transictions`, config);
        return res.data;
      } catch (error) {
        console.log('response getTransictions errors:',error);
        
        throw new Error(error.message);
      }
    }
  );

  //Pegar uma transação especifica.
  export const getTransictionClient = createAsyncThunk(
    'account/getTransictionClient',
    async (transiction_id) => {
      try {
        const session = await getSession();
        const token = session?.token;
        const client_id = session?.client._id;
  
        const config = {
          baseURL: process.env.APPLICATION_URL,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
  

        const res = await axios.get(`/api/${client_id}/transiction/${transiction_id}`, config);
        return res.data;
      } catch (error) {
        console.log('response Transiction errors:',error);
        
        throw new Error(error.message);
      }
    }
  );