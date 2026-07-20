import { ROUTES } from '@common/constants';
import Layout from '@layouts/Layout';
import { Link } from 'react-router-dom';
import './index.scss';

const ErrorPage = () => (
  <Layout>
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={ROUTES.HOME} style={{ textDecoration: 'underline', color: '#3b82f6' }}>
        Go back to Home
      </Link>
    </div>
  </Layout>
);

export default ErrorPage;