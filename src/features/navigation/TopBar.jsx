import React from "react";
import styled from "@emotion/styled";
import { Flex, Text } from "@chakra-ui/react";
import { SearchBar } from "../shared/SearchBar";

export const TopBar = ({ sectionName }) => {
  return (
    <Flex>
      <SectionName>{sectionName}</SectionName>
      <SearchBar />
    </Flex>
  );
};

const SectionName = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  width: 345px;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
`;
