import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "../features/auth/authSlice";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
  
  export default MyApp;