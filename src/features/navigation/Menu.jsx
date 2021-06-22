import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import Speedometer from "../shared/icons/Speedometer";
import  Video  from "../shared/icons/Video";
import Ticket from "../shared/icons/Ticket";
import DoubleCheck from "../shared/icons/DoubleCheck";

export const Menu = () => {
  return (
    <>
      <Link
        to="/dashboard"
      >
        <Speedometer/>
        Dashboard
      </Link>

      <Link
        to="/videos"
      >
        <Video />
        Videos
      </Link>
      <Link
        to="/access-tokens"
      >
        <Ticket />
        Access tokens
      </Link>
      <Link
        to="/signature-keys"
      >
        <DoubleCheck />
        Signature keys
      </Link>
    </>
  );
};

const Link = styled(NavLink)`
  color: ${props => props.theme.colors.grey1};
   font-weight: 600;
  &.active {
   color:  ${props => props.theme.colors.blue};
  }
`;
