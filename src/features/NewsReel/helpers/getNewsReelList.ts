import { getNewsReel } from "../api/api";
import type { NewsCard } from "../components/NewsCardsList";

export const getNewsReelList = async function (controller?: AbortController) {
  try {
    const apiResponse = getNewsReel(controller);
    const response = await apiResponse;
    const newsList = response.articles.filter(
      ({ description, urlToImage }: NewsCard) =>
        description !== "[Removed]" && urlToImage,
    );

    return newsList;
  } catch (error) {
    console.error(error);
  }
};
