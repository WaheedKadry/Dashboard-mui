import React from "react";
import Pie from "./Pie";
import Header from "../../Components/Header";

const PieChart = () => {
  return (
    <>
      <Header
        title="Pie Chart
"
        subTitle="Simple Pie Chart

"
      />
      <Pie height={"75vh"} />
    </>
  );
};

export default React.memo(PieChart);
