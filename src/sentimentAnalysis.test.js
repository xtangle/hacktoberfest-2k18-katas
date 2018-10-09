import { sentimentAnalysis } from './sentimentAnalysis';

describe('sentimentAnalysis', () => {
  it('correctly analyze sentiments', () => {
    const trainData = {
      'awesome': 2,
      'love': 2,
      'good': 1,
      'nice': 1,
      'great': 1,

      'okay': 0,
      'fine': 0,

      'bad': -1,
      'ugly': -1,
      'horrible': -2,
      'hate': -2,
      'awful': -2,
    };
    const predict = sentimentAnalysis(trainData);
    expect(predict('good day')).toBeGreaterThan(0);
    expect(predict('really awesome thing')).toBeGreaterThan(0);
    expect(predict('bad day')).toBeLessThan(0);
    expect(predict('ugly stuff')).toBeLessThan(0);
    expect(predict('fine day')).toBe(0);
    expect(predict('good and bad things happen but it is fine')).toBe(0);
  });
});
