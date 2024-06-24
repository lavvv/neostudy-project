import { useRef } from "react";

import "./NewsReel.scss";
import NewsCardsList from "./components/NewsCardsList";
import NewsReelButtons from "./components/NewsReelButtons";

export default function NewsReel({ updateIntervalMinutes = 15 }) {
  const newsCardsListRef = useRef<HTMLDivElement | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

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

  const handleButtonAppearance = function () {
    if (newsCardsListRef.current == null) return;

    const scrollableList = newsCardsListRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = scrollableList;
    const isScrolledToBeginning = scrollLeft < 10;
    const isScrolledToEnd = scrollWidth - scrollLeft - clientWidth < 10;
    const prevBtn = prevButtonRef.current;
    const nextBtn = nextButtonRef.current;

    if (isScrolledToBeginning) {
      prevBtn?.classList.add("NewsReelButtons__button--disabled");
    } else {
      prevBtn?.classList.remove("NewsReelButtons__button--disabled");
    }

    if (isScrolledToEnd) {
      nextBtn?.classList.add("NewsReelButtons__button--disabled");
    } else {
      nextBtn?.classList.remove("NewsReelButtons__button--disabled");
    }
  };

  return (
    <section className="NewsReel">
      <NewsCardsList
        handleButtonAppearance={handleButtonAppearance}
        updateIntervalMinutes={updateIntervalMinutes}
        ref={newsCardsListRef}
      />
      <NewsReelButtons
        prevButtonRef={prevButtonRef}
        nextButtonRef={nextButtonRef}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </section>
  );
}
