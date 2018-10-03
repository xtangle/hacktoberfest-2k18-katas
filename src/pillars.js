export const pillars = (num_pill, dist, width) => {
  const totalWidthOfPillars = num_pill * width
  const totalSpaceBetweenPillarsInCm = (num_pill - 1) * dist * 100
  const widthOfFirstAndLastPillar = width * 2
  return Math.max((totalWidthOfPillars + totalSpaceBetweenPillarsInCm) - widthOfFirstAndLastPillar, 0)
}
