import axios from "axios";
export async function fetchComponents(config: any, token: string) {
  try {
    const res = await axios.get(`${config.API}/fetch/component`, {
      headers: { Authorization: token },
    });
    if (res.status === 200) {
      if (res.data.data.length !== 0) {
        const components = [] as Array<{
          label: string;
          value: Array<{ label: string; value: any }>;
        }>;
        res.data.data.forEach((item: any) => {
          components.length === 0
            ? components.push({
                label: item.class,
                value: [
                  {
                    label: item.name,
                    value: { url: item.url, icon: item.icon, data: item.data },
                  },
                ],
              })
            : components.forEach((component) => {
                component.label === item.class
                  ? component.value.push({
                      label: item.name,
                      value: {
                        url: item.url,
                        icon: item.icon,
                        data: item.data,
                      },
                    })
                  : components.push({
                      label: item.class,
                      value: [
                        {
                          label: item.name,
                          value: {
                            url: item.url,
                            icon: item.icon,
                            data: item.data,
                          },
                        },
                      ],
                    });
              });
        });
        return components;
      } else {
        return [{ label: "default", value: [{ label: "None", value: null }] }];
      }
    }
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? "网络错误" : "token错误";
  }
}
export async function deleteComponents(
  config: any,
  token: string,
  data: { label: string; name: string }
) {
  const formData = new FormData();
  formData.append("app", data.label);
  formData.append("name", data.name);
  try {
    const res = await axios.postForm(
      `${config.API}/delete/component`,
      formData,
      {
        headers: { Authorization: token },
      }
    );
    return res.status === 200 ? true : false;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? "网络错误" : "token错误";
  }
}
