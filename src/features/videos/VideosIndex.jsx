import React, { useEffect } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Table,
  Tfoot,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Text,
  HStack,
} from "@chakra-ui/react";

import theme from "../../../src/theme/theme";
import { TopBar } from "../navigation/TopBar";
import Play from "../shared/icons/Play";
import { Thumbnail } from "../shared/Thumbnail";
import Dots from "../shared/icons/Dots";
import { useDispatch, useSelector } from "react-redux";
import { Video } from "../../api/requests";
import { loadVideos } from "../videos/videoSlice";

export const VideosIndex = () => {
  const dispatch = useDispatch();

  const fetchVideos = async () => {
    const response = await Video.index();
    dispatch(loadVideos(response));
  };

  const { videos } = useSelector((state) => state.video);

  useEffect(() => {
    fetchVideos();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (
      date.getMonth() +
      "/" +
      date.getDay() +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      "h" +
      date.getMinutes()
    );
  };

  const formatStatus = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <Box margin="0 auto" paddingTop="50px">
      <TopBar sectionName="Videos" />
      <Table
        variant="striped"
        colorScheme="table"
        backgroundColor="white"
        marginRight="0px"
        borderRadius="12px"
      >
        <Thead>
          <Tr>
            <THeader>Title</THeader>
            <THeader>Status</THeader>
            <THeader>Created at</THeader>
            <THeader pr={0}>Duration </THeader>
            <THeader pr={0}>{""}</THeader>
          </Tr>
        </Thead>
        <Tbody>
          {videos.map((video) => (
            <Tr key={video.id}>
              <Td>
                <HStack>
                  <Thumbnail
                    icon={<Play />}
                    inputColor={theme.colors.magenta}
                  />
                  <VideoTitle>{video.title}</VideoTitle>
                </HStack>
              </Td>
              <TData>{formatStatus(video.status)}</TData>
              <TData>{formatDate(video.created_at)}</TData>
              <TData pr={0}>6:10</TData>
              <TData pl={0}>
                <Dots color={theme.colors.grey1} />
              </TData>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
};

const THeader = styled(Th)`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey1};
`;

const TData = styled(Td)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
`;

const VideoTitle = styled(Text)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  padding-left: 18px;
`;
