import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Table,
  Tfoot,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Text,
  Flex,
} from "@chakra-ui/react";

import theme from "../../../src/theme/theme";
import { TopBar } from "../navigation/TopBar";
import Play from "../shared/icons/Play";
import { Thumbnail } from "../shared/Thumbnail";

export const VideosIndex = () => {
  return (
    <Box margin="0 auto" paddingTop="50px">
      <TopBar sectionName="Videos" />
      <Table
        variant="striped"
        colorScheme="table"
        backgroundColor="white"
        marginRight="0px"
        borderRadius="12px"
      >
        <Thead>
          <Tr>
            <THeader>Title</THeader>
            <THeader>Status</THeader>
            <THeader>Created at</THeader>
            <THeader>Duration</THeader>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex>
                <Thumbnail icon={<Play />} inputColor={theme.colors.magenta} />
                <Text>Video title 1</Text>
              </Flex>
            </Td>
            <Td>Processing</Td>
            <Td>December 27th, 2021 04:56 AM</Td>
            <Td>6:10</Td>
          </Tr>
          <Tr>
            <Td>Video title 1</Td>
            <Td>Processing</Td>
            <Td>December 27th, 2021 04:56 AM</Td>
            <Td>6:10</Td>
          </Tr>
          <Tr>
            <Td>Video title 1</Td>
            <Td>Processing</Td>
            <Td>December 27th, 2021 04:56 AM</Td>
            <Td>6:10</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
};

const THeader = styled(Th)`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey1};
`;
