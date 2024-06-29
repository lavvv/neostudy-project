export type NewsCardProps = {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
};

export type NewsReelButtonsProps = {
  prevButtonRef: React.RefObject<HTMLButtonElement>;
  nextButtonRef: React.RefObject<HTMLButtonElement>;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};
