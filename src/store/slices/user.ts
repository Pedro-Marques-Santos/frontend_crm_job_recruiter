"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  status: {
    _id: string;
    name: string;
    idgoogle: string;
    linkedinURL: string;
    email: string;
    workingGroup: string[];
    description: string;
    date: string;
    registeredJobs: string[];
    isRecruiter: boolean;
    imgprofile: string;
    __v: number;
  };
}

interface UserState {
  userState: User | null;
}

const initialState: UserState = {
  userState: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.userState = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DB_HOST,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<User, void>({
      query: () => ({
        url: "googleAuthentication",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginUserMutation } = userApi;
