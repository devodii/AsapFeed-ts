import clsx from "clsx";
import { HtmlHTMLAttributes, forwardRef } from "react";

type Props = JSX.IntrinsicElements["input"];
export const Input = forwardRef<HTMLInputElement, Props>(function MyInput(
  props,
  ref
) {
  const { type, className, ...otherProps } = props;
  const defaultClassName =
    "border border-gray-600 rounded-md py-2 px-4 border-[rgb(121, 121, 121)]";

  return (
    <input
      {...otherProps}
      ref={ref}
      className={clsx(defaultClassName, className)}
    />
  );
});
