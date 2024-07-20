import { Container } from "@mui/material";
import CustomBreadcrumbs from "./breadcrumb/breadcrumb";
import Footer from "./footer/footer";
import NavigationBar from "./navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavigationBar />
      <div style={{ height: "80vh" }}>
        {children}
        <Container>
          <CustomBreadcrumbs />
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
