// eslint-disable-next-line import/prefer-default-export
export const delayPromise = (cb, duration) => new Promise((resolve) => {
  setTimeout(() => resolve(cb()), duration);
});

export const durationTypes = {
  '60min': '<60 min',
  '90min': '> 90 min',
  '60-90min': '60-90 min',
};

export const getMovieByTime = (data, filter) => {
  console.log(data.value, filter);
  return data.value.filter((movie) => {
    console.log(movie);
    switch (filter) {
      case durationTypes['60min']:
        return movie.runtime <= 60;
      case durationTypes['90min']:
        return movie.runtime >= 90;
      case durationTypes['60-90min']:
        return movie.runtime >= 60 && movie.runtime <= 90;
      default:
        return movie.runtime <= 60;
    }
  });
};
