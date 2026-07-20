import './index.scss';

const Subscribe = () => (
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
);

export default Subscribe;