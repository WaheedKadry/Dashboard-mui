import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React, { forwardRef, useState } from "react";
import Header from "../../Components/Header";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = () => {
  const currencies = [
    {
      value: "User",
      label: "User",
    },

    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
  ];
  // Validation React Hook Form Library
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regPhone =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  // Snak Bar Notification
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
     <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          helperText={
            Boolean(errors.firstName)
              ? "This Field Is Required & min 3 Character Or More"
              : null
          }
          error={Boolean(errors.firstName)}
          {...register("firstName", { required: true, minLength: 3 })}
        />

        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          helperText={
            Boolean(errors.lastName)
              ? "This Field Is Required & min 3 Character Or More"
              : null
          }
          error={Boolean(errors.lastName)}
          {...register("lastName", { required: true, minLength: 3 })}
        />
      </Stack>
      <TextField
        label="E-mail"
        variant="filled"
        helperText={
          Boolean(errors.email) ? "Please Provide A Valid E-mail" : null
        }
        error={Boolean(errors.email)}
        {...register("email", { required: true, pattern: regEmail })}
      />
      <TextField
        label="Contact Number"
        variant="filled"
        helperText={
          Boolean(errors.phoneNumber)
            ? "Please Provide A Valid Phone Number"
            : null
        }
        error={Boolean(errors.phoneNumber)}
        {...register("phoneNumber", { required: true, pattern: regPhone })}
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        variant="filled"
        select
        label="Select"
        defaultValue={currencies[0].label}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          type="submit"
        >
          Create New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%", color:"#fff" }}>
            Account Created Successfuly
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default React.memo(Form);
