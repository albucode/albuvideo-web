import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { AccessTokens } from "../../api/requests";
import { loadAccessTokens } from "./accessTokenSlice";
import { Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import theme from "../../theme/theme";
import Dots from "../shared/icons/Dots";
import styled from "@emotion/styled";

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
            <THeader>Name</THeader>
            <THeader pr={0}>Created at</THeader>
            <THeader pl={0}>{""}</THeader>
          </Tr>
        </Thead>
        <Tbody>
          {accessTokens.map((token) => (
            <Tr key={token.id}>
              <Td>
                <VideoTitle>{token.name}</VideoTitle>
              </Td>
              <TData pr={0}>{formatDate(token.created_at)}</TData>
              <TData pl={0}>
                <Dots color={theme.colors.grey1} />
              </TData>
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

const THeader = styled(Th)`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey1};
`;

const TData = styled(Td)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
`;

const VideoTitle = styled(Text)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  padding-left: 18px;
`;
