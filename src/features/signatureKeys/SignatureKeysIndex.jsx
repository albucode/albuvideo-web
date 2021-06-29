import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { SignatureKeys } from "../../api/requests";
import { loadSignatureKeys } from "./signatureKeysSlice";
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import theme from "../../theme/theme";
import Dots from "../shared/icons/Dots";
import TableHeader from "../shared/TableHeader";
import TableData from "../shared/TableData";
import ElementName from "../shared/ElementName";
import formatDate from "../../utils/formatDate";

export const SignatureKeysIndex = () => {
  const dispatch = useDispatch();

  const fetchSignatureKeys = async () => {
    const response = await SignatureKeys.index();
    dispatch(loadSignatureKeys(response));
  };

  const { signatureKeys } = useSelector((state) => state.signatureKey);

  useEffect(() => {
    fetchSignatureKeys();
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageContainer>
      <TopBar sectionName="SignatureKeys" />
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
          {signatureKeys.map((key) => (
            <Tr key={key.id}>
              <Td>
                <ElementName>{key.name}</ElementName>
              </Td>
              <TableData>{formatDate(key.created_at)}</TableData>
              <TableData pr={0}>{formatDate(key.created_at)}</TableData>
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
