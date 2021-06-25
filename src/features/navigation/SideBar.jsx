import React from "react";
import styled from "@emotion/styled";
import { Box, Center } from "@chakra-ui/react";

import { Menu } from "./Menu";
import { Logo } from "../shared/Logo";

export const SideBar = () => {
  return (
    <Container>
      <Center>
        <Logo />
      </Center>

      <Menu />
    </Container>
  );
};

const Container = styled(Box)`
  background-color: ${(props) => props.theme.colors.grey6};
  width: 345px;
  padding-top: 50px;
`;
