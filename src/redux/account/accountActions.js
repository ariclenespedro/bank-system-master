/* import axios from "axios"; */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";

export const getAllDataAccount = createAsyncThunk(
    "account/getAllDataAccount",
    async () => {
        try {
            const session = await getSession();
            console.log(session);
            const token = session?.data.token;
            const client_id = session?.user.client_id; 

            const config = {
                headers: {
                  "authorization": token,
                },
            };
            const res = await axios.get(`http://192.168.1.76:3000/api/client/${client_id}/account`,config);
            return res.data;

        } catch (error) {
            
        }
    }
);