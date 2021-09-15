import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Select, Flex } from "@chakra-ui/react";

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
import formatToHours from "../../utils/formatToHours";
import { TimeStreamedChart } from "./TimeStreamedChart";
import { TimesWatchedChart } from "./TimesWatchedChart";
import { VideoHeader } from "./VideoHeader";

export const VideosShow = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { selectedVideo } = useSelector((state) => state.video);
  const [chartOption, setChartOption] = useState("last24h");

  const getVideoStats = async (frequency, interval) => {
    const video_stats_response = await VideoStats.show(
      videoId,
      frequency,
      interval
    );
    dispatch(loadVideoStats(video_stats_response));
  };

  const fetchVideo = async () => {
    const response = await Video.show(videoId);
    dispatch(loadSelectedVideo(response));
    displayChart();
  };

  useEffect(() => {
    fetchVideo();
  }, [chartOption]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    setChartOption(e.target.value);
    displayChart();
  };

  const displayChart = () => {
    switch (chartOption) {
      case "last24h":
        getVideoStats("1hour", "24hours");
        break;
      case "last7Days":
        getVideoStats("6hours", "7days");
        break;
      case "last1h":
        getVideoStats("1minute", "1hour");
        break;
      case "last4h":
        getVideoStats("5minutes", "4hours");
        break;
    }
  };

  return (
    <PageContainer>
      <TopBar sectionName="Video" />
      <VideoHeader />
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
            <option value="last1h">Last hour</option>
            <option value="last4h">Last 4h</option>
            <option value="last24h">Last 24h</option>
            <option value="last7Days">Last 7 days</option>
          </Select>
          <TimeStreamedChart />
          <TimesWatchedChart />
        </Flex>
      </StatsContainer>
    </PageContainer>
  );
};
