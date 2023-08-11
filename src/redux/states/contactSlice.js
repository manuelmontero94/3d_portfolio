import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: '',
	email: '',
	message: '',
};

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setNewContact: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.message = action.payload.message;
		},
	},
});

export const { setNewContact } = contactSlice.actions;

export default contactSlice.reducer;
