/* eslint-disable react/prop-types */
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Avatar, Tooltip, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import React from "react";

const SideBar = ({ Drawer, DrawerHeader, open, handleDrawerClose }) => {
  let theme = useTheme();
  const array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlineOutlinedIcon />, path: "/team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlinedIcon />,
      path: "/contact",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
      path: "/invoices",
    },
  ];
  const array2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    {
      text: "Calender",
      icon: <CalendarTodayOutlinedIcon />,
      path: "/calender",
    },
    { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
  ];
  const array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/barchart" },
    {
      text: "Pie Chart",
      icon: <PieChartOutlineOutlinedIcon />,
      path: "/piechart",
    },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/linechart" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
  ];
  let navigate = useNavigate();
  let locat = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        alt="Admin Photo"
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          border: "1px solid grey",
          my: 1,
          transition: "0.25s",
        }}
        src="src\Images\admin.jpg"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
      >
        Waheed Kadry
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: "0.25s",
          color: theme.palette.info.main,
          fontWeight: "bold",
        }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {array1.map((e) => (
          <ListItem key={e.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : e.text} placement="right-start">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,

                  bgcolor:
                    locat.pathname === e.path
                      ? theme.palette.mode === "light"
                        ? grey[300]
                        : grey[800]
                      : null,
                }}
                onClick={() => {
                  navigate(e.path);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array2.map((e) => (
          <ListItem key={e.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : e.text} placement="right-start">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,

                  bgcolor:
                    locat.pathname === e.path
                      ? theme.palette.mode === "light"
                        ? grey[300]
                        : grey[800]
                      : null,
                }}
                onClick={() => {
                  navigate(e.path);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {array3.map((e) => (
          <ListItem key={e.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : e.text} placement="right-start">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,

                  bgcolor:
                    locat.pathname === e.path
                      ? theme.palette.mode === "light"
                        ? grey[300]
                        : grey[800]
                      : null,
                }}
                onClick={() => {
                  navigate(e.path);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default React.memo(SideBar);
