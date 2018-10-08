export const calculateAge = (startDateString, endDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  return Math.trunc((endDate - startDate) / 31536000000)
};
