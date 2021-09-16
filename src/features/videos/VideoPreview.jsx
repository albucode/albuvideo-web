import React, { useEffect, useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import { VideoHeader } from "./VideoHeader";
import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { StatsContainer } from "../shared/StatsContainer";
import { Video } from "../../api/requests";
import { useParams } from "react-router-dom";

export const VideoPreview = () => {
  const [video, setVideo] = useState({});
  const { videoId } = useParams();

  const fetchVideo = async () => {
    const response = await Video.show(videoId);
    setVideo(response.video);
  };

  useEffect(() => {
    fetchVideo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {video && (
        <PageContainer>
          <TopBar sectionName="Video" />
          <VideoHeader
            title={video.title}
            playlistUrl={video.playlist_url}
            status={video.status}
          />
          <StatsContainer>
            <ReactHlsPlayer
              src={video.playlist_url}
              autoPlay={false}
              controls={true}
              width="100%"
              height="auto"
            />
          </StatsContainer>
        </PageContainer>
      )}
    </>
  );
};
