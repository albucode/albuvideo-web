import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";
import { VideoHeader } from "./VideoHeader";
import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { Video } from "../../api/requests";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import theme from "../../theme/theme";
import { Button, Box } from "@chakra-ui/react";

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
          <Container>
            <Link to={`/videos/${videoId}`}>
              <BackButton>Back to video</BackButton>
            </Link>
            <ReactHlsPlayer
              src={video.playlist_url}
              autoPlay={false}
              controls={true}
              width="100%"
              height="auto"
            />
          </Container>
        </PageContainer>
      )}
    </>
  );
};

const BackButton = styled(Button)`
  background-color: ${theme.colors.cyan};
  margin-bottom: 16px;
  color: white;
  width: 150px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
`;

const Container = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
