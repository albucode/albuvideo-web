import styled from "@emotion/styled";
import { Td } from "@chakra-ui/react";

const TableData = styled(Td)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
`;

export default TableData;
