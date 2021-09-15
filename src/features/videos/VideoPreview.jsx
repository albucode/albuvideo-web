import React from "react";
import { VideoHeader } from "./VideoHeader";
import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";

export const VideoPreview = () => {
  return (
    <>
      <PageContainer>
        <TopBar sectionName="Video" />
        <VideoHeader />
      </PageContainer>
    </>
  );
};
