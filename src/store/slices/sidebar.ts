"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  isRecruiter: boolean | null;
  currentPage: string;
}

const initialState: SidebarState = {
  isRecruiter: null,
  currentPage: "firstpage",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarIsRecruiter: (state, action: PayloadAction<boolean>) => {
      state.isRecruiter = action.payload;
    },
    setSidebarCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSidebarIsRecruiter, setSidebarCurrentPage } =
  sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
