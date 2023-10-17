import { Box, Paper, Typography, useTheme } from "@mui/material";
import Pie from "../PieChart/Pie";
import Baar from "../BarChart/Baar";
import React from "react";
import Geo from "../Geography/Geo";

function Row3() {
  let theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: 1, mt: 3, flexWrap: "wrap" }}>
      <Paper sx={{ width: "calc(97% / 3)", minWidth:"200px", flexGrow:1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie height={"250px"} isDash />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ width: "calc(97% / 3)", minWidth:"200px", flexGrow:1 }}>
      <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Baar height={"300px"} isDash />
        
      </Paper>
      <Paper sx={{ width: "calc(97% / 3)", minWidth:"200px", flexGrow:1 }}>
        <Geo height={"400px"} isDash/>
      </Paper>
    </Box>
  );
}

export default React.memo(Row3);
