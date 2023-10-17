import React from "react";
import Line from "./Line";
import Header from "../../Components/Header";

const LineChart = () => {
  return (
    <>
      <Header
        title="Line Chart"
        subTitle="Simple Line Chart"
      />
      <Line height={"75vh"} isDash={false} width={"100%"} />
    </>
  );
};

export default React.memo(LineChart);
