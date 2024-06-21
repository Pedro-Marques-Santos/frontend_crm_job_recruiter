"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
