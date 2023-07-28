import clsx from "clsx";
import React, { ElementType, ReactNode, forwardRef } from "react";

interface CardProps {
  as?: ElementType;
  id?: string;
  className: string;
  children: ReactNode;
}

export const Card = forwardRef<HTMLElement, CardProps>((props, ref) => {
  const { as: Tag = "div", children, className, ...rest } = props;

  return (
    <Tag ref={ref} {...rest} className={clsx("", className)}>
      {children}
    </Tag>
  );
});

Card.displayName = "Card";

export default Card;
