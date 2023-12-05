export const getAverageReviews = (reviews) => {
  const averageReview = reviews
    .map(({ academics, infrastructure, facilities, safety, sports }) => ({
      academics,
      infrastructure,
      facilities,
      safety,
      sports,
    }))
    .reduce((acc, value) => {
      for (const key in value) {
        if (acc[key] === undefined) {
          acc[key] = 0;
        }
        acc[key] += value[key];
      }
      return acc;
    }, {});
  const totalReviews = reviews.length;

  for (const key in averageReview) {
    averageReview[key] /= totalReviews;
  }
  return averageReview;
};
