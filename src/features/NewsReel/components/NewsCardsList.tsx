import { forwardRef, useEffect, useState } from "react";

import Loader from "@components/Loader/Loader";
import { convertMinutesToMs } from "@utils/convertMinutesToMs";

import { getNewsReelList } from "../helpers/getNewsReelList";
import NewsCard from "./NewsCard";
import "./NewsCardsList.scss";

export type TNewsCardProps = {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
};

const NewsCardsList = forwardRef(function NewsCardsList(
  {
    updateIntervalMinutes = 15,
    handleButtonAppearance,
  }: { updateIntervalMinutes?: number; handleButtonAppearance?: () => void },
  ref: React.Ref<HTMLDivElement>,
) {
  const [newsArticles, setNewsArticles] = useState<TNewsCardProps[]>();
  const updateIntervalMs = convertMinutesToMs(updateIntervalMinutes);

  useEffect(() => {
    const controller = new AbortController();
    const setNews = async function () {
      try {
        const news = await getNewsReelList(controller);
        if (!controller.signal.aborted) {
          setNewsArticles([...news]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    setNews();

    const newsUpdateIntervalId = setInterval(() => {
      setNews();
    }, updateIntervalMs);

    return () => {
      controller.abort();
      clearInterval(newsUpdateIntervalId);
    };
  }, [updateIntervalMs]);

  return (
    <>
      {!newsArticles ? (
        <Loader height="32rem" />
      ) : (
        <div
          className="NewsCardsList"
          ref={ref}
          onScroll={handleButtonAppearance}
        >
          {newsArticles.map(({ title, description, url, urlToImage }) => (
            <NewsCard
              key={title}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
            />
          ))}
        </div>
      )}
    </>
  );
});

export default NewsCardsList;
