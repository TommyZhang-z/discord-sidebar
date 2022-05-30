import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/auth/jwt/create/", body, config);
    return res.data;
  } catch (err: any) {
    return err.message;
  }
});

interface AuthState {
  access: String | null;
  refresh: String | null;
  isAuthenticated: Boolean | null;
  user: null;
  loading: Boolean;
}

const initialState: AuthState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
  user: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkAuthenticated: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
  // extraReducers: {
  //   [login.pending]: (state) => {
  //     state.loading = true
  //   },
  //   [login.fulfilled]: (state, { payload }) => {
  //     state.loading = false
  //     state.entities = payload
  //   },
  //   [login.rejected]: (state) => {
  //     state.loading = false
  //   },
  // },
});

export const { checkAuthenticated } = authSlice.actions;
export default authSlice.reducer;