import { useTranslation } from "react-i18next";

import Button from "@components/ui/Button";
import CurrencyConverter from "@features/CurrencyConverter";
import NewsReel from "@features/NewsReel/NewsReel";

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
  const { t } = useTranslation();

  return (
    <main className="HomeContainer">
      <section className="pageBlock pageBlock--flex pageBlock--justify-between creditCard">
        <div className="pageBlock--flex-column creditCard__desc">
          <h1 className="creditCard__heading">{t("home.creditCardHeading")}</h1>
          <Button className="Button Button--borderRadius-m creditCard__button">
            {t("home.creditCardBtn")}
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
          <h2 className="features__heading">{t("home.featuresHeading")}</h2>
          <p className="features__text">{t("home.featuresText")}</p>
          <ul className="features__list">
            <li>{t("home.featuresListItem1")}</li>
            <li>{t("home.featuresListItem2")}</li>
            <li>{t("home.featuresListItem3")}</li>
            <li>{t("home.featuresListItem4")}</li>
          </ul>
        </div>
      </section>

      <CurrencyConverter />

      <section className="pageBlock pageBlock--flex-column pageBlock--align-center services">
        <h2 className="services__heading">{t("home.servicesHeading")}</h2>
        <figure>
          <figcaption className="services__figcaption">
            {t("home.servicesText")}
          </figcaption>
          <img src={hugeGlobal} alt="World map" width={1060} height={538} />
        </figure>
      </section>

      <section className="news">
        <h2 className="news__heading">{t("home.news")}</h2>
        <p className="news__text">{t("home.newsText")}</p>
        <NewsReel />
      </section>

      <section className="pageBlock pageBlock--flex-column pageBlock--align-center support">
        <h2 className="support__heading">{t("home.support")}</h2>
        <h3 className="support__heading--second">{t("home.subscribe")}</h3>
        <p className="support__news">{t("home.subscribeBankNews")}</p>

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
          <Button className="Button support__button">
            <img
              className="support__sendIcon"
              src={sendIcon}
              alt="Send icon"
              width={20}
              height={16}
            />
            {t("home.supportBtn")}
          </Button>
        </form>
      </section>
    </main>
  );
}
