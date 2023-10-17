import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

function Header({ title, subTitle }) {
  let theme = useTheme();
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.info.light,
          fontWeight: "900",
          fontSize: "1.5em",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
}

export default React.memo(Header);
