export const setUpdateInterval = function (
  func: () => void,
  intervalMs: number,
) {
  return setInterval(() => {
    func();
  }, intervalMs);
};
