import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getViagens = createAsyncThunk(
	"viagens/getViagens", async () => await axios.get("https://dialog.2wins.com.br/openai/viagens", {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Authorization",
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
			"Content-Type": "application/json;charset=UTF-8"
		},
	})
);

export const postData = createAsyncThunk(
	"viagens/postData",
	async (data) => {
		try {
			const response = await axios.post("https://dialog.2wins.com.br/openai/viagens/update", data);
			return response;
		} catch (err) {
			console.error(err)
		}
	}
);

export const postInsert = createAsyncThunk(
	"viagens/postInsert",
	async (data) => {
		try {
			const response = await axios.post("https://dialog.2wins.com.br/openai/viagens/insert", data);
			return response;
		} catch (err) {
			console.error(err)
		}
	}
);
export const dbSlice = createSlice({
	name: 'viagens',
	initialState: { rows: [], updateRows: [], status_insert: false },
	reducers: {
		getUpdate: (state, action) => {
			return state.updateRows;
		},
	}, extraReducers: {
		[getViagens.fulfilled]: (state, action) => {
			state.rows = action.payload.data;
		},
		[getViagens.rejected]: (state, action) => {
			state.rows = null;
		}, [postData.fulfilled]: (state, action) => {
			state.updateRows = action.payload.data;
		},
		[postData.rejected]: (state, action) => {
			state.rows = null;
		}, [postInsert.fulfilled]: (state, action) => {
			state.status_insert = action.payload.data;
		},
		[postInsert.rejected]: (state, action) => {
			state.rows = null;
		},
	},
});


export const { getUpdate } = dbSlice.actions;

export default dbSlice.reducer;