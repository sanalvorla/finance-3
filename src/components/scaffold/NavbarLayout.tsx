import type { FC } from "react";
import { twMerge } from "tailwind-merge";

const NavbarLayout: FC<{
  left?: Children;
  center?: Children;
  right?: Children;
  className?: string;
}> = ({ left, center, right, className }) => {
  // One child
  if (left && !center && !right)
    return (
      <div className={twMerge("flex items-center justify-start", className)}>
        {left}
      </div>
    );
  if (!left && center && !right)
    return (
      <div className={twMerge("flex items-center justify-center", className)}>
        {center}
      </div>
    );
  if (!left && !center && right)
    return (
      <div className={twMerge("flex items-center justify-end", className)}>
        {right}
      </div>
    );

  // Two children
  if (!left && center && right)
    return (
      <div className={twMerge("flex items-center", className)}>
        <div className="flex h-full items-center justify-start">{left}</div>
        <div className="flex h-full items-center justify-center">{center}</div>
        <div className="flex h-full items-center justify-end">{right}</div>
      </div>
    );

  if (left && !center && right)
    return (
      <div className={twMerge("flex items-center", className)}>
        <div className="flex h-full flex-1 items-center justify-start">
          {left}
        </div>
        <div className="flex h-full flex-1 items-center justify-end">
          {right}
        </div>
      </div>
    );

  if (left && center && !right)
    return (
      <div className={twMerge("flex items-center", className)}>
        <div className="flex h-full flex-1 items-center justify-start">
          {left}
        </div>
        <div className="flex h-full flex-1 items-center justify-center">
          {center}
        </div>
        <div className="flex h-full flex-1 items-center justify-end">
          {right}
        </div>
      </div>
    );

  // Three children
  if (left && center && right)
    return (
      <div className={twMerge("flex items-center", className)}>
        <div className="flex h-full flex-1 items-center justify-start">
          {left}
        </div>
        <div className="flex h-full flex-1 items-center justify-center">
          {center}
        </div>
        <div className="flex h-full flex-1 items-center justify-end">
          {right}
        </div>
      </div>
    );

  // No children
  return <></>;
};

export default NavbarLayout;
