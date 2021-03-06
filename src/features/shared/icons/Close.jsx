import React from "react";
import { Icon } from "@chakra-ui/react";

const Close = (props) => {
  return (
    <Icon viewBox="0 0 48 48" {...props} width="27px" height="27px">
      <path
        d="M24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 13 35 4 24 4ZM31.4 28.6C32.2 29.4 32.2 30.6 31.4 31.4C30.6 32.2 29.4 32.2 28.6 31.4L24 26.8L19.4 31.4C18.6 32.2 17.4 32.2 16.6 31.4C15.8 30.6 15.8 29.4 16.6 28.6L21.2 24L16.6 19.4C15.8 18.6 15.8 17.4 16.6 16.6C17.4 15.8 18.6 15.8 19.4 16.6L24 21.2L28.6 16.6C29.4 15.8 30.6 15.8 31.4 16.6C32.2 17.4 32.2 18.6 31.4 19.4L26.8 24L31.4 28.6Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Close;
