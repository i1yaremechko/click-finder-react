import { ROUTES } from '@common/constants';
import { Link } from 'react-router-dom';
import './index.scss';

const Headline = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="headline">
      <div className="wrapper wrapper_headline">
        <div className="headline__content">
          <h2 className="headline__title">
            <b>Brainstorming</b> for desired perfect Usability
          </h2>
          <p className="headline__description">
            Our design projects are fresh and simple and will benefit your business greatly.
            Learn more about our work!
          </p>
          <Link to={ROUTES.USER_STATISTICS} style={{ textDecoration: 'none' }}>
            <button className="headline__button">Views Stats</button>
          </Link>
        </div>
        <img
          className="headline__decoration"
          alt="Decoration"
          src={`${baseUrl}images/decoration_headline.png`}
        />
      </div>
    </section>
  );
};

export default Headline;