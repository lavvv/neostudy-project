export function getCurrentCityDate() {
  const currentCity = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.split("/")[1];

  const currentDate = `${currentCity} ${new Date().toLocaleDateString()}`;

  return currentDate;
}
