import React from "react";
import { Card } from "./card";

export const CardGrid = () => {
  return (
    <div className="grid grid-cols-3">
      <Card />
      <Card />
      <Card />
    </div>
  );
};