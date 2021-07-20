import React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { Stats } from "./Stats";
import Users from "../shared/icons/Users";
import theme from "../../theme/theme";

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
      </StatsContainer>
    </PageContainer>
  );
};

const ContentContainer = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  height: 300px;
  border-radius: 20px;
  padding: 32px;
`;

const StatsContainer = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 32px;
  margin-top: 30px;
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 24px;
`;
