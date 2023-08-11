import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './states/messageSlice';
import contactReducer from './states/contactSlice';

export default configureStore({
	reducer: {
		message: messageReducer,
		contact: contactReducer,
	},
});
