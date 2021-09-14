import React from "react";
import { Link } from "react-router-dom";
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
import { WebhookSubscriptions } from "../../api/requests";
import Dots from "../shared/icons/Dots";

export const WebhookSubscriptionActions = ({ webhookSubscriptionId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteWebhookSubscription = async () => {
    await WebhookSubscriptions.delete(webhookSubscriptionId);
    window.location.reload();
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<Dots color={theme.colors.grey1} />}
        backgroundColor="rgba(0,0,0,0)"
      />
      <MenuList>
        <MenuItem onClick={onOpen}>Delete</MenuItem>
        <Link to={`/webhook-subscriptions/${webhookSubscriptionId}/edit`}>
          {" "}
          <MenuItem>Edit</MenuItem>
        </Link>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Delete webhook</ModalHeader>
            <ModalBody>
              <Text>Are you sure you want to delete this webhook?</Text>
            </ModalBody>
            <ModalFooter>
              <DeleteButton onClick={deleteWebhookSubscription}>
                Delete webhook
              </DeleteButton>
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
