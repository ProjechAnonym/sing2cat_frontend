import axios from "axios";
import { Notification } from "@douyinfe/semi-ui";
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
