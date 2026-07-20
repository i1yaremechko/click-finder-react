import { ROUTES } from '@common/constants';
import { Link } from 'react-router-dom';
import './index.scss';

const Footer = ({ isMainPage }) => (
  <footer className={`footer ${isMainPage ? 'footer_main' : ''}`}>
    <div className="wrapper">
      <Link to={ROUTES.HOME} className="footer__logo-link" style={{ textDecoration: 'none', color: 'inherit' }}>
        <span className="footer__logo">ClickFinder</span>
      </Link>
      <span className="footer__rights footer__rights_reserved">
        All rights reserved by ThemeTags
      </span>
      <span className="footer__rights">Copyrights © 2025</span>
    </div>
  </footer>
);

export default Footer;