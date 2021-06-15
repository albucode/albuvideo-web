import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  colors: {
    lightBlue: "rgb(49, 81, 254)",
    black: "#222222",
    blue: "#3246D2",
  }
})

export default theme;