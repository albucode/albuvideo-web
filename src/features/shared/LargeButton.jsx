import React from "react"
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";
import Add from "./icons/Add";

const LargeButton = ({ text, route }) => {
  return(
    <Link to={route}>
      <StyledButton><Add/>{text}</StyledButton>
    </Link>
  )
}


const StyledButton = styled(Button)`
  background-color: blue;
  color: white;
  width: 100%;
  margin-top: 24px;
`;

export default LargeButton;
