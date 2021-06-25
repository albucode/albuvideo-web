import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

import theme from "../../theme/theme";

export const Logo = () => {
  return (
    <Flex>
      <BaseLogo color={theme.colors.black}>Albu</BaseLogo>
      <BaseLogo color={theme.colors.blue}>video.</BaseLogo>
    </Flex>
  );
};

const BaseLogo = styled(Text)`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
`;
