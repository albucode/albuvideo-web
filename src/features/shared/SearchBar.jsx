import React from "react";
import { Input, InputGroup, InputLeftElement, Center } from "@chakra-ui/react";
import Magnifier from "../shared/icons/Magnifier";

export const SearchBar = () => {
  return (
    <Center marginRight="40px">
      <InputGroup borderColor="white">
        <InputLeftElement
          pr="16px"
          pl="16px"
          pointerEvents="none"
          children={<Magnifier />}
          height="60px"
        />

        <Input
          type="text"
          placeholder="Search here..."
          backgroundColor="white"
          minWidth="350px"
          height="60px"
          fontSize="18px"
        />
      </InputGroup>
    </Center>
  );
};
