import { createAsyncThunk } from "@reduxjs/toolkit";
import yaml from "yaml";
export const FecthConfig = createAsyncThunk("config/FetchConfig", async () => {
  // 从服务器获取配置文件
  // const res = await fetch(`${process.env.PUBLIC_URL}/config.yaml`);
  const res = await fetch(`${process.env.PUBLIC_URL}/config.yaml`);
  // 将yaml转为文本
  const text = await res.text();
  // 将文本转为对象
  const config = yaml.parse(text);
  return config;
});
