import React from "react";
import { useDispatch } from "react-redux";
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
      <CloseButton
        onClick={handleClose}
        position="absolute"
        right="8px"
        top="8px"
      />
    </Alert>
  );
};

export default ErrorAlert;
