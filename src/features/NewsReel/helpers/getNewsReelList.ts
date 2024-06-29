import { getNewsReel } from "../api/api";
import type { NewsCardProps } from "../types";

export const getNewsReelList = async function (controller?: AbortController) {
  try {
    const apiResponse = getNewsReel(controller);
    const response = await apiResponse;
    const newsList = response.articles.filter(
      ({ description, urlToImage }: NewsCardProps) =>
        description !== "[Removed]" &&
        typeof description === "string" &&
        urlToImage,
    );

    return newsList;
  } catch (error) {
    console.error(error);
  }
};
