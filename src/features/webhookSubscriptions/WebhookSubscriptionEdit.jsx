import React from "react";
import { useSelector } from "react-redux";

import { TopBar } from "../navigation/TopBar";
import { PageContainer } from "../shared/PageContainer";
import ErrorAlert from "../shared/ErrorAlert";
import { StatsContainer } from "../shared/StatsContainer";
import WebhookSubscriptionEditForm from "./WebhookSubscriptionEditForm";

const WebhookSubscriptionEdit = () => {
  const { errorMessage, displayErrorMessage } = useSelector(
    (state) => state.errorAlert
  );

  return (
    <PageContainer>
      <TopBar sectionName="Update webhook" />
      {displayErrorMessage && <ErrorAlert message={errorMessage} />}
      <StatsContainer>
        <WebhookSubscriptionEditForm />
      </StatsContainer>
    </PageContainer>
  );
};

export default WebhookSubscriptionEdit;
