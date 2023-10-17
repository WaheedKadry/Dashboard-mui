import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import React from "react";
import Header from "../../Components/Header";
import "./team.css"
const Team = () => {
  let theme = useTheme();
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "Email",
      headerName: "E-mail",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "Age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
          className='team'
            sx={{
              p: "5px",
              maxWidth: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              flexWrap:"wrap",
              justifyContent: "space-evenly",
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : access === "User"
                  ? "#3da58a"
                  : null,
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlinedIcon
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            )}
            {access === "Manager" && (
              <AddModeratorOutlinedIcon
                fontSize="small"
                sx={{ color: "#fff" }}
              />
            )}
            {access === "User" && (
              <LockOutlinedIcon fontSize="small" sx={{ color: "#fff" }} />
            )}
            <Typography
              variant="body1"
              sx={{ fontSize: "13px", color: "#fff" }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%", mx: "auto" }}>
      <Header title="TEAM" subTitle="Managing the Team Members" />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default React.memo(Team);
