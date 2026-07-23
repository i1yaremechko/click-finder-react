import { DEFAULT_PAGE, DEFAULT_ROWS_PER_PAGE } from '@common/constants';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '@features/Pagination';
import { StatisticsGateway } from './gateways';
import { combineUsersWithStats } from './utils';
import './index.scss';

const StatisticsTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const currentPage = parseInt(searchParams.get('page'), 10) || DEFAULT_PAGE;
  const rowsPerPage = parseInt(searchParams.get('rowsPerPage'), 10) || DEFAULT_ROWS_PER_PAGE;

  const [users, setUsers] = useState([]);
  const [pagesCount, setPagesCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [usersResponse, stats] = await Promise.all([
          StatisticsGateway.fetchUsers(currentPage, rowsPerPage),
          StatisticsGateway.fetchUsersStats(currentPage, rowsPerPage)
        ]);

        const fetchedUsers = usersResponse?.data || [];
        const totalPages = usersResponse?.pagesCount || 1;

        setPagesCount(totalPages);

        if (fetchedUsers.length === 0) {
          setUsers([]);
          return;
        }

        const finalData = combineUsersWithStats(fetchedUsers, stats);
        setUsers(finalData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [currentPage, rowsPerPage]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage, rowsPerPage });
  };

  return (
    <section className="statistic">
      <div className={`linear-progress ${isLoading ? '' : 'hidden'}`} id="global-loader">
        <div className="linear-progress__bar" />
      </div>

      <h2 className="statistic__title">Users statistics</h2>

      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP address</th>
              <th>Total clicks</th>
              <th>Total page views</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.ip_address || '-'}</td>
                <td>{user.totalClicks}</td>
                <td>{user.totalPageViews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div id="pagination-container" className="pagination">
        <Pagination
          page={currentPage}
          totalPages={pagesCount}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default StatisticsTable;