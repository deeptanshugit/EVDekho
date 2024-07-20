import { Provider } from "react-redux";
import Footer from "./footer/footer";
import NavigationBar from "./navbar/navbar";
import store from '../store'

const Layout = ({ children }: any) => {
  return (
    <>
    <Provider store={store}>
      <NavigationBar />
      <div style={{height:"80vh"}}>
        {children}
        <Footer />
      </div>
      </Provider>
    </>
  );
};

export default Layout;
