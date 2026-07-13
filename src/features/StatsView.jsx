import { ROUTES } from '@common/constants/index.js';
import { Link } from 'react-router-dom';

function StatsView() {
  return (
    <div id="stats-view" style={{ padding: '40px 0', textAlign: 'center' }}>
      <div className="wrapper">
        <h2 className="statistic__title" style={{ marginBottom: '20px' }}>Users statistics (In progress...)</h2>
        <Link to={ROUTES.HOME} className="statistic__link statistic__link_back">
          Go back to Main page
        </Link>
      </div>
    </div>
  );
}

export default StatsView;