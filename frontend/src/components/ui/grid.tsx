import clsx from "clsx";
import { ElementType, ReactNode, forwardRef } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  id: string | number;
  className: string;
};

export const Grid = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, as: Tag = "div", id, className } = props;
  const defaultClassName =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto";
  return (
    <Tag className={clsx(defaultClassName, className)} id={id} ref={ref}>
      {children}
    </Tag>
  );
});

Grid.displayName = "Grid";
