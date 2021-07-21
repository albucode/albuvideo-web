import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { IconTag } from "../shared/IconTag";

export const Stats = ({ title, data, icon, inputColor }) => {
  return (
    <Flex>
      <Box>
        <Title>{title}</Title>
        <Data>{data}</Data>
      </Box>
      <IconTag icon={icon} inputColor={inputColor} />
    </Flex>
  );
};

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.grey1};
  font-weight: 400;
  font-size: 18px;
`;

const Data = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 36px;
`;
