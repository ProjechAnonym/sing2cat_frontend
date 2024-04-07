import { DefaultTheme } from "styled-components";
const lightTheme: DefaultTheme = {
  border: {
    container: "2px solid #d1f0fb",
    card: "2px solid #d1f0fb",
    containerColor: "#d1f0fb",
    cardColor: "#d1f0fb",
  },
  shadow: {
    container: "5px 5px 4px #90a8ff",
    card: "5px 5px 5px #BBE1FA",
    containerColor: "#cdf1ff",
    cardColor: "#BBE1FA",
  },
  colors: {
    backgroundColor: "#e2fffb",
    container: "#d3f2fd",
    card: "#cffdff",
    fontColor: "#323232",
  },
};
const darkTheme: DefaultTheme = {
  border: {
    container: "2px solid #D8D8D8",
    card: "2px solid #a0a0a0",
    containerColor: "#D8D8D8",
    cardColor: "#a0a0a0",
  },
  shadow: {
    container: "3px 3px 5px #F0F0F0",
    card: "3px 3px 5px #F0F0F0",
    containerColor: "#F0F0F0",
    cardColor: "#F0F0F0",
  },
  colors: {
    backgroundColor: "#303030",
    container: "#404040",
    card: "#505050",
    fontColor: "#f0f8ff",
  },
};

export { lightTheme, darkTheme };
