import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('user') 
        ? JSON.parse(localStorage.getItem('user')) 
        : { email: 'user@example.com', token: 'dummy_token' }, // Dummy user
    isSidebarOpen: false // ✅ Add sidebar state
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
        setOpenSidebar: (state, action) => { // ✅ Add sidebar toggle
            state.isSidebarOpen = action.payload;
        }
    }
});

export const { setUser, logout, setOpenSidebar } = authSlice.actions; // ✅ Ensure export
export default authSlice.reducer;
