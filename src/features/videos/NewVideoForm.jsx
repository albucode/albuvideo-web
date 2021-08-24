import React, { useState, useEffect } from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { useForm } from "react-hook-form";
import {
  FormLabel,
  Input,
  Button,
  Checkbox,
  Text,
  Flex,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import { Video, Countries } from "../../api/requests";
import {
  displayErrorAlert,
  loadErrorMessage,
  hideErrorAlert,
} from "../shared/errorAlertSlice";
import theme from "../../theme/theme";

const NewVideoForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [pickerItems, setPickerItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedPermission, setSelectedPermission] = useState("");

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  const fetchCountries = async () => {
    const countries = await Countries.index();
    setPickerItems(countries.countries);
  };

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
        country_ids: selectedItems.map(({ value }) => value),
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

  useEffect(() => {
    fetchCountries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" width="72%">
        <Select placeholder="Select country permission" onChange={handleChange}>
          <option value="allowed">Allowed</option>
          <option value="denied">Denied</option>
        </Select>
        <CUIAutoComplete
          label="Choose countries"
          placeholder="Type a Country"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
        />
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

export default NewVideoForm;
