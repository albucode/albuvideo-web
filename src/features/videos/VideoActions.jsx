import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Text,
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

import theme from "../../../src/theme/theme";
import { Video } from "../../api/requests";
import Dots from "../shared/icons/Dots";

export const VideoActions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const { videoId } = useParams();

  const deleteVideo = async () => {
    await Video.delete(videoId);
    history.push("/videos");
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<Dots color={theme.colors.grey1} />}
        backgroundColor="white"
      />
      <MenuList>
        <MenuItem onClick={onOpen}>Delete video</MenuItem>
        <Link to={`/videos/${videoId}/update`}>
          {" "}
          <MenuItem>Edit</MenuItem>
        </Link>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Delete video</ModalHeader>
            <ModalBody>
              <Text>Are you sure you want to delete this video?</Text>
            </ModalBody>
            <ModalFooter>
              <DeleteButton onClick={deleteVideo}>Delete video</DeleteButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </MenuList>
    </Menu>
  );
};

const DeleteButton = styled(Button)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};
  font-weight: 700;
  font-size: 18px;
  height: 45px;
`;
