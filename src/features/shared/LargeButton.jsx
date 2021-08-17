import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

import theme from "../../theme/theme";

const LargeButton = ({ text, route }) => {
  return (
    <Link to={route}>
      <StyledButton>{text}</StyledButton>
    </Link>
  );
};

const StyledButton = styled(Button)`
  background-color: ${theme.colors.blue};
  color: white;
  width: 140px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
  left: 85.5%;
  margin-top: -8px;
  margin-bottom: 32px;
`;

export default LargeButton;
