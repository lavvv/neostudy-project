import Navbar from "@components/Navbar/Navbar";
import { footerRoutes } from "@routes/routes";

import neoflexLogo from "@assets/images/Index/logo 1.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <div className="Footer__top">
          <a href="https://www.neoflex.ru" target="_blank" rel="noreferrer">
            <figure className="Footer__logo">
              <img
                src={neoflexLogo}
                alt="Neoflex logo"
                width="159"
                height="50"
              />
            </figure>
          </a>
          <div className="Footer__contacts">
            <a className="Footer__phone" href="tel:+74959842513">
              +7 (495) 984 25 13
            </a>
            <a className="Footer__email" href="mailto:info@neoflex.ru">
              info@neoflex.ru
            </a>
          </div>
        </div>

        <div className="Footer__links">
          <Navbar classes="Navbar Footer__navbar" links={footerRoutes} />
        </div>

        <div className="Footer__divider"></div>

        <p className="Footer__cookies">
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </p>
      </div>
    </footer>
  );
}
