import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Flex, Text, IconButton, Tag, TagLabel } from "@chakra-ui/react";

import { SearchBar } from "../shared/SearchBar";
import Bell from "../shared/icons/Bell";
import Gear from "../shared/icons/Gear";
import theme from "../../theme/theme";

export const TopBar = ({ sectionName }) => {
  const { emailInitial } = useSelector((state) => state.user);

  return (
    <Flex marginBottom="40px">
      <SectionName data-testid="section-name">{sectionName}</SectionName>
      <SearchBar />
      <ButtonIcon icon={<Bell />} />
      <ButtonIcon icon={<Gear />} />
      <Initial marginLeft="10px">
        <InitialLabel>{emailInitial}</InitialLabel>
      </Initial>
    </Flex>
  );
};

const SectionName = styled(Text)`
  color: ${theme.colors.black};
  width: 345px;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
`;

const ButtonIcon = styled(IconButton)`
  color: ${theme.colors.grey1};
  height: 60px;
  width: 60px;
  background-color: white;
  margin-right: 10px;
  margin-left: 10px;
`;

const Initial = styled(Tag)`
  background-color: ${theme.colors.blue};
  height: 60px;
  width: 60px;
  color: white;
`;

const InitialLabel = styled(TagLabel)`
  margin: auto;
  font-weight: 400;
  font-size: 24px;
  color: white;
`;
