import React from 'react'
import { FixedSizeList } from "react-window";

const data = Array.from({ length: 10000 }, (_, index) => `Item ${index}`);

const renderRow = ({ index, style }:any) => (
    <div style={{ ...style, display: "flex", alignItems: "center", borderBottom: "1px solid lightgrey" }}>
      <span>{data[index]}</span>
    </div>
  );

const RenderLargeList = () => {
  return (
    <div style={{ height: "600px", width: "500px", border: "1px solid lightgrey" }}>
    <FixedSizeList
      height={600}
      width={500}
      itemCount={data.length}
      itemSize={50} // Height of each row
    >
      {renderRow}
    </FixedSizeList>
  </div>
  )
}

export default RenderLargeList
