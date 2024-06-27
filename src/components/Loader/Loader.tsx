import { t } from "i18next";

import "./Loader.scss";

type TLoaderProps = {
  width?: string;
  height?: string;
};

export function Loader({ width, height }: TLoaderProps) {
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
