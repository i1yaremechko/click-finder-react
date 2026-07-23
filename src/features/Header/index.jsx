import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@common/constants';
import './index.scss';

const Header = ({ isMainPage }) => {
  const navigate = useNavigate();

  return (
    <header className={`header ${isMainPage ? 'header_main' : ''}`}>
      <div className="wrapper">
        <span 
          className="header__logo" 
          onClick={() => navigate(ROUTES.HOME)}
        >
          ClickFinder
        </span>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMainPage: PropTypes.bool,
};

export default Header;