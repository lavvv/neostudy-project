export const NEWS_REEL_URL = "https://newsapi.org/v2/top-headlines";
export const API_KEY = "2e6a06bf2227458e9953db943d230255";
export const HEADERS = {
  "X-Api-Key": API_KEY,
};

export const COUNTRY = "us";
export const CATEGORY = "business";
export const LIMIT = 30;
export const TIMEOUT = 4000;
export const PARAMS = {
  country: COUNTRY,
  category: CATEGORY,
  pageSize: LIMIT,
  timeout: TIMEOUT,
};
