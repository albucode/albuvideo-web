import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageContainer } from "../shared/PageContainer";
import { TopBar } from "../navigation/TopBar";
import { AccessTokens } from "../../api/requests";
import { loadAccessTokens } from "./accessTokenSlice";

export const AccessTokensIndex = () => {
  const dispatch = useDispatch();

  const fetchAccessTokens = async () => {
    const response = await AccessTokens.index();
    dispatch(loadAccessTokens(response));
  };

  const { accessTokens } = useSelector((state) => state.accessToken);

  useEffect(() => {
    fetchAccessTokens();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (
      date.getMonth() +
      "/" +
      date.getDay() +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      "h" +
      date.getMinutes()
    );
  };

  return (
    <PageContainer>
      <TopBar sectionName="Access Tokens" />
    </PageContainer>
  );
};
