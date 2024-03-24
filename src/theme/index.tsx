import { DefaultTheme } from "styled-components";
const lightTheme: DefaultTheme = {
  border: {
    container: "2px solid #d1f0fb",
    card: "2px solid #d1f0fb",
    containerColor: "#d1f0fb",
    cardColor: "#d1f0fb",
  },
  shadow: {
    container: "5px 5px 4px #BBE1FA",
    card: "5px 5px 5px #BBE1FA",
    containerColor: "#BBE1FA",
    cardColor: "#BBE1FA",
  },
  colors: {
    backgroundColor: "#e2fffb",
    container: "#f5fffe",
    card: "#EFFFFD",
    fontColor: "#323232",
  },
};
const darkTheme: DefaultTheme = {
  border: {
    container: "2px solid #D8D8D8",
    card: "2px solid #D8D8D8",
    containerColor: "#D8D8D8",
    cardColor: "#D8D8D8",
  },
  shadow: {
    container: "3px 3px 5px #F0F0F0",
    card: "3px 3px 5px #F0F0F0",
    containerColor: "#F0F0F0",
    cardColor: "#F0F0F0",
  },
  colors: {
    backgroundColor: "#313131",
    container: "#525252",
    card: "#525252",
    fontColor: "#f0f8ff",
  },
};

export { lightTheme, darkTheme };
