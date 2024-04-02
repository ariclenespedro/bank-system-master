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
            const axiosInstance = axios.create({
                baseURL: 'http://localhost:3000', // URL base da API
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Adiciona o token ao cabeçalho
                }
            });

            axiosInstance.get('/api/client/660bccda660299cbb01214f8/account')
            .then(response => {
                // Manipular a resposta
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                // Manipular erros
                console.error('Erro ao fazer requisição:', error);
            });

        } catch (error) {
            console.log('response accountActions errors:',error);
            
        }
    }
);