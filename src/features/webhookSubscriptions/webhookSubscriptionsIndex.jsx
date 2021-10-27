import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { WebhookSubscriptions } from "../../api/requests";
import { loadWebhookSubscriptions } from "./webhookSubscriptionsSlice";
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import TableHeader from "../shared/TableHeader";
import TableData from "../shared/TableData";
import ElementName from "../shared/ElementName";
import { formatDate } from "../../utils/formatDate";
import LinkButton from "../shared/LinkButton";
import { WebhookSubscriptionActions } from "./WebhookSubscriptionActions";

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
      <LinkButton text={"+ Webhook"} route={"/webhook-subscriptions/new"} />
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
                  <WebhookSubscriptionActions
                    webhookSubscriptionId={webhook.id}
                  />
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
