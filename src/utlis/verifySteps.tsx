import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const KeepLogin = createAsyncThunk(
  "identity/KeepLogin",
  async (config: any) => {
    const token = localStorage.getItem("token");
    return token === null || token === ""
      ? () => {
          localStorage.removeItem("token");
          return { token: "" };
        }
      : () => {
          axios
            .get(`${config.API}/user/valid`, {
              headers: { Authorization: token },
            })
            .then((data) => console.log(data));
          return { token: "" };
        };
    // if (
    //   // 首先获取存储的token,如果存在则进行登录
    //   localStorage.getItem("token") !== null
    // ) {
    //   const token = localStorage.getItem("token");
    //   // 避免后端错误返回的结果被存储,再此进行判断
    //   if (token === "") {
    //     localStorage.removeItem("id");
    //     localStorage.removeItem("token");
    //     return { token: "" };
    //   } else {
    //     // 如果token可用则尝试登录
    //     const validState = await axios.get(`${config.API}/user/valid`, {
    //       headers: { Authorization: token },
    //     });
    //     // 如果状态码正确则说明目前存储的token有效
    //     if (validState.status === 200) {
    //       return {
    //         // 将目前存储的token返回
    //         token: localStorage.getItem("token"),
    //       };
    //     } else {
    //       // 否则移
    //       localStorage.removeItem("token");
    //       return { token: "" };
    //     }
    //   }
    // } else {
    //   // 为空则直接返回
    //   return { token: "" };
    // }
  }
);
