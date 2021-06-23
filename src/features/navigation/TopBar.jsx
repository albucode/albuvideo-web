import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  Flex,
  Text,
  IconButton,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

import { SearchBar } from "../shared/SearchBar";
import Bell from "../shared/icons/Bell";
import Gear from "../shared/icons/Gear";

export const TopBar = ({ sectionName }) => {

  const { emailInitial } = useSelector(
    (state) => state.user
  );

  return (
    <Flex>
      <SectionName>{sectionName}</SectionName>
      <SearchBar />
      <ButtonIcon icon={<Bell />} />
      <ButtonIcon icon={<Gear />} />
      <Initial>
        <InitialLabel>{emailInitial}</InitialLabel>
      </Initial>
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

const Initial = styled(Tag)`
  background-color: ${(props) => props.theme.colors.blue};
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
