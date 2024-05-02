import NavigationBar from "./navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
