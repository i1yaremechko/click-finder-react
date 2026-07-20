import Footer from '@features/Footer';
import Header from '@features/Header';
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

export default Layout;