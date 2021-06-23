import React from "react";
import styled from "@emotion/styled";
import { Flex, Text, IconButton } from "@chakra-ui/react";

import { SearchBar } from "../shared/SearchBar";
import Bell from "../shared/icons/Bell";
import Gear from "../shared/icons/Gear";

export const TopBar = ({ sectionName }) => {
  return (
    <Flex>
      <SectionName>{sectionName}</SectionName>
      <SearchBar />
      <ButtonIcon icon={<Bell />} />
      <ButtonIcon icon={<Gear />} />
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

const ButtonIcon = styled(IconButton)`
  color: ${(props) => props.theme.colors.grey1};
  height: 60px;
  width: 60px;
  background-color: white;
`;
