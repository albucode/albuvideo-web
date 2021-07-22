import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Box, Text, Tag } from "@chakra-ui/react";

import theme from "../../../src/theme/theme";
import { Video } from "../../api/requests";
import { loadSelectedVideo } from "../videos/videoSlice";
import { PageContainer } from "../shared/PageContainer";
import { StatsContainer } from "../shared/StatsContainer";
import { Stats } from "../dashboard/Stats";
import Users from "../shared/icons/Users";
import Calendar from "../shared/icons/Calendar";
import Play from "../shared/icons/Play";
import { TopBar } from "../navigation/TopBar";

export const VideosShow = () => {
  const dispatch = useDispatch();

  const { selectedVideoId, selectedVideo } = useSelector(
    (state) => state.video
  );

  const fetchVideo = async () => {
    const response = await Video.show(selectedVideoId);
    dispatch(loadSelectedVideo(response));
  };

  useEffect(() => {
    fetchVideo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const tagColor = (videoStatus) => {
    switch (videoStatus) {
      default:
        return theme.colors.cyan;
        break;
      case "ready":
        return theme.colors.blue;
        break;
      case "failed":
        return theme.colors.red;
    }
  };

  return (
    <PageContainer>
      <TopBar sectionName="Video" />
      <Well>
        <VideoTitle>{selectedVideo.title}</VideoTitle>
        <Tag backgroundColor={tagColor(selectedVideo.status)} color="white">
          {selectedVideo.status}
        </Tag>
      </Well>
      <StatsContainer>
        <Stats
          title={"Total streamed"}
          data={"23h 43"}
          icon={<Users />}
          inputColor={theme.colors.cyan}
        />
        <Stats
          title={"Streamed last 24h"}
          data={"13h 02"}
          icon={<Calendar />}
          inputColor={theme.colors.magenta}
        />
        <Stats
          title={"Times watched"}
          data={"234,506"}
          icon={<Play />}
          inputColor={theme.colors.blue}
        />
      </StatsContainer>
    </PageContainer>
  );
};

const Well = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 30px;
  display: flex;
`;

const VideoTitle = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 24px;
`;
