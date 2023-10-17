import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { columns, rows } from "./dataInvoices";
import React from "react";
import Header from "../../Components/Header";

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "100%", mx: "auto" }}>
     <Header title="INVOICES" subTitle="List of Invoice Balances" />
    <DataGrid
    checkboxSelection
    slots={{
      toolbar: GridToolbar,
    }}
      rows={rows}
      // @ts-ignore
      columns={columns}
    />
  </Box>
  )
}

export default React.memo(Invoices)
