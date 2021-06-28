import React from "react";
import { Box } from "@chakra-ui/react";

export const PageContainer = ({ children }) => {
  return (
    <Box margin="0 auto" paddingTop="50px">
      {children}
    </Box>
  );
};
