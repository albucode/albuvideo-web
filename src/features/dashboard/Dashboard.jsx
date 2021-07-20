import React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { Stats } from "./Stats";
import Users from "../shared/icons/Users";
import Inbox from "../shared/icons/Inbox";
import theme from "../../theme/theme";
import Calendar from "../shared/icons/Calendar";

export const Dashboard = () => {
  return (
    <PageContainer>
      <TopBar sectionName="Dashboard" />
      <ContentContainer>
        <Title>Content</Title>
      </ContentContainer>
      <StatsContainer>
        <Stats
          title={"Total streamed"}
          data={"23h 43m"}
          icon={<Users />}
          inputColor={theme.colors.cyan}
        />
        <Stats
          title={"Streamed last 24h"}
          data={"13h 02m"}
          icon={<Calendar />}
          inputColor={theme.colors.magenta}
        />
        <Stats
          title={"Total streamed"}
          data={"23h 43m"}
          icon={<Inbox />}
          inputColor={theme.colors.blue}
        />
      </StatsContainer>
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
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 24px;
`;
