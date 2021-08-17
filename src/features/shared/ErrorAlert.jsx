import React from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Box, Button, Text } from "@chakra-ui/react";
import { hideErrorAlert } from "./errorAlertSlice";
import { Thumbnail } from "./Thumbnail";
import Close from "./icons/Close";
import theme from "../../theme/theme";

const ErrorAlert = ({ message }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideErrorAlert());
  };

  return (
    <Well>
      <Thumbnail icon={<Close />} inputColor={theme.colors.red} />
      <ErrorContainer>
        <ErrorTitle>Error</ErrorTitle>
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorContainer>
      <CloseButton onClick={handleClose}>x</CloseButton>
    </Well>
  );
};

const Well = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  padding: 12px 32px;
  margin-bottom: 30px;
  display: flex;
`;

const CloseButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
`;

const ErrorContainer = styled(Box)`
  padding-left: 16px;
`;

const ErrorTitle = styled(Text)`
  font-weight: 600;
  font-size: 18px;
`;

const ErrorMessage = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.grey1};
`;

export default ErrorAlert;
