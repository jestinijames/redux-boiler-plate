import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from './loginService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
};

export const login = createAsyncThunk('login/user', async(userData, thunkAPI) => {
    // You can use thunkAPI to access other slice values
    try {
        const response = await authService.authenticateUser(userData);
        return response.username;
        } catch(error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    
});

export const logout = createAsyncThunk('logout/user', async() => {
    await authService.logoutUser();
})


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        reset: (state) =>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload; 
            localStorage.setItem('user', JSON.stringify(action.payload));  
        })
        .addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.user = null;
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null;
        });
    },
});

export const { reset } = loginSlice.actions;
export default loginSlice.reducer;