import React from "react";
import { NavLink } from "react-router-dom";

import Speedometer from "../shared/icons/Speedometer";
import theme from "../../theme/theme";
import  Video  from "../shared/icons/Video";
import Ticket from "../shared/icons/Ticket";
import DoubleCheck from "../shared/icons/DoubleCheck";


export const Menu = () => {
  return (
    <>
      <NavLink
        to="/dashboard"
        style={{
          color: theme.colors.grey1,
          fontWeight: "600",
        }}
        activeStyle={{
          color: theme.colors.blue,
        }}
      >
        <Speedometer/>
        Dashboard
      </NavLink>

      <NavLink
        to="/videos"
        style={{
          color: theme.colors.grey1,
          fontWeight: "600",
        }}
        activeStyle={{
          color: theme.colors.blue,
        }}
      >
        <Video />
        Videos
      </NavLink>
      <NavLink
        to="/access-tokens"
        style={{
          color: theme.colors.grey1,
          fontWeight: "600",
        }}
        activeStyle={{
          color: theme.colors.blue,
        }}
      >
        <Ticket />
        Access tokens
      </NavLink>
      <NavLink
        to="/signature-keys"
        style={{
          color: theme.colors.grey1,
          fontWeight: "600",
        }}
        activeStyle={{
          color: theme.colors.blue,
        }}
      >
        <DoubleCheck />
        Signature keys
      </NavLink>
    </>
  );
};

