import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  colors: {
    table: {
      100: "#F3F2F7",
    },
    lightBlue: "rgb(49, 81, 254)",
    black: "#222222",
    blue: "#3246D2",
    grey1: "#98A1B0",
    grey2: "#F3F2F7",
    grey6: "#EDF1F5",
    grey7: "#E5E5E5",
    grey8: "#A5A5A5",
    cyan: "#00CFFD",
    red: "#F01010",
    pageBackground: "#F6F9FE",
  },
});

export default theme;
