import { getNewsReel } from "../api/api";
import { TNewsCardProps } from "../components/NewsCardsList";

export const getNewsReelList = async function (controller?: AbortController) {
  try {
    const apiResponse = getNewsReel(controller);
    const response = await apiResponse;
    const newsList = response.articles.filter(
      ({ description, urlToImage }: TNewsCardProps) =>
        description !== "[Removed]" && urlToImage,
    );

    return newsList;
  } catch (error) {
    console.error(error);
  }
};
