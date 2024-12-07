import React, { useState } from "react";
import Image from "next/image";
import Navigator from "components/pages/Home/Navigator";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState<string | null>();

  const handleOpen = () => {
    setOpen((s) => (s ? null : "open"));
  };

  const handleClose = () => {
    setOpen(null);
  };

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

        <button id="menuButton" className="menu-button" onClick={handleOpen}>
          {open ? (
            <Image
              alt="close-navigator"
              src="/close-navigate.svg"
              width={25}
              height={25}
            ></Image>
          ) : (
            <Image
              alt="navigator"
              src="/navigate.svg"
              width={25}
              height={25}
            ></Image>
          )}
        </button>
      </div>
      <div id="sidebar" className={`sidebar ${open}`}>
        <nav className="sidebar-nav" onClick={handleClose}>
          <Navigator />
        </nav>
      </div>
      <div className="app--body" onClick={handleClose}>
        {children}
      </div>
    </>
  );
};

export default React.memo(Layout);
