import React from "react";
import styled from "@emotion/styled";
import { Tag } from "@chakra-ui/react";

export const IconTag = ({ icon, inputColor }) => {
  const Square = styled(Tag)`
    background-color: ${inputColor};
    height: 80px;
    width: 80px;
    color: white;
    display: flex;
    justify-content: center;
    margin-left: 18px;
  `;

  return <Square>{icon}</Square>;
};
