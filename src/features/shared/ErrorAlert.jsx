import React from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Box, Button, Text } from "@chakra-ui/react";
import { hideErrorAlert } from "./errorAlertSlice";

const ErrorAlert = ({ message }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideErrorAlert());
  };

  return (
    <Well>
      <Box>
        <Text>Error</Text>
        <Text>{message}</Text>
      </Box>
      <CloseButton onClick={handleClose}>x</CloseButton>
    </Well>
  );
};

const Well = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 30px;
  display: flex;
`;

const CloseButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
`;

export default ErrorAlert;
