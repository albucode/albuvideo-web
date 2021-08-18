import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Box, Button, Center, Spacer } from "@chakra-ui/react";

import { Menu } from "./Menu";
import { Logo } from "../shared/Logo";
import { Session } from "../../api/requests";
import { logOutUser } from "../authentication/userSlice";

export const SideBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    Session.delete().then(() => {
      dispatch(logOutUser());
      history.push("/login");
    });
  };

  return (
    <Container>
      <Center>
        <Logo />
      </Center>
      <Menu />
      <Spacer />
      <LogOutButton onClick={logOut}>Log out</LogOutButton>
    </Container>
  );
};

const Container = styled(Box)`
  background-color: ${(props) => props.theme.colors.grey6};
  width: 345px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const LogOutButton = styled(Button)`
  color: white;
  padding: 9px 19px;
  width: 130px;
  height: 60px;
  background: ${(props) => props.theme.colors.red};
  border-radius: 12px;
  align-self: center;
  margin-bottom: 16px;
`;
