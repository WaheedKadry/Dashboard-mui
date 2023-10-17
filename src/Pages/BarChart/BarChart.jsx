import React from "react";
import Baar from "./Baar";
import Header from "../../Components/Header";

const BarChart = () => {
  return (
    <>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Baar height={"75vh"} />
    </>
  );
};

export default React.memo(BarChart);
