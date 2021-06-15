import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  colors: {
    lightBlue: "rgb(49, 81, 254)",
    black: "#222222"
  }
})

export default theme;