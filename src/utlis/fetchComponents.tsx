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
