/* import axios from "axios"; */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";

export const getAllDataAccount = createAsyncThunk(
    "account/getAllDataAccount",
    async () => {
        try {
            const session = await getSession();
            console.log(session);
        } catch (error) {
            
        }
    }
);