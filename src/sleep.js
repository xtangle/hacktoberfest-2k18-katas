export const sleep = (timer) => {
  // TO IMPLEMENT IN ANOTHER PR
  if(timer < 0) {
    const error = Error('Timer is negative');
    throw error;

  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer)
  })
};
