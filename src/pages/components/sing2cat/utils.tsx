import axios from "axios";
import { url } from "inspector";
import { cloneDeep } from "lodash";
export function WeekDay(num: string) {
  switch (num) {
    case "0":
      return "日";
    case "1":
      return "一";
    case "2":
      return "二";
    case "3":
      return "三";
    case "4":
      return "四";
    case "5":
      return "五";
    case "6":
      return "六";
    default:
      break;
  }
  return "";
}
export function IntervalTip(
  week: string | null,
  hour: string | null,
  minute: string | null
) {
  if (week || hour || minute) {
    return week
      ? {
          content: `设置每周${WeekDay(week)}${hour ? hour : 4}:${
            minute ? minute : "30"
          }更新节点信息`,
          week: week,
          hour: hour ? hour : "4",
          minute: minute ? minute : "30",
        }
      : {
          content: `设置每天${hour ? hour : 4}:${
            minute ? minute : 30
          }更新节点信息`,
          week: week,
          hour: hour ? hour : "4",
          minute: minute ? minute : "30",
        };
  } else {
    return {
      content: "是否清除定时更新任务",
      week: null,
      hour: null,
      minute: null,
    };
  }
}
export async function EditInterval(
  week: string | null,
  hour: string | null,
  minute: string | null,
  api: string,
  token: string
) {
  const formdata = new FormData();
  !week && !hour && !minute && formdata.append("time", "none");
  minute ? formdata.append("time", minute) : formdata.append("time", "30");
  hour ? formdata.append("time", hour) : formdata.append("time", "4");
  week && formdata.append("time", week);
  try {
    const res = await axios.postForm(`${api}/sing2cat/interval`, formdata, {
      headers: { Authorization: token },
    });
    return res.status === 200 ? true : false;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? "网络错误" : "更新失败";
  }
}
export async function RenewConfig(
  api: string,
  token: string,
  links: Array<string>,
  sets: Array<{
    label: string;
    value: { type: string; china: boolean; path: string };
  }> | null
) {
  try {
    const res = await axios({
      method: "post",
      url: `${api}/sing2cat/config`,
      headers: { Authorization: token },
      data: { url: links, rule_set: sets },
    });
    return res.status === 200 ? true : false;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? "网络错误" : error;
  }
}
export async function FetchProxies(url: string, token: string) {
  try {
    const res = await axios.get(`${url}/proxies`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.status === 200
      ? { status: true, data: res.data.proxies }
      : { status: false };
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? "网络错误" : "获取节点失败";
  }
}
export async function RenewDelay(
  group: boolean,
  name: string,
  url: string,
  secret: string,
  proxies: any
) {
  try {
    const res = group
      ? await axios({
          url: `${url}/group/${encodeURI(name)}/delay`,
          params: {
            timeout: 5000,
            url: "https://www.gstatic.com?generate_204",
          },
          method: "get",
          headers: { Authorization: `Bearer ${secret}` },
        })
      : await axios({
          url: `${url}/proxies/${encodeURI(name)}/delay`,
          params: {
            timeout: 5000,
            url: "https://www.gstatic.com?generate_204",
          },
          method: "get",
          headers: { Authorization: `Bearer ${secret}` },
        });
    const newProxies = cloneDeep(proxies);
    group && res.status === 200
      ? Object.keys(res.data).forEach((proxy) => {
          newProxies[proxy].history = [{ delay: res.data[proxy] }];
        })
      : (newProxies[name].history = [{ delay: res.data.delay }]);
    return newProxies;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? "网络错误" : error;
  }
}
export async function ChangeProxy(
  group: string,
  name: string,
  url: string,
  secret: string,
  proxies: any
) {
  try {
    const res = await axios({
      url: `${url}/proxies/${encodeURI(group)}`,
      headers: { Authorization: `Bearer ${secret}` },
      data: { name: name },
      method: "put",
    });
    const newProxies = cloneDeep(proxies);
    res.status === 204
      ? (newProxies[group].now = name)
      : (newProxies[group].now = newProxies[group].now);
    return newProxies;
  } catch (error: any) {
    throw error.code === "ERR_NETWORK" ? "网络错误" : error;
  }
}
