import Footer from '@features/Footer';
import Header from '@features/Header';
import PropTypes from 'prop-types';
import './index.scss';

const Layout = ({ isMainPage, children }) => {
  return (
    <div className="page">
      <Header isMainPage={isMainPage} />
      <main className="main">{children}</main>
      <Footer isMainPage={isMainPage} />
    </div>
  );
};

Layout.propTypes = {
  isMainPage: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;