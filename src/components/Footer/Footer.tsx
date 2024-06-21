import Navbar from "@components/Navbar/Navbar";
import { footerRoutes } from "@routes/routes";

import neoflexLogo from "@img/logo-neoflex.png";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="Footer">
      <div className="Footer__container">
        <section className="Footer__top">
          <a href="https://www.neoflex.ru" target="_blank" rel="noreferrer">
            <img
              className="Footer__logo"
              src={neoflexLogo}
              alt="Neoflex logo"
              width={159}
              height={50}
            />
          </a>
          <div className="Footer__contacts">
            <a className="Footer__phone" href="tel:+74959842513">
              {t("footer.phoneNumber")}
            </a>
            <a className="Footer__email" href="mailto:info@neoflex.ru">
              {t("footer.email")}
            </a>
          </div>
        </section>

        <section className="Footer__links">
          <Navbar className="Navbar Footer__navbar" links={footerRoutes} />
        </section>

        <hr className="Footer__divider"></hr>

        <p className="Footer__info">{t("footer.cookiesDisclaimer")}</p>
      </div>
    </footer>
  );
}
