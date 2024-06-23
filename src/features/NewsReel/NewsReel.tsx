import { useRef } from "react";

import Button from "@components/ui/Button";
import arrowLeft from "@img/icons/arrow-left.svg";
import arrowRight from "@img/icons/arrow-right.svg";

import "./NewsReel.scss";
import NewsCardsList from "./components/NewsCardsList";

export default function NewsReel({ updateIntervalMinutes = 15 }) {
  const newsCardsListRef = useRef<HTMLDivElement | null>(null);

  const handlePrevClick = function () {
    newsCardsListRef.current?.scrollBy({
      left: -300,
    });
  };

  const handleNextClick = function () {
    newsCardsListRef.current?.scrollBy({
      left: 300,
    });
  };

  return (
    <section className="NewsReel">
      <NewsCardsList
        updateIntervalMinutes={updateIntervalMinutes}
        ref={newsCardsListRef}
      />

      <div className="NewsReel__buttons">
        <Button className="Button NewsReel__button" onClick={handlePrevClick}>
          <img src={arrowLeft} alt="" width={24} height={24} />
        </Button>
        <Button className="Button NewsReel__button" onClick={handleNextClick}>
          <img src={arrowRight} alt="" width={24} height={24} />
        </Button>
      </div>
    </section>
  );
}
