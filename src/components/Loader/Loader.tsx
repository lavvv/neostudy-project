import { t } from "i18next";

import "./Loader.scss";

type LoaderProps = {
  width?: string;
  height?: string;
};

export function Loader({ width, height }: LoaderProps) {
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
