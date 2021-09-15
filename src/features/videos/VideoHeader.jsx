import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  Box,
  Text,
  Tag,
  Center,
  Link,
  useClipboard,
  Button,
} from "@chakra-ui/react";

import statusToColor from "../../utils/statusToColor";
import formatStatus from "../../utils/formatStatus";
import { VideoActions } from "./VideoActions";

export const VideoHeader = () => {
  const { selectedVideo } = useSelector((state) => state.video);
  const [value, setValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(value);

  useEffect(() => {
    setValue(selectedVideo.playlist_url);
  }, [selectedVideo.playlist_url]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
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
          <VideoActions />
        </Center>
      </Well>
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
