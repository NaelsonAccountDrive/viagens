import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getViagens = createAsyncThunk(
	"viagens/getViagens", async () => await axios.get("http://localhost:3002/openai/viagens", {
		headers: {                  
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Authorization", 
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
			"Content-Type": "application/json;charset=UTF-8"                   
		},
	})
);

export const dbSlice = createSlice({
	name: 'viagens',
	initialState: { inputElement: null, rows: [], },
	reducers: {
		getElement: (state, action) => {
			state.inputElement = action.payload.inputElement;
		},
	}, extraReducers: {
		[getViagens.fulfilled]: (state, action) => {
			state.rows = action.payload.data;
		},
		[getViagens.rejected]: (state, action) => {
			state.rows = null;
		},
	},
});


export const { getElement } = dbSlice.actions;

export default dbSlice.reducer;