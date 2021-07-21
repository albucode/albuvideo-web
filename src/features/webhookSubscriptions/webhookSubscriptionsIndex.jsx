import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { WebhookSubscriptions } from "../../api/requests";
import { loadWebhookSubscriptions } from "./webhookSubscriptionsSlice";
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import theme from "../../theme/theme";
import Dots from "../shared/icons/Dots";
import TableHeader from "../shared/TableHeader";
import TableData from "../shared/TableData";
import ElementName from "../shared/ElementName";
import formatDate from "../../utils/formatDate";

export const WebhookSubscriptionsIndex = () => {
  const dispatch = useDispatch();

  const fetchWebhookSubscriptions = async () => {
    const response = await WebhookSubscriptions.index();
    dispatch(loadWebhookSubscriptions(response));
  };

  const { webhookSubscriptions } = useSelector(
    (state) => state.webhookSubscription
  );

  useEffect(() => {
    fetchWebhookSubscriptions();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageContainer>
      <TopBar sectionName="Webhooks" />
      <Table
        variant="striped"
        colorScheme="table"
        backgroundColor="white"
        marginRight="0"
        borderRadius="12px"
      >
        <Thead>
          <Tr>
            <TableHeader>Topic</TableHeader>
            <TableHeader>URL</TableHeader>
            <TableHeader pr={0}>Last used at</TableHeader>
            <TableHeader pl={0}>{""}</TableHeader>
          </Tr>
        </Thead>
        <Tbody>
          {webhookSubscriptions &&
            webhookSubscriptions.map((webhook) => (
              <Tr key={webhook.id}>
                <Td>
                  <ElementName>{webhook.topic}</ElementName>
                </Td>
                <TableData>{webhook.url}</TableData>
                <TableData pr={0}>{formatDate(webhook.created_at)}</TableData>
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
