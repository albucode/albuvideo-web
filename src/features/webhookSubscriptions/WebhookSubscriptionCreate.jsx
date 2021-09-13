import React from "react";
import { useSelector } from "react-redux";

import { TopBar } from "../navigation/TopBar";
import { PageContainer } from "../shared/PageContainer";
import ErrorAlert from "../shared/ErrorAlert";
import { StatsContainer } from "../shared/StatsContainer";
import NewWebhookSubscriptionForm from "./NewWebhookSubscriptionForm";

const WebhookSubscriptionCreate = () => {
  const { errorMessage, displayErrorMessage } = useSelector(
    (state) => state.errorAlert
  );

  return (
    <PageContainer>
      <TopBar sectionName="New Webhook" />
      {displayErrorMessage && <ErrorAlert message={errorMessage} />}
      <StatsContainer>
        <NewWebhookSubscriptionForm />
      </StatsContainer>
    </PageContainer>
  );
};

export default WebhookSubscriptionCreate;
