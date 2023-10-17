import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box } from "@mui/material";
import React from "react";
import Header from "../../Components/Header";
const Dashboard = () => {
 
  return (
    <div>
      <Box sx={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", alignItems:"center" }}>
     <Header title='DASHBOARD' subTitle="Welcome to your dashboard"/>

        <Button
          variant="contained"
          color="primary"
          sx={{ p: "6px 8px", textTransform: "capitalize", mb: 3 }}
        >
          <DownloadOutlinedIcon />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default React.memo(Dashboard);
