import { defaultNS, fallbackNS, resources } from "@locales/../i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    fallbackNS: typeof fallbackNS;
    resources: (typeof resources)["en"];
  }
}
