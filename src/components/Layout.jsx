import { Link, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../common/constants";

const Layout = () => {
  const location = useLocation();
  const isMainPage = location.pathname === ROUTES.HOME || location.pathname === `${ROUTES.HOME}/`;

  return (
    <div className="page">
      <header className={`header ${isMainPage ? 'header_main' : ''}`}>
        <div className="wrapper">
          <Link to={ROUTES.HOME} className="header__logo-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="header__logo">ClickFinder</span>
          </Link>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

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
    </div>
  );
};

export default Layout;