import CurrencyConverter from "@components/CurrencyConverter/CurrencyConverter";
import Button from "@components/ui/Button";

import hugeGlobal from "@assets/images/Index/Huge Global.png";
import illustration2 from "@assets/images/Index/Illustration 2.png";
import cardImage1 from "@assets/images/Index/cardImage1 1.png";
import cardImage2 from "@assets/images/Index/cardImage2 1.png";
import cardImage3 from "@assets/images/Index/cardImage3 1.png";
import cardImage4 from "@assets/images/Index/cardImage4 1.png";
import emailIcon from "@assets/images/Index/email 1.svg";
import sendIcon from "@assets/images/Index/send 1.svg";
import "./Index.scss";

export default function Home() {
  return (
    <main className="indexContainer">
      <section className="pageSection pageSection--flex pageSection--justify-between creditCard">
        <div className="pageSection--flex-column creditCard__desc">
          <h1 className="creditCard__heading">
            Choose the design you like and apply for card right now
          </h1>
          <Button classes="Button Button--borderRadius--m creditCard__button">
            Choose the card
          </Button>
        </div>
        <figure className="creditCard__figures">
          <img src={cardImage1} alt="Credit card" width="250" height="150" />
          <img src={cardImage2} alt="Credit card" width="250" height="150" />
          <img src={cardImage3} alt="Credit card" width="250" height="150" />
          <img src={cardImage4} alt="Credit card" width="250" height="150" />
        </figure>
      </section>

      <section className="pageSection pageSection--flex pageSection--align-center features">
        <figure className="features__figure">
          <img
            src={illustration2}
            alt="A person with a laptop"
            width="510"
            height="415"
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

      <section className="pageSection pageSection--flex-column pageSection--align-center services">
        <h2 className="services__heading">
          You can use our services anywhere in the world
        </h2>
        <figure>
          <figcaption className="services__figcaption">
            Withdraw and transfer money online through our application
          </figcaption>
          <img src={hugeGlobal} alt="World map" width="1060" height="538" />
        </figure>
      </section>

      <section className="pageSection pageSection--flex-column pageSection--align-center support">
        <h2 className="support__heading">Support</h2>
        <h3 className="support__heading--second">Subscribe Newsletter & get</h3>
        <p className="support__news">Bank News</p>
        <form>
          <div className="support__formContainer">
            <div className="support__inputContainer">
              <label htmlFor="email">
                <img
                  className="support__emailIcon"
                  src={emailIcon}
                  alt="Email icon"
                  width="27"
                  height="25"
                />
              </label>
              <input
                className="support__input"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                autoComplete="email"
              />
            </div>
            <Button classes="Button support__button">
              <img
                className="support__sendIcon"
                src={sendIcon}
                alt="Send icon"
                width="20"
                height="16"
              />
              Subscribe
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
