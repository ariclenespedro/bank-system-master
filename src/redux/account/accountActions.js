import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";
import axios  from "axios";

export const getAllDataAccount = createAsyncThunk(
    "account/getAllDataAccount",
    async () => {
        console.log('iniciando a request');
        try {
            const session = await getSession();
            const token = session?.token;
            const client_id = session?.client._id;

           // Configuração do cabeçalho com o token
            const config = {
                baseURL: `http://192.168.1.76:3000`, // URL base da API
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Adiciona o token ao cabeçalho
                }
            };

            const res = await axios.get(`/api/client/${client_id}/account`,config);
            return res.data;

        } catch (error) {
            console.log('response accountActions errors:',error);
            
        }
    }
);