import { Link } from "react-router-dom";
import { ROUTES } from "../common/constants";

function HomeView() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div id="home-view">
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
            <Link to={ROUTES.USER_STATISTICS} style={{ textDecoration: 'none', display: 'inline-block' }}>
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

      <section className="advantages">
        <h3 className="advantages__title">Why <b>small business owners love</b> ClickFinder?</h3>
        <p className="advantages__description">
          Our design projects are fresh and simple and will benefit your business greatly.
          Learn more about our work!
        </p>
        <div className="advantages__advatage-cards">
          <div className="advatage-card">
            <img
              className="advatage-card__image"
              alt="Clean Design"
              src={`${baseUrl}images/card-1__advantages.png`}
            />
            <h4 className="advatage-card__title">Clean Design</h4>
            <p className="advatage-card__description">
              Increase sales by showing true dynamics of your website.
            </p>
          </div>
          <div className="advatage-card">
            <img
              className="advatage-card__image"
              alt="Secure Data"
              src={`${baseUrl}images/card-2__advantages.png`}
            />
            <h4 className="advatage-card__title">Secure Data</h4>
            <p className="advatage-card__description">
              Build your online store’s trust using Social Proof &amp; Urgency.
            </p>
          </div>
          <div className="advatage-card">
            <img
              className="advatage-card__image"
              alt="Retina Ready"
              src={`${baseUrl}images/card-3__advantages.png`}
            />
            <h4 className="advatage-card__title">Retina Ready</h4>
            <p className="advatage-card__description">
              Realize importance of social proof in customer’s purchase decision.
            </p>
          </div>
        </div>
      </section>

      <section className="subscribe">
        <form className="subscribe__form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="subscribe__input"
            placeholder="Enter your email"
            required
            type="email"
          />
          <button type="submit" className="subscribe__button">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default HomeView;
