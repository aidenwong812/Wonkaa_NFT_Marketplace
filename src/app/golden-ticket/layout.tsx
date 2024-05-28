import React from "react";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full h-full ">
        {children}
      </div>
    </>
  );
};
export default Layout;
