import React from "react";
import { useForm } from "react-hook-form";
import { Button, Text, Flex, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

const NewWebhookSubscriptionForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const topics = useSelector((state) => state.options.topics);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const requestBody = {
      webhook_subscription: {
        topic: data.topic,
        url: data.url,
      },
    };
    WebhookSubscriptions.create(requestBody).then((response) => {
      if (!response.errors) {
        history.push("/webhook-subscriptions");
        dispatch(hideErrorAlert());
      } else {
        dispatch(loadErrorMessage(response.errors));
        dispatch(displayErrorAlert());
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" width="72%">
        <Select
          placeholder="Select a topic"
          {...register("topic", { required: "Topic is required" })}
        >
          {topics &&
            topics.map((topic, index) => <option key={`topic${index}`} value={topic}>{topic}</option>)}
        </Select>
        {errors.topic && <Text color="red">{errors.topic.message}</Text>}
        <Label>Url</Label>
        <InputField {...register("url", { required: "Url is required" })} />
        {errors.url && <Text color="red">{errors.url.message}</Text>}
        <SubmitButton type="submit">Create Webhook</SubmitButton>
      </Flex>
    </form>
  );
};

const SubmitButton = styled(Button)`
  background-color: ${theme.colors.blue};
  color: white;
  width: 181px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
`;

export default NewWebhookSubscriptionForm;
