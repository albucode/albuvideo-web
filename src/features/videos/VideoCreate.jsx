import React from "react";
import { useForm } from "react-hook-form";
import {
  FormLabel,
  Input,
  Button,
  Checkbox,
  Text,
  Flex,
} from "@chakra-ui/react";

import { TopBar } from "../navigation/TopBar";
import { PageContainer } from "../shared/PageContainer";
import { Video } from "../../api/requests";
import { displayErrorAlert, loadErrorMessage } from "../shared/errorAlertSlice";
import ErrorAlert from "../shared/ErrorAlert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const VideoCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { errorMessage, displayErrorMessage } = useSelector(
    (state) => state.errorAlert
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const requestBody = {
      video: {
        title: data.title,
        source: data.source,
        published: data.published,
      },
    };
    Video.create(requestBody).then((response) => {
      if (!response.errors) {
        history.push("/videos");
      } else {
        dispatch(loadErrorMessage(response.errors));
        dispatch(displayErrorAlert());
      }
    });
  };

  return (
    <PageContainer>
      <TopBar sectionName="New video" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" width="72%">
          <FormLabel>Title</FormLabel>
          <Input {...register("title")} />
          <FormLabel>Source</FormLabel>
          <Input {...register("source", { required: "Source is required" })} />
          {errors.source && <Text color="red">{errors.source.message}</Text>}
          <Checkbox {...register("published")} defaultIsChecked>
            Published
          </Checkbox>
          {displayErrorMessage && <ErrorAlert message={errorMessage} />}
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </PageContainer>
  );
};

export default VideoCreate;
