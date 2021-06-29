import styled from "@emotion/styled";
import { Th } from "@chakra-ui/react";

const TableHeader = styled(Th)`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey1};
`;

export default TableHeader;
