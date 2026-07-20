import Breadcrumbs from '@features/Breadcrumbs';
import StatisticsTable from '@features/StatisticsTable';
import Layout from '@layouts/Layout';

const UserStatisticsPage = () => (
  <Layout>
    <div className="wrapper wrapper_stat">
      <Breadcrumbs />
      <StatisticsTable />
    </div>
  </Layout>
);

export default UserStatisticsPage;