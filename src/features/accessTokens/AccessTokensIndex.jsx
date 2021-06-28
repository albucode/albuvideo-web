import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { AccessTokens } from "../../api/requests";
import { loadAccessTokens } from "./accessTokenSlice";
import { Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import theme from "../../theme/theme";
import Dots from "../shared/icons/Dots";
import TableHeader from "../shared/TableHeader";
import TableData from "../shared/TableData";
import ElementName from "../shared/ElementName";

export const AccessTokensIndex = () => {
  const dispatch = useDispatch();

  const fetchAccessTokens = async () => {
    const response = await AccessTokens.index();
    dispatch(loadAccessTokens(response));
  };

  const { accessTokens } = useSelector((state) => state.accessToken);

  useEffect(() => {
    fetchAccessTokens();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (
      date.getMonth() +
      "/" +
      date.getDay() +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      "h" +
      date.getMinutes()
    );
  };

  return (
    <PageContainer>
      <TopBar sectionName="Access Tokens" />
      <Table
        variant="striped"
        colorScheme="table"
        backgroundColor="white"
        marginRight="0px"
        borderRadius="12px"
      >
        <Thead>
          <Tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Created at</TableHeader>
            <TableHeader pr={0}>Last used at</TableHeader>
            <TableHeader pl={0}>{""}</TableHeader>
          </Tr>
        </Thead>
        <Tbody>
          {accessTokens.map((token) => (
            <Tr key={token.id}>
              <Td>
                <ElementName>{token.name}</ElementName>
              </Td>
              <TableData>{formatDate(token.created_at)}</TableData>
              <TableData pr={0}>{formatDate(token.created_at)}</TableData>
              <TableData pl={0}>
                <Dots color={theme.colors.grey1} />
              </TableData>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </PageContainer>
  );
};
