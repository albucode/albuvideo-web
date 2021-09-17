import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, Select, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "@emotion/styled";

import { WebhookSubscriptions } from "../../api/requests";
import {
  displayErrorAlert,
  loadErrorMessage,
  hideErrorAlert,
} from "../shared/errorAlertSlice";
import theme from "../../theme/theme";
import InputField from "../shared/InputField";
import Label from "../shared/Label";
const WebhookSubscriptionEditForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { webhookSubscriptionId } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { topic: "", url: "" },
  });

  const fetchWebhookSubscription = async () => {
    const response = await WebhookSubscriptions.show(webhookSubscriptionId);
    reset(response.webhook_subscription);
  };

  const topics = useSelector((state) => state.options.topics);

  const onSubmit = (data) => {
    const requestBody = {
      webhook_subscription: {
        topic: data.topic,
        url: data.url,
      },
    };
    WebhookSubscriptions.update(webhookSubscriptionId, requestBody).then(
      (response) => {
        if (!response.errors) {
          history.push("/webhook-subscriptions");
          dispatch(hideErrorAlert());
        } else {
          dispatch(loadErrorMessage(response.errors));
          dispatch(displayErrorAlert());
        }
      }
    );
  };

  useEffect(() => {
    fetchWebhookSubscription();
  }, [reset]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" width="72%">
        <Select
          placeholder="Select a topic"
          {...register("topic", { required: "Topic is required" })}
        >
          {topics &&
            topics.map((topic, index) => (
              <option key={`topic${index}`} value={topic}>
                {topic}
              </option>
            ))}
        </Select>
        {errors.topic && <Text color="red">{errors.topic.message}</Text>}
        <Label>Url</Label>
        <InputField {...register("url")} />
        <SubmitButton type="submit">Update</SubmitButton>
      </Flex>
    </form>
  );
};

const SubmitButton = styled(Button)`
  background-color: ${theme.colors.blue};
  color: white;
  width: 151px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
`;

export default WebhookSubscriptionEditForm;
