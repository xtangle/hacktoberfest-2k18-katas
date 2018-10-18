export const chunkString = (input, size) => {
  return typeof input === 'string' ? input.match(new RegExp(`.{1,${size}}`, 'g')) : undefined;
};
