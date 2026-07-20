import { ROUTES } from '@common/constants';
import { Link } from 'react-router-dom';
import './index.scss';

const Breadcrumbs = () => (
  <div className="statistic__breadcrumbs">
    <ul className="statistic__breadcrumbs-list">
      <li className="statistic__breadcrumbs-item">
        <Link to={ROUTES.HOME} style={{ textDecoration: 'none' }}>
          <span className="statistic__link statistic__link_back">Main page</span>
        </Link>
      </li>
      <li className="statistic__breadcrumbs-separator">›</li>
      <li className="statistic__breadcrumbs-item">
        <span className="statistic__link">User statistics</span>
      </li>
    </ul>
  </div>
);

export default Breadcrumbs;