import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FecthConfig } from "../utlis/fetchConfig";
import { LoginMsg, KeepLogin } from "../utlis/verifySteps";
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

export const identitySlice = createSlice({
  name: "identity",
  initialState: {
    token: "",
    error: "",
    loading: false,
    status: false,
    init: false,
  },
  reducers: {
    setJWT: (state, action) => {
      state.token = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.error = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setInit: (state, action) => {
      state.init = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginMsg.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginMsg.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.loading = false;
        state.status = true;
        localStorage.setItem("token", action.payload);
      })
      .addCase(LoginMsg.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = false;
      })
      .addCase(KeepLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(KeepLogin.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        if (action.payload !== "") {
          state.token = action.payload;
          state.status = true;
          localStorage.setItem("token", action.payload);
        }
      })
      .addCase(KeepLogin.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = false;
      });
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
export const { setInit, setStatus } = identitySlice.actions;
export const selectConfig = (state: RootState) => state.config.config;
export const selectToken = (state: RootState) => state.identity.token;
export const selectError = (state: RootState) => state.identity.error;
export const selectLoad = (state: RootState) => state.identity.loading;
export const selectInit = (state: RootState) => state.identity.init;
export const selectStatus = (state: RootState) => state.identity.status;
export const selectDark = (state: RootState) => state.style.dark;
export const selectSider = (state: RootState) => state.style.sider;
