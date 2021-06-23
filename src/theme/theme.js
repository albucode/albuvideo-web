import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  colors: {
    lightBlue: "rgb(49, 81, 254)",
    black: "#222222",
    blue: "#3246D2",
    grey1: "#98A1B0",
    grey6: "#EDF1F5",
    grey7: "#E5E5E5",
  },
});

export default theme;
