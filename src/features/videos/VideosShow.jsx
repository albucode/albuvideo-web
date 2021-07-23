import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Text, Tag, Center } from "@chakra-ui/react";

import theme from "../../../src/theme/theme";
import { Video } from "../../api/requests";
import { loadSelectedVideo } from "./videoSlice";
import { PageContainer } from "../shared/PageContainer";
import { StatsContainer } from "../shared/StatsContainer";
import { Stats } from "../dashboard/Stats";
import Users from "../shared/icons/Users";
import Calendar from "../shared/icons/Calendar";
import Play from "../shared/icons/Play";
import { TopBar } from "../navigation/TopBar";
import statusToColor from "../../utils/statusToColor";
import formatStatus from "../../utils/formatStatus";
import Dots from "../shared/icons/Dots";

export const VideosShow = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();

  const { selectedVideo } = useSelector((state) => state.video);

  const fetchVideo = async () => {
    const response = await Video.show(videoId);
    dispatch(loadSelectedVideo(response));
  };

  useEffect(() => {
    fetchVideo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageContainer>
      <TopBar sectionName="Video" />
      <Well>
        <VideoTitle>{selectedVideo.title}</VideoTitle>
        <Center marginLeft="auto">
          <StatusTag backgroundColor={statusToColor(selectedVideo.status)}>
            {selectedVideo.status && formatStatus(selectedVideo.status)}
          </StatusTag>
          <Dots color={theme.colors.grey1} />
        </Center>
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
  max-height: 105px;
`;

const VideoTitle = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 24px;
`;

const StatusTag = styled(Tag)`
  color: white;
  margin-right: 32px;
  height: 52px;
  font-weight: 600;
  font-size: 18px;
`;
