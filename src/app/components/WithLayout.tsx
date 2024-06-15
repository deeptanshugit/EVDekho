/* eslint-disable react/display-name */
import Layout from './Layout';
import "bootstrap/dist/css/bootstrap.min.css";

const withLayout = (Page: any) => {
  return () => (
    <Layout>
      <Page />
    </Layout>
  );
};

export default withLayout;
