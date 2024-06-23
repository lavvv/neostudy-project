import { t } from "i18next";

import "./Loader.scss";

type TLoaderProps = {
  width?: string;
  height?: string;
};

export default function Loader({ width, height }: TLoaderProps) {
  const style = {
    width,
    height,
  };

  return (
    <div className="NewsReelLoader" style={style}>
      {t("loading")}
    </div>
  );
}
