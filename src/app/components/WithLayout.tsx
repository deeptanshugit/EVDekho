/* eslint-disable react/display-name */
import Layout from './Layout';

const withLayout = (Page: any) => {
  return () => (
    <Layout>
      <Page />
    </Layout>
  );
};

export default withLayout;
