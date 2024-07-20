import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        console.log(state, 'state');
        console.log(action.payload, 'action');
      state.token = action.payload.token;
      state.user = jwtDecode(action.payload.token);
      console.log(state.user, 'state user');
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", action.payload.user);
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    loadUser: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.token = token;
        state.user = jwtDecode(token);
      }
    },
  },
});

export const { loginSuccess, logoutSuccess, loadUser } = authSlice.actions;

export default authSlice.reducer;
