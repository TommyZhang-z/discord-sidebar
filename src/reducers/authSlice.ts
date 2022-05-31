import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (email:string) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const password = "password";
  const body = JSON.stringify({ email, password });
  const res = await axios.post("/api/auth/jwt/create/", body, config);
  return res.data;
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
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      const { payload } = action;
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      state.isAuthenticated = true;
      state.access = payload.access;
      state.refresh = payload.refresh;
    });
  },
});

export const { checkAuthenticated } = authSlice.actions;
export default authSlice.reducer;
