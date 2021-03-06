import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  Box,
  Text,
  Tag,
  Center,
  Link as LinkChakra,
  useClipboard,
  Button,
} from "@chakra-ui/react";

import statusToColor from "../../utils/statusToColor";
import formatStatus from "../../utils/formatStatus";
import { VideoActions } from "./VideoActions";

export const VideoHeader = ({ title, playlistUrl, status }) => {
  const { selectedVideo } = useSelector((state) => state.video);
  const [value, setValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(value);
  const { videoId } = useParams();

  useEffect(() => {
    setValue(selectedVideo.playlist_url);
  }, [selectedVideo.playlist_url]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Well>
      <Box>
        <VideoTitle>{title}</VideoTitle>
        <Center>
          <PlaylistLink href={playlistUrl} isExternal>
            <Text>{playlistUrl}</Text>
          </PlaylistLink>
          <SmallButton size="xs" onClick={onCopy}>
            {hasCopied ? "Copied" : "Copy link"}
          </SmallButton>
          <Link to={`/videos/${videoId}/preview`}>
            <SmallButton size="xs">Preview</SmallButton>
          </Link>
        </Center>
      </Box>
      <Center marginLeft="auto">
        <StatusTag backgroundColor={statusToColor(status)}>
          {status && formatStatus(status)}
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

const PlaylistLink = styled(LinkChakra)`
  color: ${(props) => props.theme.colors.grey1};
  font-weight: 400;
  font-size: 14px;
`;

const SmallButton = styled(Button)`
  color: ${(props) => props.theme.colors.grey1};
  background-color: ${(props) => props.theme.colors.grey2};
  font-weight: 400;
  font-size: 14px;
  padding: 4px;
  margin-left: 11px;
`;
