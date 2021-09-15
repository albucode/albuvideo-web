import React from "react";
import ReactHlsPlayer from "react-hls-player";
import { VideoHeader } from "./VideoHeader";
import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { StatsContainer } from "../shared/StatsContainer";

export const VideoPreview = () => {
  return (
    <>
      <PageContainer>
        <TopBar sectionName="Video" />
        <VideoHeader />
        <StatsContainer>
          <ReactHlsPlayer
            src="http://localhost:8000/videos/buqSlPHmvd.m3u8"
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
          />
        </StatsContainer>
      </PageContainer>
    </>
  );
};
