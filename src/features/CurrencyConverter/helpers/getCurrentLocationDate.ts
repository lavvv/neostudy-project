export function getCurrentLocationDate() {
  const currentLocation = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.split("/")[1];

  const currentLocationDate = `${currentLocation} ${new Date().toLocaleDateString()}`;

  return currentLocationDate;
}
