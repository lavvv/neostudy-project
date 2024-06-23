import { TNewsCardProps } from "../NewsReel";
import { getNewsReel } from "../api/api";

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
