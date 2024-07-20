import { Provider } from "react-redux";
import { Container } from "@mui/material";
import CustomBreadcrumbs from "./breadcrumb/breadcrumb";
import Footer from "./footer/footer";
import NavigationBar from "./navbar/navbar";
import store from '../store'

const Layout = ({ children }: any) => {
  return (
    <>
    <Provider store={store}>
      <NavigationBar />
      <div style={{ height: "80vh" }}>
        {children}
        <Container>
          <CustomBreadcrumbs />
        </Container>

        <Footer />
      </div>
      </Provider>
    </>
  );
};

export default Layout;
