import { ElementType, HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

interface TitleProps {
  variant: "primary" | "secondary";
  as?: ElementType;
  extraClassName: HTMLAttributes<HTMLElement>["className"];
  children: ReactNode;
}

const fontSize: Record<"h1" | "h2", string> = {
  h1: "text-2xl md:text-4xl lg:text-6xl font-semibold",
  h2: "text-2xl md:text-3xl lg:text-4xl font-semibold",
};

const fontStyle: Record<"default" | "fallback", string> = {
  default: "",
  fallback: "font-header-fallback",
};

type Size = keyof typeof fontSize;
type Font = keyof typeof fontStyle;

export const Title = ({
  variant,
  as,
  size,
  extraClassName,
  children,
  font,
  ...rest
}: Partial<TitleProps> & { size: Size; font: Font }) => {
  const Tag = as ?? size;
  return (
    <Tag
      className={clsx(fontSize[size], extraClassName, fontStyle[font])}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// -----------------------------------------------------------

interface ParagraphProps {
  as?: "span" | "p";
  children: ReactNode;
  extraClassName?: string;
  font: "large" | "small" | "medium" | "base";
  variant?: "primary" | "secondary" | "tertiary";
}

const TextFontSize: Record<ParagraphProps["font"], string> = {
  large: "text-4xl",
  medium: "text-lg",
  base: "text-base",
  small: "text-sm",
};

type FSize = keyof typeof TextFontSize;
export const Paragraph = ({
  as,
  children,
  size,
  variant,
}: ParagraphProps & { size: FSize }) => {
  const Tag = as ?? "p";
  return (
    <Tag
      className={clsx(
        variant === "tertiary" && "text-gray-600",
        TextFontSize[size]
      )}
    >
      {children}
    </Tag>
  );
};
