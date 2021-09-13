import React from "react";
import { useForm } from "react-hook-form";
import { FormLabel, Input, Button, Text, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import { WebhookSubscriptions } from "../../api/requests";
import {
  displayErrorAlert,
  loadErrorMessage,
  hideErrorAlert,
} from "../shared/errorAlertSlice";
import theme from "../../theme/theme";

const NewWebhookSubscriptionForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
        <Label>Topic</Label>
        <InputField {...register("topic", { required: "Topic is required" })} />
        {errors.topic && <Text color="red">{errors.topic.message}</Text>}
        <Label>Url</Label>
        <InputField {...register("url", { required: "Url is required" })} />
        {errors.url && <Text color="red">{errors.url.message}</Text>}
        <SubmitButton type="submit">Create Webhook</SubmitButton>
      </Flex>
    </form>
  );
};

const Label = styled(FormLabel)`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 18px;
`;

const InputField = styled(Input)`
  width: 600px;
  height: 60px;
  border: 1px solid #a5a5a5;
  margin-bottom: 18px;
`;

const SubmitButton = styled(Button)`
  background-color: ${theme.colors.blue};
  color: white;
  width: 181px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
`;

export default NewWebhookSubscriptionForm;
