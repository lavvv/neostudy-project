import axios from "axios";

import { HEADERS, NEWS_REEL_URL, PARAMS } from "./options";

export const getNewsReel = function (controller?: AbortController) {
  return axios
    .get(NEWS_REEL_URL, {
      headers: HEADERS,
      params: PARAMS,
      signal: controller?.signal,
    })
    .then((response) => response.data);
};
