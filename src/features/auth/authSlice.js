import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    showNav: true,
    userId: null
}

export const logout = createAsyncThunk('auth/logout', () => { 
    localStorage.removeItem('user');
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload;
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        logOut: () => {
            localStorage.removeItem('user');
        },
        toggleNav: (state, action) => {
            state.showNav = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(logout.fulfilled, (state) => {
            state.user = null;
        })
    }
});

export const { setAuth, toggleNav, setUserId } = authSlice.actions;
export default authSlice.reducer;