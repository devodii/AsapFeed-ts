import React from "react";

type Props = {};

export const Card = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-2 md:gap-4 min-w-xs">
        <h3>Free Plan</h3>
        <span>
          Perfect for small teams or trial runs, access essential feedback tools
          and create up to 10 boards each month
        </span>
      </div>
    </div>
  );
};
