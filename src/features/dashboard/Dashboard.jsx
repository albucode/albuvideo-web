import React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";

export const Dashboard = () => {
  return (
    <PageContainer>
      <TopBar sectionName="Dashboard" />
      <ContentContainer>
        <Title>Content</Title>
      </ContentContainer>
    </PageContainer>
  );
};

const ContentContainer = styled(Box)`
  background-color: ${(props) => props.theme.colors.white};
  height: 300px;
  border-radius: 20px;
  padding: 32px;
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 24px;
`;
