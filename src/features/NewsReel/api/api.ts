import axios from "axios";

import { HEADERS, NEWS_REEL_URL, PARAMS } from "@constants/api/news-reel";

export const getNewsReel = async function (controller?: AbortController) {
  const response = await axios.get(NEWS_REEL_URL, {
    headers: HEADERS,
    params: PARAMS,
    signal: controller?.signal,
  });

  return response.data;
};
