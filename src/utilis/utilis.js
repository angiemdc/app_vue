// eslint-disable-next-line import/prefer-default-export
export const delayPromise = (cb, duration) => new Promise((resolve) => {
  setTimeout(() => resolve(cb()), duration);
});
