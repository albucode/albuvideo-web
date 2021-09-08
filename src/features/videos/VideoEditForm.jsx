import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormLabel,
  Input,
  Button,
  Checkbox,
  Flex,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "@emotion/styled";

import { Video } from "../../api/requests";
import {
  displayErrorAlert,
  loadErrorMessage,
  hideErrorAlert,
} from "../shared/errorAlertSlice";
import theme from "../../theme/theme";
import CountriesSelection from "./CountriesSelection";

const VideoEditForm = () => {
  const { selectedVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedPermission, setSelectedPermission] = useState(
    selectedVideo.country_permission_type || ""
  );
  const { videoId } = useParams();

  const { register, handleSubmit } = useForm();

  const { selectedCountriesIds } = useSelector((state) => state.video);

  const onSubmit = (data) => {
    const requestBody = {
      video: {
        title: data.title,
        published: data.published,
        country_permission_type: selectedPermission,
        country_ids: selectedCountriesIds,
      },
    };
    Video.update(videoId, requestBody).then((response) => {
      if (!response.errors) {
        history.push("/videos");
        dispatch(hideErrorAlert());
      } else {
        dispatch(loadErrorMessage(response.errors));
        dispatch(displayErrorAlert());
      }
    });
  };

  const handleChange = (event) => {
    setSelectedPermission(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" width="72%">
        <Select
          placeholder="Select country permission"
          onChange={handleChange}
          defaultValue={selectedVideo.country_permission_type}
        >
          <option value="allowed">Allowed</option>
          <option value="denied">Denied</option>
        </Select>
        <CountriesSelection />
        <Label>Title</Label>
        <InputField {...register("title")} defaultValue={selectedVideo.title} />
        <Checkbox
          {...register("published")}
          iconColor={theme.colors.black}
          defaultIsChecked={selectedVideo.published}
          mb="32px"
        >
          Published
        </Checkbox>
        <SubmitButton type="submit">Update Video</SubmitButton>
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
  width: 151px;
  height: 45px;
  font-weight: 700;
  font-size: 18px;
`;

export default VideoEditForm;
