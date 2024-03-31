import axios from "axios";
export async function sendEmail(email: string, config: any) {
  const formData = new FormData();
  formData.append("email", email);
  try {
    const res = await axios.postForm(`${config.API}/user/email`, formData);
    return res.status === 200 ? true : false;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" || error.code === "ERR_BAD_REQUEST"
      ? "网络错误"
      : "非预设邮箱";
  }
}
export async function editPassword(
  email: string,
  captcha: string,
  password: string,
  config: any
) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("captcha", captcha);
  formData.append("password", password);
  try {
    const res = await axios.postForm(`${config.API}/user/reset`, formData);
    return res.status === 200 ? true : false;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" || error.code === "ERR_BAD_REQUEST"
      ? "网络错误"
      : "验证码或邮箱错误";
  }
}
