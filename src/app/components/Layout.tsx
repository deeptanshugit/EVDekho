import Navbar from "./navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
