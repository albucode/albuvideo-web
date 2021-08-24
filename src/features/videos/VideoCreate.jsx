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

const VideoCreate = () => {
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

  const dispatch = useDispatch();
  const history = useHistory();

  const fetchCountries = async () => {
    const countries = await Countries.index();
    setPickerItems(countries.countries);
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
        country_permission_type: selectedPermission,
        country_ids: selectedItems.map(({ value }) => value),
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

  const handleChange = (event) => {
    setSelectedPermission(event.target.value);
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
            <Select
              placeholder="Select country permission"
              onChange={handleChange}
            >
              <option value="allowed">Allowed</option>
              <option value="denied">Denied</option>
            </Select>
            <CUIAutoComplete
              label="Choose preferred work locations"
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
