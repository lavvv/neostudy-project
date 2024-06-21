import "../i18n/i18n";

import { t } from "i18next";

export const headerRoutes = [
  { href: "/credit-card", text: t("headerLinks.creditCard") },
  { href: "/product", text: t("headerLinks.product") },
  { href: "/account", text: t("headerLinks.account") },
  { href: "/resources", text: t("headerLinks.resources") },
];

export const footerRoutes = [
  { href: "/about-bankcard", text: t("footerLinks.aboutCard") },
  { href: "/ask-a-Question", text: t("footerLinks.ask") },
  { href: "/quality-of-service", text: t("footerLinks.qos") },
  { href: "/requisites", text: t("footerLinks.requisites") },
  { href: "/press-center", text: t("footerLinks.press") },
  { href: "/bank-career", text: t("footerLinks.career") },
  { href: "/investors", text: t("footerLinks.investors") },
  { href: "/analytics", text: t("footerLinks.analytics") },
  { href: "/business-and-processes", text: t("footerLinks.business") },
  {
    href: "/compliance-and-business-ethics",
    text: t("footerLinks.compliance"),
  },
];
