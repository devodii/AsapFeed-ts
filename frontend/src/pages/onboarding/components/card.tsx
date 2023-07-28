import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
}
export const Card = ({ children, href, className }: Props) => {
  return (
    <Link
      href={href}
      className={`border-[1.2px] rounded-md flex flex-col gap-1 max-w-xs p-6 border-gray-400 ${className}`}
    >
      {children}
    </Link>
  );
};


