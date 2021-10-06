import React, { useEffect } from "react";
import {
  Table,
  Tfoot,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { TopBar } from "../navigation/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { Invoices } from "../../api/requests";
import { loadInvoices } from "./invoiceSlice";
import { PageContainer } from "../shared/PageContainer";
import TableHeader from "../shared/TableHeader";
import formatDate from "../../utils/formatDate";
import TableData from "../shared/TableData";
import formatStatus from "../../utils/formatStatus";

export const InvoicesIndex = () => {
  const dispatch = useDispatch();

  const fetchInvoices = async () => {
    const response = await Invoices.index();
    dispatch(loadInvoices(response));
  };

  const { invoices } = useSelector((state) => state.invoices);

  useEffect(() => {
    fetchInvoices();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageContainer>
      <TopBar sectionName="Invoices" />
      <Table
        variant="striped"
        colorScheme="table"
        backgroundColor="white"
        marginRight="0px"
        borderRadius="12px"
      >
        <Thead>
          <Tr>
            <TableHeader>Period</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Total</TableHeader>
          </Tr>
        </Thead>
        <Tbody>
          {invoices.map((invoice) => (
            <Tr key={invoice.id}>
              <TableData>
                {"From " +
                  formatDate(invoice.start_date) +
                  " to " +
                  formatDate(invoice.end_date)}
              </TableData>
              <TableData>{formatStatus(invoice.status)}</TableData>
              <TableData>{invoice.invoice_total}</TableData>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </PageContainer>
  );
};
