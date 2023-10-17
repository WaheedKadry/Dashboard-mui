import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { columns, rows } from "./dataContact";
import React from "react";
import Header from "../../Components/Header";
import "./contact.css"
const Contact = () => {
  return (
    <Box sx={{ height: 600, width: "100%", mx: "auto" }}>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default React.memo(Contact);
