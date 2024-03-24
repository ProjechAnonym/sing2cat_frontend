import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FecthConfig } from "../utlis/fetchConfig";

export const styleSlice = createSlice({
  name: "style",
  initialState: {
    dark: false,
    sider: false,
  },
  reducers: {
    setDark: (state) => {
      state.dark = !state.dark;
    },
    setSider: (state, action) => {
      state.sider = action.payload;
    },
  },
});

export const configSlice = createSlice({
  name: "config",
  initialState: { config: {} as any },
  reducers: {
    setConfig: (state, action) => {
      state.config = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      FecthConfig.fulfilled,
      (state, action: PayloadAction<Object>) => {
        state.config = action.payload;
      }
    );
  },
});
export const { setDark, setSider } = styleSlice.actions;
export const selectConfig = (state: RootState) => state.config.config;
export const selectDark = (state: RootState) => state.style.dark;
export const selectSider = (state: RootState) => state.style.sider;
