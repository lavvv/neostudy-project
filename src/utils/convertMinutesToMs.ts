export function convertMinutesToMs(minutes: number) {
  const SEC_IN_MINUTE = 60;
  const MS_IN_SEC = 1000;

  const milliseconds = minutes * SEC_IN_MINUTE * MS_IN_SEC;

  return milliseconds;
}
