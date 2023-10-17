import { Paper, Stack, Typography } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./Data";
import React from "react";
function Row1() {
  return (
    <Stack
      direction={"row"}
      sx={{
        flexWrap: "wrap",
        gap: 2,
        justifyContent: { xs: "center", sm: "space-between" },
      }}
    >
      <Card
        icon={<EmailIcon />}
        title={"12,361"}
        subTitle={"Emails Sent"}
        data={data1}
        increase={"+14%"} scheme={"nivo"}      />
      <Card
        icon={<PointOfSaleIcon />}
        title={"431,225"}
        subTitle={"Sales obtained"}
        data={data2}
        increase={"+21%"} scheme={"category10"}      />
      <Card
        icon={<PersonAddIcon />}
        title={"32,441"}
        subTitle={"New Clients"}
        data={data3}
        increase={"+5%"} scheme={"accent"}      />
      <Card
        icon={<TrafficIcon />}
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        data={data4}
        increase={"+43%"} scheme={"dark2"}      />
    </Stack>
  );
}

export default React.memo(Row1);
