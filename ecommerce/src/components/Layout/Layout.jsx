import React from "react";
import { CheckOutSideMenu } from "../CheckOutSideMenu/CheckOutSideMenu";

function Layout({ children }) {
  return (
    <div className="flex flex-col mt-20 items-center">
      {children}
      <CheckOutSideMenu />
    </div>
  );
}

export { Layout };
