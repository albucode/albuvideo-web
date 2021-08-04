import theme from "../theme/theme";

const statusToColor = (videoStatus) => {
  switch (videoStatus) {
    default:
      return theme.colors.cyan;
    case "ready":
      return theme.colors.blue;
    case "failed":
      return theme.colors.red;
  }
};

export default statusToColor;
