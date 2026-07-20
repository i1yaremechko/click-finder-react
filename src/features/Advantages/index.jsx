import './index.scss';

const Advantages = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
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
  );
};

export default Advantages;