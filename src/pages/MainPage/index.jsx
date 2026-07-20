import Advantages from '@features/Advantages';
import Headline from '@features/Headline';
import Subscribe from '@features/Subscribe';
import Layout from '@layouts/Layout';

const MainPage = () => (
  <Layout isMainPage>
    <Headline />
    <Advantages />
    <Subscribe />
  </Layout>
);

export default MainPage;