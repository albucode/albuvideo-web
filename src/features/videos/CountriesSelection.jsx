import React, { useState, useEffect } from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { useDispatch, useSelector } from "react-redux";

import { Countries } from "../../api/requests";
import { loadCountriesIds, deleteSelectedVideo } from "./videoSlice";

const CountriesSelection = () => {
  const { selectedVideo } = useSelector((state) => state.video);
  const [pickerItems, setPickerItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState(
    selectedVideo.countries || []
  );
  const dispatch = useDispatch();

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
      dispatch(loadCountriesIds(selectedItems));
    }
  };

  const fetchCountries = async () => {
    const countries = await Countries.index();
    setPickerItems(countries.countries);
    dispatch(loadCountriesIds(selectedItems));
  };

  useEffect(() => {
    dispatch(deleteSelectedVideo());
    fetchCountries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CUIAutoComplete
      placeholder="Type a country"
      disableCreateItem={true}
      onCreateItem={handleCreateItem}
      items={pickerItems}
      selectedItems={selectedItems}
      onSelectedItemsChange={(changes) =>
        handleSelectedItemsChange(changes.selectedItems)
      }
    />
  );
};

export default CountriesSelection;
