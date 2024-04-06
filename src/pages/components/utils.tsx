import axios from "axios";
export async function CheckStatus(service: string, api: string, token: string) {
  const formdata = new FormData();
  formdata.append("service", service);
  try {
    const res = await axios({
      url: `${api}/sing2cat/check`,
      data: formdata,
      method: "post",
      headers: { Authorization: token },
    });
    return res.status === 200 ? true : false;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? true : false;
  }
}
export async function RestartApp(service: string, api: string, token: string) {
  const formdata = new FormData();
  formdata.append("service", service);
  try {
    const res = await axios({
      url: `${api}/sing2cat/restart`,
      data: formdata,
      method: "post",
      headers: { Authorization: token },
    });
    return res.status === 200 ? true : false;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? true : false;
  }
}
