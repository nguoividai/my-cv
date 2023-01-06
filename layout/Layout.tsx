import React from "react";
import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="app--header">
        <Image
          className="logo"
          alt="logo"
          src="/top-logo.svg"
          width={125}
          height={100}
        />
      </div>
      <div className="app--body">{children}</div>
    </>
  );
};

export default React.memo(Layout);
