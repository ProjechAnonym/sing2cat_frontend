import axios from "axios";
export async function AddComponent(
  api: string,
  url: string,
  name: string,
  genre: string,
  icon: string,
  token: string,
  secret: string,
  file: File | null
) {
  const data = {
    url: url,
    name: name,
    class: genre,
    icon: icon,
    icon_path:
      file === null
        ? ""
        : `static/${genre}/${name}.${file!.name.substring(
            file!.name.lastIndexOf(".") + 1
          )}`,
    data: { token: secret },
  };
  try {
    const dataRes = await axios({
      url: `${api}/add/component`,
      method: "post",
      data: data,
      headers: { Authorization: token },
    });
    let status = dataRes.status === 200 ? true : false;

    if (status && file !== null) {
      const formDate = new FormData();
      formDate.append("name", name);
      formDate.append("app", genre);
      formDate.append("file", file);
      const picRes = await axios({
        url: `${api}/add/pic`,
        method: "post",
        data: formDate,
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });
      status = picRes.status === 200 ? true : false;
    }
    return status;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? "网络错误" : "上传失败";
  }
}
