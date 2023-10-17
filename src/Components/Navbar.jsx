/* eslint-disable react/prop-types */
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Stack } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material";
import { useState } from "react";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Navbar = ({ AppBar, open, handleDrawerOpen, setMode }) => {
  let themee = useTheme();
  // menu component
  const [anchorEl, setAnchorEl] = useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(openn && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box flexGrow={1} />
        <Stack direction={"row"}>
          {themee.palette.mode === "dark" && (
            <IconButton
              color="inherit"
              onClick={() => {
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
                localStorage.setItem(
                  "theme",
                  themee.palette.mode === "light" ? "dark" : "light"
                );
              }}
            >
              <DarkModeIcon />
            </IconButton>
          )}
          {themee.palette.mode === "light" && (
            <IconButton
              color="inherit"
              onClick={() => {
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
                localStorage.setItem(
                  "theme",
                  themee.palette.mode === "light" ? "dark" : "light"
                );
              }}
            >
              <LightModeIcon />
            </IconButton>
          )}

          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          <IconButton
            id="basic-button"
            aria-controls={openn ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openn ? "true" : undefined}
            onClick={() => handleClick()}
            color={"inherit"}
          >
            <SettingsIcon />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openn}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem color="inherit" onClick={handleClose}>
              Main Color
            </MenuItem>
            <MenuItem color="inherit" onClick={handleClose}>
              My account
            </MenuItem>
            <MenuItem color="inherit" onClick={handleClose}>
              Login
            </MenuItem>
          </Menu>

          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Navbar);
