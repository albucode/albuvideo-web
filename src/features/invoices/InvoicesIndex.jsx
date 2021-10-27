import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Tfoot, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { TopBar } from "../navigation/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { Invoices } from "../../api/requests";
import { loadInvoices } from "./invoiceSlice";
import { PageContainer } from "../shared/PageContainer";
import TableHeader from "../shared/TableHeader";
import { formatMonthYear } from "../../utils/formatDate";
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
                <Link to={`/invoices/${invoice.id}`}>
                  {formatMonthYear(invoice.end_date)}
                </Link>
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
