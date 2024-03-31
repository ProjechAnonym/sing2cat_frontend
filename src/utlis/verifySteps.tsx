import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
export const LoginMsg = createAsyncThunk(
  "identity/Login",
  async (props: any) => {
    const formData = new FormData();
    formData.append("secret", props.password);
    try {
      const res = await axios.postForm(
        `${props.config.API}/user/login`,
        formData
      );
      return res.data.token;
    } catch (error: any) {
      throw error.code === "ERR_NETWORK" ? "网络错误" : "密钥错误";
    }
  }
);
export const KeepLogin = createAsyncThunk(
  "identity/KeepLogin",
  async (config: any) => {
    const token = localStorage.getItem("token");
    switch (token) {
      case null:
        return "";
      case "":
        localStorage.removeItem("token");
        return "";
      default:
        try {
          const res = await axios.get(`${config.API}/user/verify`, {
            headers: { Authorization: token },
          });
          return res.data.token;
        } catch (error: any) {
          throw error.code === "ERR_NETWORK" ? "网络错误" : "token过期";
        }
    }
  }
);
