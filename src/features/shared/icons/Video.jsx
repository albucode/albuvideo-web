import React from "react";
import { Icon } from "@chakra-ui/react";

const Video = (props) => {
  return (
    <Icon viewBox="0 0 48 48" {...props} width="28px" height="24px">
      <path
        d="M42 14.3C41.3923 14.0264 40.7177 13.9374 40.0598 14.0441C39.402 14.1507 38.7901 14.4484 38.3 14.9L34 18.9V16C34 14.4087 33.3679 12.8826 32.2426 11.7574C31.1174 10.6321 29.5913 10 28 10H10C8.4087 10 6.88258 10.6321 5.75736 11.7574C4.63214 12.8826 4 14.4087 4 16V32C4 33.5913 4.63214 35.1174 5.75736 36.2426C6.88258 37.3679 8.4087 38 10 38H28C29.5913 38 31.1174 37.3679 32.2426 36.2426C33.3679 35.1174 34 33.5913 34 32V29.1L38.32 33.1C38.956 33.6757 39.7822 33.9962 40.64 34C41.1161 33.9989 41.5864 33.8966 42.02 33.7C42.6099 33.4614 43.1152 33.0523 43.4715 32.5251C43.8277 31.9978 44.0187 31.3763 44.02 30.74V17.26C44.0171 16.6214 43.8232 15.9982 43.4632 15.4707C43.1032 14.9432 42.5936 14.5355 42 14.3Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Video;