import Footer from "./footer/footer";
import NavigationBar from "./navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavigationBar />
      <div style={{height:"80vh"}}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
