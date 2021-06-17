import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../../theme/theme";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import { Session } from "../../api/requests";
import { loadUser } from "./userSlice";
import { displayErrorAlert, loadErrorMessage } from "../shared/errorAlertSlice";
import ErrorAlert from "../shared/ErrorAlert";

export const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { errorMessage, displayErrorMessage } = useSelector(
    (state) => state.errorAlert
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const createSession = (event) => {
    event.preventDefault();

    const requestBody = {
      user: {
        email,
        password,
      },
    };

    Session.create(requestBody).then((response) => {
      if (!response.error) {
        dispatch(loadUser(response));
        history.push("/dashboard");
      } else {
        dispatch(loadErrorMessage(response.error));
        dispatch(displayErrorAlert(true));
      }
    });
  };

  return (
    <PageBackground>
      <ImageContainer>
        <Center height="100vh">
          <Image src="computer-work.png" />
        </Center>
      </ImageContainer>
      <FormBackground>
        <FormContainer>
          <Header>Login To Your Account</Header>
          <form onSubmit={createSession}>
            <FormItem>
              <Label>Email address</Label>
              <Input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormItem>
            <FormItem>
              <Label>Password</Label>
              <Input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormItem>
            {displayErrorMessage && <ErrorAlert message={errorMessage} />}
            <LogInButton type="submit">Log In</LogInButton>
          </form>
        </FormContainer>
      </FormBackground>
    </PageBackground>
  );
};

const PageBackground = styled(Box)`
  background-color: ${theme.colors.lightBlue};
  height: 100vh;
  display: flex;
`;

const FormBackground = styled(Box)`
  background-color: white;
  border-radius: 12px;
  width: 30%;
  height: 90%;
  margin-top: 32px;
  margin-right: 56px;
`;

const FormContainer = styled(Box)`
  padding-top: 25%;
  padding-right: 20%;
  padding-left: 20%;
`;

const Header = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  padding-bottom: 48px;
`;

const Label = styled(FormLabel)`
  color: ${theme.colors.black};
  font-size: 18px;
`;

const FormItem = styled(FormControl)`
  padding-bottom: 24px;
`;

const ImageContainer = styled(Box)`
  width: 70%;
`;

const LogInButton = styled(Button)`
  background-color: blue;
  color: white;
  width: 100%;
  margin-top: 24px;
`;
