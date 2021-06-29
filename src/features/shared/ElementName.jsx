import styled from "@emotion/styled";
import { Text } from "@chakra-ui/react";

const ElementName = styled(Text)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
`;

export default ElementName;
