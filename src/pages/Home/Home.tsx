import CurrencyConverter from "@components/CurrencyConverter/CurrencyConverter";
import Button from "@components/ui/Button";

import cardImage1 from "@img/home/card-image1.png";
import cardImage2 from "@img/home/card-image2.png";
import cardImage3 from "@img/home/card-image3.png";
import cardImage4 from "@img/home/card-image4.png";
import hugeGlobal from "@img/home/map-huge-global.png";
import personLaptop from "@img/home/person-laptop.png";
import emailIcon from "@img/icons/email-env.svg";
import sendIcon from "@img/icons/send-pp.svg";
import "./Home.scss";

export default function Index() {
  return (
    <main className="HomeContainer">
      <section className="pageBlock pageBlock--flex pageBlock--justify-between creditCard">
        <div className="pageBlock--flex-column creditCard__desc">
          <h1 className="creditCard__heading">
            Choose the design you like and apply for card right now
          </h1>
          <Button classes="Button Button--borderRadius--m creditCard__button">
            Choose the card
          </Button>
        </div>
        <figure className="creditCard__figures">
          <img src={cardImage1} alt="Credit card" width={250} height={150} />
          <img src={cardImage2} alt="Credit card" width={250} height={150} />
          <img src={cardImage3} alt="Credit card" width={250} height={150} />
          <img src={cardImage4} alt="Credit card" width={250} height={150} />
        </figure>
      </section>

      <section className="pageBlock pageBlock--flex pageBlock--align-center features">
        <figure className="features__figure">
          <img
            src={personLaptop}
            alt="A person with a laptop"
            width={510}
            height={415}
          />
        </figure>
        <div className="features__desc">
          <h2 className="features__heading">
            We Provide Many Features You Can Use
          </h2>
          <p className="features__text">
            You can explore the features that we provide with fun and have their
            own functions each feature
          </p>
          <ul className="features__list">
            <li className="features__item">Powerful online protection</li>
            <li>Cashback without borders</li>
            <li>Personal design</li>
            <li>Work anywhere in the world</li>
          </ul>
        </div>
      </section>

      <CurrencyConverter />

      <section className="pageBlock pageBlock--flex-column pageBlock--align-center services">
        <h2 className="services__heading">
          You can use our services anywhere in the world
        </h2>
        <figure>
          <figcaption className="services__figcaption">
            Withdraw and transfer money online through our application
          </figcaption>
          <img src={hugeGlobal} alt="World map" width={1060} height={538} />
        </figure>
      </section>

      <section className="news">
        <h2 className="news__heading">
          Current news form the world of finance
        </h2>
        <p>
          We update the news feed every 15 minutes. You can learn more by
          clicking on the news you are interested in.
        </p>
      </section>

      <section className="pageBlock pageBlock--flex-column pageBlock--align-center support">
        <h2 className="support__heading">Support</h2>
        <h3 className="support__heading--second">Subscribe Newsletter & get</h3>
        <p className="support__news">Bank News</p>
        <form className="support__form">
          <label className="support__label">
            <img
              className="support__emailIcon"
              src={emailIcon}
              alt="Email icon"
              width={27}
              height={25}
            />
            <input
              className="support__input"
              type="email"
              name="email"
              placeholder="Your email"
              autoComplete="email"
            />
          </label>
          <Button classes="Button support__button">
            <img
              className="support__sendIcon"
              src={sendIcon}
              alt="Send icon"
              width={20}
              height={16}
            />
            Subscribe
          </Button>
        </form>
      </section>
    </main>
  );
}
