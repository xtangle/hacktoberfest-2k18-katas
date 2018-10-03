export const repeat = (text, times) => {
  if (!text || !Number.isInteger(times)) {
    return null;
  }
  return text.repeat(times);
}