import { t } from "i18next";

import "./Loader.scss";

type Loader = {
  width?: string;
  height?: string;
};

export function Loader({ width, height }: Loader) {
  const style = {
    width,
    height,
  };

  return (
    <div className="Loader" style={style}>
      {t("loading")}
    </div>
  );
}
