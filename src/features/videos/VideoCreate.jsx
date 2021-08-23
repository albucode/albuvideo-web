import React, { useState, useEffect } from "react";
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
import { Video, Countries } from "../../api/requests";
import { displayErrorAlert, loadErrorMessage } from "../shared/errorAlertSlice";
import ErrorAlert from "../shared/ErrorAlert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { StatsContainer } from "../shared/StatsContainer";
import styled from "@emotion/styled";
import theme from "../../theme/theme";
import { loadVideos } from "./videoSlice";

const VideoCreate = () => {
  const [selectedCountryIds, setSelectedCountryIds] = useState([]);
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchCountries = async () => {
    const countries = await Countries.index();
    setCountries(countries);
  };

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

  useEffect(() => {
    fetchCountries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageContainer>
      <TopBar sectionName="New video" />
      {displayErrorMessage && <ErrorAlert message={errorMessage} />}
      <StatsContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" width="72%">
            <Label>Title</Label>
            <InputField {...register("title")} />
            <Label>Source</Label>
            <InputField
              {...register("source", { required: "Source is required" })}
            />
            {errors.source && <Text color="red">{errors.source.message}</Text>}
            <Checkbox
              {...register("published")}
              iconColor={theme.colors.black}
              defaultIsChecked
              mb="32px"
            >
              Published
            </Checkbox>
            <SubmitButton type="submit">Create Video</SubmitButton>
          </Flex>
        </form>
      </StatsContainer>
    </PageContainer>
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
  width: 151px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
`;

export default VideoCreate;
