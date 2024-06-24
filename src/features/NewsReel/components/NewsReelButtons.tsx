import ArrowLeft from "@components/svg/ArrowLeft";
import ArrowRight from "@components/svg/ArrowRight";
import Button from "@components/ui/Button";

import "./NewsReelButtons.scss";

type TNewsReelButtonsProps = {
  prevButtonRef: React.RefObject<HTMLButtonElement>;
  nextButtonRef: React.RefObject<HTMLButtonElement>;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

export default function NewsReelButtons({
  prevButtonRef,
  nextButtonRef,
  handlePrevClick,
  handleNextClick,
}: TNewsReelButtonsProps) {
  return (
    <div className="NewsReelButtons">
      <Button
        className="Button NewsReelButtons__button NewsReelButtons__button--disabled"
        btnRef={prevButtonRef}
        onClick={handlePrevClick}
      >
        <ArrowLeft stroke="white" />
      </Button>
      <Button
        className="Button NewsReelButtons__button"
        btnRef={nextButtonRef}
        onClick={handleNextClick}
      >
        <ArrowRight stroke="white" />
      </Button>
    </div>
  );
}
