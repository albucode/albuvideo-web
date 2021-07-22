import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import theme from "../../../src/theme/theme";
import { Video } from "../../api/requests";
import { loadVideos } from "../videos/videoSlice";
import { PageContainer } from "../shared/PageContainer";
import { StatsContainer } from "../shared/StatsContainer";
import { Stats } from "../dashboard/Stats";
import Users from "../shared/icons/Users";
import Calendar from "../shared/icons/Calendar";
import Play from "../shared/icons/Play";
import { TopBar } from "../navigation/TopBar";

export const VideosShow = () => {
  const dispatch = useDispatch();

  const fetchVideos = async () => {
    const response = await Video.index();
    dispatch(loadVideos(response));
  };

  const { videos } = useSelector((state) => state.video);

  useEffect(() => {
    fetchVideos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageContainer>
      <TopBar sectionName="Video" />
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
