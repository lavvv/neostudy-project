import imgPlaceholder from "@img/img-placeholder.svg";

import type { NewsCardProps } from "../types";
import "./NewsCard.scss";

export function NewsCard({
  title,
  description,
  url,
  urlToImage,
}: NewsCardProps) {
  return (
    <article className="NewsCard">
      <a href={url}>
        <figure className="NewsCard__figure">
          <img
            className="NewsCard__image"
            src={urlToImage}
            onError={(e) => {
              e.currentTarget.src = imgPlaceholder;
              e.currentTarget.width = 120;
            }}
            alt=""
            width={256}
            height={120}
          />
          <figcaption className="NewsCard__title">{title}</figcaption>
        </figure>
      </a>
      <p className="NewsCard__desc">{description}</p>
    </article>
  );
}
