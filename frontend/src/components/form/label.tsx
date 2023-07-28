import clsx from "clsx";
import { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
};

export const Label = ({
  className,
  children,
  ...restProps
}: JSX.IntrinsicElements["label"] & LabelProps) => (
  <label {...restProps} className={clsx("text-gray-600", className)}>
    {children}
  </label>
);
