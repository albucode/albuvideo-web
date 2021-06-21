import React from "react";
import Speedometer from "../shared/icons/Speedometer";
import Video from "../shared/icons/Video";
import Ticket from "../shared/icons/Ticket";
import theme from "../../theme/theme";
import DoubleCheck from "../shared/icons/DoubleCheck";

export const SideBar = () => {
  return (
    <>
      <Speedometer color={theme.colors.grey1} />
      <Video color={theme.colors.grey1} />
      <Ticket color={theme.colors.grey1} />
      <DoubleCheck color={theme.colors.grey1} />
    </>
  );
};
