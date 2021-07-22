import React, { useEffect } from "react";
import {
  Table,
  Tfoot,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import theme from "../../../src/theme/theme";
import { TopBar } from "../navigation/TopBar";
import Play from "../shared/icons/Play";
import { Thumbnail } from "../shared/Thumbnail";
import Dots from "../shared/icons/Dots";
import { useDispatch, useSelector } from "react-redux";
import { Video } from "../../api/requests";
import { loadVideos, loadVideoId } from "../videos/videoSlice";
import { PageContainer } from "../shared/PageContainer";
import TableHeader from "../shared/TableHeader";
import TableData from "../shared/TableData";
import ElementName from "../shared/ElementName";
import formatDate from "../../utils/formatDate";
import formatStatus from "../../utils/formatStatus";

export const VideosIndex = () => {
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
                  <Link to={`/videos/${video.id}`}>
                    <ElementName
                      onClick={() => dispatch(loadVideoId(video.id))}
                      paddingLeft="18px"
                    >
                      {video.title}
                    </ElementName>
                  </Link>
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
