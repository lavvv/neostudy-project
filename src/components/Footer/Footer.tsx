import Navbar from "@components/Navbar/Navbar";
import { footerRoutes } from "@routes/routes";

import neoflexLogo from "@img/logo-neoflex.png";
import "./Footer.scss";

export default function Footer() {
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
              +7 (495) 984 25 13
            </a>
            <a className="Footer__email" href="mailto:info@neoflex.ru">
              info@neoflex.ru
            </a>
          </div>
        </section>

        <section className="Footer__links">
          <Navbar className="Navbar Footer__navbar" links={footerRoutes} />
        </section>

        <hr className="Footer__divider"></hr>

        <p className="Footer__info">
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </p>
      </div>
    </footer>
  );
}
