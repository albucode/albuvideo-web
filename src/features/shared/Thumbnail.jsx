import React from "react";
import styled from "@emotion/styled";
import { Tag } from "@chakra-ui/react";

export const Thumbnail = ({ icon, inputColor }) => {
  const Square = styled(Tag)`
    background-color: ${inputColor};
    height: 54px;
    width: 54px;
    color: white;
    display: flex;
    justify-content: center;
  `;

  return <Square>{icon}</Square>;
};
