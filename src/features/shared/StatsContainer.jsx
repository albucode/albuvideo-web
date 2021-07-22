import React from "react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const StatsContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;
