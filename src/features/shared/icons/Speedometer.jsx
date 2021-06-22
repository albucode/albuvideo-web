import React from "react";
import { Icon } from "@chakra-ui/react";

const Speedometer = (props) => {
  return (
    <Icon
      viewBox="0 0 48 48"
      {...props}
      mr={props.marginRight}
      width="28px"
      height="24px"
    >
      <path
        d="M44.8171 24.885C44.2536 20.1861 42.1567 15.804 38.8512 12.4171C35.5457 9.03028 31.2159 6.82755 26.5321 6.14999C23.6345 5.78412 20.6921 6.04651 17.905 6.91929C15.1179 7.79207 12.5514 9.25479 10.3801 11.208C6.43735 14.7738 3.89023 19.6248 3.19344 24.895C2.49665 30.1652 3.69554 35.5115 6.57609 39.9795C6.91328 40.4998 7.35582 40.9436 7.87513 41.2823C8.39444 41.6211 8.979 41.8471 9.59109 41.946C9.81681 41.9819 10.045 41.9999 10.2736 42C11.2773 41.9986 12.2504 41.6546 13.0321 41.025C16.13 38.5019 20.0032 37.1241 23.9986 37.1241C27.994 37.1241 31.8672 38.5019 34.9651 41.025C35.4414 41.41 35.9934 41.6905 36.5852 41.8484C37.1769 42.0063 37.7953 42.038 38.4001 41.9415C39.0219 41.8394 39.6153 41.6078 40.1419 41.2619C40.6685 40.9159 41.1165 40.4631 41.4571 39.933C44.3085 35.4668 45.498 30.1399 44.8171 24.885ZM12.0001 29.31H10.5001C10.1023 29.31 9.72073 29.152 9.43943 28.8706C9.15812 28.5893 9.00009 28.2078 9.00009 27.81C9.00009 27.4122 9.15812 27.0306 9.43943 26.7493C9.72073 26.468 10.1023 26.31 10.5001 26.31H12.0001C12.3979 26.31 12.7794 26.468 13.0607 26.7493C13.342 27.0306 13.5001 27.4122 13.5001 27.81C13.5001 28.2078 13.342 28.5893 13.0607 28.8706C12.7794 29.152 12.3979 29.31 12.0001 29.31ZM16.5541 20.055C16.412 20.1914 16.2444 20.2985 16.0609 20.3701C15.8774 20.4418 15.6815 20.4766 15.4846 20.4725C15.2876 20.4685 15.0934 20.4257 14.913 20.3466C14.7326 20.2675 14.5695 20.1536 14.4331 20.0115L13.3726 18.9C13.2279 18.7597 13.113 18.5917 13.0346 18.406C12.9563 18.2203 12.9162 18.0208 12.9167 17.8193C12.9172 17.6177 12.9583 17.4184 13.0376 17.2331C13.1169 17.0478 13.2326 16.8804 13.378 16.7408C13.5234 16.6013 13.6955 16.4925 13.8838 16.4209C14.0722 16.3493 14.2731 16.3164 14.4745 16.3242C14.6758 16.3319 14.8736 16.3802 15.0559 16.4661C15.2382 16.5519 15.4014 16.6737 15.5356 16.824L16.5961 17.928C16.7335 18.0701 16.8415 18.238 16.9138 18.422C16.9861 18.6061 17.0213 18.8025 17.0174 19.0002C17.0135 19.1979 16.9705 19.3928 16.891 19.5739C16.8115 19.7549 16.697 19.9184 16.5541 20.055ZM22.5001 13.749C22.5001 13.3512 22.6581 12.9696 22.9394 12.6883C23.2207 12.407 23.6023 12.249 24.0001 12.249C24.3979 12.249 24.7794 12.407 25.0607 12.6883C25.3421 12.9696 25.5001 13.3512 25.5001 13.749V15.312C25.5001 15.7098 25.3421 16.0913 25.0607 16.3726C24.7794 16.654 24.3979 16.812 24.0001 16.812C23.6023 16.812 23.2207 16.654 22.9394 16.3726C22.6581 16.0913 22.5001 15.7098 22.5001 15.312V13.749ZM24.0001 29.31C23.7062 29.3097 23.4189 29.2232 23.1738 29.061C22.9288 28.8989 22.7367 28.6683 22.6215 28.398C22.5063 28.1277 22.473 27.8295 22.5259 27.5404C22.5787 27.2513 22.7152 26.9841 22.9186 26.772L32.4646 16.83C32.597 16.6744 32.7598 16.5476 32.943 16.4572C33.1262 16.3668 33.3259 16.3148 33.5299 16.3043C33.734 16.2939 33.938 16.3252 34.1294 16.3964C34.3209 16.4676 34.4958 16.5771 34.6435 16.7183C34.7911 16.8595 34.9083 17.0293 34.988 17.2175C35.0676 17.4056 35.108 17.608 35.1067 17.8122C35.1054 18.0165 35.0623 18.2184 34.9802 18.4054C34.898 18.5925 34.7786 18.7608 34.6291 18.9L25.0816 28.842C24.9428 28.9897 24.7752 29.1074 24.5892 29.1879C24.4032 29.2683 24.2027 29.3099 24.0001 29.31ZM37.5001 29.31H36.0001C35.6023 29.31 35.2207 29.152 34.9394 28.8706C34.6581 28.5893 34.5001 28.2078 34.5001 27.81C34.5001 27.4122 34.6581 27.0306 34.9394 26.7493C35.2207 26.468 35.6023 26.31 36.0001 26.31H37.5001C37.8979 26.31 38.2794 26.468 38.5607 26.7493C38.842 27.0306 39.0001 27.4122 39.0001 27.81C39.0001 28.2078 38.842 28.5893 38.5607 28.8706C38.2794 29.152 37.8979 29.31 37.5001 29.31Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Speedometer;