import { configureStore } from '@reduxjs/toolkit';
import dbSlice from './dbSlice';


export default configureStore({
	reducer: {
		viagens: dbSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});