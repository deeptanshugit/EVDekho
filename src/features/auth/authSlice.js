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
      state.token = action.payload.token;
      state.user = jwtDecode(action.payload.token);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", action.payload.user);

      // Set timeout for automatic logout

      const expirationTime = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem('expirationTime', expirationTime)
      setTimeout(() => {
        store.dispatch(logoutSuccess())
      }, 60 * 60 * 1000) // 1 hour
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("expirationTime")
    },
    loadUser: (state) => {
      const token = localStorage.getItem("token");
      const expirationTime = localStorage.getItem("expirationTime")
      if(token && expirationTime) {
        const currentTime = new Date().getTime()
        if(currentTime > expirationTime) {
          // store.dispatch(logoutSuccess())
        } else {
          state.token = token
          state.user = jwtDecode(token)

          // set the timeout for the remaining time
          setTimeout(() => {
            store.dispatch(logoutSuccess())
          }, expirationTime - currentTime)
        }
      }
    },
  },
});

export const { loginSuccess, logoutSuccess, loadUser } = authSlice.actions;

export default authSlice.reducer;
