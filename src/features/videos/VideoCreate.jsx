import React from "react";
import { useSelector } from "react-redux";

import { TopBar } from "../navigation/TopBar";
import { PageContainer } from "../shared/PageContainer";
import ErrorAlert from "../shared/ErrorAlert";
import { StatsContainer } from "../shared/StatsContainer";
import NewVideoForm from "./NewVideoForm";

const VideoCreate = () => {
  const { errorMessage, displayErrorMessage } = useSelector(
    (state) => state.errorAlert
  );

  return (
    <PageContainer>
      <TopBar sectionName="New video" />
      {displayErrorMessage && <ErrorAlert message={errorMessage} />}
      <StatsContainer>
        <NewVideoForm />
      </StatsContainer>
    </PageContainer>
  );
};

export default VideoCreate;
