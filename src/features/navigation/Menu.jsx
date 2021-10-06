import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

import Speedometer from "../shared/icons/Speedometer";
import Video from "../shared/icons/Video";
import Ticket from "../shared/icons/Ticket";
import DoubleCheck from "../shared/icons/DoubleCheck";
import Web from "../shared/icons/Web";
import DollarSign from "../shared/icons/DollarSign";

export const Menu = () => {
  return (
    <MenuContainer>
      <Link to="/dashboard">
        <Speedometer marginRight={"24px"} />
        Dashboard
      </Link>
      <Link to="/videos">
        <Video marginRight={"24px"} />
        Videos
      </Link>
      <Link to="/access-tokens">
        <Ticket marginRight={"24px"} />
        Access tokens
      </Link>
      <Link to="/signature-keys">
        <DoubleCheck marginRight={"24px"} />
        Signature keys
      </Link>
      <Link to="/webhook-subscriptions">
        <Web marginRight={"24px"} />
        Webhooks
      </Link>
      <Link to="/invoices">
        <DollarSign marginRight={"24px"} />
        Invoices
      </Link>
    </MenuContainer>
  );
};

const MenuContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 36px;
`;

const Link = styled(NavLink)`
  color: ${(props) => props.theme.colors.grey1};
  font-weight: 600;
  font-size: 18px;
  padding: 16px 24px;
  max-width: 325px;
  &.active {
    color: ${(props) => props.theme.colors.blue};
    border-right: 5px solid ${(props) => props.theme.colors.blue};
  }
`;
