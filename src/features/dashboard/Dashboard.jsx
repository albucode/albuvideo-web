import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { Stats } from "./Stats";
import Users from "../shared/icons/Users";
import Inbox from "../shared/icons/Inbox";
import theme from "../../theme/theme";
import Calendar from "../shared/icons/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { loadtimeStreamed } from "./dashboardSlice";
import { DashboardStats } from "../../api/requests";

export const Dashboard = () => {
  const dispatch = useDispatch();

  const fetchDashboardStats = async () => {
    const response = await DashboardStats.show();
    dispatch(loadtimeStreamed(response));
  };

  const { timeStreamed, timeStored, timeStreamedLast24h } = useSelector(
    (state) => state.dashboard
  );

  useEffect(() => {
    fetchDashboardStats();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageContainer>
      <TopBar sectionName="Dashboard" />
      <StatsContainer>
        <Stats
          title={"Total streamed"}
          data={timeStreamed}
          icon={<Users />}
          inputColor={theme.colors.cyan}
        />
        <Stats
          title={"Streamed last 24h"}
          data={timeStreamedLast24h}
          icon={<Calendar />}
          inputColor={theme.colors.magenta}
        />
        <Stats
          title={"Total stored"}
          data={timeStored}
          icon={<Inbox />}
          inputColor={theme.colors.blue}
        />
      </StatsContainer>
      <ContentContainer>
        <Title>Content</Title>
      </ContentContainer>
    </PageContainer>
  );
};

const Container = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 32px;
`;

const ContentContainer = styled(Container)`
  height: 300px;
`;

const StatsContainer = styled(Container)`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 24px;
`;
