import React from "react";
import { useSelector } from "react-redux";

import { TopBar } from "../navigation/TopBar";
import { PageContainer } from "../shared/PageContainer";
import ErrorAlert from "../shared/ErrorAlert";
import { StatsContainer } from "../shared/StatsContainer";
import VideoEditForm from "./VideoEditForm";

const VideoEdit = () => {
  const { errorMessage, displayErrorMessage } = useSelector(
    (state) => state.errorAlert
  );

  return (
    <PageContainer>
      <TopBar sectionName="Update video" />
      {displayErrorMessage && <ErrorAlert message={errorMessage} />}
      <StatsContainer>
        <VideoEditForm />
      </StatsContainer>
    </PageContainer>
  );
};

export default VideoEdit;
