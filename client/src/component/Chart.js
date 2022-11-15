// import React, { useEffect, useRef } from "react";
import ChartBar from "./input/ChartBar";

const Chart = () => {

  const inc = 54;
  const out = 44;
  return (
    <div className="p-3 flex flex-wrap justify-center gap-2">
      <div className="grid max-w-md p-3 mx-auto mt-10">
        <ChartBar inc={inc} out={out} />
      </div>
    </div>
  );
};
export default Chart;
