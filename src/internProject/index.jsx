import React from "react";
import LeftSide from "./leftSide";
import { MidPart } from "./midPart";
import { RightSide } from "./rightSide";

export const IndexPage = () => {
  return (
    <div className="flex">
      <LeftSide />
      <MidPart />
      <RightSide />
    </div>
  );
};
