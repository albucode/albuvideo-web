import React from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Alert, AlertDescription, CloseButton } from "@chakra-ui/react";
import { hideErrorAlert } from "./errorAlertSlice";

const ErrorAlert = ({ message }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideErrorAlert());
  };

  return (
    <Alert status="error">
      <AlertDescription>{message}</AlertDescription>
      <Button onClick={handleClose} />
    </Alert>
  );
};

const Button = styled(CloseButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export default ErrorAlert;
