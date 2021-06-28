import React, { useEffect } from "react";
import styled from "@emotion/styled";
import {
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
import { PageContainer } from "../shared/PageContainer";
import TableHeader from "../shared/TableHeader";
import TableData from "../shared/TableData";
import ElementName from "../shared/ElementName";

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
    <PageContainer>
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
            <TableHeader>Title</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Created at</TableHeader>
            <TableHeader pr={0}>Duration </TableHeader>
            <TableHeader pl={0}>{""}</TableHeader>
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
                  <ElementName paddingLeft="18px">{video.title}</ElementName>
                </HStack>
              </Td>
              <TableData>{formatStatus(video.status)}</TableData>
              <TableData>{formatDate(video.created_at)}</TableData>
              <TableData pr={0}>6:10</TableData>
              <TableData pl={0}>
                <Dots color={theme.colors.grey1} />
              </TableData>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </PageContainer>
  );
};
