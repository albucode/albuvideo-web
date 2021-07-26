import theme from "../theme/theme";

const statusToColor = (videoStatus) => {
  switch (videoStatus) {
    default:
      return theme.colors.cyan;
      break;
    case "ready":
      return theme.colors.blue;
      break;
    case "failed":
      return theme.colors.red;
  }
};

export default statusToColor;
