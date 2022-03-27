import React from "react";
import Image, { ImageProps } from "next/image";

const LogoNavbar: React.FC<Omit<ImageProps, "src" | "alt">> = ({
  width = 100,
  height = 40,
  ...props
}) => {
  return (
    <Image
      {...props}
      src="/loop2.png"
      alt="Loop Logo"
      width={width}
      height={height}
    />
  );
};

export default LogoNavbar;
