import NavbarLayout from "@components/future-library-scaffold/NavbarLayout";
import type { FC } from "react";

export const Navbar: FC<{
  left?: Children;
  center?: Children;
  right?: Children;
}> = ({ left, center, right }) => {
  return (
    <NavbarLayout
      className="border-b bg-white p-2"
      left={left}
      center={center}
      right={right}
    />
  );
};

export const Footer: FC<{
  left?: Children;
  center?: Children;
  right?: Children;
}> = ({ left, center, right }) => {
  return (
    <NavbarLayout
      className="border-t bg-white p-2"
      left={left}
      center={center}
      right={right}
    />
  );
};
