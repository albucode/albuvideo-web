import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Text, Flex, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import { Video } from "../../api/requests";
import {
  displayErrorAlert,
  loadErrorMessage,
  hideErrorAlert,
} from "../shared/errorAlertSlice";
import theme from "../../theme/theme";
import CountriesSelection from "./CountriesSelection";
import InputField from "../shared/InputField";
import Label from "../shared/Label";

const NewVideoForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedPermission, setSelectedPermission] = useState("");

  const { selectedCountriesIds } = useSelector((state) => state.video);

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
        country_permission_type: selectedPermission,
        country_ids: selectedCountriesIds,
      },
    };
    Video.create(requestBody).then((response) => {
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
        <Select placeholder="Select country permission" onChange={handleChange}>
          <option value="allowed">Allowed</option>
          <option value="denied">Denied</option>
        </Select>
        <CountriesSelection />
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

export default NewVideoForm;
