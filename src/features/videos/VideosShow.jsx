import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Box,
  Text,
  Tag,
  Center,
  Link,
  useClipboard,
  Button,
  Select,
  Flex,
} from "@chakra-ui/react";

import theme from "../../../src/theme/theme";
import { Video, VideoStats } from "../../api/requests";
import { loadSelectedVideo, loadVideoStats } from "./videoSlice";
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
import formatToHours from "../../utils/formatToHours";
import { TimeStreamedChart } from "./TimeStreamedChart";

export const VideosShow = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { selectedVideo } = useSelector((state) => state.video);
  const [value, setValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(value);

  const [chartOption, setChartOption] = useState("");

  const fetchVideo = async () => {
    const response = await Video.show(videoId);
    dispatch(loadSelectedVideo(response));
    const video_stats_response = await VideoStats.show(
      videoId,
      "1 hour",
      "24 hours"
    );
    dispatch(loadVideoStats(video_stats_response));
  };

  useEffect(() => {
    fetchVideo();
    setValue(selectedVideo.playlist_url);
  }, [selectedVideo.playlist_url]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    setChartOption(e.target.value);
  };

  const displayChart = () => {
    switch (chartOption) {
      case "timesStreamed":
        return <TimeStreamedChart />;
      case "albukao":
        return <p>Soy yo, mamis</p>;
      default:
        return <TimeStreamedChart />;
    }
  };

  return (
    <PageContainer>
      <TopBar sectionName="Video" />
      <Well>
        <Box>
          <VideoTitle>{selectedVideo.title}</VideoTitle>
          <Center>
            <PlaylistLink href={selectedVideo.playlist_url} isExternal>
              <Text>{selectedVideo.playlist_url}</Text>
            </PlaylistLink>
            <CopyButton size="xs" onClick={onCopy}>
              {hasCopied ? "Copied" : "Copy link"}
            </CopyButton>
          </Center>
        </Box>
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
          data={formatToHours(selectedVideo.total_stream_time)}
          icon={<Users />}
          inputColor={theme.colors.cyan}
        />
        <Stats
          title={"Streamed last 24h"}
          data={formatToHours(selectedVideo.stream_time_last_24h)}
          icon={<Calendar />}
          inputColor={theme.colors.magenta}
        />
        <Stats
          title={"Times watched"}
          data={selectedVideo.times_watched}
          icon={<Play />}
          inputColor={theme.colors.blue}
        />
      </StatsContainer>
      <StatsContainer>
        <Flex direction="column">
          <Select onChange={handleChange} mb={8}>
            <option value="timesStreamed">Time Streamed</option>
            <option value="albukao">Albukao</option>
          </Select>
          {displayChart()}
        </Flex>
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

const StatusTag = styled(Tag)`
  padding: 12px;
  color: white;
  margin-right: 32px;
  height: 52px;
  font-weight: 600;
  font-size: 18px;
`;

const PlaylistLink = styled(Link)`
  color: ${(props) => props.theme.colors.grey1};
  font-weight: 400;
  font-size: 14px;
`;

const CopyButton = styled(Button)`
  color: ${(props) => props.theme.colors.grey1};
  background-color: ${(props) => props.theme.colors.grey2};
  font-weight: 400;
  font-size: 14px;
  padding: 4px;
  margin-left: 11px;
`;
