import { useRef } from "react";

import { NewsCardsList } from "./components/NewsCardsList";
import { NewsReelButtons } from "./components/NewsReelButtons";
import "./NewsReel.scss";

export function NewsReel({ updateIntervalMinutes = 15 }) {
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

    if (isScrolledToBeginning && prevBtn) {
      prevBtn.classList.add("NewsReelButtons__button--disabled");
      prevBtn.disabled = true;
    } else if (prevBtn) {
      prevBtn.classList.remove("NewsReelButtons__button--disabled");
      prevBtn.disabled = false;
    }

    if (isScrolledToEnd && nextBtn) {
      nextBtn.classList.add("NewsReelButtons__button--disabled");
      nextBtn.disabled = true;
    } else if (nextBtn) {
      nextBtn.classList.remove("NewsReelButtons__button--disabled");
      nextBtn.disabled = false;
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
