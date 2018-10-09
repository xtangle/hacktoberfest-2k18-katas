export const sentimentAnalysis = trainData => sequence =>
  sequence
    .split(" ")
    .map(word => trainData[word] || 0)
    .reduce((sum, value) => sum + value);
