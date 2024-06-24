import { getNewsReel } from "../api/api";
import { TNewsCardProps } from "../components/NewsCardsList";

export const getNewsReelList = function (controller?: AbortController) {
  const apiResponse = getNewsReel(controller);

  return apiResponse
    .then((response) => {
      const newsList = response.articles.filter(
        ({ description, urlToImage }: TNewsCardProps) =>
          description !== "[Removed]" && urlToImage,
      );

      return newsList;
    })
    .catch((error) => console.error(error));
};
