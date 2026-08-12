import type { ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
